import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
  IconButton,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle } from "@mui/icons-material";

import { NavLink } from "react-router-dom";

export const ItemMenu = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      {/*Menu de apertura */}
      <IconButton
        color="secondary"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>

      {/*Menu desplegable */}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
      >
        <MenuItem component={NavLink} to={'/account/user/:id'} onClick={handleClose}>
          Cuenta
        </MenuItem>
        <MenuItem component={NavLink} to={'/dashboard/main'} onClick={handleClose}>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Cerrar sesion</ListItemText>
        </MenuItem>
      </Menu>
    </Container>
  );
};
