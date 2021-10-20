import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import InputEmoji from 'react-input-emoji';
import moment from 'moment';
import BasicModal from './BasicModal';

const Chat = (props) => {
  // Need to pass in username/userid as props
  const { items, updateChat, updateBid } = props;
  const [content, setContent] = useState('');
  const handleClick = () => (
    axios.post('/Chat', {
      username: 'Oliver Squirtle Nomes',
      text: content,
      timestamp: moment().format('LTS'),
    })
      .then(() => updateChat(true))
      .catch((err) => (err))
  );

  return (
    <Grid className="ChatBidding-chatSection" item xs={9}>
      Live Chat
      <List id="ChatBidding-messageArea">
        {items.map((item) => (
          <Grid item xs={12} key={item.username}>
            <ListItem disableGutters>
              <ListItemText id="ChatBidding-eachMsgName" primary={`${item.username}`} />
              <ListItemText id="ChatBidding-eachMsgContent" primary={`${item.text} ${item.timestamp}`} />
            </ListItem>
          </Grid>
        ))}
      </List>
      <Grid className="ChatBidding-messageInput">
        <InputEmoji onChange={(e) => setContent(e)} className="ChatBidding-chatInput" />
        <Grid>
          <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Send</Button>
          <BasicModal className="ChatBidding-button" updateBid={updateBid} />
        </Grid>
      </Grid>
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
