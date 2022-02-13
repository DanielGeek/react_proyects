import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: '',
        }}
        onSubmit={ (values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                        .min(2, 'Must be has 3 characters or more')
                        .max(15, 'Must be has 15 characters or less')
                        .required('Required'),
            email: Yup.string()
                        .email('Check the correct format')
                        .required('Required'),
            password1: Yup.string()
                        .min( 6, 'Min 6 letters')
                        .required('Required'),
            password2: Yup.string()
                        .oneOf([ Yup.ref('password1') ], 'The Passwords are not equals')
                        .required('Required')
          })
        }
      >
          { ({ handleReset }) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                placeholder="Daniel"
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="john@google.com"
              />
              <MyTextInput
                label="Password"
                name="password1"
                type="password"
                placeholder="*******"
              />
              <MyTextInput
                label="Password 2"
                name="password2"
                type="password"
                placeholder="*******"
              />
              <button type="submit">Create</button>
              <button type="button" onClick={ handleReset }>Reset Form</button>
            </Form>
          )}

      </Formik>
    </div>
  )
}