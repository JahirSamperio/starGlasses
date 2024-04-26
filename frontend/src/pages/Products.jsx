import { Grid, Paper } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductListAction } from "../redux/actions/products/getProductList";

export const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Obtener el estado de la lista de productos
  const { error, success, productListData } = useSelector((state) => state.products.get);

  useEffect(() => {
    // Despachar la acción para obtener la lista de productos
    dispatch(getProductListAction());
  }, []);

  useEffect(()=>{
    console.log(productListData);
  },[productListData]);


  const handleProductClick = (productId) => {
    // Navegar a la página de detalles del producto
    navigate(`/product/${productId}`);
  };

  return (
    <Paper elevation={10} sx={{ padding: "20px", margin: "12px 16px" }}>
      <Grid container spacing={2} sx={{}}>
        {/* {success === true &&
          productListData.slice(0, 8).map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ProductCard
                  product={product}
                  onProductClick={() => handleProductClick(product.id)}
                />
              </div>
            </Grid>
          ))} */}
      </Grid>
    </Paper>
  );
};
