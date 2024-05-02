import axios from "axios";

import {
  fetchGetProductDetails,
  fetchGetProductDetailsFailure,
  fetchGetProductDetailsSuccess,
} from "../../slices/products/getProductDetailsSlice";

export const getProductDetailsAction = (id_lentes) => async (dispatch) => {
  try {
    dispatch(fetchGetProductDetails());
    const { data } = await axios.get(
      `http://localhost:8080/producto/getProduct/${id_lentes}`
    ); 

    dispatch(fetchGetProductDetailsSuccess(data.producto));
  } catch (error) {
    dispatch(
      fetchGetProductDetailsFailure(
        "No se logro obtener una vista del producto"
      )
    );
  }
};
