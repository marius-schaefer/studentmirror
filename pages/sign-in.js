import { useState } from "react";
import styles from '../styles/Home.module.css'

import { supabase } from "../client";

export default function SignIn {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function signIn() {
        const {error, data} = await supabase.auth.signIn({
            email
        })
        if (error) {
            console.log({error})
        } else {
            setSubmitted(true )
        }
    }
}