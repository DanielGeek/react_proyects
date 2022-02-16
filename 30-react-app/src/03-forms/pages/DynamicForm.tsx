import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';


const initialValues: { [key: string]: any } = {};

for ( const input of formJson ) {
  initialValues[ input.name ] = input.value;
};


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={ (values) => {
          console.log(values)
        }}
      >
        { (formik) => (
          <Form noValidate>
            { formJson.map(({ type, name, placeholder, label }) => {
              return <MyTextInput
                        key={name}
                        type={( type as any )}
                        name={name}
                        label={label}
                        placeholder={placeholder} />
            })}
            <span>Hello World</span>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
