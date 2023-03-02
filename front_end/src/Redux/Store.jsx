import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ChatReducer from "./ChatSlice";


const reducer = combineReducers({
    user: UserReducer,
    chat: ChatReducer,
});

export const Store = configureStore({reducer});