import axios from 'axios';
import {
    fetchAddToShoppingCart,fetchAddToShoppingCartFailure,fetchAddToShoppingCartSuccess
} from '../../slices/shoppingCart/addToShoppingCartSlice';


export const addToShoppingCart = (id_usuario, id_lentes) => async (dispatch) => 
{
 
    try{
        dispatch(fetchAddToShoppingCart());

        const {data} = await axios.post(`http://localhost:8080/carrito/${id_usuario}/${id_lentes}`);
        console.log(data);
        dispatch(fetchAddToShoppingCartSuccess(data));

    }catch (error){
        console.error('Error al agregar al carrito:', error);
        dispatch(fetchAddToShoppingCartFailure(error.message));
        throw error; 
    }
}