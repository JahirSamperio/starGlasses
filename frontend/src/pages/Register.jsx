import {
  Typography,
  Paper,
  Grid,
  TextField,
  FormControlLabel,
  Button,
  Avatar,
  Link,
  Box,
} from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import { NavLink } from "react-router-dom";

import { useState } from "react";

export default function Register() {


    const [telefono, setTelefono] = useState('');

    const handleTelefonoChange = (event) => {
        // Se pueden agregar validaciones adicionales aquí si es necesario
        setTelefono(event.target.value);
        console.log(telefono)
    };


  return (
    <Grid>
      <Paper
        component="form"
        elevation={10}
        sx={{
          padding: 3,
          minHeight: { sm: "70vh" },
          width: { xs: 380, sm: 480 },
          margin: "40px auto",
          borderRadius: "12px",
        }}
      >
        <Grid align="center">
          <Typography variant="h4" component="h4">
            Registro
          </Typography>
          <Avatar sx={{ backgroundColor: "#6cd281" }}>
            <PersonAddAltOutlinedIcon />
          </Avatar>
        </Grid>
        <TextField
          sx={{ mt: 2 }}
          id="nombre"
          label="Nombre"
          variant="outlined"
          required
          fullWidth
        />
        <Box sx={{ mt: 2, display: { sm: "flex", xs: "block" } }}>
          <TextField
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              mr: { sm: 1, xs: 0 },
              mt: 2// Espacio entre los TextField solo para sm
            }}
            id="apellidoPaterno"
            label="Apellido Paterno"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 },mt: 2 // Espacio entre los TextField solo para sm
            }}
            id="apellidoMaterno"
            label="Apellido materno"
            variant="outlined"
          />
        </Box>
        {/* <DatePicker
                label="Fecha de Nacimiento"
                value={fechaNacimiento}
                onChange={handleFechaNacimientoChange}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="dd/MM/yyyy" // Formato de la fecha
                fullWidth
                required
            /> */}
        <TextField
          sx={{ mt: 2 }}
          type="number"
          value={telefono}
          onChange={handleTelefonoChange}
          id="phoneNumber"
          label="Número telefónico"
          variant="outlined"
          fullWidth
          inputProps={{
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", // Patrón de número telefónico, por ejemplo, xxx-xxx-xxxx
            maxLength: 12, // Longitud máxima del número telefónico
            inputMode: "tel", // Modo de entrada telefónica
          }}
          helperText="Formato: xxx-xxx-xxxx"
        />
        <TextField
          sx={{ mt: 2 }}
          id="email"
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          required
          // helperText={error.msg}
          // error={error.error}
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
        <Box sx={{ mt: 2, display: { sm: "flex", xs: "block" } }}>
          <TextField
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              mr: { sm: 1, xs: 0 }, // Espacio entre los TextField solo para sm
              mt: 2
            }}
            id="password"
            label="Contraseña"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 }, // Espacio entre los TextField solo para sm
              mt: 2
            }}
            id="passwordConfirmation"
            label="Confirmar Contraseña"
            variant="outlined"
            required
          />
        </Box>
        {/*checked={state.checkedB} onChange={handleChange}*/}
        {/* <FormControlLabel
          sx={{ paddingLeft: 3, mt: 1 }}
          control={<CheckBox name="checkedB" color="primary" />}
          label="Recuerdáme"
        /> */}
        <Button
          type="submit"
          variant="outlined"
          sx={{ margin: "12px 0" }}
          fullWidth
        >
          Regístrame
        </Button>
        <Typography>
          ¿O ya tienes una cuenta?{" "}
          <Link component={NavLink} to={"/login"}>
            Inicia sesión
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
