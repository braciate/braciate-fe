import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        nim_email: { label: "NIM/Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.nim_email || !credentials?.password) return null;

        const URL = process.env.NEXT_PUBLIC_API_URL_DEV + "api/v1/auth/signin";

        try {
          const { data } = await axios.post(
            URL,
            {
              nim_email: credentials.nim_email,
              password: credentials.password,
            },
            {
              headers: { "Content-Type": "application/json" },
            },
          );

          if (data) {
            return {
              id: data.id,
              email: data.email,
              accessToken: data.access_token,
            };
          }
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
