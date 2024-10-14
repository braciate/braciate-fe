import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      user_id: string;
      nim_email: string;
      accessToken?: string;
      expired_at?: number;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    accessToken?: string;
    user_id?: string;
    expired_at?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    expired_at?: number;
    error?: "TokenExpired";
  }
}
