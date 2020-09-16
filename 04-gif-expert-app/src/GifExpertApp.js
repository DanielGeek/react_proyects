import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

           
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>
        </>
    )
};