const name = 'Daniel';
const lastName = 'Angel';

const fullName = `${ name } ${ lastName } ${ 1 + 1 }`;

console.log(fullName);

function getGreeting(name) {
    return 'Hello ' + name;
}

console.log(`This is a text: ${ getGreeting( name ) }`);