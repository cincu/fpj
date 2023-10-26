import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../db/clientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "../../../db/models/User";
import dbConnect from "../../../db/connect";
import hashedPassword from "../../../utils/hash";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        await dbConnect();
        if (!credentials.username || !credentials.password) {
          return error;
        }
        const user = await User.findOne({
          username: credentials.username,
          password: credentials.password,
        });

        console.log(`${user}logged in successfully`);

        if (user) {
          return user;
        } else {
          return error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // 2 days
    updateAge: 24 * 60 * 60, //24 hours
  },
  pages: {
    signOut: "/superficial-secret-access",
    error: "/error",
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
