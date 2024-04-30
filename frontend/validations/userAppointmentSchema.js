import * as yup from "yup";

export const userAppointmentSchema = yup.object().shape({
  fecha_hora: yup
    .mixed() // Acepta varios tipos de entrada
    .test('is-date', 'Formato de fecha NO  válido', value => {
        // Verifica si el valor es una cadena no vacía
        return typeof value === 'string' && value.trim() !== '';
    })
    .test('parse-date', 'Fecha y hora no válidas', function(value) {
        // Intenta parsear la cadena como una fecha
        const parsedDate = new Date(value);
        // Comprueba si la fecha parseada es válida
        return !isNaN(parsedDate.getTime());
    })
    .test(
      "is-not-today-or-past",
      "La fecha y hora no puede ser en el pasado ni igual al día actual",
      function (value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // hora 00:00
        return value > today;
      }
    )
    .test(
      "is-weekday",
      "Solo se permiten citas de lunes a sábado",
      function (value) {
        const date = new Date(value)
        const day = date.getDay();
        return day >= 1 && day <= 6; // lunes:1 sabado:6
      }
    )
    .test(
      "is-not-more-than-three-weeks",
      "No se permiten solicitudes con mas de 3 semanas de anticipación",
      function(value){
        const today = new Date();
        const threeWeeksLater = new Date(today.getTime() + (3 * 7 * 24 * 60 * 60 * 1000)); // 3 semanas en milisegundos ☠☠☠
        threeWeeksLater.setHours(0, 0, 0, 0); 
        return value <= threeWeeksLater;
      }
    ),
  motivo: yup.string().required("Motivo es un campo requerido"),
  antecedentes: yup.string(),
});