import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Formulario.module.css';

export const Formulario = () => {

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect();
    console.log(categoria)

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias por Categorías</h2>

                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
