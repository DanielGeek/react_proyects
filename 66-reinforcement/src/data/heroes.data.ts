interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel';
enum Owner {
    DC = 'DC',
    Marbel = 'Marvel',
}

const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marbel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marbel,
    },
    {
        id: 6,
        name: 'Green Lantern',
        owner: Owner.DC,
    }
];
