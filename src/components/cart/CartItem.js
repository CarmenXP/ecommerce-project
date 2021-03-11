import React from "react"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from "./cartItem.module.css"


export default function CartItem({item, qtyChangeHandler, removeFromCartHandler}) {
 const {image, product, price, article, qty, countInStock} = item 
    return(
        <div className={styles.cardCart}>
            <img className={styles.imgCart}src ={image} alt= {article}/>
            <div className={styles.articleName}>
                <p>{article}</p>
            </div>
            <div className ={styles.selectQ}>
                <p >
                    <select
                        className ={styles.selectCart}
                        value={qty}
                        onChange={(e)=> qtyChangeHandler(product, e.target.value)}
                    >
                        {[...Array(countInStock).keys()].map((x)=>(
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </p>
            </div>
            <div className ={styles.priceCart}>
                <p>Precio: ${price} MXN</p>
            </div>
            <div className={styles.totalCart}>
                <p>Total: $   {Number(qty)*price} MXN</p>
            </div>
            <div>
                <button
                    type="button"
                    onClick={()=>removeFromCartHandler(product)}
                >
                    <DeleteForeverIcon
                        style={{ color: "black", fontSize: 25 }}
                    />
                </button>
            </div>
        </div>
            


    
    )
}