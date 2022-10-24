import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"

const LoginPage = () => {
  return (
    <AuthLayout title={"Get into"}>
      <Box sx={{ widht: 350, padding:'10px 20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Log in</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="email" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Password" type='password' variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color="secondary" className='circular-btn' size='large' fullWidth>
                Get into
            </Button>
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='end'>
            <NextLink href='/auth/register' passHref>
                <Link underline='always'>
                    You do not have an account?
                </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage