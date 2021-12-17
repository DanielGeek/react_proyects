import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5);

  const handleClick = () => {
      setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );
  }

  useEffect(() => {

    if ( counter < 10 ) return;

    console.log('%cLimit Max Value', 'color: red; background-color: black;');

    gsap.to('h1', { y: -10, duration: 0.2, ease:'ease.out'}).then( () => {
      gsap.to('h1', { y: 0, duration: 1, ease:'bounce.out'});
    });
  }, [counter])

  return (
    <>
      <h1>CounterEffect</h1>
      <h1>{ counter }</h1>

      <button onClick={ handleClick }>
        +1
      </button>
    </>
  )
}
