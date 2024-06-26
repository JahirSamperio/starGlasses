import { Box } from '@mui/material'
import { AccountNavBar } from '../../components/ACCOUNT-COMPONENTS/AccountNavBar'
import NavBar from '../../components/navBar/NavBar'

import { navArrayLinks } from '../../helpers/navArrayLinks'


export const Account = () => {
  return (
    <>
    <NavBar navArrayLinks={navArrayLinks}/>
    <Box>
      <AccountNavBar/>
      <Box>
        
      </Box>
    </Box>
    </>
  )
}
