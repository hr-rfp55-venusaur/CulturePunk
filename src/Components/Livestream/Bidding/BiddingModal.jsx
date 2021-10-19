import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BiddingModal = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => (
    axios.put('/UpdateBid', {
      userName: 'Oliver Squirtle Nomes',
      bidPrice: price,
    })
      .then((response) => console.log('Put Success!', response))
      .catch((err) => console.log('Put Err:', err))
  );

  const handleChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained" size="small">Update Bidding Price</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Bidding Price
          </Typography>
          <TextField onChange={handleChange} className="ChatBidding-bidInput" label="Start typing" />
          <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Submit</Button>
        </Box>
      </Modal>
    </>
  );
};

export default BiddingModal;
