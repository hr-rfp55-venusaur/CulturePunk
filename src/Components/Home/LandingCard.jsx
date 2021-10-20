import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SpotLightCanvas from './SpotLightCanvas';

const useStyles = makeStyles({
  root: {
    transition: 'transform 0.5s ease-in-out',
    '&:hover': { transform: 'scale3d(1.01, 1.01, 1.01)' },
  },
});

export default function LandingCard({ src }) {
  const [showBuy, setShowBuy] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        sx={{
          width: 350,
        }}
      >
        {/* <CardMedia
        component="img"
        height="400"
        image="./img/touch.jpg"
        alt="green iguana"
      /> */}
        <SpotLightCanvas src={src} />
        <CardContent sx={{
          // height: 130,
        }}
        >
          <Typography gutterBottom variant="h4" component="div">
            PER5I5T Venusaur
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PER5I5T Venusaur is an extremely rare collectors
            item from the year 2021. This NFT comes with 3D
            interactibility.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onMouseEnter={() => setShowBuy(!showBuy)}
            onMouseLeave={() => setShowBuy(!showBuy)}
            size="medium"
          >
            {showBuy ? 'BID NOW' : '100 ETH'}

          </Button>
          <Button size="medium">See in Events Page</Button>
        </CardActions>
      </Card>
      <h1>THIS WEEKS SPOTLIGHT</h1>
    </div>
  );
}
