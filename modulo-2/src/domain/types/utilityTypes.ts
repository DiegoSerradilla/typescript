interface Servidor {
  ip: string;
  puerto: number;
  estado: string;
}

type DatosActualizacionServidor = Partial<Servidor>;

type ServidorSoloLectura = Readonly<Servidor>;

type ServidorSinEstado = Omit<Servidor, "estado">;

type SoloEstado = Pick<Servidor, "estado">;

const actualizacion: DatosActualizacionServidor = {
  estado: "activo"
};

console.log(actualizacion);

type EstadoServidores = Record<string, string>;

const servidores: EstadoServidores = {
  servidor1: "activo",
  servidor2: "mantenimiento",
  servidor3: "apagado"
};

console.log(servidores);