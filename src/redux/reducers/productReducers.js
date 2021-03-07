import { GET_PRODUCTS_FAIL, 
        GET_PRODUCTS_REQUEST, 
        GET_PRODUCTS_SUCCESS, 
        GET_PRODUCT_REQUEST,
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAIL} from '../constants/productConstants';

export const getProductsReducer = (state = {products:[]}, action) =>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return{
                loading: true,
                products: []
            };
        case GET_PRODUCTS_SUCCESS:
            return{
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCTS_FAIL:
            return{
                loading: false,
                error: action.payload
            };  
        default:
            return state;      

    }
};

export const getProductDetailReducer = (state = {product:{}}, action) =>{
    switch(action.type){
        case GET_PRODUCT_REQUEST:
            return{
                loading: true,
                
            };
        case GET_PRODUCT_SUCCESS:
            return{
                product: action.payload,
                loading: false,
            };
        case GET_PRODUCT_FAIL:
            return{
                loading: false,
                error: action.payload
            };  
        default:
            return state;      

    }
};