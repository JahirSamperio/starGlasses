import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAppointmentSchema } from "../../../validations/userAppointmentSchema";

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userAppointmentSchema) });

  const [cita, setCita] = useState({
    fecha_hora: "",
    motivo: "",
    antecedentes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita({ ...cita, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault;
    console.log(cita);
  };
  return (
    <Container>
      <Typography>Solicite una cita</Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          {...register("fecha_hora")}
          label="Fecha y hora"
          name="fecha_hora"
          type="datetime-local"
          value={cita.fecha_hora}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText={errors.fecha_hora?.message}
          error={!!errors.fecha_hora}
        />
        <TextField
          {...register("motivo")}
          label="Motivo de la cita"
          name="motivo"
          type="text"
          value={cita.motivo}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText={errors.motivo?.message}
          error={!!errors.motivo}
        />
        <TextField
          {...register("antecedentes")}
          label="Antecedentes"
          name="antecedentes"
          type="text"
          value={cita.antecedentes}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText={errors.antecedentes?.message}
          error={!!errors.antecedentes}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "20px", alignSelf: "center" }}
        >
          Solicitar
        </Button>
      </form>
    </Container>
  );
}
