import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCard, removeFromCart} from '../../redux/actions/cartActions';
import CartItem from './CartItem';
import styles from './cart.module.css';
import { Link } from 'react-router-dom';

export default function Cart(){

    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart);
    const {cartItems} = cart;
    console.log(cart)

    useEffect(()=> {}, []);

    const qtyChangeHandler = (id, qty) =>{
        dispatch(addToCard(id, qty))
    };

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    };

    const cartItemsCount = () =>{
        return cartItems
        .reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const cartTotal = () =>{
        return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0)
    };

    return(
        <Fragment>
            <div className={styles.contentCart}>
                <h2>Carrito de compras</h2>
                <Link to = "/clothes">Seguir comprando</Link>

                {cartItems.length === 0 ? ( 
                 <>   
                    <h3>Carrito vacio</h3>
                    <Link to = "/clothes">Regresar</Link>
                </>
                ):(
                    cartItems.map((item)=>(
                        <>
                        <CartItem
                        item ={item}
                        key = {item.product}
                        qtyChangeHandler = {qtyChangeHandler}
                        removeFromCartHandler = {removeFromCartHandler}
                        />

                        <div>
                            <p>Total $ {cartTotal} MXN</p>
                            <button className={styles.checkoutButton}>
                                Tramitar Pedido
                            </button>
                         </div>  
                        </>      
                    ))       
                )}    
            </div>
        </Fragment>

    )

}