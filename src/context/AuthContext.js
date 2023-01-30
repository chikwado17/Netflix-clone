import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});


    //firebase function to create signup with email and password
    const signUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    //function to login with firebase
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    //function to logout from firebase
    const logOut = () => {
      return signOut(auth);
    }


    //firebase function to check if user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => unsubscribe();
    });

    return (
        <AuthContext.Provider value={{signUp, signIn, logOut, user}}>
            {children}
        </AuthContext.Provider>

    );
}



//user auth function
export const UserAuth = () => {
    return useContext(AuthContext);
}