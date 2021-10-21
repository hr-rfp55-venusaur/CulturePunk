import React, { useState } from 'react';
import {
  ref, child, update, push,
} from 'firebase/database';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Grid from '@mui/material/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputEmoji from 'react-input-emoji';
import moment from 'moment';
import { db } from '../../../firebase';
import BasicModal from './BasicModal';
import { useAppContext } from '../../../ContextObj';

const Chat = (props) => {
  // Need to pass in username as props
  const {
    items, updateChat, updateBid,
  } = props;
  const [content, setContent] = useState('');
  const dbRef = ref(db);
  const { currentUser } = useAppContext();
  const handleClick = () => {
    const postData = {
      username: 'Oliver Squirtle Nomes',
      text: content,
      timestamp: moment().format('LTS'),
    };
    const newPostKey = push(child(ref(db), 'chats')).key;
    const updates = {};
    updates[newPostKey] = postData;
    update(child(dbRef, 'chats'), updates)
      .then(() => {
        updateChat(true);
      })
      .catch((err) => (err));
  };

  return (
    <Grid className="ChatBidding-chatSection" item xs={9}>
      Live Chat
      <List id="ChatBidding-messageArea">
        {items.map((item) => (
          <div key={item.timestamp} className="ChatBidding-eachMsg">
            <span id="ChatBidding-eachMsgName">{`${item.username}`}</span>
            <span id="ChatBidding-eachMsgContent">
              <span>{`${item.text}`}</span>
              <span>{`${item.timestamp}`}</span>
            </span>
          </div>
        ))}
      </List>
      {currentUser
        ? (
          <Grid className="ChatBidding-messageInput">
            <InputEmoji onChange={(e) => setContent(e)} className="ChatBidding-chatInput" placeholder="Type something..." cleanOnEnter onEnter={() => handleClick()} />
            <BasicModal className="ChatBidding-button" updateBid={updateBid} />
          </Grid>
        )
        : (<Grid>Please sign in to join the live chat and bidding!</Grid>)}
    </Grid>
  );
};

Chat.defaultProps = [];

Chat.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  updateChat: PropTypes.func,
  updateBid: PropTypes.func,
};

export default Chat;
