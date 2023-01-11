import animals from './data.json';
import { Mammals } from '../components/Mammals';

import './index.css';

export default function Tree() {

    return (
        <div className='tree'>
            <Mammals animals={animals} />
        </div>
    );
}
