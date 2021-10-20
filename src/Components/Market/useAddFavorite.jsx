import { ref, child, update } from 'firebase/database';
import { db } from '../../firebase';

export default function useAddFavorite(id, currentUser) {
  const dbRef = ref(db);
  const favoriteData = {
    currentUser,
    id,
  };
  return update(child(dbRef, 'favorites'), favoriteData);
}
