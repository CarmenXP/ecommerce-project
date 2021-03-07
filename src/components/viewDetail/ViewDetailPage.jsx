import React from 'react';
import styles from './viewDetail.module.css';
import StarIcon from '@material-ui/icons/Star';
import { useState } from 'react';

export default function ViewDetailPage({image, price, product, id, countInStock, description, addToCardHandler}){
    const[qty, setQty]= useState(1)

    return(
        <div className={styles.viewContent}>
            <div className ={styles.imageProduct}>
                <img  src={image} alt="product"/>
            </div>
            <div className={styles.detail}>
                <h1 className={styles.title}>{product}</h1>
                <div className={styles.description}>
                    <p>{description}</p>
                    <span>Precio: <p>${price}.00 MXN</p></span>
                    <p>Talla: <a href="#">CH</a> <a href="#">M</a> <a href="#">G</a></p>
                    <div className={styles.rating}>
                        <span>Valoración media:</span>
                        <span> <StarIcon style={{ fontSize: 25}}/></span>
                        <span> <StarIcon style={{ fontSize: 25}}/></span>
                        <span> <StarIcon style={{ fontSize: 25}}/></span>
                        <span> <StarIcon style={{ fontSize: 25}}/></span>
                        <span> <StarIcon style={{ fontSize: 25}}/></span>
                        
                    </div>
                    <br/>
                    <p> Cantidad
                        <select value={qty} onChange={(e)=> setQty(e.target.value)}> 
                            {[...Array(countInStock).keys()].map((x) =>(
                                <option key ={x + 1} value ={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </p>
                    
                    <br/>
                    <button 
                         type="button"className={styles.cartButton}
                         onClick = {()=> addToCardHandler(id, 1)}
                    >Añadir a carrito</button>

                </div>
                

            </div>

        </div>
    )
}
