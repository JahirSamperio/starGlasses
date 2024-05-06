import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AccountNavBar } from "../../components/ACCOUNT-COMPONENTS/AccountNavBar";
import NavBar from "../../components/navBar/NavBar";
import OrderItem from "../../components/ACCOUNT-COMPONENTS/My orders/OrderItem"; // Importa el componente OrderItem
import { getUserOrdersListAction } from "../../redux/actions/orders/getUserOrdersListAction";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../helpers/localStorage/getItem";

export const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, success, error, userOrdersListData } = useSelector(
    (state) => state.orders.getUserList
  );
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const loadUserID = async () => {
      const id_usuario = await getItem("USERID");
      setUserID(id_usuario);
    };
    loadUserID();
  }, []);

  useEffect(() => {
    if (userID) {
      dispatch(getUserOrdersListAction(userID));
    }
  }, [userID]);

  useEffect(() => {
    console.log(userOrdersListData);
  }, [userOrdersListData]);

  return (
    <>
      <NavBar />
      <Box sx={{ padding: "12px 8px", display: { md: "flex" } }}>
        <AccountNavBar />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            padding: "24px 18px",
          }}
        >
          {loading ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : userOrdersListData && userOrdersListData.pedido ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID Pedido</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <OrderItem
                    key={userOrdersListData.pedido.id_pedido}
                    fecha_pedido={userOrdersListData.pedido.fecha_pedido}
                    estado={userOrdersListData.pedido.estado}
                    usuario_direccion={
                      userOrdersListData.pedido.usuario_direccion
                    }
                    id_pedido={ userOrdersListData.pedido.id_pedido}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Paper>
              <Box sx={{ p: 2 }}>
                <p>No hay órdenes disponibles.</p>
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
    </>
  );
};
