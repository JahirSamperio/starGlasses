import axios from "axios";
import { fetchGetTransactionsListFailure, fetchGetTransactionsList, fetchGetTransactionsListSuccess } from '../../slices/payments/getTransactionsList';

export const getTransactionsListAction = () => async (dispatch) => {
    try {
        dispatch(fetchGetTransactionsList());
        const { data } = await axios.get('http://localhost:8080/pagos');
        dispatch(fetchGetTransactionsListSuccess(data.pagos));
    } catch (error) {
        dispatch(fetchGetTransactionsListFailure("Error al obtener la lista de Transactionsos"));
    }
}