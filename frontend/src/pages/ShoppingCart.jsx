import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { Container, Paper, Box, Typography } from "@mui/material";

import { getShoppingCartAction } from "../redux/actions/shoppingCart/getShoppingCart";

import  ShoppingCartItemCard  from "../components/shoppingCartItem/ShoppingCartItem";
import { EmptyShoppingCart } from "../components/emptyShoppingCart/EmptyShoppingCart";



export const ShoppingCart = () => {

  const [list, setList] = useState([]);
  const [empty,setEmpty] = useState(null);
  
  useEffect(() => {

    const shoppingList = JSON.parse(localStorage.getItem('shopping_cart'));
    
     if(Array.isArray(shoppingList)){
      setEmpty(false);
      setList(shoppingList);
     }else{
      setEmpty(true);
     }
  },[]);  



  
  console.log(list);

  return (
    <>
      <Container
        sx={{
          display: { md: "flex" },
          justifyContent: "space-around",
          mt: "24px",
          mb: "4em",
          minWidth:'maxContent'
        }}
      >
        
        <Paper sx={{ height:{md:"460px"},mr:'12px'  }} elevation={10}>
        <Typography variant="h5" sx={{mt:'8px',ml:'12px', fontWeight:500}}>Productos en el carrito</Typography>
          <Box sx={{ height: {md:"400px"},width: "810px", padding:'10px 12px',overflowY:'auto' }}>
            {empty === true ? (<EmptyShoppingCart/>) : 
            (
              list.map((item, index)=>{ 
                return  <ShoppingCartItemCard name={item.name} price={item.price} key={index}/>
              })
            )}
          </Box>
        </Paper>
        <Paper elevation={10}>
          <Box sx={{ height: "380px", width: "410px" }}></Box>
        </Paper>
      </Container>
    </>
  );
};
