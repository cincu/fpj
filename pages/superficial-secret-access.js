import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminEmailAuth() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="div--center">
        <h2 className="login--header">successful login admin</h2>
        <h4>
          you can direct <Link href="/works">here</Link> to ADD, DELETE, EDIT
          works
        </h4>
        <button className="login" onClick={() => signOut()}>
          <span>Sign out</span>
        </button>
      </div>
    );
  }
  return (
    <div className="div--center">
      <button className="login" onClick={() => signIn()}>
        <span>Sign In</span>
      </button>
    </div>
  );
}
