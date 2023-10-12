import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo_1.png";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image src={logo} width={700} alt="Logo Png" />
      <Link style={{ display: "block" }} href="./contact-me">
        contact
      </Link>
      <Link style={{ display: "block" }} href="./works">
        works
      </Link>
    </div>
  );
}
