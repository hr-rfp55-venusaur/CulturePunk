import React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import SplitButton from './SplitButton';

export default function Sort({ setSortValue, setDirection }) {
  const captureSortValue = function (e) {
    setSortValue(e.target.value);
  };

  return (
    <div className="sidebar">
      <h2>Sort By</h2>
      <Stack direction="column" spacing={2}>
        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="sale_date" sx={{fontWeight: 'bold' }}>
          Last Sale
        </Fab>

        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="sale_count" sx={{fontWeight: 'bold' }}>
          Number of Sales
        </Fab>

        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="pk" sx={{fontWeight: 'bold' }}>
          NFT Token ID
        </Fab>
      </Stack>

      <br />

      <SplitButton setDirection={setDirection} />
    </div>
  );
}

Sort.propTypes = {
  setSortValue: PropTypes.func.isRequired,
};

/*
Options

 <Button>Primary</Button>
 <Button disabled>Disabled</Button>
 <Button href="#text-buttons">Link</Button>

*/
