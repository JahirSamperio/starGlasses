import * as yup from "yup";

export const userAppointmentSchema = yup.object().shape({
  fecha_hora: yup
    .date()
    .min(new Date(), "No puede ser fecha y hora actuales ni pasadas")
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
        const day = value.getDay();
        return day >= 1 && day <= 6; // lunes:1 sabado:6
      }
    )
    .test(
      "is-not-more-than-three-weeks",
      "No se permiten solicitudes con mas de 3 semanas de anticipación",
      function(value){
        const today = new Date();
        const threeWeeksLater = new Date(today.getTime() + (3 * 7 * 24 * 60 * 60 * 1000)); // 3 semanas en milisegundos
        threeWeeksLater.setHours(0, 0, 0, 0); 
        return value <= threeWeeksLater;
      }
    ),
  motivo: yup.string().required("Motivo es un campo requerido"),
  antecedentes: yup.string(),
});
