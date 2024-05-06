import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    salesTodayData: []
}

export const GetSalesTodaySlice = createSlice({
    name: 'GetSalesTodaySlice',
    initialState,
    reducers: {
        fetchGetSalesToday: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetSalesTodaySuccess: (state, action) =>{
            state.loading = false;
            state.error = null;
            state.success = true;
            state.salesTodayData = action.payload;
        },
        fetchGetSalesTodayFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetSalesToday,
    fetchGetSalesTodaySliceFailure,
    fetchGetSalesTodaySliceSuccess
} = GetSalesTodaySlice.actions;