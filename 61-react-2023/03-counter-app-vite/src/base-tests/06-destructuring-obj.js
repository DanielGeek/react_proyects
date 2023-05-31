
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