import { combineReducers } from "@reduxjs/toolkit";

import { GetProductListSlice } from "./getProductsListSlice";
import { GetProductDetailsSlice } from "./getProductDetailsSlice";
import { GetNewestProductListSlice } from "./getNewestProductsSlice";

export * from './getProductsListSlice';
export * from './getProductDetailsSlice'
export * from './getNewestProductsSlice'

export const ProductReducer = combineReducers({
    getAll: GetProductListSlice.reducer,
    getById: GetProductDetailsSlice.reducer,
    getNewest: GetNewestProductListSlice.reducer
})