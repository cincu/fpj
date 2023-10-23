import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.local.GOOGLE_ID,
      clientSecret: process.env.local.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
