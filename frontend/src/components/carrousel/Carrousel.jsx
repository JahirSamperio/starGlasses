import React from "react";
import { Box, Container } from "@mui/material";

export const Carrousel = ({ imagenes, setImagenSeleccionada }) => {
  const handleImagenClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };


  return (
    <Container
    sx={{
      display: { sm: "flex", xs: "none" },
      height: "80px",
      justifyContent: "space-around",
      width: { xs: "100%", sm: "90%", md: "65%", lg: "90%" },
      mt: "12px",
      gap: "21px",
    }}
  >
    {imagenes.map((imagen, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          bgcolor: "gray",
          margin: "0",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          width: "120px",
          padding: 0, // Eliminamos el relleno para que la imagen ocupe todo el espacio del contenedor
          cursor: "pointer", // Establecemos el cursor como puntero para indicar que es interactivo
        }}
        onClick={() => handleImagenClick(imagen)} // Llamamos a la función handleImagenClick al hacer clic en la imagen
      >
        <img
          src={imagen}
          alt={`Imagen ${index}`}
          style={{
            width: "100%", // Establecemos el ancho de la imagen al 100% del contenedor
            height: "100%", // Establecemos la altura de la imagen al 100% del contenedor
            objectFit: "cover", // Para cubrir completamente el contenedor con la imagen
            margin: "0", // Eliminamos cualquier margen que pueda aplicarse automáticamente
          }}
        />
      </Box>
      ))}
    </Container>
  );
};
