import type { NextPage } from 'next'
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop'} pageDescription={'Find the best teslo products here'}>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      <ProductList
        products={ initialData.products as any }
      />
    </ShopLayout>
  )
}

export default Home
