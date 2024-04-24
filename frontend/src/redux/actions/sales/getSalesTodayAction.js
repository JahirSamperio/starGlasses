
import  axios from 'axios';
import { fetchGetSalesTodaySuccess,fetchGetSalesToday,fetchGetSalesTodayFailure } from '../../slices/sales/salesTodaySlice';
    

export const getSalesToday = () => async (dispatch) =>{
    try{
        dispatch(fetchGetSalesToday());
        const {data} = await axios.get(`http://localhost:8080/ventas/ventasHoy`);
        dispatch(fetchGetSalesTodaySuccess(data.response));
    }catch(error){
        dispatch(fetchGetSalesTodayFailure("Error al obtener las ventas de hoy"));
    }
}