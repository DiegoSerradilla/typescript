export interface Estudiante {
  readonly id: string;
  nombreCompleto: string;
  email: string;
  fechaUltimoAcceso?: Date;  // La ? sirve para decir q no es obligatorio
}