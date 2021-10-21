const { BaseAsset } = require("lisk-sdk");
const {
  getAllNFTTokens,
  setAllNFTTokens,
  createNFTToken,
} = require("../nft");

// extend base asset to implement your custom asset
class CreateNFTAsset extends BaseAsset {
  // define unique asset name and id
  name = "createNFT";
  id = 0;
  //the following asset schema describes the req datatypes and structure of data in the respective transaction asset, required (Name, Initial value, Minimal purchase margin)
  schema = {
    $id: "lisk/nft/create",
    type: "object",
    required: ["minPurchaseMargin", "initValue", "name"],
    properties: {
      minPurchaseMargin: {
        dataType: "uint32",
        fieldNumber: 1,
      },
      initValue: {
        dataType: "uint64",
        fieldNumber: 2,
      },
      name: {
        dataType: "string",
        fieldNumber: 3,
      },
    },
  };

  //verify data in the transaction assset
  validate({asset}) {
    if (asset.initValue <= 0) {
      throw new Error('NFT init value is too low.');
    } else if (asset.minPurchaseMargin < 0 || asset.minPurchaseMargin > 100) {
      throw new Error("The NFT minimum purchase value needs to be between 0-100.");
    }
  };

  async apply({ asset, stateStore, reducerHandler, transaction }) {
    // create NFT
    const senderAddress = transaction.senderAddress;
    const senderAccount = await stateStore.account.get(senderAddress);
    const nftToken = createNFTToken({
      name: asset.name,
      ownerAddress: senderAddress,
      nonce: transaction.nonce,
      value: asset.initValue,
      minPurchaseMargin: asset.minPurchaseMargin,
    });

    // update sender account with unique NFT ID
    senderAccount.nft.ownNFTs.push(nftToken.id);
    await stateStore.account.set(senderAddress, senderAccount);

    // debit tokens from sender account to create an NFT
    await reducerHandler.invoke("token:debit", {
      address: senderAddress,
      amount: asset.initValue,
    });

    // save NFTs
    const allTokens = await getAllNFTTokens(stateStore);
    allTokens.push(nftToken);
    await setAllNFTTokens(stateStore, allTokens);
  }
}

module.exports = CreateNFTAsset;