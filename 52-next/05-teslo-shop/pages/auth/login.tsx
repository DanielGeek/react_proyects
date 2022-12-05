import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import { useForm } from 'react-hook-form';

type FormData = {
    email: string,
    password: string,
};

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onLoginUser = ( data: FormData ) => {
        console.log({data});
    }

    return (
        <AuthLayout title={"Get into"}>
            <form onSubmit={ handleSubmit(onLoginUser) }>
                <Box sx={{ width: 350, padding:'10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Log in</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Email" 
                                variant="filled" 
                                fullWidth
                                { ...register('email') } 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Password" 
                                type='password' 
                                variant="filled" 
                                fullWidth
                                { ...register('password') } 
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                color="secondary" 
                                className='circular-btn' 
                                size='large' 
                                fullWidth>
                                Get into
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href="/auth/register" passHref>
                                <Link underline='always'>
                                    You do not have an account?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage