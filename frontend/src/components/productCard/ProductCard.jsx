

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductCard(){
    return(
        <Card sx={{
            transition:"0.2s",
            "&:hover":{
                transform:"scale(1.05)"
            }, 
            width:200
        }}>
            <CardActionArea>
                <CardMedia component="img" image="https://via.placeholder.com/200" height="200" alt="imagen pitera" />
                <CardContent>
                    <Typography component="p" variant="body2">
                        Nombre del producto lol 
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button  >Ver más</Button>
                <Button variant="contained" color="error">Agregar al carrito</Button>
            </CardActions>

        </Card>

    )
}