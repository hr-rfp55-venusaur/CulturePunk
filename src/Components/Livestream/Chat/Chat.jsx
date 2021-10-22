import React, { useState } from 'react';
import {
  ref, child, update, push,
} from 'firebase/database';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Grid from '@mui/material/Grid';
import InputEmoji from 'react-input-emoji';
import moment from 'moment';
import { db } from '../../../firebase';
import BasicModal from './BasicModal';
import { useAppContext } from '../../../ContextObj';
import { nickName, photoURL } from '../CurrentUserInfo';

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
      photoUrl: photoURL,
      username: nickName,
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
      <div className="ChatBidding-neonText">
        Live Chat
      </div>
      <div id="ChatBidding-messageArea">
        {items.map((item) => (
          <ul key={item.timestamp} className="ChatBidding-eachMsg">
            <li id="ChatBidding-list"><img id="ChatBidding-Photo" src={item.photoUrl} alt={item.username} /></li>
            <li id="ChatBidding-eachMsgName">{`${item.username}`}</li>
            <li id="ChatBidding-eachMsgContent">{`${item.text}`}</li>
            <li id="ChatBidding-eachMsgDate">{`${item.timestamp}`}</li>
          </ul>
        ))}
      </div>
      {currentUser
        ? (
          <Grid className="ChatBidding-messageInput">
            <InputEmoji
              onChange={(e) => setContent(e)}
              className="ChatBidding-chatInput"
              fontFamily="PM-regular"
              borderRadius="0"
              cleanOnEnter
              onEnter={() => handleClick()}
              placeholder=""
            />
            <BasicModal className="ChatBidding-button" updateBid={updateBid} />
          </Grid>
        )
        : (<div className="ChatBidding-alert">Log in/sign up to join the live chat and bidding!</div>)}
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
