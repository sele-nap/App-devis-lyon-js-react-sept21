import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  findByEmail,
  hashPassword,
  verifyPassword,
} from "../../../models/user";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await findByEmail(credentials.username);
        if (user && verifyPassword(credentials.password, user.hashedPassword)) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
