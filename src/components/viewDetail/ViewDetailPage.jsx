import React from 'react';
import styles from './viewDetail.module.css';

export default function ViewDetailPage(props){
    return(
        <div className={styles.viewContent}>
            <div>
                <img className ={styles.imageProduct} src={props.imagen} alt="product"/>
            </div>
            <div className={styles.detail}>
                <h2 className={styles.title}>{props.producto}</h2>
                <div>
                    <p>{props.descripcion}</p>
                    <p>Precio:$ {props.precio}.00 MXN</p>
                    <span>Talla: <a>CH</a> <a>M</a> <a>G</a></span>
                    
                    <button 
                         type="submit"className={styles.cartButton}

                    >Añadir a carrito</button>

                </div>
                

            </div>

        </div>
    )
}
