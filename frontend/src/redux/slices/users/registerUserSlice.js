import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    userData: {}
}

export const registerUserSlice = createSlice({
    name: 'registerUserSlice',
    initialState,
    reducers: {
        fetchRegisterUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchRegisterUserSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
        },
        fetchRegisterUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchRegisterUser,
    fetchRegisterUserFailure,
    fetchRegisterUserSuccess
} = registerUserSlice.actions;