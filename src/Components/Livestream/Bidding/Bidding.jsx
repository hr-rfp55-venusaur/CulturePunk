import React from 'react';
import {
  ref, child, remove,
} from 'firebase/database';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BiddingModal from './BiddingModal';
import { db } from '../../../firebase';
import { useAppContext } from '../../../ContextObj';

const Bidding = (props) => {
  const {
    lists, updateBid,
  } = props;
  const username = 'Oliver Squirtle Nomes';
  const handleClick = () => {
    const { currentUser } = useAppContext();
    const dbRef = ref(db);
    const userid = currentUser.uid;
    remove(child(dbRef, `bids/${userid}`))
      .then(() => {
        updateBid(true);
      })
      .catch((err) => (err));
  };

  return (
    <Grid className="ChatBidding-bidSection" item xs={9}>
      Bidding List
      <List id="ChatBidding-bidArea">
        {lists.map((list) => (
          <div key={list.username} id="ChatBidding-eachBid">
            <span>
              {`${list.username}`}
            </span>
            <span>
              {`${list.price}`}
            </span>
          </div>
        ))}
      </List>
      {JSON.stringify(lists).includes(username) && (
        <Grid className="ChatBidding-button ChatBidding-biddingInput">
          <BiddingModal className="ChatBidding-button" updateBid={updateBid} />
          <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Withdraw Bidding</Button>
        </Grid>
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
