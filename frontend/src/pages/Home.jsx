import { Card, Paper, Typography } from "@mui/material";
import LandingPaper from "../components/LandingPaper/LandingPaper";
import ProductCard from "../components/productCard/ProductCard";

export default function Home() {
  return (

      <Paper elevation={10} sx={{width:{}, margin:{sm:"20px 30px"}}}>
        <Typography>
          Este ese el home lol
        </Typography>
        <ProductCard/>
      </Paper>
    
  );
}
