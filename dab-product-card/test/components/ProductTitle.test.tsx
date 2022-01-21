import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

  test('Then should show the component with title personalized', () => {

    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  test('Then should show the component with the name of the product', () => {

    const wrapper = renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

})