import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Container, Typography, IconButton } from "@mui/material/";
import { Carrousel } from "../components/carrousel/Carrousel";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { getProductDetailsAction } from "../redux/actions/products/getProductDetails";
import ProductDescription from "../components/productDescription/ProductDescription";

function ProductDetails({}) {
  const { id_producto } = useParams();
  const dispatch = useDispatch();

  const { loading, success, error, productDetailsData = {} } = useSelector(
    (state) => state.products.getById || {}
  );

  useEffect(() => {
    dispatch(getProductDetailsAction(id_producto));
  }, []);

  useEffect(() => {
    console.log(productDetailsData);
  }, [productDetailsData]);

  //  const {
  //    id_lentes,
  //    nombre,
  //    tipo,
  //    marca,
  //    material,
  //    color,
  //    graduacion,
  //    tamano,
  //    existencia,
  //    proveedor,
  //    descripcion,
  //    imagen,
  //    id_precio,
  //    createdAt,
  //    updatedAt,
  //    producto_lentes_precio: { precio_venta, oferta, fecha_fin_oferta },
  //  } = productDetailsData;

  const { id_lentes, nombre, tipo, descripcion, producto_lentes_precio } = productDetailsData || {};

  return (
    <Paper
      elevation={10}
      sx={{
        width: "95%",
        margin: "36px auto",
      }}
    >
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "12px",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          mt: "86px",
        }}
      >
        <Container component="section">
          <Container
            sx={{
              width: { xs: "100%", sm: "90%", md: "65%", lg: "90%" },
              height: { xs: "312px", sm: "512px", md: "415px", lg: "415px" },
              bgcolor: "black",
              borderRadius: "6px",
              margin: "24px 24px auto auto",
            }}
          ></Container>
          <Carrousel />
        </Container>
        <ProductDescription
          nombre={nombre}
          descripcion={descripcion}
          precio_venta={
            producto_lentes_precio ? producto_lentes_precio.precio_venta : ""
          }
          oferta={producto_lentes_precio ? producto_lentes_precio.oferta : ""}
        />
      </Container>
    </Paper>
  );
}

export default ProductDetails;
