import React, { useState } from 'react';
import {Box, Container } from '@mui/material';
import { AccountNavBar } from '../../AccountNavBar';
import { NewAdressForm } from './NewAdressForm';


export const NewAdress = () => {
  return (
    <>
    <Box sx={{padding:'12px 8px', display:{md:'flex'}}}>
      <AccountNavBar/>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, padding:'24px 18px' }}>
        <NewAdressForm/>
      </Container>
    </Box>
    </>
  )
}
