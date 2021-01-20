import React from 'react';
import styles from './shoes.module.css';


export default function CardShoes(props){
    
        return(
            
    
                <div key="{props.id}" className={styles.card}>
                  <img className={styles.medium} src={props.imagen}/>
    
                  <div className={styles.cardBody}>
                      <h3>{props.producto}</h3>
                      <div className={styles.price}>Precio: $ {props.precio}</div>
                      <a href="#"><span>Ver</span></a>
                  </div>
                </div>
               
        )
    
}