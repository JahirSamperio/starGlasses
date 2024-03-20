import React from "react";
import { Box, Button, Container, Icon, Typography } from "@mui/material";
import { WhatsApp, Facebook, Instagram } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Container
      sx={{
        minWidth: '100%', // Cambiar de '1920px' a '100%'
        width: { lg: "auto", sm: "auto" },
        padding: "2rem 8%",
        backgroundColor: "#0e0e0e",
        alignItems:'center',
        textAlign: 'center' // Añadir para centrar horizontalmente el contenido
      }}
      component="footer"
    >
      <Typography variant="h4" color='white'>StarGlasses</Typography>
      <Container>
        <Button>
          <Facebook />
        </Button>
        <Button>
          <Instagram />
        </Button>
        <Button>
          <WhatsApp />
        </Button>
      </Container>
      <Container>
        <Button>Legal</Button>
        <Button>Sobre nosotros</Button>
        <Button>Ayuda</Button>
      </Container>
      <Typography component="span">
        © 2024, StarGlasses. Todos los derechos reservados
      </Typography>
    </Container>
  );
};
