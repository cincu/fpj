import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function SignOutButton() {
  return (
    <div className="div--center">
      <h2>successful login admin</h2>
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
