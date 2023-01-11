import React from 'react'
import { InputAnimal } from './InputAnimal';

import { useAnimals } from '../hooks/useAnimals';


export const Mammals = ({ animals }) => {
    const {newAnimal, newAnimals, onChangeAnimalInput, handleKeyPress,} = useAnimals(animals);

    return (
        <>
            <div className={`animal-group ${animals.name}`}>
                {animals.name}
                <InputAnimal
                    className={`animal-input`}
                    type='text'
                    name={animals.name}
                    newAnimal={newAnimal}
                    animal={animals}
                    onChangeAnimalInput={onChangeAnimalInput}
                    handleKeyPress={handleKeyPress}
                />
            </div>
            <br />
            {newAnimals.map((animal, id) => (
                <React.Fragment key={id}>
                    <div className={`mammals-${animal.type}`}>
                        {animal.name}
                        <InputAnimal
                            className={`animal-input`}
                            type='text'
                            name={animal.name}
                            newAnimal={newAnimal}
                            animal={animal}
                            onChangeAnimalInput={onChangeAnimalInput}
                            handleKeyPress={handleKeyPress}
                        />
                        {animal.children.length
                            ? animal.children.map((animalChild, id) => (
                                <div key={id}>{animalChild.name}</div>
                            ))
                            : null
                        }
                    </div>
                    <br />
                </React.Fragment>
            ))}
        </>
    )
}
