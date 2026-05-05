export function calcularMedia(numeros: number[]): number | null {

    if (numeros.length === 0) {
        return null;
    }

    let suma: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]!;
    }

    return suma / numeros.length;
}
export function calcularMediana(numeros: number[]): number | null {

    if (numeros.length === 0) {
        return null;
    }

    const ordenados = [...numeros].sort((a, b) => a - b);

    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1]! + ordenados[mitad]!) / 2;
    } else {
        return ordenados[mitad]!;
    }
}

export function filtrarAtipicos(numeros: number[], limite: number): number[] {

    const media = calcularMedia(numeros);

    if (media === null) {
        return [];
    }

    return numeros.filter(numero => {
        return Math.abs(numero - media) <= limite;
    });
}