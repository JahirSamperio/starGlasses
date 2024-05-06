import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    newestProductsListData: []
}

export const GetNewestProductListSlice = createSlice({
    name: 'GetNewestProductListSlice',
    initialState,
    reducers: {
        fetchGetNewestProductList: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetNewestProductListSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.newestProductsListData= action.payload;
        },
        fetchGetNewestProductListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetNewestProductList,
    fetchGetNewestProductListFailure,
    fetchGetNewestProductListSuccess
} = GetNewestProductListSlice.actions;

export default GetNewestProductListSlice.reducer;
