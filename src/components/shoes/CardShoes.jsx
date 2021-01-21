import React from 'react';
import styles from './shoes.module.css';


export default function CardShoes(props){
    
        return(
            
    
                <div key="{props.id}" className={styles.card}>
                  <img className={styles.medium} src={props.imagen}/>
    
                  <div className={styles.cardBody}>
                      <h4>{props.producto}</h4>
                      <div className={styles.price}>Precio: ${props.precio}.00 MXN</div>
                      
                  </div>
                </div>
               
        )
    
}