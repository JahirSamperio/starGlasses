import axios from "axios";
import {
  fetchGetOrderListError,
  fetchGetUserOrdersList,
  fetchGetUserOrdersListSuccess,
} from "../../slices/orders/getUserOrdersListSlice";

export const getUserOrdersListAction = (id_usuario) => async (dispatch) => {
  try {
    dispatch(fetchGetUserOrdersList());
    console.log(id_usuario, "secso");
    const { data } = await axios.get(
      `http://localhost:8080/pedido/${id_usuario}`
    );

    console.log(data);
    dispatch(fetchGetUserOrdersListSuccess(data));
  } catch (error) {
    dispatch(fetchGetOrderListError("Error el historial de ventas"));
  }
};
