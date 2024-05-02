import axios from "axios";

import {
  fetchGetTransactionDetails,
  fetchGetTransactionDetailsFailure,
  fetchGetTransactionDetailsSuccess,
} from "../../slices/payments/getPaymentDetailsSlice";

export const getPaymentDetailsAction = (id_pago) => async (dispatch) => {
  try {
    dispatch(fetchGetTransactionDetails());
    const { data } = await axios.get(
        `http://localhost:8080/pagos/:${id_pago}`
    ); 
    
    dispatch(fetchGetTransactionDetailsSuccess(data.response));

  } catch (error) {
    dispatch(
      fetchGetTransactionDetailsFailure(
        "No se logro obtener la informacion del pago"
      )
    );
  }
};
