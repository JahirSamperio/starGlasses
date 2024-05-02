import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export const StatusFilter = () => {
  return (
    <Container component="form">
      <FormControl>
        <InputLabel id="select-label">Estado</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={estado}
          label="Estado"
          onChange
        >
          <MenuItem value={"Entregado"}></MenuItem>
          <MenuItem value={"Pendiente"}></MenuItem>
          <MenuItem value={"En camino"}></MenuItem>
          <MenuItem value={"Retrasado"}></MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};
