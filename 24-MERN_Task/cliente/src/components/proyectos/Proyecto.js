import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContexT from '../../context/tareas/tareaContext';

export const Proyecto = ({ proyecto }) => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  // funcion para despachar y buscar el proyecto seleccionado por su id
  const { proyectoActual } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContexT);
  const { obtenerTareas } = tareasContext;

  // Función para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); // Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};
