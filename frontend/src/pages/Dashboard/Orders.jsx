import React from 'react'
import { Box,Paper, } from '@mui/material';
import { DashboardNavBar } from '../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar';

export const Orders = () => {
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
              
            </Paper>
          </Box>
        </Paper>
      );
}