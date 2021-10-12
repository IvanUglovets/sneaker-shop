import {combineReducers} from "redux";
import {fetchUsers} from "./fetchUsers";

export const rootReducer = combineReducers({
    users: fetchUsers
    }
)