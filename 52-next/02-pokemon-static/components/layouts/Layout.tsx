import React from "react"
import Head from "next/head"

import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Daniel Ángel" />
        <meta name="description" content={`Information about pokemon ${ title }`} />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${ title }`} />
        <meta property="og:description" content={`This is the web page about ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
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
