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
    }
}

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer, 
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
