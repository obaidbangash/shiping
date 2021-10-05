import { ProductReducer } from "./ProductReducer";
import { ProductCount } from "./CountReducer"
import { combineReducers } from "redux";


const AllRedcuer = combineReducers({
    ProductReducer, ProductCount
})
export default AllRedcuer;