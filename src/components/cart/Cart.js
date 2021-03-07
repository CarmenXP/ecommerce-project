import React, {Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux';


export default function Cart(){

    const cart = useSelector((state)=> state.cart);
    const {cartItems} = cart;
    console.log(cart)
    return(
        <Fragment>
            <p>Este es el carrito</p>

            {cartItems.length === 0 ? (
                
                <p>Carrito vacio</p>
            ):(
                cartItems.map((item)=>(<p>{item.article}</p>))
            )}
            

        </Fragment>

    )

}