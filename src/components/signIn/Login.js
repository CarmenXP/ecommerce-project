import React, {useState, useEffect} from 'react';
import fire from '../firebase/firebase';

const Login =()=>{

    const[user, setUser]= useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[emaiError, setEmailError]= useState('');
    const[passwordError, setPasswordError]= useState('');
    const[hasAccount, setHasAccount]= useState('false');

    const handleLogin = () => {
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;  
                }
            })
    }
    
    return(
        <div>

        </div>
    );
}

export default Login
