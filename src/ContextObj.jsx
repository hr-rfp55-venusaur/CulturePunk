import React, { useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase';
import userInfo from './data/userInfo';
import productData from './Components/Market/productData';

const ContextObj = React.createContext();

export function useAppContext() {
  return useContext(ContextObj);
}

export function ContextProvider({ children }) {
  const [users, setUsers] = React.useState(userInfo);
  const [selectedUser, setSelectedUser] = React.useState(2);
  const [items, setItems] = React.useState(productData.assets);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
      return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    items,
    setItems,
  };

  return (
    <ContextObj.Provider value={value}>
      {!loading && children}
    </ContextObj.Provider>
  );
}

export default ContextProvider;
