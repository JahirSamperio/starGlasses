import { combineReducers } from "@reduxjs/toolkit";

import {GetShoppingCartSlice  } from "./getShoppingCart";
import { AddToShoppingCartSlice } from "./addToShoppingCartSlice";

export * from './getShoppingCart';
export * from './addToShoppingCartSlice';

export const ShoppingCartReducer = combineReducers({
    get: GetShoppingCartSlice.reducer,
    add: AddToShoppingCartSlice.reducer
})