import { supabase } from '../client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Issues() {
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
    <div className='flex justify-center bg-newspaper h-screen'>
        <div className='h-screen px-10 w-2/5 bg-secondary rounded-lg h-4/5 mt-10'>
            <div className='flex justify-center py-10'>
                <h1 className='font-pd text-6xl font-bold '>Issues</h1>
            </div> 
            <div className=' px-5 rounded-lg hover:drop-shadow-md space-y-3'>  
                <a href='https://drive.google.com/file/d/1StlpcPOCGEhpIL9t2W8YoPK3JmiAfR1t/view?usp=drivesdk' className='w-full px-0 flex justify-center'>
                    <button className=' w-5/6 bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'> Issue #1 </button>
                </a>
                <a href='https://docs.google.com/document/d/1iFRWD6gaR2S4MQEhJOa2-nVI4iL-Q0OL1Fvy7d6y5I4/edit' className='w-full px-0 flex justify-center'>
                    <button className=' w-5/6 bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'> Issue #3 </button>
                </a>
                
            </div>
        </div>
    </div>
  )
}
