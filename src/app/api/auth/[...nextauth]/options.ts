/* import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email", label: "email", placeholder: "Please Enter Your Email" },
                password: { type: "password", label: "password", placeholder: "Please Enter Your Password" }
            },
            async authorize(credentials) {
                const res = await fetch('https://donation-server-six.vercel.app/api/v1/user/login', {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const { data } = await res.json()
                console.log(data)
                // If no error and we have user data, return it
                if (res.ok && data?.user) {
                    console.log(data.user)
                    return data
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
}
 */
