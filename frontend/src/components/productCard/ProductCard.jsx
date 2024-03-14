

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductCard(){
    return(
        <Card sx={{
            transition:"0.2s",
            "&:hover":{
                transform:"scale(1.05)"
            }, 
            width:{lg:250,sm:220, xs: 300},
            
        }}>
            <CardActionArea>
                <CardMedia component="img" image="https://via.placeholder.com/200" height={{lg:200}} alt="imagen pitera" sx={{padding:"8px 6px"}} />
                <CardContent>
                    <Typography component="p" variant="body2">
                        Nombre del producto lol 
                    </Typography>
                    <Typography sx={{mt:"5px"}}>
                        $0000.00
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button variant="contained"  sx={{fontSize:"12px", flexGrow:1}}>ver más</Button>
            </CardActions>

        </Card>

    )
}