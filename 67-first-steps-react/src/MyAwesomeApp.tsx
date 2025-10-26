import type { CSSProperties } from "react";

const firstName = 'Daniel';
const lastName = 'Ángel';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Venezuela',
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>

            <p>{favoriteGames}</p>
            <p>{2 + 2}</p>

            <p>{isActive ? 'Active' : 'Inactive'}</p>

            <p
                style={myStyles}
            > {JSON.stringify(address)}</p >
        </>
    )
}
