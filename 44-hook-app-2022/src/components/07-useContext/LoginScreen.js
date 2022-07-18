import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        className="btn btn-primary"
        onClick={ () => setUser({
          id: 123,
          name: 'Daniel',
          email: 'daniel@gmail.com'
        })}
      >
        Esteblecer usuario
      </button>
    </div>
  )
}
