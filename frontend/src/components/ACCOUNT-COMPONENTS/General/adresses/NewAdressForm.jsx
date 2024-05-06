import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';


export const NewAdressForm = () =>{
    const [formData, setFormData] = useState({
        receptor: '',
        telefono_contacto: '',   
        direccion: '',
        codigo_postal: '',
        estado: '',
        ciudad: '',
        colonia: '',
        calle: '',
        numero: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar formData a tu backend para agregar la dirección
        console.log(formData);
        // Lógica para enviar formData al backend
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Agregar Dirección</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre del receptor"
                name="receptor"
                value={formData.receptor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Teléfono de contacto"
                name="telefono_contacto"
                value={formData.telefono_contacto}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Dirección"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Código Postal"
                name="codigo_postal"
                value={formData.codigo_postal}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Colonia"
                name="colonia"
                value={formData.colonia}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Calle"
                name="calle"
                value={formData.calle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Número"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Agregar Dirección
              </Button>
            </Grid>
          </Grid>
        </form>
      );
    };