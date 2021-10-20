import * as React from 'react';
import { useAppContext } from '../../ContextObj';
import { db } from '../../firebase';
import {
  ref, child, update,
} from 'firebase/database';
import PropTypes from 'prop-types';

export default function useAddFavorite({ tokenId }) {
  const { signup, currentUser } = useAppContext();
  const dbRef = ref(db)

  const favoriteData = {
    user: currentUser,
    favorite: tokenId
  }
  update(child(dbRef, 'favorites'), favoriteData)
    .then(data => console.log(data))

}
