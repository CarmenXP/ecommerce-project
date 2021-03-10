import React from "react"
import { Fragment } from "react";


export default function CartItem({item, qtyChangeHandler, removeFromCartHandler}) {
 const {image, product, price, article, qty, countInStock} = item 
    return(
        <Fragment>
            <img src ={image} alt= {article}/>
            <div>
                <p>{article}</p>
            </div>
            <div>
                <p>cantidad
                    <select
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
            <div>
                <p>Precio ${price} MXN</p>
            </div>
            <div>
                <p>Total</p>
            </div>
            <div>
                <button
                    type="button"
                    onClick={()=>removeFromCartHandler(product)}
                >
                    quitar
                </button>
            </div>
        </Fragment>
            


    
    )
}