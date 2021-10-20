import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);  
        setLoading(false);
      })
      return unsubscribe;
    }, []);

    const value = { 
        currentUser,
        signup 
    };

    return (
        <ContextObj.Provider value={value}>
            {children}
        </ContextObj.Provider>
    )
}

export default ContextProvider;
