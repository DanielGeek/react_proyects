
import { useRef, useState, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    // llamado al API
    cargarUsuarios();
  }, [])

  const cargarUsuarios = async() => {
    try {
      const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
          page: paginaRef.current
        }
      })

      if( resp.data.data.length > 0 ) {
        setUsuarios( resp.data.data );
        paginaRef.current ++;
      } else {
        alert('No hay más registros');
      }
    } catch (error) {
      console.log('error ', error);
    }
  }

  return {
    usuarios,
    cargarUsuarios
  }

}
