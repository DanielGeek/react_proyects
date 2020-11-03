import React, { useEffect, useState } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {

  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state de citas cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional con operador ternario
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
