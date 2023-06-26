import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Goku']);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
        </>
    );
};
