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
import NavBar from "../components/navBar/NavBar";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { newUserSchema } from "../../validations/newUserSchema";
import { registerUser } from "../redux/actions/users/registerUser";
import { navArrayLinks } from "../helpers/navArrayLinks";


export default function Register() {
  const { loading, success, error, userData } = useSelector(
    (state) => state.users.new
  );
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newUserSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    dispacth(registerUser(data)).then(() => {
      if(success){
        navigate('/email-verification-alert');
      }
    }).catch(error =>{
      console.log('error: ', error);
    });
  };

  return (
    <Grid>
      <NavBar/>
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
        onSubmit={handleSubmit(onSubmit)}
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
          helperText={errors.name?.message}
          error={!!errors.name}
        />
        <Box sx={{ mt: 2, display: { sm: "flex", xs: "block" } }}>
          <TextField
            {...register("apellido_paterno")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              mr: { sm: 1, xs: 0 },
              mt: 2, // Espacio entre los TextField solo para sm
            }}
            id="apellidoPaterno"
            label="Apellido Paterno"
            variant="outlined"
            required
            helperText={errors.lastName?.message}
            error={!!errors.lastName}
          />
          <TextField
            {...register("apellido_materno")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 },
              mt: 2, // Espacio entre los TextField solo para sm
            }}
            id="apellidoMaterno"
            label="Apellido materno"
            variant="outlined"
            helperText={errors.lastNameM?.message}
            error={!!errors.lastNameM}
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
          helperText={errors.phone?.message}
          error={!!errors.phone}
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
          helperText={errors.email?.message}
          error={!!errors.email}
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
            helperText={errors.password?.message}
            error={!!errors.password}
          />
          <TextField
            {...register("confirmPassword")}
            sx={{
              width: { xs: "100%", sm: "auto" }, // Usar fullWidth solo en xs
              ml: { sm: 1, xs: 0 }, // Espacio entre los TextField solo para sm
              mt: 2,
            }}
            id="passwordConfirmation"
            label="Confirmar Contraseña"
            variant="outlined"
            required
            helperText={errors.confirmPassword?.message}
            error={!!errors.confirmPassword}
          />
        </Box>

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
