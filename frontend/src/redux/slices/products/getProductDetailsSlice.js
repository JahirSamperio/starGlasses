import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    productDetailsData: {}
}

export const GetProductDetailsSlice = createSlice({
    name: 'GetProductDetailsSlice',
    initialState,
    reducers: {
        fetchGetProductDetails: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetProductDetailsSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.productDetailsData = action.payload;
        },
        fetchGetProductDetailsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetProductDetailsFailure,
    fetchGetProductDetailsSuccess,
    fetchGetProductDetails
} = GetProductDetailsSlice.actions;