import { Grid, Paper } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";
import NavBar from "../components/navBar/NavBar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProductListAction } from "../redux/actions/products/getProductList";
import { navArrayLinks } from "../helpers/navArrayLinks";


export const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Obtener el estado de la lista de productos

  const { loading, error, success, productListData } = useSelector(
    (state) => state.products.getAll
  );



  useEffect(() => {
    // Despachar la acción para obtener la lista de productos
    dispatch(getProductListAction());
  }, []);

  const handleProductClick = (productId) => {
    // Navegar a la página de detalles del producto
    navigate(`/product/${productId}`);
  };

  const getLinksFromProductList = () =>{
    const linksArray = [];
    productListData.forEach(product => {
      const enlaces = product.imagen.split(',').map(link => link.trim()); // Eliminamos los espacios en blanco alrededor de cada enlace
      enlaces.splice(4, 1); // Eliminamos el quinto elemento del array de enlaces
      linksArray.push(enlaces); // Agregamos el array de enlaces al array principal
    });
    return linksArray;
  }

  const links =  getLinksFromProductList();


  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
      <Paper elevation={10} sx={{ padding: "20px", margin: "12px 16px" }}>
        <Grid container spacing={2} sx={{}}>
          {success === true &&
            productListData.slice(0, 10).map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ProductCard
                    imagen={links[index][0]}
                    nombre={product.nombre}
                    id_lentes={product.id_lentes}
                    precio={product.producto_lentes_precio.precio_venta}
                    onProductClick={() => handleProductClick(product.id_lentes)}
                  />
                </div>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
};
