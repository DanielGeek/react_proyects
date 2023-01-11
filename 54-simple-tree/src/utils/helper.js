export const animalExistOnTree = (animal, newAnimal) => {
	return animal.children.find((anim) => anim.name === newAnimal.name);
};
