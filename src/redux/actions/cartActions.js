import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
import axios from 'axios';

export const addToCard = (id, qty) => async (dispatch, getState)=>{
    const {data} = await axios.get(`https://backendprojectecommerce.herokuapp.com/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.data._id,
            image: data.data.image,
            article: data.data.product,
            description: data.data.description,
            price: data.data.price,
            countInStock: data.data.countInStock,
            rating: data.data.rating,
            qty,            
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

