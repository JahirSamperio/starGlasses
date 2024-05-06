import { Dashboard } from "@mui/icons-material";
import { Box, Container, Paper } from "@mui/material";
import { DashboardNavBar } from "../../components/DASHBOARD-COMPONENTS/dashboard-navbar/DashboardNavBar";
import { DashboardCard } from "../../components/DASHBOARD-COMPONENTS/dashboard-cards/DashboardCard";
import TodaySales from "../../components/DASHBOARD-COMPONENTS/dashboardHome/TodaySales";
import RecentlyOrderedTable from "../../components/DASHBOARD-COMPONENTS/dashboardHome/RecentlyOrderedTable";
import BestSellersTable from "../../components/DASHBOARD-COMPONENTS/dashboardHome/BestSellersTable";
import CurrentOffers from "../../components/DASHBOARD-COMPONENTS/dashboardHome/CurrentOffers";
import MonthSales from "../../components/DASHBOARD-COMPONENTS/dashboardHome/MonthSales";


import { getSalesToday} from '../../redux/actions/sales/getSalesTodayAction'
 
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";


export const Main = () => {
  
  const dispatch = useDispatch();
  const {loading, success, error, salesTodayData} = useSelector((state) => state.sales.getTodays);
  
  useEffect(()=>{dispatch(getSalesToday())},[]);



  


  return (
    <>
    <NavBar/>
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
            }}
          >
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </Box>
          <Box
            sx={{
              
              width: { lg: "auto",md:'100%', sm: "auto" },
              height: 'fit-content',
              padding: "12px 18px",
              mt: "10px",
              display:{md:'flex', sm:'block'},
              justifyContent:'space-around'
            }}
          >
            <RecentlyOrderedTable/>
            <TodaySales ventas={salesTodayData}/>
          </Box>
          <Box
            sx={{
              
              width: "100%",
              height: { md: "33%", sm: "324px", xs: "524px" },
              padding: "12px 18px",
              margin: "10px auto",
              display:{md:"flex"},
              justifyContent:'space-around'
              
            }}
          >
            <CurrentOffers/>
            <MonthSales/>
          </Box>
        </Paper>
      </Box>
    </Paper>
    </>
    
  );
};
