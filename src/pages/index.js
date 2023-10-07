import Link from "next/link";
export default function LogoPage() {
  return (
    <>
      <h1>logo page</h1>
      <Link href="./home">
        <img alt="logo"></img>
      </Link>
    </>
  );
}
