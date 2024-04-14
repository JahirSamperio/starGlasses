import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Container, Typography, IconButton } from "@mui/material/";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetailsAction } from "../redux/actions/products/getProductDetails";

function ProductDetails() {
  // getProductDetails APIlocalhost:8080/producto/getProduct/:id_lentes
  const { productID } = useParams();
  const dispatch = useDispatch();

  const { productDetailsData } = useSelector((state) => state.products.getById);

  const {
    id_lentes,
    nombre,
    tipo,
    marca,
    material,
    color,
    graduacion,
    tamano,
    existencia,
    proveedor,
    descripcion,
    imagen,
    id_precio,
    createdAt,
    updatedAt,
    producto_lentes_precio: { precio_venta, oferta, fecha_fin_oferta },
  } = productDetailsData;

  useEffect(() => {
    dispatch(getProductDetailsAction(productID));
  });

  //const {productDetailsData}

  return (
    <Paper
      elevation={10}
      sx={{
        width: "90%",
        margin: "18px auto",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Container
        sx={{
          width: { md: "260px" },
          // "& > img": { width: "100%" },
          // "&:last-child": { textAlign: { xs: "center", md: "left" } },
        }}
      >
        {/* Aquí puedes colocar la imagen del producto */}
        <img src="ruta/de/la/imagen.jpg" alt="Producto" />
        <Container
          sx={{
            flex: "1",
            textAlign: { xs: "center", md: "left" },
            marginLeft: { md: "20px" },
            marginTop: { xs: "20px", md: 0 },
          }}
        >
          {/* Descripción del producto */}
          <Typography variant="body1" gutterBottom>
            Aquí va la descripción del producto.
          </Typography>
          {/* Menú de acciones */}
        </Container>
      </Container>
    </Paper>
  );
}

export default ProductDetails;
