import React, { Fragment } from 'react';
//import { useSelector} from 'react-redux';
import styles from './cart.module.css';

export default function TotalPay({cartItems}){

    const cartTotal = () =>{
        return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0);
        
    };
    console.log(cartItems)

    return(
        <Fragment>
            <p>Total $ {cartTotal} MXN</p>
            <button className={styles.checkoutButton}>
                 Tramitar Pedido
            </button>
        </Fragment> 
    )

}