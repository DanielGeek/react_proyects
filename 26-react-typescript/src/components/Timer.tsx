import { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milisegundos: number
  segundos?: number,
}

export const Timer = ({ milisegundos }: TimerArgs) => {

  const [segundos, setSegundos] = useState(0)
  const ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // cuando se vuelva a ejecutar el useEffect al cambiar la dependencia milisegundos, limpiamos el setInterval
    ref.current && clearInterval(ref.current);

    // la primera vez guarda el dato del setInterval en el hook ref.current
    ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
  }, [milisegundos])
  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
