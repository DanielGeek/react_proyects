import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
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

    async jwt({ token, account, user }) {
    // console.log({ token, account, user });

      if ( account ) {
        token.accessToken = account.access_token;

        switch ( account.type ) {

          case 'oauth':
            // TODO: create user or verify if exist in my DB
            break;

          case 'credentials':
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      // console.log({ session, token, user });

      session.accessToken = token.accessToken as any;
      session.user = token.user as any;

      return session;
    }

  }
}
export default NextAuth(authOptions)