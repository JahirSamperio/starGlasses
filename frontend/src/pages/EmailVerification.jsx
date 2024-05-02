import { Button, Container, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const EmailVerification = () => {
  return (
    <Paper>
      <Container>
        <Typography>Hemos enviado un correo electrónico a la dirección que proporcionaste para verificarla</Typography>
        <Button component={NavLink} to='/login' >Ir a inicio de sesión</Button>

      </Container>
    </Paper>
  );
};
