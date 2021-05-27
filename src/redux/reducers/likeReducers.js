import {LIKE_PRODUCT,
    REMOVE_LIKE,
    
} from '../constants/likeConstants';

const LIKE_INITIAL_STATE={
    likeItems: []
}

export const likeReducer = (state = LIKE_INITIAL_STATE, action) => {
    switch(action.type) {
        case LIKE_PRODUCT:
            const item= action.payload;

            const existItem = state.likeItems.find((x) => x.product === item.product)

                if (existItem){
                    return{
                        ...state,
                        likeItems: state.likeItems.map((x) =>
                        x.product === existItem.product ? item : x
                        )
                    };
                }else {
                    return{
                        ...state,
                        likeItems: [...state.likeItems, item]
                    };
                };

        case REMOVE_LIKE:
            return{
                ...state,
                likeItems: state.likeItems.filter((x) => x.product !== action.payload),
            }; 
        default:
            return state;        
    }
};
