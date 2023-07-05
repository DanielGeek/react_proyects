import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        setCategories( categories => [ inputValue, ...categories ]);
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
