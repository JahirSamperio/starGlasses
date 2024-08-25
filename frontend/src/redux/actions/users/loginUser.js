import axios from "axios";
import {
  fetchLoginUser,
  fetchLoginUserFailure,
  fetchLoginUserSuccess,
} from "../../slices/users/loginUserSlice";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const  {data, }  = await axios.post(
      "http://localhost:8080/login/login",
      loginData
    );
    console.log(data.response);

    dispatch(fetchLoginUserSuccess(data));
  } catch (error) {
    const {response} = await error;   

    error ? dispatch(fetchLoginUserFailure(response.data.msg)) : error = null;
  }

};
