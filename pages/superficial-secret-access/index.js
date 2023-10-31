import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./AdminEmailAuth.module.css";
export default function AdminEmailAuth() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="div--center">
        <h3>successful login admin</h3>
        <h4>
          you can direct <Link href="/works">here</Link> to ADD, DELETE, EDIT
          works
        </h4>
        <button className="login" onClick={() => signOut()}>
          <span className={styles.loginSpan}>Sign out</span>
        </button>
      </div>
    );
  }
  return (
    <div className="div--center">
      <button className="login" onClick={() => signIn()}>
        <span className={styles.loginSpan}>Sign In</span>
      </button>
    </div>
  );
}
