import React from 'react'
import { Link } from 'react-router-dom';
import styles from './clothes.module.css';

export default function CardClothes({id, image, price, product, key}){
    return(
        

            <div key={key} className={styles.card}>
                <Link to={`/products/${id}`}>
                    <img className={styles.medium} src={image}/>
                </Link>
              <div className={styles.cardBody}>
                  <h4>{product}</h4>
                  <div className={styles.price}>Precio: ${price}.00 MXN</div>
              </div>
            </div>
           
    )
}

