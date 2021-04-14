import { useEffect } from "react";
import { reqResApi } from '../api/reqRes';

export const Usuarios = () => {

  useEffect(() => {
    // llamado al API
    reqResApi.get('/users')
      .then( resp => {
        console.log(resp.data.data);
      })
      .catch( console.log );
  }, [])

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </>
  )
}
