import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    productListData: {}
}

export const GetProductListSlice = createSlice({
    name: 'GetProductListSlice',
    initialState,
    reducers: {
        fetchGetProductList: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetProductListSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.productListData = action.payload;
        },
        fetchGetProductListFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetProductList,
    fetchGetProductListFailure,
    fetchGetProductListSuccess
} = GetProductListSlice.actions;