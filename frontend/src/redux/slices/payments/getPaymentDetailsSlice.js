import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    transactionDetailsData: []
}

export const GetTransactionDetailsSlice = createSlice({
    name: 'GetTransactionDetailsSlice',
    initialState,
    reducers: {
        fetchGetTransactionDetails: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetTransactionDetailsSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.transactionDetailsData = action.payload;
        },
        fetchGetTransactionDetailsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetTransactionDetails,
    fetchGetTransactionDetailsFailure,
    fetchGetTransactionDetailsSuccess
} = GetTransactionDetailsSlice.actions;

export default GetTransactionDetailsSlice.reducer;
