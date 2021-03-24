import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './clothes.module.css';

export default function CardClothes({id, image, price, product, key}){
    return(
        

            <div key={key} className={styles.card}>
                <Link to={`/products/${id}`}>
                    <img className={styles.medium} src={image}/>
                </Link>
              <div className={styles.cardBody}>
                  <h4>{product}</h4>
                  <div className={styles.price}>
                      <span>Precio: ${price}.00 MXN <FavoriteIcon
                        style={{ color: "black", fontSize: 18 }}
                      /></span>
                  </div>
              </div>
            </div>
           
    )
}

