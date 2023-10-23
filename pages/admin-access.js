import { signOut, signIn, useSession } from "next-auth/react";
import { btn, logout, login } from "../components/Login/AuthButton.module.css";

export default function AdminEmailAuth() {
  const { data: session, user } = useSession();

  if (session && user === "admin") {
    return (
      <>
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
