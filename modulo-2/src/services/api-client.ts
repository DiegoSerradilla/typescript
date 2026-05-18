export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

export async function obtenerRecurso<T>(
  endpoint: string
): Promise<RespuestaAPI<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        codigoEstado: 200,
        exito: true,
        datos: {} as T
      });
    }, 1000);
  });
}
interface Cliente {
  id: number;
  empresa: string;
}

async function probarAPI() {
  const respuesta = await obtenerRecurso<Cliente>("clientes");

  console.log(respuesta);
}

probarAPI();