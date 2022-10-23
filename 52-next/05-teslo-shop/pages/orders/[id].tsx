import NextLink from 'next/link';

import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from "../../components/layouts";
import { CartList, OrderSummary } from "../../components/cart";

const OrderPage = () => {
  return (
    <ShopLayout title='Summary of the order 1312121212' pageDescription={'Summary of the order'}>
      <Typography variant='h1' component='h1' >Order: 123ABC</Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pay pending"
        variant="outlined"
        color="error"
        icon={ <CreditCardOffOutlined /> }
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Order was already paid"
        variant="outlined"
        color="success"
        icon={ <CreditScoreOutlined /> }
      />

      <Grid container>
        <Grid item xs={ 12 } sm={ 7 }>
            <CartList />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2'>Summary (3 products)</Typography>
                <Divider sx={{ my:1 }} />

                <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Delivery address</Typography>
                  <NextLink href='/checkout/address' passHref>
                    <Link underline='always'>
                      Edit
                    </Link>
                  </NextLink>
                </Box>

                <Typography>Daniel Ángel</Typography>
                <Typography>123 Some place</Typography>
                <Typography>Puerto Varas, CH</Typography>
                <Typography>Chile</Typography>
                <Typography>+56 123123123</Typography>

                <Divider sx={{ my: 1 }} />

                <Box display='flex' justifyContent='end'>
                  <NextLink href='/cart' passHref>
                    <Link underline='always'>
                      Edit
                    </Link>
                  </NextLink>
                </Box>

                <OrderSummary />

                <Box sx={{ mt: 3 }}>
                  <h1>Pay</h1>

                  <Chip
                    sx={{ my: 2 }}
                    label="Order was already paid"
                    variant="outlined"
                    color="success"
                    icon={ <CreditScoreOutlined /> }
                  />
                </Box>

              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage;