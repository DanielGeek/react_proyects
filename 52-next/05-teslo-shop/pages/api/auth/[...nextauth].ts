import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [

    Credentials({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Email:', type: 'email', placeholder: 'correo@google.com'  },
        password: { label: 'Password:', type: 'password', placeholder: 'Password'  },
      },
      async authorize(credentials) {
        console.log({credentials});
        

        return { name: 'Daniel', email: 'daniel@google.com', role: 'admin' } as any;
      }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],

  // Callbacks
  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // deprecated
  },

  callbacks: {

  }
}
export default NextAuth(authOptions)