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
import {yupResolver} from 'react-hook-form'
import * as yup from "yup";
import { newUserSchema } from "../../validations/newUser";
import {yupResolver} from '@hookform/resolvers/yup';



export default function Register() {
  
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(newUserSchema),
  });

  const onsubmit = (data) => {


  }


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
        onSubmit={handleSubmit(onsubmit)}
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
        {...register("nombre")}
          sx={{ mt: 2 }}
          id="nombre"
          label="Nombre"
          variant="outlined"
          required
          fullWidth
          helperText={errors.nombre ? errors.nombre.message : null}
        />
        <Box sx={{ mt: 2, display: { sm: "flex", xs: "block" } }}>
          <TextField
            {...register("apellidoPaterno")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              mr: { sm: 1, xs: 0 },
              mt: 2, // Espacio entre los TextField solo para sm
            }}
            id="apellidoPaterno"
            label="Apellido Paterno"
            variant="outlined"
            required
            helperText= {errors.apellidoPaterno ? errors.apellidoPaterno.message : null}
          />
          <TextField
            {...register("apellidoMaterno")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 },
              mt: 2, // Espacio entre los TextField solo para sm
            }}
            id="apellidoMaterno"
            label="Apellido materno"
            variant="outlined"
            helperText={errors.apellidoMaterno ? errors.apellidoMaterno.message : null}
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
          {...register("telefono")}
          sx={{ mt: 2 }}
          type="number"
          id="phoneNumber"
          label="Número telefónico"
          variant="outlined"
          fullWidth
          helperText={errors.telefono ? errors.telefono.message : "Formato: xxx-xxx-xxxx"}
        />
        <TextField
          {...register("email")}
          sx={{ mt: 2 }}
          id="email"
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          required
          helperText={errors.email ? errors.email.message : null}
          // error={error.error}
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
        <Box sx={{ mt: 2, display: { sm: "flex", xs: "block" } }}>
          <TextField
            {...register("password")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              mr: { sm: 1, xs: 0 }, // Espacio entre los TextField solo para sm
              mt: 2,
            }}
            id="password"
            label="Contraseña"
            variant="outlined"
            required
            helperText={errors.password ? errors.password.message : null}
          />
          <TextField
            {...register("passwordConfirmation")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 }, // Espacio entre los TextField solo para sm
              mt: 2,
            }}
            id="passwordConfirmation"
            label="Confirmar Contraseña"
            variant="outlined"
            required
            helperText={errors.passwordConfirmation ? error.passwordConfirmation.message : null }
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
