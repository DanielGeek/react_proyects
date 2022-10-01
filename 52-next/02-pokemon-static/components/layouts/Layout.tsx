import Head from "next/head"
import React from "react"
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Daniel Ángel" />
        <meta name="description" content={`Information about pokemon ${ title }`} />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
