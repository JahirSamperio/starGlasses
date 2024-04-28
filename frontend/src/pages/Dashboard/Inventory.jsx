import React from 'react'
import { Box,Paper, } from '@mui/material';
import { DashboardNavBar } from '../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar';
import InventoryTable from '../../components/DASHBOARD-COMPONENTS/dashboardInventory/InventoryTable';

export const Inventory = () => {
    return (
      <Paper
      elevation={1}
      sx={{
        width: { lg: "auto", sm: "auto" },
        margin: { sm: "20px 30px", xs: "12px 18px" },
        gap: "24px",
    
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "18px 12px",
          justifyContent: "space-around",
        }}
      >
        <DashboardNavBar />

        <Paper
          elevation={7}
          sx={{
            width: { lg: "1600px", md: "1380px", sm: "820px", xs: "100%" }, // Agregado xs: '100%'
            height: 'fit-content',
            padding: "12px 18px 12px 18px",
            maxWidth:'1600px'
          }}
        >
          <Box
            sx={{
              
              width: "100%",
              height: { md: "33%", sm: "324px", xs: "524px" },
              padding: "12px 18px",
              display: { sm: "grid", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center" },
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "repeat(2,1fr)",
              justifyContent: "space-around",
              border:'solid 1px'
            }}
          >
            
          </Box>
          <Box
            sx={{
              
              width: { lg: "auto",md:'100%', sm: "auto" },
              height: 'fit-content',
              padding: "12px 18px",
              mt: "10px",
              display:{md:'flex', sm:'block'},
              justifyContent:'space-around',
              border:'solid 1px'
            }}
          >
            <InventoryTable/>
          </Box>
          <Box
            sx={{
              
              width: "100%",
              height: { md: "33%", sm: "324px", xs: "524px" },
              padding: "12px 18px",
              margin: "10px auto",
              display:{md:"flex"},
              justifyContent:'space-around',
              border:'solid 1px'
              
            }}
          >

          </Box>
        </Paper>
      </Box>
    </Paper>
      );
}