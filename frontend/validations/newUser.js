import * as yup from "yup";

const requiredFieldMessage = "Este es un campo obligatorio";

export const newUserSchema = yup.object().shape({
  nombre: yup.string().required(requiredFieldMessage),
  apellidoPaterno: yup.string().required(requiredFieldMessage),
  apellidoMaterno : yup.string().required(requiredFieldMessage),
  telefono: yup
    .string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "El formato del teléfono no es válido")
    .required(requiredFieldMessage),
  email: yup.string
    .email("Correo electronico invalido")
    .required(requiredFieldMessage),
  password: yup.string().required(requiredFieldMessage),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required(requiredFieldMessage),
});
