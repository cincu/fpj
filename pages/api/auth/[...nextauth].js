import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../db/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "../../../db/models/User";
import dbConnect from "../../../db/connect";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Me",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        await dbConnect();
        if (!credentials.username || !credentials.password) {
          return null;
        }

        const user = await User.findOne({
          username: credentials.username,
          password: credentials.password,
        });

        console.log(`${user}logged in successfully`);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signOut: "/admin-access",
    error: "/",
  },
  debug: true,
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user, token }) {
      session.user.userId = token?.sub ? token?.sub : user.id;

      return session;
    },
  },
};
export default NextAuth(authOptions);
