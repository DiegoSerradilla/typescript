export interface Estudiante {
  readonly id: string;
  nombreCompleto: string;
  email: string;
  fechaUltimoAcceso?: Date;
}

const alumno1: Estudiante = {
  id: "EST-001",
  nombreCompleto: "Diego Serradilla",
  email: "diego@gmail.com"
};