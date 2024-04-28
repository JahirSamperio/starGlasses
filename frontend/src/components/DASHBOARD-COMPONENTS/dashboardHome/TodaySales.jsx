import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(159, 6.0, "Frozen yoghurt","Completado"),
  createData(237, 9.0, "Ice cream sandwich","Completado"),
  createData(262, 16.0, "Eclair","Completado"),
  createData(305, 356, "Cupcake","Completado"),
  createData(356, 16.0, "Gingerbread","Completado"),
];

export default function TodaySales() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
