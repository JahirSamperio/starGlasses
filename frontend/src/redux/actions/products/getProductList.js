import axios from "axios";

import {fetchGetProductList,fetchGetProductListFailure,fetchGetProductListSuccess} from '../../slices/products/getProductsListSlice';


export const getProductListAction = () => async (dispatch) =>{
    try{

        dispatch(fetchGetProductList());
        const {data} = await axios.get('http://localhost:8080/producto/allProducts/');
        console.log(data.response);
        dispatch(fetchGetProductListSuccess(data.response));

    }catch(error){

        dispatch(fetchGetProductListFailure("Error al obtener la lista des productos"));
        
    }
}

