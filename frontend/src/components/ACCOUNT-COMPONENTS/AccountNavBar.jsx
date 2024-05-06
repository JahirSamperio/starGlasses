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


const accountLinksArray = [
  {
    name: "General",
    path: "/account/general",
    icon: '',
  },
  {
    name: "Mis pedidos",
    path: "/account/my-orders",
    icon: '',
  },
  {
    name: "Citas",
    path: "/account/my-appointments",
    icon: '',
  },
  {
    name:"Direcciones",
    path:'/account/my-adresses',
    icon:''

  }


];

export const AccountNavBar = ({ links }) => {
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
        <Typography sx={{ margin: "0px auto" }}>Cuenta</Typography>
        <Divider />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {accountLinksArray.map((item) => (
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
