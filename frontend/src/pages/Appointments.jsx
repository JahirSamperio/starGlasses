import { Paper, Box} from '@mui/material'
import AppointmentForm from '../components/appointment/AppointmentForm';


export const Appointments = () => {
  return (
    <Paper
    elevation={10}
    sx={{
      width: { lg: "auto", sm: "auto" },
      margin: { sm: "20px 30px", xs: "12px 18px" },
    }}
  >
    <Box>
      <AppointmentForm/>
    </Box>
  </Paper>
  )
}
