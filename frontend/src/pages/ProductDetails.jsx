import Paper from "@mui/material/Paper";
import { Container } from "@mui/material/";
import { Carrousel } from "../components/carrousel/Carrousel";
import NavBar from "../components/navBar/NavBar";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { getProductDetailsAction } from "../redux/actions/products/getProductDetails";
import ProductDescription from "../components/productDescription/ProductDescription";
import { navArrayLinks } from "../helpers/navArrayLinks";

function ProductDetails({}) {
  const { id_producto } = useParams();
  const dispatch = useDispatch();

  const {
    loading,
    success,
    error,
    productDetailsData = {},
  } = useSelector((state) => state.products.getById || {});

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  useEffect(() => {
    dispatch(getProductDetailsAction(id_producto));
  }, [id_producto]); // Asegúrate de que el efecto se ejecute cada vez que cambie id_producto

  const enlaces = productDetailsData?.imagen?.split(',')?.filter(enlace => enlace.trim() !== '') ?? [];

  // Establecer la primera imagen como la imagen predeterminada al inicializar el estado
  useEffect(() => {
    if (enlaces.length > 0) {
      setImagenSeleccionada(enlaces[0]);
    }
  }, [productDetailsData]); // Asegúrate de que el efecto se ejecute cada vez que cambie el conjunto de enlaces

  const { id_lentes, nombre, tipo, descripcion, producto_lentes_precio, links } =
    productDetailsData || {};

  return (
    <>
      <NavBar navArrayLinks={navArrayLinks}/>
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
                overflow: "hidden",
                position: "relative",
              }}
            >
              {imagenSeleccionada && <img src={imagenSeleccionada} alt='Imagen seleccionada' style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />}
            </Container>
            <Carrousel  imagenes={enlaces} setImagenSeleccionada={setImagenSeleccionada}/>
          </Container>
          <ProductDescription
            nombre={nombre}
            descripcion={descripcion}
            precio_venta={producto_lentes_precio ? producto_lentes_precio.precio_venta : ""}
            oferta={producto_lentes_precio ? producto_lentes_precio.oferta : " "}
            id_lentes={id_lentes}
          />
        </Container>
      </Paper>
    </>
  );
}

export default ProductDetails;
