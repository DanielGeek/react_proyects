import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
       <h1>Home Page</h1>

        <h1 className="title">
          {/* Go to <a href="/about">About</a> */}
          Go to<Link href="/about"> About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
