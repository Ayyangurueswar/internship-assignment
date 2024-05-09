import React, {createContext, useContext, useEffect, useState} from 'react'
import { auth } from '../lib/auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
    })
    return unsuscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
  
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth); 
  }

  const value = {
    currentUser,
    signUp,
    signIn,
    logout
  }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider