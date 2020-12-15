import React, {useState, useEffect} from 'react';
import fire from '../firebase/firebase';

const Login =()=>{

    const[user, setUser]= useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[emaiError, setEmailError]= useState('');
    const[passwordError, setPasswordError]= useState('');
    const[hasAccount, setHasAccount]= useState('false');

    const clearInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code){
                    case "auth/invalid-use":
                    case "auth/user-disable":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;  
                }
            })
    }

    const handleSigup = () =>{
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                     case "auth/weak-passwod":
                         setPasswordError(err.message);
                         break;   
                }
            })
    }

    const handleLogout = () =>{
        fire.auth().sigOut();
    }

    const authListener = () =>{
        fire.auth().onAuthStateChange((user) =>{
            if(user){
                setUser(user);
            }else{
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);
    
    return(
        <div>

        </div>
    );
}

export default Login
