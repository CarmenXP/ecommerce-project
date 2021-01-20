import React from 'react'
import { Link } from 'react-router-dom';
import styles from './clothes.module.css';

export default function CardClothes(props){
    return(
        

            <div key="{props.id}" className={styles.card}>
              <img className={styles.medium} src={props.imagen}/>

              <div className={styles.cardBody}>
                  <h3>{props.producto}</h3>
                  <div className={styles.price}>Precio: $ {props.precio}</div>
                  <Link to={`/blouses/${props.id}`}>Ver</Link>
              </div>
            </div>
           
    )
}

