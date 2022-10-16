import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode;
}

export const Layout:React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px'}}>
          { children }
      </main>
    </>
  )
}
