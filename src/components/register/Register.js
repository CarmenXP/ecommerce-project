import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/actions/userActions';

const Register = ({history}) =>{
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmPassword]= useState('');

    const userRegister = useSelector((state)=> state.userRegister);
    const {userInfo, loading, error} =  userRegister;
    
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword) {
            alert ('El password y password de confirmación no coincide');
        }else{
            dispatch(register(name, email, password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/home');
        }
    }, [history, userInfo]);

    return(
        <div>
            <h2>Crear una cuenta</h2>
            <form  onSubmit={submitHandler}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    placeholder="nombre"
                    name= "name"
                    onChange ={(e)=> setName(e.target.value)}
                    />
                <br/>    
                <label>Correo electrónico</label>
                <input 
                    type="email" 
                    placeholder="example@example.com"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <br/>    
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="contraseña"
                    name = "password"
                    onChange= {(e)=> setPassword(e.target.value)}
                    />
                <br/>    
                <label>Confirmar password</label>
                <input 
                type="password" 
                placeholder="constraseña"
                name="confirm password"
                onChange = {(e) => setConfirmPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}


export default Register;