import React from 'react';
import Products from '../components/Products';
import initialStateReactHooks from '../initialState-react-hooks';

const Home = () => {
  return <Products products={initialStateReactHooks.products} />;
};

export default Home;
