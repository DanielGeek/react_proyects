console.log(`hola mundo`);

const firtsName = 'Daniel';

// explain let with error

// let

// explain const with error
const lastName = 'Ángel';

// explain let with error
let age = 31;
age = 25;

console.log(firtsName, lastName, age);

// explain scope o ambito de la variable
// explain while don't use var
if(true) {
  const firtsName = 'Juan';
  const lastName = 'Barreto';
  let age = 21;

  console.log(firtsName, lastName, age);
}

console.log(age);
console.log(firtsName, lastName, age);