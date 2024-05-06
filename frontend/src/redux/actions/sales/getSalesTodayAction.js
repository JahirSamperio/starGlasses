
import  axios from 'axios';
import { fetchGetSalesToday,fetchGetSalesTodaySliceFailure, fetchGetSalesTodaySliceSuccess } from '../../slices/sales/salesTodaySlice';
    

export const getSalesToday = () => async (dispatch) =>{
    try{
        dispatch(fetchGetSalesToday());
        const {data} = await axios.get(`http://localhost:8080/ventas/ventasHoy`);
        console.log(data.ventas);
        dispatch(fetchGetSalesTodaySliceSuccess(data.ventas));

    }catch(error){
        dispatch(fetchGetSalesTodaySliceFailure('error'));
    }
}