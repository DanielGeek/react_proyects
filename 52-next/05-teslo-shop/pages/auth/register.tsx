import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import { AuthContext } from '../../context/auth/AuthContext';
import { tesloApi } from '../../api';
import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils';

type FormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterPage = () => {

    const router = useRouter();
    const { registerUser } = useContext( AuthContext );

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');

    const onRegisterForm = async( { name, email, password }: FormData ) => {
        
        setShowError(false);
        const { hasError, message } = await registerUser(name, email, password);

        if ( hasError ) {
            setShowError(true);
            setErrorMessage( message! );
            setTimeout(() => setShowError(false), 3000);
            return;
        }

        router.replace('/');
    }
        
    return (
        <AuthLayout title={'Create Account'}>
            <form onSubmit={ handleSubmit(onRegisterForm) } noValidate>
                <Box sx={{ width: 350, padding:'10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Create Account</Typography>
                            <Chip 
                                label={errorMessage}
                                color="error"
                                icon={ <ErrorOutline /> }
                                className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                label="Full name" 
                                variant="filled" 
                                fullWidth
                                { ...register('name', {
                                    required: 'This field is required',
                                    minLength: { value: 2, message: 'min 2 characters' }
                                })}
                                error={ !!errors.name }
                                helperText={ errors.name?.message } 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Email" 
                                variant="filled" 
                                fullWidth
                                { ...register('email', {
                                    required: 'This field is required',
                                    validate: validations.isEmail
                                })}
                                error={ !!errors.email }
                                helperText={ errors.email?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Password" 
                                type='password' 
                                variant="filled" 
                                fullWidth
                                { ...register('password', {
                                    required: 'This field is required',
                                    minLength: { value: 6, message: 'min 6 characters' }
                                })}
                                error={ !!errors.password }
                                helperText={ errors.password?.message } 
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button 
                                type="submit"
                                color="secondary" 
                                className='circular-btn' 
                                size='large' 
                                fullWidth
                            >
                                Register
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href="/auth/login" passHref>
                                <Link underline='always'>
                                    Do you already have an account?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage