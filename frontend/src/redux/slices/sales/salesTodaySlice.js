import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    salesTodayData: {}
}

export const GetSalesTodaySlice = createSlice({
    name: 'GetSalesTodaySliceSlice',
    initialState,
    reducers: {
        fetchGetSalesToday: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetSalesTodaySuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.salesTodayData = action.payload;
        },
        fetchGetSalesTodayFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetSalesTodaySlice,
    fetchGetSalesTodaySliceFailure,
    fetchGetSalesTodaySliceSuccess
} = GetSalesTodaySlice.actions;