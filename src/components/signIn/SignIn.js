import React from 'react';
import styles from './signin.module.css';

const SignIn =()=>{
    return(
        <div className={styles.contentSign}>
            <form className={styles.signin}>
                <h2>Iniciar Sesión</h2>
                <div>
                    <div>
                        <input  className={styles.mail}type="email" placeholder="example@example"/>
                    </div>
                    <div>
                        <input className={styles.password} type="password" placeholder="password" />
                    </div>  
                    <button type="submit">Iniciar sesión</button>
                    <p>¿Nuevo aquí? Crea una cuenta <a href="#">aquí</a></p>
                </div>
                <div>
                    <p>----------- O bien ----------- </p>

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