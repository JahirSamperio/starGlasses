import axios from "axios";

import {fetchGetProductList,fetchGetProductListFailure,fetchGetProductListSuccess} from '../../slices/products/getProductsListSlice';

export const getProductListAction = () => async (dispatch) => {
   
    const array = [  
        {id:2,name:'producto 2', price:20, description:'esta es una descripcion de ejemplo'},  
        {id:3,name:'producto 3', price:20, description:'esta es una descripcion de ejemplo'},    
        {id:4,name:'producto 4', price:20, description:'esta es una descripcion de ejemplo'},   
        {id:1,name:'producto 1', price:20, description:'esta es una descripcion de ejemplo'}, 
    ]

    dispatch(fetchGetProductListSuccess(array));
}
