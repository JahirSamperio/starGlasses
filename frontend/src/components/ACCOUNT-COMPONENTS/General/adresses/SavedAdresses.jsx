import React from 'react'
import { AdressCard } from './AdressCard'
import { Grid } from '@mui/material'

export const SavedAdresses = ({direcciones}) => {
  return (
    <Grid>
      {direcciones.map((adress, index) => {
        <Grid item key={index}  xs={12} sm={6} md={4}>
          <AdressCard />
        </Grid>
      })}
    </Grid>

  )
}
