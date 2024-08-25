import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    userData: {}
}

export const registerUserSlice = createSlice({
    name: 'registerUserSlice',
    initialState,
    reducers: {
        fetchRegisterUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null
        },
        fetchRegisterUserSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.success = true;
        },
        fetchRegisterUserFailure: (state, action) => {
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
    fetchRegisterUser,
    fetchRegisterUserFailure,
    fetchRegisterUserSuccess,
    reset
} = registerUserSlice.actions;