import React from 'react';

export const InputAnimal = ({
    className,
    type,
    name,
    newAnimal,
    onChangeAnimalInput,
    animal,
    handleKeyPress,
}) => {
    return (
        <>
            <input
                className={className}
                type={type}
                name={name}
                value={newAnimal.name}
                onChange={onChangeAnimalInput}
                onKeyDown={(e) => handleKeyPress(e, animal)}
            />
            <br />
        </>
    );
};
