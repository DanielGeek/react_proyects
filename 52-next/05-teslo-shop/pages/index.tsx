import type { NextPage } from 'next'
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop'} pageDescription={'Find the best teslo products here'}>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>
    </ShopLayout>
  )
}

export default Home
