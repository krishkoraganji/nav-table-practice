// src/redux/reducers.js
import { SET_PRODUCTS, SELECT_PRODUCT } from './actions';
import productsList from '../products.json'

const initialState = {
    products: productsList.productsList,
    selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
