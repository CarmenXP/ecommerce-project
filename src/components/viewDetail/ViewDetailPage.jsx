import React from 'react';
import styles from './viewDetail.module.css';
import StarIcon from '@material-ui/icons/Star';


export default function ViewDetailPage({image, price, product, id,  description, addToCardHandler, qty}){
    

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
                    <button 
                         type="button"className={styles.cartButton}
                         onClick = {()=> addToCardHandler(id, qty)}
                    >Añadir a carrito</button>

                </div>
                

            </div>

        </div>
    )
}
