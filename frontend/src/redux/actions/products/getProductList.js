import axiosClient from '../../../config/axiosClient';
import { fetchGetProductListFailure, fetchGetProductList, fetchGetProductListSuccess } from '../../slices/products/getProductsListSlice';


export const getProductListAction = () => async (dispatch) => {
    try {
        dispatch(fetchGetProductList());
        await new Promise(resolve => setTimeout(resolve, 500))
        const { data } = await axiosClient.get('/producto/allProducts');
        dispatch(fetchGetProductListSuccess(data.productos));

    } catch (error) {

        const errorMessage = error.response?.data?.msg || "Error al obtener la lista de productos";
        dispatch(fetchGetProductListFailure(errorMessage));

    }
}