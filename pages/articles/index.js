import { supabase } from '../../client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Articles() {
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
        <div className='bg-newspaper h-screen'>
            <p className='font-sans font-lg font-bold'>Articles</p>
        </div>
    )
}
