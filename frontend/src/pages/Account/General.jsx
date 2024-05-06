import { Box, Container } from '@mui/material'
import { AccountNavBar } from '../../components/ACCOUNT-COMPONENTS/AccountNavBar'
import NavBar from '../../components/navBar/NavBar'
import { EditDataForm } from '../../components/ACCOUNT-COMPONENTS/General/EditDataForm'
import { SavedAdresses } from '../../components/ACCOUNT-COMPONENTS/General/adresses/SavedAdresses'
export const General = () => {

  const direcciones = undefined || [];
  return (
    <>
    <NavBar />
    <Box sx={{padding:'12px 8px', display:{md:'flex'}}}>
      <AccountNavBar/>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, padding:'24px 18px',flexDirection:'column'}}>
        <EditDataForm/>
        <SavedAdresses direcciones={direcciones}/>
      </Container>
    </Box>
    </>
  )
}
