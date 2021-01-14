import React from 'react';
import styles from './viewDetail.module.css';

export default function ViewDetailPage(props){
    return(
        <div className={styles.viewContent}>
            <div>
                <img className ={styles.imageProduct} src="https://i.pinimg.com/564x/3f/1f/3d/3f1f3dae3529d14e99124363215227bb.jpg" alt="product"/>
            </div>
            <div className={styles.detail}>
                <h2 className={styles.title}>Blusa Maracuyá</h2>
                <p>Blusa de croché de manga con perla</p>
                <p>Precio: $ 300.00</p>
                <p>Talla: CH</p>
                <p>Estrellas</p>
                <button 
                type="submit"className={styles.cartButton}

                >Añadir a carrito</button>

            </div>

        </div>
    )
}
