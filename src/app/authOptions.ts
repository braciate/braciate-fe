import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";
import jwt from "jsonwebtoken";

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
            }
          );

          if (data) {
            return {
              id: data.id,
              email: data.email,
              accessToken: data.access_token,
              expired_at: data.expired_at,
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
        token.expired_at = user.expired_at;

        try {
          const decodedToken = jwt.decode(token.accessToken as string) as {
            id: string;
            exp: number;
          } | null;
          if (decodedToken && decodedToken.id) {
            token.expired_at = decodedToken.exp;
            token.user_id = decodedToken.id;
          }
        } catch (error) {
          console.error("Failed to decode access token:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.error === "TokenExpired") {
        return {} as any;
      }

      if (session.user) {
        session.user.accessToken = token.accessToken as string;
        session.user.expired_at = token.expired_at as number;
        session.user.user_id = token.user_id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 3 * 60 * 60,
  },
};
