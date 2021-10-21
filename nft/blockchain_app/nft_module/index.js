const { BaseModule } = require("lisk-sdk");

const CreateNFTAsset = require("./transactions/create_nft_asset");
const PurchaseNFTAsset = require("./transactions/purchase_nft_asset");
const TransferNFTAsset = require("./transactions/transfer_nft_asset");

class NFTModule extends BaseModule {
  //set module name, should be unique within the network to avoid confusion
  name = "nft";
  //set module id, this must be unique within the network or will cause forks
  id = 1024;
  //expect each account to have a property ownNFTs, an array, default empty
  accountSchema = {
    type: "object",
    required: ["ownNFTs"],
    properties: {
      ownNFTs: {
        type: "array",
        fieldNumber: 4,
        items: {
          dataType: "bytes",
        },
      },
    },
    default: {
      ownNFTs: [],
    },
  };

   // Add the transaction assets to the module
   transactionAssets = [new CreateNFTAsset(), new PurchaseNFTAsset(), new TransferNFTAsset()];

   actions = {
    // get all the registered NFT tokens from blockchain
    getAllNFTTokens: async () => getAllNFTTokensAsJSON(this._dataAccess),
  };

}

module.exports = { NFTModule };