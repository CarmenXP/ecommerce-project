import{
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL
} from "../constants/productConstants"
import axios from "axios";

export const getProducts = () => async(dispatch) =>{
    try{
        dispatch({type: GET_PRODUCTS_REQUEST});

        const {data}= await axios.get('https://backendprojectecommerce.herokuapp.com/products');

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data.data,
        });
    }catch(error){
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                :error.message
        });
    };
};

export const getProductDetails = (id) => async(dispatch) =>{
    try{
        dispatch({type: GET_PRODUCT_REQUEST});

        const {data}= await axios.get(`https://backendprojectecommerce.herokuapp.com/products/${id}`);

        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: data.data,
        });
    }catch(error){
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                :error.message
        });
    };
};