import React, { useState } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";

export const ShipmentStateFilter = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value); // Llamar a la función onChange con el valor seleccionado
  };

  const handleClear = () => {
    setSelectedOption("");
    onChange("");
  };

  return (
    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
      <Typography>Estado del envio: </Typography>
      <Select value={selectedOption} onChange={handleChange} displayEmpty>
        <MenuItem value="">Seleccione</MenuItem>
        <MenuItem value="Completado">Completado</MenuItem>
        <MenuItem value="En proceso">Enviado</MenuItem>
        <MenuItem value="En proceso">Con demora</MenuItem>
      </Select>
    </Box>
  );
};
