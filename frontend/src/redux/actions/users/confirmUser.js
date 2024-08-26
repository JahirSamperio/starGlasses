import axiosClient from "../../../config/axiosClient";
import { fetchConfirmUser, fetchConfirmUserFailure, fetchConfirmUserSuccess, reset } from "../../slices/users/confirmAccountSlice";

export const confirmUserAction = (token) => async (dispatch) => {
    try {
        dispatch(fetchConfirmUser());
        await new Promise(resolve => setTimeout(resolve, 150))
        const { data } = await axiosClient.get(`/login/confirmar/${token}`)
        console.log(data);
        dispatch(fetchConfirmUserSuccess())

    } catch (error) {

        const errorMessage = error.response?.data?.msg || "Error al confirmar la cuenta, intente de nuevo.";
        console.log(errorMessage);
        dispatch(fetchConfirmUserFailure(errorMessage));

    }
}

export const resetConfirmState = () => (dispatch) => {
    dispatch(reset());
};