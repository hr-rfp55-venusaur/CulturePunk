import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const artUrl = product.image_preview_url && product.image_preview_url.split('.');
  const cardMedia = artUrl && artUrl[3] === 'mp4'
    ? (
      <CardMedia
        component="video"
        height="304"
        image={product.image_preview_url}
        autoPlay={true}
        loop={true}
      />
    )
    : (
      <CardMedia
        component="img"
        height="304"
        image={product.image_preview_url || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'}
      />
    );

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={product.name || 'untitled'}
      />
      {cardMedia}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.short_description || 'expand for more info'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{ product.description }</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image_preview_url: PropTypes.string,
    name: PropTypes.string,
    short_description: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

/*
// Simple Card File Code....
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const artUrl = product.image_preview_url.split('.');

  const cardMedia = artUrl[3] === 'mp4'
    ? (
      <CardMedia
        component="video"
        height="304"
        image={product.image_preview_url}
        autoPlay={true}
        loop={true}
      />
    )
    : (
      <CardMedia
        component="img"
        height="304"
        image={product.image_preview_url}
      />
    );

  return (
    <Card sx={{ maxWidth: 345 }}>
      {cardMedia}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name || 'untitled'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.short_description || 'no description'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image_preview_url: PropTypes.string,
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string,
  }).isRequired,
};

*/