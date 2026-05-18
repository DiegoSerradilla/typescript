export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: string[];
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
      return "Estado desconocido";
  }
}

const matriculaPrueba: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: ["Programación", "Bases de Datos"]
};

console.log(generarReporte(matriculaPrueba));