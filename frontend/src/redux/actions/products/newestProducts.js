import axios from "axios";
import { 
    fetchGetNewestProductList, 
    fetchGetNewestProductListFailure, 
    fetchGetNewestProductListSuccess 
} from '../../slices/products/getNewestProductsSlice';

export const getNewestProductsListAction = () => async (dispatch) => {
    try {
        dispatch(fetchGetNewestProductList());
        const { data } = await axios.get('http://localhost:8080/producto/newestProducts');
        dispatch(fetchGetNewestProductListSuccess(data.productos));

    } catch (error) {
        dispatch(fetchGetNewestProductListFailure(error));
    }
}
