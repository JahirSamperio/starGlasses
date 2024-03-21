import axios from 'axios';
import {
         fetchGetShoppingCartFailure,
         fetchGetShoppingCartSuccess,
         fetchGetShoppingCart
} from '../../slices/shoppingCart/getShoppingCart';


export const getShoppingCartAction = () => async (dispatch) => {
     



    // Crear la funcion para obtener los productos mediante el localstorage
    // Crear la funcion para manejar los datos y convertirlos dentro de un array



    // try{
    //     dispatch(fetchGetShoppingCart());

    //     const {data} = await axios.post('http://localhost:8080/login/registro', dataForm);
    //     console.log(data.response);
    //     dispatch(fetchGetShoppingCartSuccess(data.response));

    // }catch (error){
    //     dispatch(fetchGetShoppingCartFailure)
    // }
}