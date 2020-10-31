const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexión
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional on error
    xhr.onerror = (error) => jerect(error);

    // send
    xhr.send();
});

descargarUsuarios(20)
    .then(
        personas => personas.filter((persona) => console.log(persona)),
        error => console.error(
            new Error(`Hubo un error ${error}`)
        )
    )