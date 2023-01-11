import { useState } from "react";
import { animalExistOnTree } from "../utils/helper";

export const useAnimals = (animals) => {
    const [newAnimals, setNewAnimals] = useState(animals.children);
    const [newAnimal, setNewAnimal] = useState('');

    const handleAnimal = (newAnimal, parent) => {
        setNewAnimals((prevTreeData) => {
            prevTreeData.map((animal) => {
                if (animal.name === parent) {
                    const animalExist = animalExistOnTree(animal, newAnimal);

                    if (animal.name === newAnimal.name) return alert(`${newAnimal.name} exists`);
                    if (!animalExist) {
                        return animal.children.push(newAnimal);
                    } else {
                        alert(`${newAnimal.name} exists`);
                    }
                }

                if (parent === 'mammals' && animal.name === 'ape') {

                    const animalExist = animalExistOnTree(animal, newAnimal);

                    if (parent === newAnimal.name) return alert(`${newAnimal.name} exists`);

                    if (!animalExist) {
                        return animal.children.push(newAnimal);
                    } else {
                        alert(`${newAnimal.name} exists`);
                    }
                }
                return animal;
            });
            return [...prevTreeData];
        });
        cleanInput();
    };

    const handleKeyPress = (e, animal) => {
        const { name: parent } = animal;
        if (e.key === 'Enter') {
            if (!e.target.value) return;
            let newAnimal = {
                name: e.target.value,
                parent: animal?.parent,
                type: animal?.type,
            };
            handleAnimal(newAnimal, parent);
        }
    };

    const cleanInput = () => setNewAnimal('');

    const onChangeAnimalInput = (e) => {
        const { name, value } = e.target;
        setNewAnimal({
            [name]: value,
        });
    };

    return {
        newAnimal,
        newAnimals,
        onChangeAnimalInput,
        handleKeyPress,
    }
}