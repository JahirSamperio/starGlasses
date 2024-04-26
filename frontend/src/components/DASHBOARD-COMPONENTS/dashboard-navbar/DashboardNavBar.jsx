import { Directions, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Icon,
  ListItem,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import {
  Home,
  Inventory,
  BarChart,
  DateRange,
  LocalShipping,
  Payments,
  Dashboard,
} from "@mui/icons-material";

const linksDashboard = [
  {
    name: "Inicio",
    path: "/dashboard/main",
    icon: <Home />,
  },
  {
    name: "Inventario",
    path: "/dashboard/inventory",
    icon: <Inventory />,
  },
  {
    name: "Estadísticas",
    path: "/dashboard/stats",
    icon: <BarChart />,
  },
  {
    name: "Citas",
    path: "/dashboard/appointments",
    icon: <DateRange />,
  },
  {
    name: "Pedidos",
    path: "/dashboard/orders",
    icon: <LocalShipping />,
  },
  {
    name: "Pagos",
    path: "/dashboard/payments",
    icon: <Payments />,
  },
];

export const DashboardNavBar = ({ links }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        minWidth: { lg: "184px", md: "156px" },
        height: "800px",
        width: { lg: "184px", md: "156px" },
        display: { lg: "flex", sm: "none", xs: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          width: { lg: "184px", md: "156px" },
          justifyContent: "flex-start",
        }}
      >
        <Icon sx={{ margin: "8px auto", width: "auto", height: "auto" }}>
          <Dashboard sx={{ width: "48px", height: "48px" }} />
        </Icon>
        <Typography sx={{ margin: "0px auto" }}>Dashboard</Typography>
        <Divider />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {linksDashboard.map((item) => (
            <ListItem disablePadding key={item.name} sx={{ mt: "12px" }}>
              <ListItemButton component={NavLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};
