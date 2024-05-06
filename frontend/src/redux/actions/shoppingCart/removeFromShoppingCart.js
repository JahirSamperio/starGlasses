import axios from 'axios';
import {
    fetchDeleteShoppingCartItem,
  fetchDeleteShoppingCartItemFailure,
  fetchDeleteShoppingCartItemSuccess,
} from "../../slices/shoppingCart/removeFromShoppingCartSlice"

export const removeFromShoppingCart = (id_cart) => async (dispatch) => {

    try {

        dispatch(fetchDeleteShoppingCartItem());
        
        const {data} = await axios.delete(`http://localhost:8080/carrito/${id_cart}`);
        console.log(data);
       // dispatch(fetchDeleteAppointmentSuccess(data.response));

    } catch (error) {
        dispatch( fetchDeleteShoppingCartItemFailure("Error al borrar el item"));
    }
}