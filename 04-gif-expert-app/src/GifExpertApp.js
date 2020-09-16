import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {

    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory />
            <hr />

           
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