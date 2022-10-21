import type { NextPage } from 'next'
import { CardActionArea, CardMedia, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';

initialData

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop'} pageDescription={'Find the best teslo products here'}>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products</Typography>

      <Grid container spacing={4}>
        {
          initialData.products.map( product => (
            <Grid item xs={ 6 } sm={ 4 } key={ product.slug }>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={`products/${ product.images[0] }` }
                  alt={ product.title }
                />
              </CardActionArea>
            </Grid>
          ))
        }
      </Grid>
    </ShopLayout>
  )
}

export default Home
