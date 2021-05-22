import React, {useState, useEffect} from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {signin} from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import styles from './signin.module.css';

const SignIn =({history})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };
    useEffect(()=>{
        
    }, [])

    return(
        <div className={styles.contentSign}>
            <form className={styles.signin} onSubmit={submitHandler}>
                <h2>Iniciar Sesión</h2>
                <div>
                    
                        <input  className={styles.mail}
                        type="email" 
                        placeholder="example@example"
                        name = "email"
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    
                    
                        <input className={styles.password} 
                        type="password" 
                        placeholder="password" 
                        name= "password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                      
                    <button type="submit" className={styles.login}>Iniciar sesión</button>
                    <p>¿Nuevo aquí? Crea una cuenta <Link to = {'/signUp'}>aquí</Link></p>
                </div>
                <div>
                    <p>----------- O bien ----------- </p>

                   <img className={styles.googleButton} src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"/>
                   <img className={styles.facebookButton} src="https://cdn.icon-icons.com/icons2/836/PNG/512/Facebook_icon-icons.com_66805.png"/>

                </div>
                
            </form>
            <div className={styles.footerSign}>
                <p>Al iniciar sesión o crear una cuenta, aceptas las <a href="#">Condiciones de 
                servicio</a> y la <a href="#">Política de privacidad de Maracuyá.</a></p>

            </div>

        </div>
    )
}

export default SignIn