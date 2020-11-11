import React from 'react';
import { TdWinner } from './TdWinner'

export const WinnerTable = ({Winners}) => {

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
                {Winners.map((winner, i) => (
                    <TdWinner
                        key={i}
                        indice={i + 1}
                        winner={winner.name}

                    />
                ))}
            </tbody>
        </table>

    )
}
