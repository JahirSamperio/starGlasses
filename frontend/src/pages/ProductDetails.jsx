import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Container, Typography, IconButton } from "@mui/material/";
import { Carrousel } from "../components/carrousel/Carrousel";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
 


import { getProductDetailsAction } from "../redux/actions/products/getProductDetails";
import ProductDescription from "../components/productDescription/ProductDescription";

function ProductDetails() {

  const { productID } = useParams();
  const dispatch = useDispatch();

  const { productDetailsData } = useSelector((state) => state.products.getById);

 // props for shoppingCart = id, name, price
  const [shoppingData, setShoppingData] = useState();

  useEffect(() => {
    setShoppingData(JSON.parse(localStorage.getItem("shopping_cart")) || []);
  }, []);

  const { enqueueSnackbar } = useSnackbar();

  const handleProductsToShoppingCart = (id, name, price) => {
    // bring the current products in the shopping cart
    const currentShoppingData =
      JSON.parse(localStorage.getItem("shopping_cart")) || [];

    // Verify if certain product is in the shoppingCart comparing item.id
    const isProductInCart = currentShoppingData.some((item) => item.id === id);

    // on that case, the operation is not executed
    if (isProductInCart) {
      return;
    }

    // create an object for the new shoppingCart item
    const newItem = {
      id,
      name,
      price,
    };

    // a new copy of the array using destructuaration and make the
    //insertion of the newItem

    const newShoppingData = [...currentShoppingData, newItem];

    // update shoppingData state
    setShoppingData(newShoppingData);

    // set new shopping cart on localStorage
    localStorage.setItem("shopping_cart", JSON.stringify(newShoppingData));

    enqueueSnackbar("Producto agregado al carrito", {
      variant: "success",
    });
  };

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
        margin: "36px auto",
      }}
    >
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center", // Centra los elementos horizontalmente
          padding: "12px",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          mt:{md:'86px'}
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
