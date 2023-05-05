
const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 55333333,
        lat: 14.4444,
        lng: 34.12121212
    }
};

// console.table(person);

const person2 = { ...person };
person2.name = 'Peter';

console.log( person );
console.log( person2 );