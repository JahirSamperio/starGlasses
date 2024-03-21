import { combineReducers } from "@reduxjs/toolkit";

import { GetProductListSlice } from "./getProductsListSlice";

export * from './getProductsListSlice'

export const ProductReducer = combineReducers({
    get: GetProductListSlice.reducer
})