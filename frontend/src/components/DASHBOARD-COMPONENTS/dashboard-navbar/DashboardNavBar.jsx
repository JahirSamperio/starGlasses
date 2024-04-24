import { Paper } from "@mui/material";

export const DashboardNavBar = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        minWidth: { lg: "184px", md: "156px" },
        height: "800px",
        width: { lg: "184px", md: "156px" },
        display: { md: "flex", sm: "none" },
      }}
    ></Paper>
  );
};
