
// Functions in JS
// const greeting = function( name ) {
//     return `Hello, ${ name }`;
// }

const greeting2 = ( name ) => {
    return `Hello, ${ name }`;
}

const greeting3 = ( name ) => `Hello, ${ name }`;

const greeting4 = () => `Hello World`;

// console.log(greeting('Goku'));

console.log(greeting2('Vegeta'));
console.log(greeting3('Goku'));
console.log(greeting4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'The_Father123'
});

const user = getUser();
console.log(user);

const getActiveUser = ( name ) => ({
    uid: 'ABC421',
    username: name
});

const activeUser = getActiveUser('Daniel');
console.log( activeUser );