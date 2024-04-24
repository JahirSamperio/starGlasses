import { Dashboard } from "@mui/icons-material";
import { Container, Paper } from "@mui/material";
import { DashboardNavBar } from "../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar";

export const Main = () => {
  return (
    <Container
      sx={{
        minWidth: "1600px",
        width: "auto",
        margin: { sm: "20px 30px", xs: "12px 18px" },
      }}
    >
      <Container
        sx={{ display: { md: "flex" }, maxWidth: "auto", width: "auto" }}
      >
        <Container>
          <DashboardNavBar />
        </Container>
        <Container
          sx={{ border: "solid 1px", width: { lg: "1400px" } }}
        ></Container>
      </Container>
    </Container>
  );
};
