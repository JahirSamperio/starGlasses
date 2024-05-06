import { combineReducers } from "@reduxjs/toolkit";



import { GetSalesTodaySlice } from "./salesTodaySlice";
import { GetAllSalesSlice } from "./getAllSales";

export * from './salesTodaySlice'
export * from './getAllSales';

export const SalesReducer = combineReducers({
    getTodays: GetSalesTodaySlice.reducer,
    getAll: GetAllSalesSlice.reducer,
})