import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: null, // Inicialmente establecido en null
  shoppingCartData: {},
};

export const AddToShoppingCartSlice = createSlice({
  name: "AddToShoppingCartSlice",
  initialState,
  reducers: {
    fetchAddToShoppingCart: (state, action) => {
      state.loading = true;
      state.error = null;
      state.success = null; // Establecer success en null al iniciar la acción
    },
    fetchAddToShoppingCartSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    fetchAddToShoppingCartFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },
  },
});

export const {
  fetchAddToShoppingCart,
  fetchAddToShoppingCartFailure,
  fetchAddToShoppingCartSuccess,
} = AddToShoppingCartSlice.actions;
