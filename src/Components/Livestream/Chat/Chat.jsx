import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import BasicModal from './BasicModal';

const Chat = (props) => {
  // Need to pass in username/userid as props
  const { items } = props;
  const [text, setText] = useState('');
  const handleClick = () => (
    axios.post('/Chat', {
      userName: 'Oliver Squirtle Nomes',
      content: text,
    })
      .then((response) => console.log('Post Success!', response))
      .catch((err) => console.log('Post Err:', err))
  );

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <Grid className="ChatBidding-chatSection" item xs={9}>
      Live Chat
      <List id="ChatBidding-messageArea">
        {items.map((item) => (
          <Grid item xs={12} key={item.userId}>
            <ListItem disableGutters>
              <ListItemText id="ChatBidding-eachMsgName" primary={`${item.userName}`} />
              <ListItemText id="ChatBidding-eachMsgContent" primary={`${item.content}`} />
            </ListItem>
          </Grid>
        ))}
      </List>
      <Grid className="ChatBidding-messageInput">
        <TextField onChange={handleChange} className="ChatBidding-chatInput" label="Start typing" />
        <Grid>
          <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Send</Button>
          <BasicModal className="ChatBidding-button" />
        </Grid>
      </Grid>
    </Grid>
  );
};

Chat.defaultProps = [];

Chat.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Chat;
