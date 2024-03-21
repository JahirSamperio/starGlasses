import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import { Menu, ShoppingBagRounded } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function NavBar({ navArrayLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Menu color="inherit" fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow:{sm:0.5, xs:1}}}>
            StarGlasses
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block"}, flexGrow:{xs:1,sm:.5}}}>
            {navArrayLinks.map((item) => (
              <Button
                component={NavLink}
                color="inherit"
                key={item.title}
                to={item.path}
              >
                {" "}
                {item.title}{" "}
              </Button>
            ))}
          </Box>
          <Box>
            <Button component={NavLink} to={'/shopping-cart'}>
              <ShoppingBagRounded color="secondary"/>
            </Button>
            <Button
              variant="filled"
              component={NavLink}
              color="secondary"
              to={"/login"}
            >
              Iniciar sesión
            </Button> 
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>

    //
  );
}
