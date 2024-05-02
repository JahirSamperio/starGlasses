import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { UsersReducer } from "../slices/users/indexUsers";
import { ShoppingCartReducer } from "../slices/shoppingCart/shoppingCartIndex";
import { ProductReducer } from "../slices/products/productsIndex";
import {AppointmentReducers} from '../slices/appointments/indexAppointments';
import {OrdersReducers} from '../slices/orders/indexOrders';
import { SalesReducer } from "../slices/sales/salesIndex";
import { PaymentsReducer } from "../slices/payments/indexPayments";

const combineReducer = combineReducers({
    users: UsersReducer,
    shoppingcart: ShoppingCartReducer,
    products:ProductReducer,
    orders:OrdersReducers,
    appointments:AppointmentReducers,
    sales:SalesReducer,
    payments:PaymentsReducer
});

const rootReducer = (state, action) =>{
    return combineReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});