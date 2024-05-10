import axios from 'axios';
import {
    fetchDeleteShoppingCartItem,
  fetchDeleteShoppingCartItemFailure,
  fetchDeleteShoppingCartItemSuccess,
} from "../../slices/shoppingCart/removeFromShoppingCartSlice"


export const removeFromShoppingCart = (id_cart) => async (dispatch) => {
    try {
      dispatch(fetchDeleteShoppingCartItem());
      
      await axios.delete(`http://localhost:8080/carrito/${id_cart}`);
      
      dispatch(fetchDeleteShoppingCartItemSuccess(id_cart));
    } catch (error) {
      dispatch(fetchDeleteShoppingCartItemFailure("Error al borrar el item"));
    }
  };
  