import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    salesTodayData: {}
}

export const GetAllSalesSlice = createSlice({
    name: 'GetSalesTodaySliceSlice',
    initialState,
    reducers: {
        fetchGetAllSales: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetAllSalesSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.AllSalesData = action.payload;
        },
        fetchGetAllSalesFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetAllSales,
    fetchGetAllSalesFailure,
    fetchGetAllSalesSuccess
} = GetAllSalesSlice.actions;