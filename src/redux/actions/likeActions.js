import {LIKE_PRODUCT,
    REMOVE_LIKE,
    
} from '../constants/likeConstants';
import axios from 'axios';

export const addLike = (id) => async (dispatch, getState)=>{
    const {data} = await axios.get(`https://backendprojectecommerce.herokuapp.com/products/${id}`);

    dispatch({
        type: LIKE_PRODUCT,
        payload: {
            product: data.data._id,
            image: data.data.image,
            article: data.data.product,
            description: data.data.description,
            price: data.data.price,
            countInStock: data.data.countInStock,
            rating: data.data.rating,
                       
        }
    });
    localStorage.setItem('likeItems', JSON.stringify(getState().like.likeItems));
};

export const removeLike = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_LIKE,
        payload: id
    });
    localStorage.setItem('likeItems', JSON.stringify(getState().like.likeItems));
};