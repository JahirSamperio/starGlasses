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

import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";


import {loginUser} from '../redux/actions/users/loginUser'


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const {loading, success, error, loginData} = useSelector((state => state.users.login));

  // const {nombre, apellidoPaterno,apellidoMaterno,password,id,telefono,email} = loginData ;

  // useEffect(()=>{
  //   console.log(loginData);
  // },[loginData]);

  // const handleUserLogin = (data)=>{
  //   console.log(data);
  //   const loginFormData = {
  //     email: data.target.email.value,
  //     password: data.target.password.value
  //   }
  //   dispatch(loginUser(loginFormData));
  // }


  // useEffect(()=>{
  //   if(success == true){
      
  //   }
  // },[success,loginData])




  return (
    <Grid>
      <Paper
        component="form"
        elevation={10}
        sx={{
          padding: 3,
          minHeight:{sm:"520px"},
          width: { xs: 300, sm: 360 },
          margin: "40px auto",
          borderRadius:"12px",
        }}
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
         <TextField
          sx={{ mt: 2 }}
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          required
        /> 
        {/*checked={state.checkedB} onChange={handleChange}*/}
        <FormControlLabel control={<CheckBox name='checkedB' color="primary"/>} sx={{paddingLeft:3,mt:1}} label="Recuerdáme"/>        <Button type="submit" variant="outlined" sx={{ margin:"12px 0"}} fullWidth>
          Iniciar sesión
        </Button>
        <Typography><Link>Reestablecer contraseña.</Link></Typography>
        <Typography>¿Aún no tiene una cuenta? <Link component={NavLink} to={"/register"}>Regístrese.</Link></Typography>
      </Paper>
    </Grid>
  );
}
