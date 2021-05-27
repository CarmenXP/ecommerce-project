import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './clothes.module.css';

export default function CardClothes({id, image, price, product}){
    return(
        

            <div  className={styles.card}>
                <Link to={`/products/${id}`}>
                    <img className={styles.medium} src={image}/>
                </Link>
              <div className={styles.cardBody}>
                  <h4>{product}</h4>
                  <div className={styles.price}>
                      <span>Precio: ${price}.00 MXN </span>
                      <div className={styles.like}>
                      <FavoriteIcon
                        style={{ color: "black", fontSize: 18 }}
                      />
                      </div>
                      
                  </div>
                  
              </div>
            </div>
           
    )
}

