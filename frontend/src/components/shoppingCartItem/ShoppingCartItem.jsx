import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Button,
  Typography,
} from "@mui/material";
import React from "react";



export default function ShoppingCartItem({id,nombre, price, handleRemoveFromCart,imagen}) {



  return (
    <Card
      sx={{

        display: "flex",
        mb:'12px'
      }}
    >
      <CardActionArea sx={{ display: "flex  " }}> 
        <CardMedia
          component="img"
          image={imagen}
          height="120"
          alt="Card Image"
          sx={{ width:'160px'}}
        />
        <CardContent sx={{flexGrow:1}} >
          <Typography variant="h5">{nombre}</Typography>
          <Typography variant="p" sx={{mt:'6px'}}>{price}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button  sx={{mr:'16px'}}>ver</Button>
        <Button variant="contained" color="error" sx={{mr:'16px'}} onClick={() => handleRemoveFromCart(id)}>Eliminar</Button>
      </CardActions>
    </Card>
  );
}
