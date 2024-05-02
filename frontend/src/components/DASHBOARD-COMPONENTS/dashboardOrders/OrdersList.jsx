import {
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";

export const OrdersList = ({ pedidos }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha pedido</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Nombre del usuario</TableCell>
            <TableCell>Apellido paterno</TableCell>
            <TableCell>Apellido materno</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Detalles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.map((pedido) => (
            <TableRow key={pedido.id_pedido}>
              <TableCell>{pedido.id_pedido}</TableCell>
              <TableCell>{pedido.fecha_pedido}</TableCell>
              <TableCell>{pedido.estado}</TableCell>
              <TableCell>{pedido.usuario_direccion.usuario.nombre}</TableCell>
              <TableCell>
                {pedido.usuario_direccion.usuario.apellido_paterno}
              </TableCell>
              <TableCell>
                {pedido.usuario_direccion.usuario.apellido_materno}
              </TableCell>
              <TableCell>{pedido.usuario_direccion.direccion}</TableCell>
              <TableCell>{pedido.usuario_direccion.usuario.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenModal(pedido)}>
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* modal component for order details */}
      <Modal open={selectedOrder !== null} onClose={handleCloseModal}>
        <div>
          {selectedOrder && (
            <Paper>
              <Typography variant="h6">Detalles del pedido</Typography>
              <h2>Detalles del Pedido</h2>
              <p>ID: {selectedOrder.id_pedido}</p>
              <p>Fecha: {selectedOrder.fecha_pedido}</p>
              <p>Estado: {selectedOrder.estado}</p>
              <p>
                Nombre Usuario:{" "}
                {selectedOrder.usuario_direccion.usuario.nombre}
              </p>
              <p>
                Apellido Paterno:{" "}
                {selectedOrder.usuario_direccion.usuario.apellido_paterno}
              </p>
              <p>
                Apellido Materno:{" "}
                {selectedOrder.usuario_direccion.usuario.apellido_materno}
              </p>
              <p>Email: {selectedOrder.usuario_direccion.usuario.email}</p>
            </Paper>
          )}
        </div>
      </Modal>
    </Paper>
  );
};
