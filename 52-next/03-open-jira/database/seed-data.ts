interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData:SeedData = {
  entries: [
    {
      description: 'Pending: Excepteur mollit nisi eu do sunt sit ut ut mollit quis aliquip.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In-Progress: Eu mollit eiusmod est elit in duis enim id.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finished: Consectetur aliquip incididunt sit laboris aute sunt do ex Lorem minim ullamco.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}