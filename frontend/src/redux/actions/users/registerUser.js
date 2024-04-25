import axios from 'axios';
import {
         fetchRegisterUser, 
         fetchRegisterUserFailure, 
         fetchRegisterUserSuccess 
} from '../../slices/users/registerUserSlice';


export const registerUser = (dataForm) => async (dispatch) => 
{
    console.log(dataForm);

    try{
        dispatch(fetchRegisterUser());

        const {data} = await axios.post('http://localhost:8080/login/registro', dataForm);
        console.log(data.response);
        dispatch(fetchRegisterUserSuccess(data.response));

    }catch (error){
        dispatch(fetchRegisterUserFailure());
    }
}