import axios from "axios";
import {
  fetchLoginUser,
  fetchLoginUserFailure,
  fetchLoginUserSuccess,
} from "../../slices/users/loginUserSlice";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const  data  = await axios.post(
      "http://localhost:8080/login/login",
      loginData
    );
    console.log(data);
    //  console.log(data.response);
    dispatch(fetchLoginUserSuccess(data.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchLoginUserFailure("Error, usuario no encontrado"));
  }

};
