import { calcularMedia } from "./math-utils";
const datos = [10, 20, 30, 40];
const resultado = calcularMedia(datos);
console.log("La media es:", resultado);
import { calcularMediana } from "./math-utils";
const mediana = calcularMediana(datos);
console.log("La mediana es:", mediana);
import { filtrarAtipicos } from "./math-utils";
const filtrados = filtrarAtipicos([10, 12, 11, 13, 200], 20);
console.log("Sin atípicos:", filtrados);
//# sourceMappingURL=index.js.map