import * as yup from 'yup';

const requiredFieldMessage = "es un campo obligatorio";

export const newUserSchema = yup.object().shape({
  nombre: yup.string().required( `Nombre ${requiredFieldMessage}`),
  apellido_paterno: yup.string().required(`Apellido paterno ${requiredFieldMessage}`),
  apellido_materno: yup.string(),
  telefono: yup
    .number("Formato incorrecto")
    .required(`Número telefónico${requiredFieldMessage}`),
  email: yup.string()
    .email("Correo electrónico inválido")
    .required(`Correo electronico ${requiredFieldMessage}`),
  password: yup.string().min(8,"Un minimo de 8 caracateres").required(`Constraseña ${requiredFieldMessage}`),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required(`Confirme su contraseña`),
});
