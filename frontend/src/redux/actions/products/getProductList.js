import axios from "axios";
import { fetchGetProductListFailure, fetchGetProductList, fetchGetProductListSuccess } from '../../slices/products/getProductsListSlice';
import { logger } from "sequelize/lib/utils/logger";

export const getProductListAction = () => async (dispatch) => {
    try {
        dispatch(fetchGetProductList());
        const { data } = await axios.get('http://localhost:8080/producto/allProducts/');
        dispatch(fetchGetProductListSuccess(data.productos));

    } catch (error) {
        dispatch(fetchGetProductListFailure("Error al obtener la lista de productos"));
    }
}