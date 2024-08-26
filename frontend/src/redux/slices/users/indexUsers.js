import { combineReducers } from "@reduxjs/toolkit";

import { registerUserSlice } from "./registerUserSlice";
import { loginUserSlice } from "./loginUserSlice";
import { confirmUserSlice } from "./confirmAccountSlice";

export * from '../users/registerUserSlice';
export * from '../users/loginUserSlice';

export const UsersReducer = combineReducers({
    new: registerUserSlice.reducer,
    login: loginUserSlice.reducer,
    confirm: confirmUserSlice.reducer
})