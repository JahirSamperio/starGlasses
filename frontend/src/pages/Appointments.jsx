import { Paper, Box} from '@mui/material'
import AppointmentForm from '../components/appointment/AppointmentForm';
import UserRequestedAppointments from '../components/appointment/UserRequestedAppointments';
import UpcomingAppointments from '../components/appointment/UpcomingAppointments';


export const Appointments = () => {
  return (
    <Paper
    elevation={10}
    sx={{
      width: { lg: "auto", sm: "auto" },
      margin: { sm: "20px 30px", xs: "12px 18px" },
    }}
  >
    <Box sx={{padding:'12px'}}>
      <AppointmentForm/>
    </Box>
    <Box>
      <UserRequestedAppointments/>
      <UpcomingAppointments/>
      
    </Box>
  </Paper>
  )
}
