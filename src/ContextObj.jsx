import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase.jsx';
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword } from 'firebase/auth';

const ContextObj = React.createContext();

export function useAppContext() {
    return useContext(ContextObj);
}

export function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);  
        setLoading(false);
      })
      return unsubscribe;
    }, []);

    const value = { 
        currentUser,
        signup,
        login
    };

    return (
        <ContextObj.Provider value={value}>
            {!loading && children}
        </ContextObj.Provider>
    )
}

export default ContextProvider;
