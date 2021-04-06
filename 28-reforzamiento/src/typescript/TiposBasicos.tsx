
export const TiposBasicos = () => {

  const nombre: string = 'Daniel';
  const edad: number = 30;
  const estaActivo: boolean = false;

  const poderes: string[] = []; //['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos Básicos</h3>
      { nombre }, { edad }, { (estaActivo) ? 'activo': 'no activo' }
      <br />
      { poderes.join(', ')}
    </>
  )
}
