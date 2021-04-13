import { useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

type AuthAction = { type: 'logout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

}

export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <h3>Login</h3>

      <div className="alert alert-info">
        Validando...
      </div>

      <div className="alert alert-danger">
        No autenticado
      </div>

      <div className="alert alert-success">
        Autenticado
      </div>

      <button
        className="btn btn-primary"
      >
        Login
      </button>

      <button
        className="btn btn-danger"
      >
        Logout
      </button>
    </>
  )
}
