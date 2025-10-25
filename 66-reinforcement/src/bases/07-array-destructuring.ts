
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters + numbers);
