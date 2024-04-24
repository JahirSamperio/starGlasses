import * as yup from 'yup';


export const emailSchema = yup.object().shape({
    email: yup.email("Introduzca un email válido").required()
}); 