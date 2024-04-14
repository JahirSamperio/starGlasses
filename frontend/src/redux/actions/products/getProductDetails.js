import axios from "axios";

import {fetchGetProductDetails,fetchGetProductDetailsFailure,fetchGetProductDetailsSuccess} from '../../slices/products/getProductDetailsSlice';

export const getProductDetailsAction = () => async (dispatch) => {



    // try{
    //     dispatch(fetchGetProductDetails());

    //     const {data} = await axios.get(`localhost:8080/producto/getProduct/:${id_lentes}`);
    //     dispatch(fetchGetProductDetailsSuccess(data.response));

    // }catch(error){
    //     dispatch(fetchGetProductDetailsFailure("No se logro obtener una vista del producto"));
    // }
   
    const array = [  
        {id:2,name:'producto 2', price:20, description:'esta es una descripcion de ejemplo'},  
        {id:3,name:'producto 3', price:20, description:'esta es una descripcion de ejemplo'},    
        {id:4,name:'producto 4', price:20, description:'esta es una descripcion de ejemplo'},   
        {id:1,name:'producto 1', price:20, description:'esta es una descripcion de ejemplo'}, 
    ]

    dispatch(fetchGetProductDetailsSuccess(array));
}
