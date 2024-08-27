import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    confirmData: {}
}

export const confirmUserSlice = createSlice({
    name: 'registerUserSlice',
    initialState,
    reducers: {
        fetchConfirmUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null
        },
        fetchConfirmUserSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.success = true;
        },
        fetchConfirmUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        },
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
            state.userData = null;
        }
    }
});

export const {
    fetchConfirmUser, fetchConfirmUserFailure, fetchConfirmUserSuccess, reset
} = confirmUserSlice.actions;