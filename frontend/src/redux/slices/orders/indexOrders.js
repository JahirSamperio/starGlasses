import { combineReducers } from "@reduxjs/toolkit";

import { getOrdersListSlice } from "./ordersListSlice";
import { getUserOrdersListSlice } from "./getUserOrdersListSlice";

export * from './ordersListSlice';
export * from './getUserOrdersListSlice'

export const OrdersReducers = combineReducers({
    getList: getOrdersListSlice.reducer,
    getUserList: getUserOrdersListSlice.reducer
});