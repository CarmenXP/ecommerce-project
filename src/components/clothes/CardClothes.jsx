import React from 'react'
import styles from './clothes.module.css';

export default function CardClothes(props){
    return(
        

            <div className={styles.card}>
              <img className={styles.medium} src={props.imagen}/>

              <div className={styles.cardBody}>
                  <h3>{props.producto}</h3>
                  <div className={styles.price}>Precio: $ {props.precio}</div>
                  <a href="#"><span>Ver</span></a>
              </div>
            </div>
           
    )
}

