# RPS-Juego
Implementación usando React JS del tradicional juego de piedra papel y tijera con el stack MERN.

Uso de hooks useState, UseSelector, dispatch, redux, enzyme, react-router, el front es creado con react, el back en node con express y la bd es con mongodb
Además se uso localStorage para mantener los datos del usuario y de cada ronda

# Intalación.
luego de bajar el repositorio te posicionas dentro de la carpeta client y server y ejecutas lo siguientes comandos
`npm i`
`npm start`

# Como funciona?
Inicias en una pantalla donde te solicita tu nombre, al darle start comienza en juego tendrás disponible 3 cartas Pidra, Papel y Tijera, para jugar solo debes hacer click en una de las cartas, luego el segundo jugador el cual es simulado por una computadora hara su jugada y mostrara el resultado, en la parte derecha saldra cada ronda, si uno de los 2 jugadores gana 3 veces sera el ganador y el juego te pédira iniciar nuevamente.

Existe un link hacia los ganadores guardados en la bd de mongo que se muestran en la ruta /winners

# url de la app para probarla en línea
https://rpsgamer.herokuapp.com/