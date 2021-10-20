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
  <Card className="GalleryItem" sx={{ width: 245, height: 300}}>
    <CardMedia
      component="img"
      height="250"
      image={item.image_preview_url}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>

    </CardContent>
    <CardActions>
      <Button size="small">Purchase</Button>
      {/* <Button size="small">Learn More</Button> */}
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
