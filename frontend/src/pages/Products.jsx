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
    <Paper
      elevation={10}
      sx={{
        width: { lg: "1540px" },
        margin: { sm: "20px 30px" },
        padding: { xl: "20px 15px", sm: "16px 8px" },
      }}
    >
      <Grid>
        {success === true ? (
          productListData.map((element, index) => {
            return <ProductCard key={index} name={element.name} precio={element.precio} id={element.id}/>;
          })
        ) : (
          <></>
        )}
      </Grid>
    </Paper>
  );
};
