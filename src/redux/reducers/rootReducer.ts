import {combineReducers} from "redux";
import {fetchProductsReducer} from "./fetchProductsReducer";

export const rootReducer = combineReducers({
    products: fetchProductsReducer
    }
)