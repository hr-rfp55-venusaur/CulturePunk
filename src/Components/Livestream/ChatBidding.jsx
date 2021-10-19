import React, { useState, useEffect } from 'react';
import './ChatBidding.css';
import axios from 'axios';
import Chat from './Chat/Chat';
import Bidding from './Bidding/Bidding';

const exampleChat = [{ userId: 1, userName: 'Remy', content: 'I like every piece of art!' }, { userId: 2, userName: 'Alice', content: '🥰' }, { userId: 3, userName: 'Josh', content: 'Whoa! So impressive!' }];

const exampleBid = [{ userId: 1, userName: 'Remy', price: 100 }, { userId: 2, userName: 'Alice', price: 200 }, { userId: 3, userName: 'Josh', price: 300 }];

const ChatBidding = () => {
  const [chat, setChat] = useState([]);
  const [bid, setBid] = useState([]);

  useEffect(() => {
    axios.get('/getChat')
      .then((res) => {
        setChat(res);
      })
      .catch((err) => {
        console.log('Get Chat Err:', err);
      });

    axios.get('/getBid')
      .then((res) => {
        setBid(res);
      })
      .catch((err) => {
        console.log('Get Bid Err:', err);
      });
  }, [chat, bid]);

  return (
    <div className="ChatBidding">
      <Chat items={exampleChat} />
      <Bidding lists={exampleBid} />
    </div>
  );
};

export default ChatBidding;
