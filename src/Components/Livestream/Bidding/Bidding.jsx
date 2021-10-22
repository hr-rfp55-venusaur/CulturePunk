import React from 'react';
import {
  ref, child, remove,
} from 'firebase/database';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Grid from '@mui/material/Grid';
import BiddingModal from './BiddingModal';
import { db } from '../../../firebase';
import { id, nickName } from '../CurrentUserInfo';

const Bidding = (props) => {
  const {
    lists, updateBid,
  } = props;
  const username = nickName;
  const handleClick = () => {
    const dbRef = ref(db);
    const userid = id;
    remove(child(dbRef, `bids/${userid}`))
      .then(() => {
        updateBid(true);
      })
      .catch((err) => (err));
  };

  return (
    <Grid className="ChatBidding-bidSection" item xs={9}>
      <div className="ChatBidding-neonText1">
        Live Bidding
      </div>
      <div id="ChatBidding-bidArea">
        {lists.map((list) => (
          <ul key={list.username} id="ChatBidding-eachBid">
            <li id="ChatBidding-BPhoto"><img id="ChatBidding-Photo" src={list.photoUrl} alt={list.username} /></li>
            <li id="ChatBidding-BU">{`${list.username}`}</li>
            <li id="ChatBidding-BPrice">{`${list.price} ETH`}</li>
          </ul>
        ))}
      </div>
      {JSON.stringify(lists).includes(username) && (
        <div className="ChatBidding-biddingInput">
          <BiddingModal className="ChatBidding-button" updateBid={updateBid} />
          <button
            onClick={(e) => handleClick(e)}
            type="submit"
            className="ChatBidding-button"
            variant="contained"
            size="small"
          >
            Withdraw Bidding
          </button>
        </div>
      )}
    </Grid>
  );
};

Bidding.defaultProps = [];

Bidding.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
  updateBid: PropTypes.func,
};

export default Bidding;
