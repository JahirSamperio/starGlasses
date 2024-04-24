import  {combineReducers} from '@reduxjs/toolkit'

import { requestedAppointmentsSlice} from './requestedAppointments'

export * from './requestedAppointments';

export const AppointmentReducers = combineReducers({
    getRequested: requestedAppointmentsSlice.reducer,
    
});