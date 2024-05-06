import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: false,
  shoppingCartItemData: {},
};

export const deleteShoppingCartItemSlice = createSlice({
  name: "deleteShoppingCartItemSlice",
  initialState,
  reducers: {
    fetchDeleteShoppingCartItem: (state, action) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    fetchDeleteShoppingCartItemSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.shoppingCartItemData = action.payload;
    },
    fetchDeleteShoppingCartItemFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },
  },
});

export const {
  fetchDeleteShoppingCartItem,
  fetchDeleteShoppingCartItemFailure,
  fetchDeleteShoppingCartItemSuccess,
} = deleteShoppingCartItemSlice.actions;
