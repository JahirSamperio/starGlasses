import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const EmailVerification = () => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 480, textAlign: "center" }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Verificación de Correo Electrónico
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
            Hemos enviado un correo electrónico a la dirección que proporcionaste para verificarla. 
            Por favor, revisa tu bandeja de entrada y sigue las instrucciones para completar el proceso.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={NavLink} 
            to="/login"
            sx={{ marginTop: 2 }}
          >
            Ir a inicio de sesión
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};
