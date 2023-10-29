import { signIn, signOut, useSession } from "next-auth/react";
import SignOutButton from "../components/Login/SignOutButton";
import SignInButton from "../components/Login/SignInButton";

export default function AdminEmailAuth() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return <SignOutButton />;
  }
  return <SignInButton />;
}
