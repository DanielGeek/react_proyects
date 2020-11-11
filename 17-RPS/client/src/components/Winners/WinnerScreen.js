import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { winnersStartLoading } from '../../actions/RPS';
import { WinnerTable } from './WinnerTable';
import './WinnerTable.css';

export const WinnerScreen = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(winnersStartLoading());
        
    }, [dispatch])

    const { Winners, loading } = useSelector(state => state.RPS);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    
                    <h1>Winners</h1>
                    { !loading
                        ?
                            Winners.length 
                            ? <WinnerTable Winners={Winners} />
                            : <h1>There are no winners</h1>
                        : <h1>Loading...</h1>
                    }

                </div>
            </div>
        </div>
    )
}
