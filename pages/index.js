import { supabase } from '../client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    fetchLogInStatus()
  }, [])

  async function fetchLogInStatus() {
    const logInStatus = await supabase.auth.user()
    if (!logInStatus) {
      router.push('/sign-in')
    }
    return
  }

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold">Test Succesful</h1>
        <h2 className="text-3xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </main>
    </div>
  )
}
