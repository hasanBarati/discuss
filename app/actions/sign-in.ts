"use server"

import * as auth from '@/app/auth'

export async function SignIn(){
    return auth.signIn("github")
}
