import { combineReducers } from "@reduxjs/toolkit";

import { registerUserSlice } from "./registerUserSlice";

export * from '../users/registerUserSlice';


export const UsersReducer = combineReducers({
    new: registerUserSlice.reducer
})