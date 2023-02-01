import { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
 
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});


    //firebase function to create signup with email and password
    const register = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      //function to create saved shows array that will store users favorite movies clicked
      setDoc(doc(db, 'users', email), {
        savedShows:[]
      });
    }

    //function to login with firebase
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    //function to logout from firebase
    const logout = () => {
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
        <AuthContext.Provider value={{register, signIn, logout, user}}>
            {children}
        </AuthContext.Provider>

    );
}



//user auth function
export const UserAuth = () => {
    return useContext(AuthContext);
}