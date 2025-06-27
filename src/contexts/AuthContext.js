import React, { useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'; // Import auth from your firebase.js file

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener from Firebase will fire whenever the user's login state changes.
    // When the app first loads, it also checks if a user was already logged in.
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, []);

  const value = {
    currentUser
  };

  // We don't render the app until Firebase has checked the user's auth status
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
