/**
 * @jest-environment jsdom
*/

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render the Footer component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render of title', () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  });
});

describe('Footer Snapshot', () => {
  test('Test the UI Footer component', () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
