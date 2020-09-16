import React, { useState } from 'react';

export const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {

        // setCategories(['HunterXHunter', ...categories]);
        setCategories(cats => [...cats, 'HunterXHunter']);
    }

    return (
        <>
            <h2>GitExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
};