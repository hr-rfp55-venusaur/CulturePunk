import React from 'react';
import '../Profile.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const GalleryItem = ({ item }) => (
  // <div className="GalleryItem">
  //   Item
  // </div>
  <Card className="GalleryItem" sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={item.image_preview_url}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

GalleryItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default GalleryItem;

/*
import * as React from 'react';

export default function MediaCard() {
  return (
  );
}
*/
