import React from 'react';

const TdScore = ({ indice, gamer, condition, points }) => {
    return (
        <>
            <tr>
                <td>{indice}</td>
                <td>{gamer}</td>
                <td>{condition}</td>
                <td>{points}</td>
            </tr>
        </>

    );
}

export default TdScore;