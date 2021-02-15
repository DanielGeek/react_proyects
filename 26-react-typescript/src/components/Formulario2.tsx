import { useForm } from '../hooks/useForm'

interface FormData {
  postal: string;
  ciudad: string;
}

export const Formulario2 = () => {

  const { formulario, handleChange } = useForm<FormData>({
    postal: '5550',
    ciudad: 'Puerto Varas',
  })

  const { postal, ciudad } = formulario

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código postal:</label>
        <input
          type="text"
          className="form-control"
          name="postal"
          value={ postal }
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          value={ ciudad }
          onChange={ handleChange }
          />
      </div>

      <pre>{ JSON.stringify(formulario)}</pre>
    </form>
  )
}
