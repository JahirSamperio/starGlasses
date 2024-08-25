import React, { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Avatar,
  FormControlLabel,
  Link,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { loginUser } from '../redux/actions/users/loginUser'
import { setItem } from '../helpers/localStorage/setItem';
import { navArrayLinks } from '../helpers/navArrayLinks';
import NavBar from '../components/navBar/NavBar';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginData, success, error } = useSelector((state) => state.users.login);

  const handleUserLogin = (event) => {
    event.preventDefault();
    const loginFormData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    dispatch(loginUser(loginFormData));

  }

  useEffect(() => { console.log(loginData); }, [loginData])
  useEffect(() => {
    if (success === true) {
      setItem("USERID", loginData.userId);
      setItem("privilegio", loginData.userPrivilegio);
      navigate('/')
    }
  }, [loginData])




  return (
    <Grid>
      <NavBar navArrayLinks={navArrayLinks} />
      <Paper
        component="form"
        elevation={10}
        sx={{
          padding: 3,
          minHeight: { sm: "520px" },
          width: { xs: 300, sm: 360 },
          margin: "40px auto",
          borderRadius: "12px",
        }}
        onSubmit={handleUserLogin} // Pasar la función sin ejecutarla
      >
        <Grid align="center">
          <Typography variant="h4" component="h4">
            Inicio de sesión
          </Typography>
          <Avatar sx={{ backgroundColor: "#6cd281" }}>
            <LockPersonOutlinedIcon />
          </Avatar>
        </Grid>
        <TextField
          sx={{ mt: 2 }}
          name="email" // Añadir el atributo name
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          required
        />
        <TextField
          sx={{ mt: 2 }}
          name="password" // Añadir el atributo name
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel control={<CheckBox name='checkedB' color="primary" />} sx={{ paddingLeft: 3, mt: 1 }} label="Recuerdáme" />
        <Button type="submit" variant="outlined" sx={{ margin: "12px 0" }} fullWidth>
          Iniciar sesión
        </Button>
        <Link component={NavLink} to={"/password-restore"}>Reestablecer contraseña.</Link>
        <Typography>¿Aún no tiene una cuenta? <Link component={NavLink} to={"/register"}>Regístrese.</Link></Typography>
      </Paper>
    </Grid>
  );
}
