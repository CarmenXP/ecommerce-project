import React from 'react'
import { Link } from 'react-router-dom';
import styles from './clothes.module.css';

export default function CardClothes(props){
    return(
        

            <div key="{props.id}" className={styles.card}>
                <Link to={`/products/${props.id}`}>
                    <img className={styles.medium} src={props.imagen}/>
                </Link>
              <div className={styles.cardBody}>
                  <h4>{props.producto}</h4>
                  <div className={styles.price}>Precio: ${props.precio}.00 MXN</div>
              </div>
            </div>
           
    )
}

