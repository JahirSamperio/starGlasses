import { useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
  Container,
} from "@mui/material";

export const EditDataForm = ({}) => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    telefono: "",
    newPassword: "",
    confirmPassword: "",
    password: "",
    // Añade más campos según necesites
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos actualizados del usuario a tu backend para su actualización
    console.log("Datos actualizados:", userData);
    // Lógica para enviar datos al backend
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={userData.nombre}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Apellido paterno"
              name="apellido_paterno"
              value={userData.apellido_paterno}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Apellido materno"
              name="apellido_materno"
              value={userData.apellido_materno}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Número telefónico"
              name="telefono"
              value={userData.telefono}
              onChange={handleInputChange}
            />
          </Grid >
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Contraseña nueva"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleInputChange}
            />
          </Grid >
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Confirme la nueva contraseña"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Contraseña actual"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Añade más campos según necesites */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Guardar Cambios
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
