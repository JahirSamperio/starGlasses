import { combineReducers } from "@reduxjs/toolkit";

import { registerUserSlice } from "./registerUserSlice";
import { loginUserSlice } from "./loginUserSlice";

export * from '../users/registerUserSlice';
export * from '../users/loginUserSlice';

export const UsersReducer = combineReducers({
    new: registerUserSlice.reducer,
    login: loginUserSlice
})