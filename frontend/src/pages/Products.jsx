import React from "react";

import { Grid, Paper, Typography } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";

export const Products = () => {
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
        <ProductCard />
      </Grid>
    </Paper>
  );
};
