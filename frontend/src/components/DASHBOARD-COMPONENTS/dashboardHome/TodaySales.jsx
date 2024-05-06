import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useEffect } from "react";



export default function TodaySales({ventas}) {
  

  useEffect(()=>{console.log(ventas);},[ventas])

  return (
    <TableContainer component={Paper} sx={{ width: { lg: "38%" }, height:{md:'433px'} }}>
      <Typography sx={{ mt: "4px", ml: "8px", }} variant="h6" >
        Ventas hoy 
      </Typography>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID del pedido</TableCell>
            <TableCell align="right">Monto</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ventas.map((venta) => (
            <TableRow
              key={venta.pedido.pedido_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >

              <TableCell align="right">{venta.pedido.id_pedido}</TableCell>
              <TableCell align="right">{venta.monto}</TableCell>
              <TableCell align="right">{`${venta.usuario.nombre} ${venta.usuario.apellido_paterno}`} </TableCell>
              <TableCell align="right">{venta.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
