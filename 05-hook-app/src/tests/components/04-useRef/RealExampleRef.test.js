import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<RealExampleRef />);
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        
    })
    
})
