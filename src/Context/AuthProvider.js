import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/Firebase';






export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()     
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    // create user by goolge 
    const googleSignup = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //create user by Github 
    const githubSignup = () =>{
        setLoading(true)
        return signInWithPopup(auth , githubProvider)
    }

    //create user by eamil and password 
    const createUser = (email , password) =>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth, email , password)   
    }

    // observer (je user login kora ase naki nai ata dhekar jonno ) 
useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    console.log(user)
    return () =>{
        return unSubscribe
    }
}, []) 

//login 
const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}


// Logout/ signOut 
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

//update profile
const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser , userInfo)
}


    // authInfo 
    const authInfo = {
        googleSignup , githubSignup , user , logOut , createUser , signIn , updateUser ,loading
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;