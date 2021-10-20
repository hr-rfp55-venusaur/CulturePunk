import * as React from 'react';
import { db } from '../../firebase';
import {
  ref, child, update,
} from 'firebase/database';
import PropTypes from 'prop-types';

export default function useAddFavorite(id, currentUser) {
  const dbRef = ref(db)
  console.log('clicked!', id, currentUser)

  const favoriteData = {
    currentUser: {
      'currentUser': currentUser,
      'id': id
    }
  }
  update(child(dbRef, 'favorites'), favoriteData)
    .then(data => console.log(data));

}
