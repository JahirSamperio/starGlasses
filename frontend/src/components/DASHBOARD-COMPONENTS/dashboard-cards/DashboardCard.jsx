import { Icon, Paper, Typography, Box } from "@mui/material";
import React from "react";
import { HelpOutline, Home } from "@mui/icons-material";
export const DashboardCard = ({ icon, title, body }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        width: { lg: "32%", md: "22%", sm: "97%", xs: "96%" },
        height: { sm: "75%", xs: "31%",lg:'188px' },
        mt: { xs: "12px" },
        display: "flex",
        justifyContent:'space-around',
        padding:'12px',
        alignItems:'center',
        
      }}
    >
      <Box  sx={{borderRadius:'40%', border:'solid 1px', backgroundColor:'#70a090',width:'fit-content'}}>
        <Home color="#eaebed" sx={{width:'40px', height:'40px'}}/>
      </Box>
      <Box>
        <Typography variant="h5">Titulo</Typography>
        <Typography variant="h6">10</Typography>
      </Box>
    </Paper>
  );
};
