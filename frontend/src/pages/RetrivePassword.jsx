import React from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

export const RetrivePassword = () => {
  return (
    <Container sx={{display:'flex', justifyContent:'space-around', alignContent:'center', mt:'12rem'}}>
      <Paper elevation={10} sx={{ width: "50%",display:'flex',flexDirection:'column', justifyContent:'center',margin:'12px 12px 0px 0px', alignItems:'center'}}>
        <Typography sx={{ width: "90%", margin: "6px 12px"}}>
          Ingrese su correo electrónico, con esto podremos enviarle un correo
          para que pueda reestablecer su contraseña.
        </Typography>
        <Container
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Correo electrónico"
            required
            sx={{ minWidth: "100%" }}
          />
          <Button variant="contained" sx={{ width: "80%", margin: "18px 0px" }}>
            Enviar
          </Button>
        </Container>
      </Paper>
    </Container>
  );
};
