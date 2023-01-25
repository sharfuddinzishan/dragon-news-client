import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)


    const googleSignIn = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithEmailPassword = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUpWithEmailPassword = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        setAuthLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    const updateUserPassword = (newPassword) => {
        setAuthLoading(true)
        return updatePassword(auth.currentUser, newPassword)
    }

    const verifyEmail = () => {
        setAuthLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = () => {
        setAuthLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authUser => {
            if (authUser === null || authUser.emailVerified) {
                setUser(authUser)
            }
            setAuthLoading(false)

        })
        return () => unsubscribe()
    }, [])

    const value = { user, setUser, googleSignIn, authLoading, setAuthLoading, logOut, loginWithEmailPassword, signUpWithEmailPassword, updateUser, updateUserPassword, verifyEmail }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;