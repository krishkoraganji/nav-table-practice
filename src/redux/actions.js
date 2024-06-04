// src/redux/actions.js
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product,
});
