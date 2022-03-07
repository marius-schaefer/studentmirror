import { useState } from "react";
import styles from '../styles/Home.module.css'

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
            <div>
                <h1>Please check your email to sign in</h1> 
            </div>
        )//UPDATE THE POST FORM UI HERE ^^^
    }
    // Default UI State:
    return (
        <div>
            <main>
                <h1>
                    Sign In
                </h1>
                <input className='border-black'
                    onChange={e => setEmail(e.target.value)}
                    style={{margin: 10}}
                />
                <button onClick={() => signIn()}>Sign In</button>
            </main>
        </div>
    )
}