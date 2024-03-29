import {ADD_TO_CART,
    REMOVE_FROM_CART,
    
} from '../constants/cartConstants';

const CART_INITIAL_STATE={
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const item= action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product)

                if (existItem){
                    return{
                        ...state,
                        cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                        )
                    };
                }else {
                    return{
                        ...state,
                        cartItems: [...state.cartItems, item]
                    };
                };

        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            }; 
        default:
            return state;        
    }
};
