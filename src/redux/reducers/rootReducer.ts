import {combineReducers} from "redux";
import {fetchProductsReducer} from "./fetchProductsReducer";
import {basketReducer} from "./basketReducer";


export const rootReducer = combineReducers({
    items: fetchProductsReducer,
    basketItems: basketReducer
    }
)