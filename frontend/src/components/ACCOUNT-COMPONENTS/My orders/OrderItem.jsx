import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import axios from 'axios';

const OrderItem = ({ id_pedido, fecha_pedido, estado, usuario_direccion }) => {
  const handleGenerateInvoice = async () => {
    try {
      // Realiza una solicitud para generar el PDF desde la API
      const response = await axios.get(`http://localhost:8080/factura/${id_pedido}`, {
        responseType: 'blob' // Esperamos un blob como respuesta
      });

      // Crea un objeto URL para el blob
      const pdfUrl = URL.createObjectURL(new Blob([response.data]));
      // Crea un enlace temporal y haz clic en él para descargar el archivo
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `factura_${id_pedido}.pdf`;
      link.click();
    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('Error al generar la factura:', error);
    }
  };

  return (
    <TableRow>
      <TableCell>{id_pedido}</TableCell>
      <TableCell>{fecha_pedido}</TableCell>
      <TableCell>{estado}</TableCell>
      <TableCell>{usuario_direccion.direccion}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={handleGenerateInvoice}>
          Generar Factura
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderItem;
