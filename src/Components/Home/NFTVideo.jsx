import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const NFTVideo = () => (
  <div className="video-wrapper">
    <Card sx={{ }}>
      <CardActionArea>
        <CardMedia
          style={{ minWidth: 1000, minHeight: 500, }}
          component="iframe"
          height="500"
          image="https://www.youtube.com/embed/gSLiX1QihEc"
          alt="NFT Video"
        />
      </CardActionArea>
    </Card>
  </div>

);

export default NFTVideo;
