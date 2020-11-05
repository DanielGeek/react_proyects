export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if ((presupuesto / 4) > restante) {
        // verificar si me queda menos del 25%
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > restante) {
        // verificar si me queda menos del 50%
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}