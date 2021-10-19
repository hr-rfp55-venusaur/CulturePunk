import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Sort() {
  return (
    <div className="sidebar">
      <h4>Sort By</h4>
      <Stack direction="column" spacing={2}>
        <Button>Last Sale Date</Button>
        <Button>Last Sale Value</Button>
        <Button>Number of Sales</Button>
      </Stack>
    </div>
  );
}

/*
Options

 <Button>Primary</Button>
 <Button disabled>Disabled</Button>
 <Button href="#text-buttons">Link</Button>

*/
