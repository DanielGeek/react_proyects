import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`Heroe with id ${id} not found`);
    // }

    return hero;
};

// console.log(getHeroById(1));

/**
 * getHeroesByOwner => Hero[]
 * Filter heroes by owner
 * @param Owner - DC | Marvel
 * @returns Array of heroes filtered by owner
 */

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter(hero => hero.owner === owner);

    return heroesByOwner;
};
