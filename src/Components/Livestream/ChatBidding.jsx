import React, { useState, useEffect } from 'react';
import { ref, child, get } from 'firebase/database';
import { auth, db } from '../../firebase';
import './ChatBidding.css';
import Chat from './Chat/Chat';
import Bidding from './Bidding/Bidding';

const ChatBidding = () => {
  const [updateChat, setUpdateChat] = useState(false);
  const [updateBid, setUpdateBid] = useState(false);
  const [chat, setChat] = useState([]);
  const [bid, setBid] = useState([]);
  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, 'chats'))
      .then((snapshot) => {
        const data = [];
        const results = snapshot.val();
        results.forEach((snap) => {
          data.push(snap);
        });
        setChat(data);
        setUpdateChat(false);
      })
      .catch((err) => (err));
  }, [updateChat]);

  useEffect(() => {
    get(child(dbRef, 'bids'))
      .then((snapshot) => {
        const res = [];
        const results = snapshot.val();
        results.forEach((snap) => {
          res.push(snap);
        });
        setBid(res);
        setUpdateBid(false);
      })
      .catch((err) => (err));
  }, [updateBid]);

  return (
    <div className="ChatBidding">
      <Chat items={chat} updateChat={setUpdateChat} updateBid={setUpdateBid} />
      <Bidding lists={bid} updateBid={setUpdateBid} />
    </div>
  );
};

export default ChatBidding;
