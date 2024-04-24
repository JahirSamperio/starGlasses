import { combineReducers } from "@reduxjs/toolkit";

import { getOrdersListSlice } from "./ordersListSlice";

export * from './ordersListSlice';

export const OrdersReducers = combineReducers({
    getList: getOrdersListSlice.reducer,
});