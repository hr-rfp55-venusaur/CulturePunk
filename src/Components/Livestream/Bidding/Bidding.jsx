import React from 'react';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import BiddingModal from './BiddingModal';

const Bidding = (props) => {
  const { lists, updateBid } = props;

  const handleClick = () => (
    axios.delete('/WithdrawBid', {
      userId: 4,
      userName: 'Oliver Squirtle Nomes',
    })
      .then(() => updateBid(true))
      .catch((err) => console.log('Delete Err:', err))
  );

  return (
    <Grid className="ChatBidding-bidSection" item xs={9}>
      Bidding List
      <List id="ChatBidding-bidArea">
        {lists.map((list) => (
          <Grid item xs={12} key={list.username}>
            <ListItem disableGutters>
              <ListItemText id="ChatBidding-eachBid" primary={`${list.username}`} />
              <ListItemText id="ChatBidding-eachBidContent" primary={`${list.price}`} />
            </ListItem>
          </Grid>
        ))}
      </List>
      <Grid className="ChatBidding-button ChatBidding-biddingInput">
        <BiddingModal className="ChatBidding-button" updateBid={updateBid} />
        <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Withdraw Bidding</Button>
      </Grid>
    </Grid>
  );
};

Bidding.defaultProps = [];

Bidding.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
  updateBid: PropTypes.func,
};

export default Bidding;
