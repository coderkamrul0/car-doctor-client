/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
// @ts-ignore
export const AuthContent = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);



    // create a user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign in with email and password
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    // on auth state change
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
    }

    return (
        <AuthContent.Provider value={authInfo}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;