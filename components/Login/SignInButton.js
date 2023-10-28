import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInButton() {
  return (
    <div>
      <button className="login" onClick={() => signIn()}>
        <span>Sign In</span>
      </button>
    </div>
  );
}
