import NextLink from 'next/link';

import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { CartList, OrderSummary } from "../../components/cart";

const SummaryPage = () => {
  return (
    <ShopLayout title='Order Summary' pageDescription={'Summary of the order'}>
      <Typography variant='h1' component='h1' >Summary of the order</Typography>

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
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Confirm order
                  </Button>
                </Box>

              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage;