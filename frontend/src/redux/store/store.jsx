import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { UsersReducer } from "../slices/users/indexUsers";

const combineReducer = combineReducers({
    users: UsersReducer
});

const rootReducer = (state, action) =>{
    return combineReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});