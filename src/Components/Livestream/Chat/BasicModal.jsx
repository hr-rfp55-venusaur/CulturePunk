import React, { useState } from 'react';
import {
  ref, child, update,
} from 'firebase/database';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@material-ui/core/TextField';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import { db } from '../../../firebase';

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

const BasicModal = (props) => {
  const { updateBid } = props;
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const [alert, setAlert] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    if (price === '' || price === null || parseFloat(price) <= 0) {
      setAlert(true);
      setOpen(true);
    } else {
      const dbRef = ref(db);
      const postData = {
        username: 'Oliver Squirtle Nomes',
        price: parseFloat(price),
      };
      const userid = 1;
      const updates = {};
      updates[userid] = postData;
      update(child(dbRef, 'bids'), updates)
        .then(() => {
          updateBid(true);
          setOpen(false);
        })
        .catch((err) => (err));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained" size="small">Bid</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter Bid Price
          </Typography>
          {alert
          && <Alert severity="error">Please enter a valid price!</Alert>}
          <TextField onChange={handleChange} className="ChatBidding-bidInput" type="number" />
          <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Submit</Button>
        </Box>
      </Modal>
    </>
  );
};

BasicModal.defaultProps = [];

BasicModal.propTypes = {
  updateBid: PropTypes.func,
};

export default BasicModal;
