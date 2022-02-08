import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox } from '../components/MyCheckbox';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';

import '../styles/styles.css';

export const FormikAbstractation = () => {

  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ ( values ) => {
          console.log( values );
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
                          .max(15, 'Must be have 15 characters or less')
                          .required('Required'),
            lastName: Yup.string()
                          .max(15, 'Must be have 15 characters or less')
                          .required('Required'),
            email: Yup.string()
                          .email('Email don`t have a correct format')
                          .required('Required'),
            terms: Yup.boolean()
                      .oneOf([true], 'You must accept the conditions'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This option is not allowed')
                        .required('Required')
          })
        }>

          {(formik) => (
              <Form>
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  placeholder="Daniel"
                />

                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Barreto"
                />

                <MyTextInput
                  label="Email Address"
                  name="email"
                  placeholder="dangel@gmail.com"
                  type="email"
                />

                <MySelect label="job Type" name="jobType">
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-sr">It Senior</option>
                    <option value="it-jr">It Junior</option>
                </MySelect>

                <MyCheckbox label="Termns & Conditions" name="terms" />

                <button type="submit">Submit</button>

              </Form>
            )
          }

      </Formik>
    </div>
  )
}