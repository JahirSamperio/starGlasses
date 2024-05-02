import React from "react";
import { Container } from "@mui/material";

export const Carrousel = ({imagenes}) => {
  return (
    <Container
      sx={{
        display:{sm:'flex', xs:'none'},
        height: "80px",
        justifyContent: "space-around",
        width: { xs: "100%", sm: "90%", md: "65%", lg: "90%" },
        mt:'12px',
        gap:'21px',       
      }}
    >
      <Container sx={{ display:'flex',bgcolor: "gray", margin:'0', justifyContent:'center', alignItems:"center", borderRadius:'6px',width:'80px'}}>imagen</Container>
      <Container sx={{ display:'flex',bgcolor: "gray", margin:'0', justifyContent:'center', alignItems:"center", borderRadius:'6px',width:'80px'}}>imagen</Container>
      <Container sx={{ display:'flex',bgcolor: "gray", margin:'0', justifyContent:'center', alignItems:"center", borderRadius:'6px',width:'80px'}}>imagen</Container>
      <Container sx={{ display:'flex',bgcolor: "gray", margin:'0', justifyContent:'center', alignItems:"center", borderRadius:'6px',width:'80px'}}>imagen</Container>
    </Container>
  );
};
