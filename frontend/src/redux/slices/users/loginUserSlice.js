import  {createSlice} from '@reduxjs/toolkit';


const initialState = {
    loading:null,
    success:null,
    error:null,
    loginData: {}
}

export const loginUserSlice = createSlice({
    name:'loginUserSlice',
    initialState,
    reducers: {
        fetchLoginUser:(state, action) =>{
            state.loading = true;
            state.error = false;
            state.success = false;
        },
        fetchLoginUserSuccess: (state,action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.loginData = action.payload;
        },
        fetchLoginUserFailure: (state,action)=>{
            state.loading =false;
            state.error = action.payload;
            state.success = false
        }
    }
});

export const {
    fetchLoginUser,
    fetchLoginUserFailure,
    fetchLoginUserSuccess
} = loginUserSlice.actions;