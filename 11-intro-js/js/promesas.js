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
        personas => imprimirHTML(personas),
        error => console.error(
            new Error(`Hubo un error ${error}`)
        )
    );

const imprimirHTML = (personas) => {

    let html = ``;
    personas.forEach(persona => {
        console.log(persona)
        html += `
            <li>
                Nombre: ${persona.name.first} ${persona.name.last}
                País: ${persona.nat}
                Imagen:
                    <img src="${persona.picture.medium}">
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}

