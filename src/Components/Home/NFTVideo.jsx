import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const NFTVideo = () => (
  <div className="video-wrapper">
    <Card sx={{ }}>
      <CardActionArea>
        <CardMedia
          style={{ minWidth: 800, minHeight: 500 }}
          component="iframe"
          height="500"
          image="https://www.youtube.com/embed/gSLiX1QihEc"
          alt="NFT Video"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NFTs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn More About NFTs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </div>

  // <div className="video-wrapper">
  //   <iframe width="1280" height="720" src="https://www.youtube.com/embed/gSLiX1QihEc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  // </div>
);

export default NFTVideo;
