import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image src={logo} width={700} alt="Logo Png" />
      <div className="container--home">
        <Link className="title--home" href="./contact-me">
          booking
        </Link>
        <Link className="title--home" href="./collection">
          collection
        </Link>
      </div>
    </div>
  );
}
