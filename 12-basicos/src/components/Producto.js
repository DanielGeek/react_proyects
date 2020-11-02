import React from 'react';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {

    const { id, nombre, precio } = producto;

    const seleccionarProducto = id => {
        // busca el producto con el id pasado y retorna un nuevo array con ese obj
        // id[0] para retornar el obj
        const producto = productos.filter(producto => producto.id === id)[0];
        // agrego al state del carrito el nuevo producto
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    // ELimina un producto del carrito
    const eliminarProducto = id => {
        // busco todos los productos distintos a ese id y lo retorno en nuevo array de obj
        const productos = carrito.filter(producto => producto.id !== id);

        // cambio el state del carrito con el nuevo
        agregarProducto(productos)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            { productos
                // si existe la propiedad productos es porque no estamos en el componente de Carrito
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar</button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={() => eliminarProducto(id)}
                    >Eliminar</button>
                )
            }
        </div>);
}
export default Producto;