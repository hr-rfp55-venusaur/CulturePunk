import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function Sort({ setSortValue }) {
  const captureSortValue = function (e) {
    setSortValue(e.target.value);
  };

  return (
    <div className="sidebar">
      <h4>Sort By</h4>
      <Stack direction="column" spacing={2}>
        <Button onClick={captureSortValue} value="sale_date">Last Sale Date</Button>
        <Button onClick={captureSortValue} value="sale_price">Value</Button>
        <Button onClick={captureSortValue} value="sale_count">Number of Sales</Button>
      </Stack>
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
