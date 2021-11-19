import {combineReducers} from "redux";
import {fetchProductsReducer} from "./fetchProductsReducer";
import {basketReducer} from "./basketReducer";
import {sneakerItemReducer} from "./sneakerItemReducer";



export const rootReducer = combineReducers({
    items: fetchProductsReducer,
    basketItems: basketReducer,
    sneakerItem: sneakerItemReducer,
    }
)



export type RootState = ReturnType<typeof rootReducer>