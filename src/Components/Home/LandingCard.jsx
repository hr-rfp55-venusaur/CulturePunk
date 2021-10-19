import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SpotLightCanvas from './SpotLightCanvas';

export default function LandingCard() {
  return (
    <Card sx={{
      mw: 400, width: 500,
    }}
    >
      {/* <CardMedia
        component="img"
        height="400"
        image="./img/touch.jpg"
        alt="green iguana"
      /> */}
      <SpotLightCanvas />
      <CardContent sx={{
        mt: '-10vh',
      }}
      >
        <Typography gutterBottom variant="h4" component="div">
          Venusaur
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Venusaur are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica           Venusaur are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Venusaur are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">100 ETH</Button>
        <Button size="small">Watch Live Now!</Button>
      </CardActions>
    </Card>
  );
}
