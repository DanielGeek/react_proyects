import React from 'react';

export const TdWinner = ({indice, winner}) => {
    return (
        <>
            <tr>
                <td>{indice}</td>
                <td>{winner}</td>
            </tr>
        </>

    );
}
