import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Container, Typography, IconButton } from "@mui/material/";
import { Carrousel } from "../components/carrousel/Carrousel";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetailsAction } from "../redux/actions/products/getProductDetails";
import ProductDescription from "../components/productDescription/ProductDescription";

function ProductDetails() {
  // getProductDetails APIlocalhost:8080/producto/getProduct/:id_lentes
  const { productID } = useParams();
  const dispatch = useDispatch();

  const { productDetailsData } = useSelector((state) => state.products.getById);

  // const {
  //   id_lentes,
  //   nombre,
  //   tipo,
  //   marca,
  //   material,
  //   color,
  //   graduacion,
  //   tamano,
  //   existencia,
  //   proveedor,
  //   descripcion,
  //   imagen,
  //   id_precio,
  //   createdAt,
  //   updatedAt,
  //   producto_lentes_precio: { precio_venta, oferta, fecha_fin_oferta },
  // } = productDetailsData;

  useEffect(() => {
    dispatch(getProductDetailsAction(productID));
  }, []);

  //const {productDetailsData}

  return (
    <Paper
      elevation={10}
      sx={{
        width: "95%",
        margin: "18px auto",
      }}
    >
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center", // Centra los elementos horizontalmente
          padding: "12px",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          mt:{md:'64px'}
        }}
      >
        <Container component="section">
          <Container
            sx={{
              width: { xs: "100%", sm: "90%", md: "65%", lg: "90%" },
              height: { xs: "312px", sm: "512px", md: "415px", lg: "415px" },
              bgcolor: "black",
              borderRadius:'6px'
            }}
          ></Container>
          <Carrousel />
        </Container>
        <ProductDescription/>
      </Container>
    </Paper>
  );
}

export default ProductDetails;
