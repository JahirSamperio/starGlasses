import React, { useEffect } from 'react'
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { confirmUserAction, resetConfirmState } from '../redux/actions/users/confirmUser';

const AccountConfirmation = () => {
    const dispatch = useDispatch();
    const { token } = useParams();

    const { loading, error, success, confirmData } = useSelector(
        (state) => state.users.confirm);


    useEffect(() => {
        if (success) dispatch(resetConfirmState());
        dispatch(confirmUserAction(token))
    }, [token, dispatch]);



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
                        {success ? ("Cuenta confirmada") : error ? ("Hubo un error") : "Confirmando..." }
                    </Typography>
                    {error && (
                        <Typography variant="body1" color="error" sx={{ marginBottom: 2 }}>
                            {error}{". Este token no existe o la cuenta ya fue confirmada."}
                        </Typography>
                    )}
                    {success && (
                        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                            Tras la verificación, ahora tendrás íntegro acceso a tu cuenta, bienvenido a StarGlasses.
                        </Typography>
                    )}
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
    )
}

export default AccountConfirmation