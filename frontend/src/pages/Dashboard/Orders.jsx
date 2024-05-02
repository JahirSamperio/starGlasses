import React from 'react'
import { Box,Container,Paper, } from '@mui/material';
import { DashboardNavBar } from '../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar';
import { OrdersList } from '../../components/DASHBOARD-COMPONENTS/dashboardOrders/OrdersList';




//fake db
const pedidosData = [
  {
    id_pedido: "0k632jsv0uo1hs3gciaq",
    fecha_pedido: "2024-04-25",
    estado: "Confirmado",
    usuario_direccion: {
      direccion: "07462 Randal Springs",
      usuario: {
        nombre: "Marley",
        apellido_paterno: "Rutherford",
        apellido_materno: "Collier",
        email: "Sammy_Torp78@yahoo.com"
      }
    }
  },
  {
    id_pedido: "blip6m5b0g81hs6ib9og",
    fecha_pedido: "2024-04-23",
    estado: "Pendiente",
    usuario_direccion: {
      direccion: "97848 Gabe Meadow",
      usuario: {
        nombre: "Maribel",
        apellido_paterno: "Howe",
        apellido_materno: "Kertzmann",
        email: "Alba.Hirthe@hotmail.com"
      }
    }
  },
  {
    id_pedido: "xyz123",
    fecha_pedido: "2024-04-20",
    estado: "Entregado",
    usuario_direccion: {
      direccion: "123 Main Street",
      usuario: {
        nombre: "Juan",
        apellido_paterno: "Pérez",
        apellido_materno: "González",
        email: "juan.perez@example.com"
      }
    }
  }
];

export const Orders = () => {
    return (
        <Paper
          elevation={1}
          sx={{
            width: { lg: "auto", sm: "auto" },
            margin: { sm: "20px 30px", xs: "12px 18px" },
            gap: "24px",
        
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "18px 12px",
              justifyContent: "space-around",
            }}
          >
            <DashboardNavBar />
    
            <Paper
              elevation={7}
              sx={{
                width: { lg: "1600px", md: "1380px", sm: "820px", xs: "100%" }, 
                height: 'fit-content',
                padding: "12px 18px 12px 18px",
                maxWidth:'1600px'
              }}
            >

              <OrdersList pedidos={pedidosData}/>
              <Container></Container>
            </Paper>
          </Box>
        </Paper>
      );
}