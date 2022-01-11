import { findByEmail, verifyPassword } from "../../../models/user";
import NextAuth from "next-auth";
import { getSession } from "next-auth/react";

import CredentialsProvider from "next-auth/providers/credentials";

export const getSessionID = async (req, res) => {
  const session = await getSession({ req });

  res.end();
};

export default NextAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const userInDb = await findByEmail(credentials.username);

        if (
          userInDb &&
          (await verifyPassword(credentials.password, userInDb.hashedPassword))
        )
          return userInDb;

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, isNewUser }) {
      if (token && !token.role) {
        const user = await findByEmail(token.email);
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      if (user && session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    pages: {
      signIn: "/login",
    },
  },
});
