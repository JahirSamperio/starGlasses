import { Dashboard } from "@mui/icons-material";
import { Box, Container, Paper } from "@mui/material";
import { DashboardNavBar } from "../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar";

export const Main = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: { lg: "auto", sm: "auto" },
        margin: { sm: "20px 30px", xs: "12px 18px" },
        gap: "24px",
      }}
    >
      <Box sx={{display:'flex', padding:'18px 12px', justifyContent:'space-around' }}>
        <DashboardNavBar />

        <Paper
          elevation={8}
          sx={{
            width: { lg: "1600px", md: "1380px", sm: '820px', xs: '100%',}, // Agregado xs: '100%'
            height: "800px",
          }}
        ></Paper>
      </Box>
    </Paper>

    // <Container
    //   sx={{
    //     minWidth: "1600px",
    //     width: "auto",
    //     margin: { sm: "20px 30px", xs: "12px 18px" },
    //   }}
    // >
    //   <Container
    //     sx={{ display: { md: "flex" }, maxWidth: "auto", width: "auto" }}
    //   >
    //     <Container>
    //       <DashboardNavBar />
    //     </Container>
    //     <Container
    //       sx={{ border: "solid 1px", width: { lg: "1400px" } }}
    //     ></Container>
    //   </Container>
    // </Container>
  );
};
