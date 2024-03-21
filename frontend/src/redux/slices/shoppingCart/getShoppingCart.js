import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    shoppingCartData: {}
}

export const GetShoppingCartSlice = createSlice({
    name: 'GetShoppingCartSlice',
    initialState,
    reducers: {
        fetchGetShoppingCart: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetShoppingCartSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.shoppingCartData = action.payload;
        },
        fetchGetShoppingCartFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetShoppingCart,
    fetchGetShoppingCartFailure,
    fetchGetShoppingCartSuccess
} = GetShoppingCartSlice.actions;