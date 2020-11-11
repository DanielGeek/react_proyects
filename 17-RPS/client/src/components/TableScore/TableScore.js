import React, { Fragment } from 'react';
import TdScore from './TdScore';

const TableScore = ({ rounds }) => {
    return (
        <Fragment>
            <div>
                <h1>Score</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Winner</th>
                            <th>Condition</th>
                            <td>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rounds.map((round, i) => (
                            <TdScore
                                key={i}
                                indice={i + 1}
                                gamer={round.gamer}
                                condition={round.condition}
                                points={round.points}

                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default TableScore;