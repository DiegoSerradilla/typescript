# Arquitectura del proyecto

En este módulo se han utilizado interfaces para definir la estructura de entidades como Estudiante y Asignatura. Esto ayuda a mantener un código más organizado y evitar errores con las propiedades de los objetos.

También se han utilizado uniones discriminadas para controlar los diferentes estados de una matrícula. Gracias a esto, TypeScript puede identificar automáticamente qué propiedades pertenecen a cada estado.

Para las respuestas de la API se ha usado una interfaz genérica llamada RespuestaAPI<T>. Esto permite reutilizar la misma estructura con distintos tipos de datos sin repetir código.

Además, se han utilizado utility types como Partial, Readonly, Omit, Pick y Record para modificar estructuras de datos de forma más flexible y reutilizable.

Por último, se ha implementado el tipo never para asegurar que todos los estados posibles sean controlados correctamente dentro de los switch.