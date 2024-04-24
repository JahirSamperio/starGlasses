import axios from 'axios';
import { fetchGetAllSalesFailure, fetchGetAllSales,fetchGetAllSalesSuccess } from '../../slices/sales/getAllSales';


const  getAllSales = () => async (dispatch) => {
    try{
        dispatch(fetchGetAllSales());
        const {data} =  await axios.get('');
        dispatch(fetchGetAllSalesSuccess(data.response));

    }catch(error){
            dispatch(fetchGetAllSalesFailure('Error el historial de ventas'));
    }
}