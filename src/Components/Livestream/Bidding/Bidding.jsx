import React from 'react';
import {
  ref, child, remove,
} from 'firebase/database';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Grid from '@mui/material/Grid';
import BiddingModal from './BiddingModal';
import { db } from '../../../firebase';

const Bidding = (props) => {
  const {
    lists, updateBid,
  } = props;
  const username = 'Palomannah';
  const handleClick = () => {
    const dbRef = ref(db);
    const userid = 1;
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
            <li id="ChatBidding-BP">{`${list.username}`}</li>
            <li id="ChatBidding-BD">{`${list.price}`}</li>
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
