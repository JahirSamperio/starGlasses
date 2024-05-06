import { Route,Routes } from "react-router-dom";

import React from 'react'
import { MyAppointments } from "../pages/Account/MyAppointments";
import { MyOrders } from "../pages/Account/MyOrders";
import { General } from "../pages/Account/General";
import { Adresses } from "../pages/Account/Adresses";
import { NewAdress } from "../components/ACCOUNT-COMPONENTS/General/adresses/NewAdress";

const AccountRoutes = () => {
  return (
    <Routes>
    <Route path="general" element={<General/>} />
    <Route path="my-orders" element={<MyOrders/>} />
    <Route path="my-appointments" element={<MyAppointments/>}/>
    
    <Route path="my-adresses" element={<Adresses/>}/>
    <Route path="my-adresses/new-adress" element={<NewAdress/>}/>
  </Routes>
  )
}

export default AccountRoutes