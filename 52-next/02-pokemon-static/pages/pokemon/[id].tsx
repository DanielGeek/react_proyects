import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/layouts'

interface Props {
  pokemon: any;
}

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query);


  return (
    <Layout title='Some Pokemon'>
      <h1>Hello World</h1>
    </Layout>
  )
}

export default PokemonPage