import { ADD_PRODUCT, REMOVE_PRODUCT } from "./Types";
const initialState = {

    count: 0,
}

export const ProductCount = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                count: state.count + 1,
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                count: state.count - 1,
            }
        default: return state
    }
}