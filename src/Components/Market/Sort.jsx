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
      <h4>Sort By</h4>
      <Stack direction="column" spacing={2}>
        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="sale_date">
          Last Sale
        </Fab>

        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="sale_price">
          Value
        </Fab>

        <Fab color="secondary" variant="extended" size="medium" onClick={captureSortValue} value="sale_count">
          Number of Sales
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
