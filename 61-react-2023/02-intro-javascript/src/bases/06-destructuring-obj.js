// Destructuring

const person = {
    name: 'Tony',
    age: 45,
    password: 'Ironman',
};

// const { name: renameName, age, password } = person;

// console.log( renameName );
// console.log( age );
// console.log( password );

const useContext = ({ password, name, age, range = 'Captain' }) => {
    // console.log( name, age, range );

    return {
        passwordName: password,
        anios: age,
        latlng: {
            lat: 14.1212,
            lng: -12.1212
        }
    }
}

const { passwordName, anios, latlng: { lat, lng } } = useContext( person );
console.log( passwordName, anios );
console.log( lat, lng );