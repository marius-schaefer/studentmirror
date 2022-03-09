import '../styles/index.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../client'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
  const router = useRouter()
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        router.push('/')
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })
    checkUser()
    return () => {
      authListener.unsubscribe()
    }
  }, [])
  
  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }

  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
    
    /*<div className='bg-newspaper space-x-4'>
      <nav>
        <Link href='/'>
          <a className='text-2xl font-pt text-bold px-20'>Home</a>
        </Link>
        {
          authenticatedState === 'not-authenticated' && (
            <Link href='/sign-in'>
              <a className='text-3xl font-bold'>Sign In</a>
            </Link>
          )
        }
        <Link href='/'>
          <a className='text-2xl font-pt text-bold px-20'>Test</a>
        </Link>
        <Link href='/'>
          <a className='text-2xl font-pt text-bold px-20'>Test</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>*/
    )
}

export default MyApp
