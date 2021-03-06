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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { red } from '@mui/material/colors';
import { useAppContext } from '../../ContextObj';
import useAddFavorite from './useAddFavorite';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  /* eslint-disable */
  return <IconButton {...other} />;
  /* eslint disable */
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product, favorites, setUpdateFavorites }) {
  const [expanded, setExpanded] = React.useState(false);
  const { currentUser } = useAppContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addFavorite = (e) => {
    const id = e.target.parentElement.parentElement.value;
    const user = currentUser.email;
    useAddFavorite(
      user,
      id,
      product.name,
      product.image_preview_url,
      product.description,
      product.permalink,
    )
      .then(() => setUpdateFavorites());
  };

  const artUrl = product.image_preview_url && product.image_preview_url.split('.');
  const cardMedia = artUrl && artUrl[3] === ('mp4' || '.mov')
    ? (
      <CardMedia
        component="video"
        height="304"
        image={product.image_preview_url}
        alt="NFT video"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    )
    : (
      <CardMedia
        component="img"
        height="304"
        image={product.image_preview_url || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'}
        alt="NFT image"
      />
    );

  return (

    <Card sx={{ width: 345 }}>
      <CardHeader
        title={product.name || 'untitled'}
      />
      {cardMedia}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.short_description || 'expand for more info'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {currentUser && (
        <>
        <IconButton value={product.id} onClick={addFavorite} aria-label="add to favorites">
          {favorites.includes(`${product.id}`) ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteIcon />}
        </IconButton>
        <IconButton>
          <AttachMoneyIcon />
        </IconButton>
        </>
        ) }
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon aria-label="expand for description" />
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
ProductCard.defaultProps = {
  favorites: [],
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_preview_url: PropTypes.string,
    name: PropTypes.string,
    short_description: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setUpdateFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};
