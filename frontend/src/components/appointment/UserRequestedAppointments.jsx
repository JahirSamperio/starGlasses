import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(id,fecha, hora, motivo,estado) {
  return {id, fecha, hora, motivo, estado};
}

const rows = [
  createData(1,'29-05-2024', '10:00', "Consulta","Aceptada"),
  createData(2,'22-05-2024', '13:00', "nose","Pendiente"),
  createData(3,'31-05-2024', '11:00', "Consulta","Rechazada"),
  createData(4,'12-05-2024', '09:00', "Visita","Completada"),

];

export default function UserRequestedAppointments() {
  return (
    <TableContainer component={Paper} sx={{ width: { lg: "38%" }, height:{md:'340px'} }}>
      <Typography sx={{ mt: "4px", ml: "8px", }} variant="h6" >
        Todas sus citas 
      </Typography>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Hora</TableCell>
            <TableCell align="right">Motivo</TableCell>
            <TableCell align="right">Estado de la solicitud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.fecha}</TableCell>
              <TableCell align="right">{row.hora}</TableCell>
              <TableCell align="right">{row.motivo}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
