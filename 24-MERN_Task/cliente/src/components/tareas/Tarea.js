import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

export const Tarea = ({ tarea }) => {

  // Extraer proyectos del state activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  // Extraer el proyecto
  const [proyectoActual] = proyecto;

  const tareaEliminar = id => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre} </p>

      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
            <button type="button" className="incompleto">
              Incompleto
            </button>
          )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
