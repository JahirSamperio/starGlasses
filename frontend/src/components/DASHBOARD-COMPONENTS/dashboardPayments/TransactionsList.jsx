import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react'

export const TransactionsList = ({transacciones}) => {

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  
  const handleOpenModal = (transaccion) =>{
    setSelectedOrder(transaccion);
  }

  const handleCloseModal = () =>{
    setSelectedOrder(null);
  }


  

  return (
    <Paper>
        <Table>
            <TableHead>
                <Typography>Lista de transacciones</Typography>
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
                    <TableCell><Button variant='contained'>...</Button></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {transacciones.map((transaccion) =>(
                <TableRow key={transaccion.index}>
                  <TableCell>{transaccion.id_pago}</TableCell>
                  <TableCell>{transaccion.monto}</TableCell>
                  <TableCell>{transaccion.moneda}</TableCell>
                  <TableCell>{transaccion.estado}</TableCell>
                  <TableCell>{transaccion.usuario.nombre}</TableCell>
                  <TableCell>{transaccion.usuario.apellido_paterno}</TableCell>
                  <TableCell>{transaccion.usuario.apellido_materno}</TableCell>
                  <TableCell>{transaccion.usuario.email}</TableCell>
                  <TableCell>{transaccion.usuario.telefono}</TableCell>
                  <TableCell>{transaccion.pedido.id_pedido}</TableCell>
                  <TableCell>{transaccion.pedido.fecha_pedido}</TableCell>
                  <TableCell>{transaccion.pedido.estado}</TableCell>
                  <TableCell>{transaccion.pedido.metodo_pago}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>


        <Modal open={selectedTransaction !== null} onClose={handleCloseModal}>
        </Modal>


    </Paper>
  )
}
