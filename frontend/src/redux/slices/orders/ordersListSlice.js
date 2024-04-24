import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    success:false,
    error:null,
    ordersListData:{}
}

export const getOrdersListSlice = createSlice({
    name:'getOrdersListSlice',
    initialState,
    reducers:{
        fetchGetOrdersList: (state,action) =>{
            state.loading=true;
            state.success=null;
            state.error=null;
        },
        fetchGetOrdersListSuccess: (state, action)=>{
            state.loading=false;
            state.success=true;
            state.error=false;
            state.ordersListData = action.payload;
        },
        fetchGetOrderListError: (state,action)=>{
            state.loading = false;
            state.success= false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchGetOrdersList,fetchGetOrderListError,fetchGetOrdersListSuccess
} = getOrdersListSlice.actions;