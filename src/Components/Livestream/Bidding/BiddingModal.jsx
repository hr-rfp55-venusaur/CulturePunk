import React, { useState } from 'react';
import {
  ref, child, update,
} from 'firebase/database';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import { db } from '../../../firebase';
import { id, nickName, photoURL } from '../CurrentUserInfo';

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

const BiddingModal = (props) => {
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
        photoUrl: photoURL,
        username: nickName,
        price: parseFloat(price),
      };
      const userid = id;
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
      <button onClick={handleOpen} type="submit" size="small" className="ChatBidding-button">Update Bidding Price</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span className="ChatBidding-BModal">
            Enter Bid ETH
          </span>
          {alert
          && <Alert severity="error">Please enter a valid price!</Alert>}
          <input type="number" onChange={handleChange} className="ChatBidding-bidInput" />
          <button
            onClick={(e) => handleClick(e)}
            className="ChatBidding-button"
            variant="contained"
            size="small"
            type="submit"
          >
            Submit
          </button>
        </Box>
      </Modal>
    </>
  );
};

BiddingModal.defaultProps = [];

BiddingModal.propTypes = {
  updateBid: PropTypes.func,
};
export default BiddingModal;
