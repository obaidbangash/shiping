import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, ADD_PRODUCT, REMOVE_PRODUCT, FETCH_SINGLE_PRODUCT, ADD_CART } from "../reducer/Types";
import axios from "axios";


export function fetchRequest() {
    return {
        type: FETCH_USER_REQUEST,
    }
}
export function fetchSuccess(product) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: product
    }
}
export function fetchFailure(error) {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    }
}
export function AddProduct(id) {

    return {
        type: ADD_PRODUCT,
        payload: id
    }
}
export function RemoveProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}
export function Single_Product(product) {
    return {
        type: FETCH_SINGLE_PRODUCT,
        payload: product
    }
}
export function AddCart(id) {
    return {
        type: ADD_CART,
        id
    }
}
// export const Add_cart = (id) => {
//     return (dispatch) => {
//         dispatch(fetchRequest())
//         axios.get(`https://fakestoreapi.com/products/${id}`)
//             .then(response => {
//                 dispatch(AddCart(response.data))
//             })
//             .catch(error => dispatch(fetchFailure(error.message)))
//     }
// }


export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(response => dispatch(fetchSuccess(response.data)))
            .catch(error => dispatch(fetchFailure(error.message)))
    }
}

export const fetchSingleProduct = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                dispatch(Single_Product(response.data))
            })
            .catch(error => dispatch(fetchFailure(error.message)))
    }
}