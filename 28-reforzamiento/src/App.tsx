// import { TiposBasicos } from "./typescript/TiposBasicos"
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React </h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <Contador />
    </div>
  )
}

export default App;