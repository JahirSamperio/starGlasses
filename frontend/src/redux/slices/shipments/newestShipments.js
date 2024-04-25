import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    success:false,
    error:null,
    newestShipmentsData:{}
};


const getNewestShipments = createSlice({
    fetchGetNewestShipments:(state, action) =>{
        state.loading = true;
        state.success = null;
        state.error = null;
    },
    fetchGetNewestShipmentsSuccess: (state, action) =>{
        state.loading = false;
        state.success = true;
        state.newestShipmentsData = action.payload;
    },
    fetchGetNewestShipmentsError:(state, action) =>{
        state.loading = false;
        state.succes = false;
        state.error = action. payload;
    }
});

export const {
fetchGetNewestShipments,
fetchGetNewestShipmentsError,
fetchGetNewestShipmentsSuccess
} =  getNewestShipments;