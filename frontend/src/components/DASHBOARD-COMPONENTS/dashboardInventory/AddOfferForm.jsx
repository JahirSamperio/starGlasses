import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import React from "react";

export const AddOfferForm = () => {
  return (
    <Paper sx={{ padding: "12px 10px" }} component="form">
      <Typography sx={{ margin: "10px 8px" }}>
        Agregar o modificar una oferta
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <TextField label="ID del producto" />
        <TextField label="Descuento en %" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-around",
          mt:'16px'
        }}
      >
        <Typography>Precio actual: $0000.00</Typography>
        <Typography>Precio final: $0000.00</Typography>
      </Box>
      <Button variant="contained" sx={{ width: "100%",mt:'16px'}}>
        Confirmar oferta
      </Button>
    </Paper>
  );
};
