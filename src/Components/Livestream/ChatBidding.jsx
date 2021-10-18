import React from 'react';
import '../../App.css';
import Chat from './Chat';
import Bidding from './Bidding';

const exampleChat = [{ userId: 1, userName: 'Remy', content: 'I like every piece of art!' }, { userId: 2, userName: 'Alice', content: '🥰' }, { userId: 3, userName: 'Josh', content: 'Whoa! So impressive!' }];

const ChatBidding = () => (
  <div className="ChatBidding">
    <Chat items={exampleChat} />
    <Bidding />
  </div>
);

export default ChatBidding;
