import React from 'react';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {

    const { id, nombre, precio } = producto;

    const seleccionarProducto = id => {
        // busca el producto con el id pasado y retorna un nuevo array con ese obj
        // id[0] para retornar el obj
        const producto = productos.filter(producto => producto.id === id)[0];
        console.log(producto);
    }
    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button
                type="button"
                onClick={() => seleccionarProducto(id)}
            >Comprar</button>
        </div>);
}
export default Producto;