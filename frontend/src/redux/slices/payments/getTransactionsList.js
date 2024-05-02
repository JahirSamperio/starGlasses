import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    transactionsListData: []
}

export const GetTransactionsListSlice = createSlice({
    name: 'GetTransactionsListSlice',
    initialState,
    reducers: {
        fetchGetTransactionsList: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetTransactionsListSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.transactionsListData = action.payload;
        },
        fetchGetTransactionsListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetTransactionsList,
    fetchGetTransactionsListFailure,
    fetchGetTransactionsListSuccess
} = GetTransactionsListSlice.actions;

export default GetTransactionsListSlice.reducer;
