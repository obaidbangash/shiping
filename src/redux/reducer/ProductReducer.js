import { AddCart } from "../action/ProductAction";
import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST, ADD_PRODUCT, FETCH_SINGLE_PRODUCT, ADD_CART } from "./Types";
const initialState = {
    loading: false,
    product: [],
    error: '',
    count: 0,
    singleProduct: {},
    add_cart: []
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: '',
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                product: [],
                error: action.payload

            }
        case FETCH_SINGLE_PRODUCT:
            return {
                ...state,
                loading: false,
                singleProduct: action.payload,
                error: ""

            }
        case ADD_CART:
            const addToCartData = state.product.filter((prod) => prod.id === action.id);
            console.log('Add to cart', addToCartData);
            const data = [...state.add_cart];
            console.log('action', action.id);
            data.push(addToCartData[0])
            console.log('data', data);
            return {
                ...state,
                loading: false,
                add_cart: [...data],
                error: ""
            }

        default: return state
    }
}