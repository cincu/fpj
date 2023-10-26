import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";

export default function Home() {
  return (
    <div className="div--home">
      <Image className="logo" src={logo} width={700} alt="Logo Png" />
      <Link className="title--home" href="./contact-me">
        booking
      </Link>
      <Link className="title--home" href="./collection">
        collection
      </Link>
    </div>
  );
}
