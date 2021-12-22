import { findByEmail, verifyPassword } from "../../../models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { token } from "morgan";

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
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log(token.sub);
      if (token && !token.role) {
        const user = await findByEmail(token.email);
        token.role = user?.role;
      }
      console.log("jwt end");
      return token;
    },
    async session({ session, user, token }) {
      console.log("session begin");

      if (token && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      if (user && session.user) {
        session.user.id = user.id;
      }
      console.log("session end");
      return session;
    },
    pages: {
      signIn: "/login",
    },
  },
});
