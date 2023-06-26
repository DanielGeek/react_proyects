import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Goku']);

    console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
        </>
    );
};
