
function greet(name: string): string {
    return `Hello ${name}`;
}

const greet2 = (name: string): string => {
    return `Hello ${name}`;
}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'The_Father123'
    };
}

const getUser2 = () => {
    return {
        uid: 'ABC-123',
        username: 'The_Father123'
    };
};

const user = getUser();
const user2 = getUser2();
console.log(user, user2);