import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { Menu, ShoppingBagRounded, AccountCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { ItemMenu } from "../itemMenu/ItemMenu";
import { getItem } from "../../helpers/localStorage/getItem";

const navArrayLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: null,
  },
  {
    title: "Productos",
    path: "/products-list",
    icon: null,
  },
  {
    title: "Recomendaciones",
    path: "/appointments",
    icon: null,
  },
];

export default function NavBar({ links }) {
  const { loginData, success, error } = useSelector(
    (state) => state.users.login
  );

  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleGetUserId = async () => {
    const user = await getItem("USERID");

    console.log(user);

    if (user) {
      setUserId(true);
    } else {
      setUserId(null);
    }
  };

  useEffect(() => {
    handleGetUserId();
  }, []);

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
          <Typography variant="h6" sx={{ flexGrow: { sm: 0.5, xs: 1 } }}>
            StarGlasses
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexGrow: { xs: 1, sm: 0.5 },
            }}
          >
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
            <Button component={NavLink} to={"/shopping-cart"}>
              <ShoppingBagRounded color="secondary" />
            </Button>

            {userId ? (
              <></>
            ) : (
              <Button
                variant="contained"
                component={NavLink}
                color="secondary"
                to={"/login"}
              >
                Iniciar sesión
              </Button>
            )}
            {userId ? <ItemMenu /> : <></>}
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
