import { signOut, signIn, useSession } from "next-auth/react";
import { btn, logout, login } from "../components/Login/AuthButton.module.css";
import Link from "next/link";
export default function AdminEmailAuth() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <h2>successful login admin</h2>
        <h4>
          you can direct <Link href="/collection">here</Link> to ADD, DELETE,
          EDIT works
        </h4>
        <button className={`${btn} ${logout}`} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button className={`${btn} ${login}`} onClick={() => signIn()}>
        Verify
      </button>
    </>
  );
}
