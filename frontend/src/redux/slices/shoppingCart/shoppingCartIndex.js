import { combineReducers } from "@reduxjs/toolkit";

import {GetShoppingCartSlice  } from "./getShoppingCart";

export * from './getShoppingCart';

export const ShoppingCartReducer = combineReducers({
    get: GetShoppingCartSlice.reducer
})