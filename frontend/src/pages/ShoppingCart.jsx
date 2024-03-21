import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Paper, Box } from "@mui/material";
import { getShoppingCartAction } from "../redux/actions/shoppingCart/getShoppingCart";

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { loading, shoppingCartData, success } = useSelector(
    (state) => state.shoppingcart.get
  );

  useEffect(() => {
    // llamada de datos
    dispatch(getShoppingCartAction());
  }, []);



  return (
    <>
      <Container
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          mt: "24px",
          mb: "4em",
        }}
      >
        <Paper sx={{ height: "400px" }} elevation={10}>
          <Box sx={{ height: "380px", width: "768px" }}>
            {success === true ? (
              shoppingCartData.map((element, index) => {
                return (
                  <>
                    <h1>{element.name}</h1>
                    {/* <button onClick={() => {
                        console.log(element.name)
                    }}>Hola</button> */}
                  </>
                );
              })
            ) : (
              <></>
            )}
          </Box>
        </Paper>
        <Paper elevation={10}>
          <Box sx={{ height: "380px", width: "520px" }}></Box>
        </Paper>
      </Container>
    </>
  );
};
