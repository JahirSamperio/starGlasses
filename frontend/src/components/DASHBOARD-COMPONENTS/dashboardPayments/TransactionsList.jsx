import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Modal,
  IconButton,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getPaymentDetailsAction } from "../../../redux/actions/payments/getPaymentDetails";

export const TransactionsList = ({ transacciones }) => {
  const dispatch = useDispatch();

  const { loading, success, error, transactionDetailsData } = useSelector(
    (state) => state.payments.getById
  );

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleOpenModal = (transaccion) => {
    setSelectedTransaction(transaccion);
    console.log(transaccion.id_pago);
    dispatch(getPaymentDetailsAction(transaccion.id_pago));
  };

  useEffect(() => {
    console.log(transactionDetailsData);
  }, [transactionDetailsData]);

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <Paper sx={{ padding:'12px 18px'}}>
      <Typography>Lista de transacciones</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Monto</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Nombre usuario</TableCell>
            <TableCell>Apellido paterno</TableCell>
            <TableCell>Apellido materno</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Fecha pedido</TableCell>
            <TableCell>metodo de pago</TableCell>
            <TableCell>Detalles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transacciones.map((transaccion) => (
            <TableRow key={transaccion.id_pago}>
              <TableCell>{transaccion.id_pago}</TableCell>
              <TableCell>{transaccion.monto}</TableCell>
              <TableCell>{transaccion.estado}</TableCell>
              <TableCell>{transaccion.usuario.nombre}</TableCell>
              <TableCell>{transaccion.usuario.apellido_paterno}</TableCell>
              <TableCell>{transaccion.usuario.apellido_materno}</TableCell>
              <TableCell>{transaccion.usuario.email}</TableCell>
              <TableCell>{transaccion.pedido.fecha_pedido}</TableCell>
              <TableCell>{transaccion.pedido.metodo_pago}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenModal(transaccion)}>
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        open={selectedTransaction !== null}
        onClose={handleCloseModal}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            height: "100%",
            margin:'auto',
            width:'420px'
          }}
        >
          {selectedTransaction && (
            <Paper sx={{ padding: "12px 18px" }}>
              <Typography variant="h5">Detalles del pago</Typography>

              <p>ID: {selectedTransaction.id_pago}</p>
              <p>Fecha: {selectedTransaction.monto}</p>
              <p>Estado: {selectedTransaction.moneda}</p>
              <p>Estado: {selectedTransaction.estado}</p>
              <Typography variant="h6">Datos del usuario</Typography>
              <p>Nombre Usuario: {selectedTransaction.usuario.nombre}</p>
              <p>
                Apellido Paterno: {selectedTransaction.usuario.apellido_paterno}
              </p>
              <p>
                Apellido Materno: {selectedTransaction.usuario.apellido_materno}
              </p>
              <p>Email: {selectedTransaction.usuario.email}</p>
              <p>Telefono: {selectedTransaction.usuario.telefono}</p>
              <Typography variant="h6"> Datos del pedido</Typography>
              <p>ID: {selectedTransaction.pedido.id_pedido}</p>
              <p>Fecha: {selectedTransaction.pedido.fecha_pedido}</p>
              <p>Estado del pedido: {selectedTransaction.pedido.estado}</p>
              <p>Metodo de pago: {selectedTransaction.pedido.metodo_pago}</p>
            </Paper>
          )}
        </Box>
      </Modal>
    </Paper>
  );
};
