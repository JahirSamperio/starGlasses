import { Box,Container } from "@mui/material"
import NavBar from "../../../navBar/NavBar"
import {} from '../../AccountNavBar'

export const NewAdress = () => {
  return (
    <>
    <NavBar />
    <Box sx={{padding:'12px 8px', display:{md:'flex'}}}>
      <AccountNavBar/>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, padding:'24px 18px' }}>
        
      </Container>
    </Box>
    </>
  )
}
