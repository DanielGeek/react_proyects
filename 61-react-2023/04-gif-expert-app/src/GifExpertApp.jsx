import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Goku']);

    const onAddCategory = ( newCategory ) => {

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* <button onClick={ onAddCategory }>Add</button> */}
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
        </>
    );
};
