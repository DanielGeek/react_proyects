import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import { wrap } from 'module';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {

        const categorias = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categorias} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    })


})
