import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const AdressCard = ({ direccion, numero, ciudad, estado, usuario, id_direccion }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {usuario.nombre}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {`${direccion} ${numero}`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Ciudad:
            </Typography>
            <Typography variant="body1">{ciudad}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Estado:
            </Typography>
            <Typography variant="body1">{estado}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
