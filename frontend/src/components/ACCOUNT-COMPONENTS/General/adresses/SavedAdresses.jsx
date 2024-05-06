import React from "react";
import { AdressCard } from "./AdressCard";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const AddNew = () => {
  return (
    <Button component={NavLink} to="/account/general/new-adress">
      Agregar una nueva dirección
    </Button>
  );
};

export const SavedAdresses = ({ direcciones }) => {
  if (direcciones.length === 0) {
    return (
      <Paper sx={{ padding: 2, margin: "32px 24px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" color="textSecondary">
            No hay direcciones guardadas.
          </Typography>
          <AddNew />
        </Box>
      </Paper>
    );
  }

  return (
    <Paper sx={{ padding: 2, margin: "32px 24px" }}>
      <Grid container spacing={2}>
        {direcciones.map((direccion, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <AdressCard {...direccion} />
          </Grid>
        ))}
        <Box>
          <AddNew />
        </Box>
      </Grid>
    </Paper>
  );
};
