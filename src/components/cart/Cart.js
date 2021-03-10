import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addToCard, removeFromCart} from '../../redux/actions/cartActions'
import CartItem from './CartItem'

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
            <p>Este es el carrito</p>

            {cartItems.length === 0 ? (
                
                <p>Carrito vacio</p>
            ):(
                cartItems.map((item)=>(
                    <div>
                        <CartItem
                        item ={item}
                        key = {item.product}
                        qtyChangeHandler = {qtyChangeHandler}
                        removeFromCartHandler = {removeFromCartHandler}
                    />

                    <div>
                        <p>Total $ {cartTotal} MXN</p>
                        <button>
                            Tramitar Pedido
                        </button>
                    </div>

                    </div>
                    
                ))
            )}
            

        </Fragment>

    )

}