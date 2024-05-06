import axios from 'axios';
import {
         fetchGetShoppingCartFailure,
         fetchGetShoppingCartSuccess,
         fetchGetShoppingCart
} from '../../slices/shoppingCart/getShoppingCart';


export const getShoppingCartAction = (id_usuario) => async (dispatch) => {
     
try{
    dispatch(fetchGetShoppingCart())
    const {data} = await axios.get(`http://localhost:8080/carrito/${id_usuario}`);
    console.log(data)
    dispatch(fetchGetShoppingCartSuccess(data.carrito))
}catch (error){
    dispatch(fetchGetShoppingCartFailure())
}
}