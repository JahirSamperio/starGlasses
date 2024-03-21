import React, { useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../redux/actions/products/getProductList";

export const Products = () => {
  const dispatch = useDispatch();
  const { loading, success, productListData } = useSelector(
    (state) => state.products.get
  );

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <Paper elevation={10} sx={{ padding: "20px", margin: "12px 16px" }}>
      <Grid container spacing={2}>
        {success === true &&
          productListData.slice(0, 8).map((element, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              {/* UTILIZANDO BREAKPOINTS:
              En dispositivos extra pequeños (xs), se mostrará una columna.
              En dispositivos pequeños (sm), se mostrarán dos columnas.
              En dispositivos medianos (md), se mostrarán tres columnas.
              En dispositivos grandes (lg), se mostrarán cuatro columnas.
              */}
              <ProductCard
                name={element.name}
                price={element.price}
                id={element.id}
              />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};
