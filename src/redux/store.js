import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

//Reducers

import {cartReducer} from './reducers/cartReducers';
import{
    getProductsReducer,
    getProductDetailReducer
} from './reducers/productReducers';
import{
    userRegisterReducer,
    userSigninReducer
} from './reducers/userReducers'
import{likeReducer} from './reducers/likeReducers';


const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
            ? JSON.stringify(localStorage.getItem('userInfo'))
            : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ?  JSON.parse(localStorage.getItem('cartItems'))
        : []
    },
    like:{
        likeItems: localStorage.getItem('likeItems')
        ?  JSON.parse(localStorage.getItem('likeItems'))
        : []
    }
}

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer, 
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    like: likeReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    //initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
