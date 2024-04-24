import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    success:false,
    error:null,
    requestedAppointmentsData:{
    }
};


export const requestedAppointmentsSlice = createSlice({
    name:'requestedAppointments',
    initialState,
    reducers:{
        fetchGetRequestedAppointments: (state, action)=>{
            state.loading = true;
            state.success = null;
            state.error = null;
        },
        fetchGetRequestedAppointmentsSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.requestedAppointmentsData = action.payload
        },
        fetchGetRequestedAppointmentsFailure: (state, action)=>{
            state.loading = false;
            state. success = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchGetRequestedAppointments,fetchGetRequestedAppointmentsFailure,fetchGetRequestedAppointmentsSuccess
} = requestedAppointmentsSlice.actions;