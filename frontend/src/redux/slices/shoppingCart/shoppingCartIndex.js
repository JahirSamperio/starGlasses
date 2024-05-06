import { combineReducers } from "@reduxjs/toolkit";

import {GetShoppingCartSlice  } from "./getShoppingCart";
import { AddToShoppingCartSlice } from "./addToShoppingCartSlice";
import { removeFromShoppingCart } from "../../actions/shoppingCart/removeFromShoppingCart";
import { deleteShoppingCartItemSlice } from "./removeFromShoppingCartSlice";

export * from './getShoppingCart';
export * from './addToShoppingCartSlice';
export * from './removeFromShoppingCartSlice'

export const ShoppingCartReducer = combineReducers({
    get: GetShoppingCartSlice.reducer,
    add: AddToShoppingCartSlice.reducer,
    remove: deleteShoppingCartItemSlice.reducer,
})