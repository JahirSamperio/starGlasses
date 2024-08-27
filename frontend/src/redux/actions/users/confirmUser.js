import axiosClient from "../../../config/axiosClient";
import { fetchConfirmUser, fetchConfirmUserFailure, fetchConfirmUserSuccess, reset } from "../../slices/users/confirmAccountSlice";

export const confirmUserAction = (token) => async (dispatch) => {
    try {
        dispatch(fetchConfirmUser());
        await new Promise(resolve => setTimeout(resolve, 200))
        const { data } = await axiosClient.get(`/login/confirmar/${token}`)
        dispatch(fetchConfirmUserSuccess())

    } catch (error) {

        const errorMessage = error.response?.data?.msg || "Error al confirmar la cuenta, intente de nuevo.";
        dispatch(fetchConfirmUserFailure(errorMessage));

    }
}

export const resetConfirmState = () => (dispatch) => {
    dispatch(reset());
};