import { useSession } from "next-auth/react";
import SignOutButton from "../components/Login/SignOutButton";
import Navigation from "@/components/Navigation/Navigation";

import SignInButton from "../components/Login/SignInButton";

export default function AdminEmailAuth() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return <SignOutButton />;
  }
  return (
    <div>
      <Navigation />
      <SignInButton />
    </div>
  );
}
