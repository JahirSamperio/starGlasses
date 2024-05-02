import { combineReducers } from "@reduxjs/toolkit";

import { GetTransactionsListSlice } from "./getTransactionsList";
import { GetTransactionDetailsSlice } from "./getPaymentDetailsSlice";


export * from './getTransactionsList';
export * from './getPaymentDetailsSlice';


export const PaymentsReducer = combineReducers({
    getAll: GetTransactionsListSlice.reducer,
    getById: GetTransactionDetailsSlice.reducer,
})