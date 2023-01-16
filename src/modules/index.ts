import { combineReducers } from "redux";
import UserReducer from "./user";

const rootReducer = combineReducers({
    UserReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>