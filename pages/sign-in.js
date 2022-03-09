import { useState } from "react";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import { supabase } from "../client";

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function signIn() {
        if (!email) return // ADD FORM VALIDATION HERE
        const {error, data} = await supabase.auth.signIn({
            email
        })
        if (error) {
            console.log({error})
        } else {
            setSubmitted(true )
        }
    }
    //Submitted UI State:
    if (submitted) {
        return (
            <div className='bg-newspaper  h-screen font-sans text-3xl font-bold'>
                <div className='flex justify-center pt-10'>
                    <Image width={1000} height={300} src={'/largelogo.svg'} alt='Student Mirror Logo'/>
                </div>
                <div className="flex justify-center pt-10">
                    <h1 classeName=''>Please check your email to sign in!</h1> 
                </div>
            </div>
        )//UPDATE THE POST FORM UI HERE ^^^
    }
    // Default UI State:
    return (
        <div className='bg-newspaper h-screen flex justify-center'>
            <div className="bg-secondary rounded-lg w-4/12 h-4/6 mt-10 p-5">
                <main>
                    <div className='flex justify-center pt-10'>
                        <Image width={1000} height={300} src={'/largelogo.svg'} alt='Student Mirror Logo'/>
                    </div>
                    <h1 className='text-lg font-sans font-bold flex justify-center pt-10'>
                        Please enter your email below:
                    </h1>
                    <div className="flex justify-center flex-wrap">
                        <input type='email' placeholder='Email' className=' w-5/6 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ' onChange={e => setEmail(e.target.value)} style={{margin: 10}}/>
                        <button className=' w-5/6 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  ' onClick={() => signIn()}>Sign In</button>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}