import React from 'react';
import styles from './viewDetail.module.css';
import StarIcon from '@material-ui/icons/Star';

export default function ViewDetailPage(props){
    return(
        <div className={styles.viewContent}>
            <div className ={styles.imageProduct}>
                <img  src={props.imagen} alt="product"/>
            </div>
            <div className={styles.detail}>
                <h1 className={styles.title}>{props.producto}</h1>
                <div className={styles.description}>
                    <p>{props.descripcion}</p>
                    <span>Precio: <p>${props.precio}.00 MXN</p></span>
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
                         type="submit"className={styles.cartButton}

                    >Añadir a carrito</button>

                </div>
                

            </div>

        </div>
    )
}
