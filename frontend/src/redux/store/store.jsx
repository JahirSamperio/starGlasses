import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { UsersReducer } from "../slices/users/indexUsers";
import { ShoppingCartReducer } from "../slices/shoppingCart/shoppingCartIndex";
import { ProductReducer } from "../slices/products/productsIndex";

const combineReducer = combineReducers({
    users: UsersReducer,
    shoppingcart: ShoppingCartReducer,
    products:ProductReducer
});

const rootReducer = (state, action) =>{
    return combineReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});