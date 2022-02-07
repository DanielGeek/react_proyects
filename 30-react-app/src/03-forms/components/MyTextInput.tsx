import { useField } from "formik"

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any; // get any other optionals parameters
}

export const MyTextInput = ( { label, ...props }: Props ) => {

  const [ field, meta ] = useField(props)

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input className="text-input" { ...field } { ...props }></input>
      {
        meta.touched && meta.error && (
          <span className="error">{ meta.error }</span>
        )
      }
    </>
  )
}