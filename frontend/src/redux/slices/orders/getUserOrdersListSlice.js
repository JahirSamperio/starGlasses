import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    success:false,
    error:null,
    userOrdersListData:{}
}

export const getUserOrdersListSlice = createSlice({
    name:'getUserOrdersListSlice',
    initialState,
    reducers:{
        fetchGetUserOrdersList: (state,action) =>{
            state.loading=true;
            state.success=null;
            state.error=null;
        },
        fetchGetUserOrdersListSuccess: (state, action)=>{
            state.loading=false;
            state.success=true;
            state.error=false;
            state.userOrdersListData = action.payload;
        },
        fetchGetOrderListError: (state,action)=>{
            state.loading = false;
            state.success= false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchGetOrderListError,fetchGetUserOrdersList,fetchGetUserOrdersListSuccess
} = getUserOrdersListSlice.actions;