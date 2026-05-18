import { Asignatura } from "./asignatura";

export interface MatriculaActiva {
tipo: "ACTIVA";
asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

  export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida por: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}`;

    default:
    const comprobacionExhaustiva: never = estado;
     throw new Error(`Estado no manejado`);
  }
}

const matriculaPrueba: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: [
    {
      id: "ASIG-01",
      nombre: "Programación",
      creditos: 6,
      profesor: "Carlos"
    },
    {
      id: "ASIG-02",
      nombre: "Bases de Datos",
      creditos: 4,
      profesor: "Lucía"
    }
  ]
};

console.log(generarReporte(matriculaPrueba));