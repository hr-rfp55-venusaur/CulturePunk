import {
  ref, child, update, push,
} from 'firebase/database';
import { db } from '../../firebase';

export default function useAddFavorite(id, currentUser) {
  const dbRef = ref(db);
  const favoriteData = {
    currentUser,
    id,
  };

  // lines for creating nested object
  const newFavoriteKey = push(child(ref(db), 'favorites')).key;
  const updates = {};
  updates[newFavoriteKey] = favoriteData;

  // if nested object logic isn't included, replace updates with favoriteData
  return update(child(dbRef, 'favorites'), updates);
}
