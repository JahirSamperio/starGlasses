import axios from 'axios';
import {
    fetchRegisterUser,
    fetchRegisterUserFailure,
    fetchRegisterUserSuccess,
    reset
} from '../../slices/users/registerUserSlice';


export const registerUser = (dataForm) => async (dispatch) => {
    try {
        dispatch(fetchRegisterUser());

        const { data } = await axios.post('http://localhost:8080/login/registro', dataForm);
        console.log(data);
        dispatch(fetchRegisterUserSuccess(data.response));

    } catch (error) {
        const errorMesage = error.response.data.msg || 'Error al registrar el usuario'
        dispatch(fetchRegisterUserFailure(errorMesage));
        throw error;
    }
}

export const resetState = () => (dispatch) => {
    dispatch(reset());
};

