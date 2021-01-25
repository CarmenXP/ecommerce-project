import React from 'react';
import styles from './viewDetail.module.css';

export default function ViewDetailPage(props){
    return(
        <div className={styles.viewContent}>
            <div className ={styles.imageProduct}>
                <img  src={props.imagen} alt="product"/>
            </div>
            <div className={styles.detail}>
                <h1 className={styles.title}>{props.producto}</h1>
                <div className={styles.description}>
                    <p>{props.descripcion}</p>
                    <p>Precio:$ {props.precio}.00 MXN</p>
                    <span>Talla: <a href="#">CH</a> <a href="#">M</a> <a href="#">G</a></span>
                    <br/>
                    <span>Valoración media:</span>
                    <br/>
                    <button 
                         type="submit"className={styles.cartButton}

                    >Añadir a carrito</button>

                </div>
                

            </div>

        </div>
    )
}
