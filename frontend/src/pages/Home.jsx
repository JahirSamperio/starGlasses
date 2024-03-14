import { Box, Card, Container, Icon, Paper, Typography } from "@mui/material";
import LandingPaper from "../components/LandingPaper/LandingPaper";
import ProductCard from "../components/productCard/ProductCard";
// import {}from '../../public/img'

export default function Home() {
  return (
    <Paper
      elevation={10}
      sx={{
        width: { lg: "auto", sm: "auto" },
        margin: { sm: "20px 30px", xs: "12px 18px" },
      }}
    >
      <Container
        maxWidth
        sx={{
          width: "auto",
          height: "368px",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('img/banner.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: {} }}>
          StarGlasses
        </Typography>
        <Typography variant="h5" sx={{ mt: "8px" }}>
          Para ver, y verte bien.
        </Typography>
      </Container>
      <Container sx={{ mt: "16px" }}>
        <Typography variant="h4" sx={{}}>
          Lo más nuevo en StarGlasses
        </Typography>
        <Box
          sx={{
            mt: "8px",
            mb: "8px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: { lg: "flex", sm: "grid", xs: "block" },
              gridTemplateColumns: { sm: "repeat(2, 1fr)" },
              justifyContent: "space-between",
              mt: "8px",
              gap: "12px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ProductCard sx={{ mb: "20px" }} />
            <ProductCard sx={{ mb: "20px" }} />
            <ProductCard sx={{ mb: "20px" }} />
            <ProductCard sx={{ mb: "20px" }} />
          </Box>
        </Box>
      </Container>

      <Container
        sx={{ display: { sm: "flex" }, mt:10,padding:5, justifyContent: "space-evenly" }}
      >
        <Box
          sx={{
            width: { sm: 400, xs: "maxWidth" },
            height: { sm: 240, xs: 240 },
          }}
        >
          <Typography variant="h4" sx={{ paddingBottom: 1 }}>
            {" "}
            ¿Quiénes somos?
          </Typography>
          <Typography variant="body1">
            En StarGlasess, nos especializamos en cuidar tu visión. Con atención
            personalizada y expertos en optometría, estamos aquí para
            asegurarnos de que veas claramente y te sientas seguro en cada
            momento.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: 400, xs: "maxWidth" },
            height: { sm: 240, xs: 240 },
            backgroundImage: "url('img/about.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Container>
    </Paper>
  );
}
