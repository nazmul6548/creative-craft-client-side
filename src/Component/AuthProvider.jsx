import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// import auth from "./firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {


    const [user,setUser] =useState(null)
const [loading, setLoading] = useState(true);
  

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   
  };


  const googlelogin = () => {
    setLoading(true)
     return signInWithPopup(auth, googleProvider)
    .then(() => {
        
        
        
        setLoading(false)
    })
    .catch((error) => {
        
        toast.error('Failed to login with Google');

        setLoading(false)
    });
}


const github = () => {
    setLoading(true)
    signInWithPopup(auth, githubProvider)
    // .then(() => {
    //     toast.success('Login successful with Github');
    //     setLoading(false)
    // })
    // .catch((error) => {
        
    //     toast.error('Failed to login with Github');
    //     setLoading(false)
    // });
}
   
const logout = () => {
    setLoading(true)
    setUser(null)
    signOut(auth)
}
    useEffect(()=>{
        const unsubscrive =onAuthStateChanged(auth, (user) => {
            // if (user) {
            setUser(user)
            // console.log(user);
            setLoading(false)
             
            // }
          });
          return () => unsubscrive();
       },[])




       const userInfo ={
        user,
        createUser,
        signInUser,
        loading,
        googlelogin,
        logout,
        github
    };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;




