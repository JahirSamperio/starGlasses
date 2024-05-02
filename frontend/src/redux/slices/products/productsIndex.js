import { combineReducers } from "@reduxjs/toolkit";

import { GetProductListSlice } from "./getProductsListSlice";
import { GetProductDetailsSlice } from "./getProductDetailsSlice";

export * from './getProductsListSlice';
export * from './getProductDetailsSlice'

export const ProductReducer = combineReducers({
    getAll: GetProductListSlice.reducer,
    getById: GetProductDetailsSlice.reducer,
})