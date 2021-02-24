import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
import axios from 'axios';

export const addToCard = (id, qty) => async (dispatch, getState)=>{
    const {data} = await axios.get(`http://localhost:8080/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            article: data.product,
            description: data.description,
            price: data.price,
            countInStock: data.price.countInStock,
            rating: data.rating,
            qty,            
        }
    });

};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    });
};

