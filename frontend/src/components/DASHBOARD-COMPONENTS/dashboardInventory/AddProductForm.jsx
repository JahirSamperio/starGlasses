import React, { useState } from "react";
import { TextField, Button, Box,Paper,Typography} from "@mui/material";

const AddFormProduct = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    marca: "",
    material: "",
    color: "",
    graduacion: "",
    tamano: "",
    rostro: "",
    existencia: "",
    proveedor: "",
    descripcion: "",
    imagen: null,
    precio: "",
    precioCompra: "",
  });

  //Logica para imagenes
  const [imagenes, setImagenes] = useState(Array.from({ length: 4 }, () => null)); // Array de 4 elementos inicializados como null

  const handleChangeImg = (e, index) => {
    const { files } = e.target;
    if (files && files[0]) {
      const newImages = [...imagenes];
      newImages[index] = files[0];
      setImagenes(newImages);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call to API
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", maxWidth: "1020px", margin: "auto" }}
    >
      <TextField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Box sx={{ display: { md: "flex" }, gap: "8px" }}>
        <TextField
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Marca"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Material"
          name="material"
          value={formData.material}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>

      <TextField
        label="Color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Box sx={{ display: { md: "flex" }, gap: "8px" }}>
        {" "}
        <TextField
          label="Graduación"
          name="graduacion"
          value={formData.graduacion}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Tamaño"
          name="tamano"
          value={formData.tamano}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Rostro"
          name="rostro"
          value={formData.tamano}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: { md: "flex" }, gap: "8px" }}>
        {" "}
        <TextField
          label="Existencia"
          name="existencia"
          value={formData.existencia}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Proveedor"
          name="proveedor"
          value={formData.proveedor}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>

      <TextField
        label="Descripción"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      {[0, 1, 2, 3].map((index) => (
        <div key={index}>
          <input
            accept="image/*"
            id={`imagen${index}`}
            type="file"
            onChange={(e) => handleChangeImg(e, index)}
            style={{ display: 'none' }}
          />
          <label htmlFor={`imagen${index}`}>
            <Button variant="contained" color="primary" component="span" fullWidth style={{ marginTop: '20px' }}>
              {imagenes[index] ? 'Cambiar Imagen' : 'Cargar Imagen'}
            </Button>
          </label>
        </div>
      ))}
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        {imagenes.map((imagen, index) => (
          imagen && (
            <div key={index} style={{ marginBottom: '10px' }}>
              <Typography variant="subtitle1">Imagen {index + 1}</Typography>
              <img src={URL.createObjectURL(imagen)} alt={`Imagen ${index + 1}`} style={{ maxWidth: '100%' }} />
            </div>
          )
        ))}
      </Paper>
    </div>
      <Box sx={{ display: { md: "flex" }, gap: "8px" }}>
        <TextField
          label="Precio"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Precio de Compra"
          name="precioCompra"
          value={formData.precioCompra}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        style={{ marginTop: "20px" }}
      >
        Crear
      </Button>
    </form>
  );
};

export default AddFormProduct;
