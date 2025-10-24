
// const myArray: (number|string)[] = [1, 2, 3, 4, 5, 6];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [...myArray];

myArray.push(7);
// myArray2.push('hello world');

console.log({ myArray, myArray2 });
