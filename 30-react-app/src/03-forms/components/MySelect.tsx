import { useField } from "formik"

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // get any other optionals parameters
}

export const MySelect = ( { label, ...props }: Props ) => {

  const [ field, meta ] = useField(props)
  // field have onChage, etc...
  // meta aditional properties how placeholder, text name

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } />
      {
        meta.touched && meta.error && (
          <span className="error">{ meta.error }</span>
        )
      }
    </>
  )
}