import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import HomeCanvas from './HomeCanvas';

export default function LandingCard() {
  return (
    <Card sx={{
      mw: 400, width: 500, mt: '5vh', ml: '50vw',
    }}
    >
      {/* <CardMedia
        component="img"
        height="400"
        image="./img/touch.jpg"
        alt="green iguana"
      /> */}
      <HomeCanvas />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Venusaur
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Venusaur are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
