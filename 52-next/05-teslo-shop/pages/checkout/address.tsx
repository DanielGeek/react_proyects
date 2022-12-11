import { GetServerSideProps } from 'next'
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ShopLayout } from "../../components/layouts";
import { countries } from '../../utils';

type FormData = {
    firstName : string;
    lastName  : string;
    address   : string;
    address2? : string;
    zip       : string;
    city      : string;
    country   : string;
    phone     : string;
}


const AddressPage = () => {
  return (
    <ShopLayout title='Address' pageDescription={"Confirm destination address"}>
      <Typography variant='h1' component='h1'>Address</Typography>

      <Grid container spacing={ 2 } sx={{ mt: 2 }}>

        <Grid item xs={12} sm={6}>
          <TextField label='Name' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Last Name' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Address' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Address 2 (optional)' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Zip Code' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='City' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select
              variant='filled'
              label='Country'
              value={'VEN'}
            >
              {
                countries.map( country => (
                  <MenuItem
                      key={ country.code } 
                      value={ country.code }
                    >{ country.name }
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Phone' variant='filled' fullWidth />
        </Grid>

      </Grid>


      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
        <Button color="secondary" className="circular-btn" size="large">
          Checkout order
        </Button>
      </Box>

    </ShopLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  
//   const { token = '' } = req.cookies;
//   let isValidToken = false;

//   try {
//       await jwt.isValidToken( token );
//       isValidToken = true;
//   } catch (error) {
//       isValidToken = false;
//   }

//   if ( !isValidToken ) {
//       return {
//           redirect: {
//             destination: '/auth/login?p=/checkout/address',
//             permanent: false,
//           }
//       }
//   }

//   return {
//       props: {
        
//       }
//   }
// }

export default AddressPage;