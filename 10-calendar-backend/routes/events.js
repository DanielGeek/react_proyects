
// Todas tienen que pasar por la validación

const router = require("./auth");

// Obtener eventos
router.get('/', getEventos );

// Crear un nuevo evento
router.post('/', crearEvento );

// Actualizar Evento
router.put('/:id', actualizarEvento );

// Borrar evento
router.delete('/:id', eliminarEvento );