import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";

export default function Home() {
  return (
    <>
      <Image className="logo" src={logo} width={750} alt="Logo Png" />
      <div className="div--home">
        <Link className="title--home" href="./contact-me">
          booking
        </Link>
        <Link className="title--home" href="./works">
          works
        </Link>
        <Link className="title--home" href="./shop">
          shop
        </Link>
      </div>
    </>
  );
}
