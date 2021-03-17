import React from "react";

const Register = () =>{
    return(
        <div>
            <h2>Crear una cuenta</h2>
            <form>
                <label>Nombre</label>
                <input type="text" placeholder="nombre"/>
                <label>Correo electrónico</label>
                <input type="email" placeholder="example@example.com"/>
                <label>Password</label>
                <input type="password" placeholder="....."/>
                <label>Confirmar password</label>
                <input type="password" placeholder="....."/>
                <br/>
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}


export default Register;