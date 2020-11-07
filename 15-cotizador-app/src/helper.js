// Obtiene la diferencia de años
export const obtenerDiferenciaYear = (year) => {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export const calcularMarca = (marca) => {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

// Calcular el tipo de seguro
export const obtenerPlan = (plan) => {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primera letra mayuscula
export const primeraLetrarMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}