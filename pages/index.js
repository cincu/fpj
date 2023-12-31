import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";
export default function Home() {
  return (
    <>
      <div className="logo--container">
        <Image className="logo" src={logo} width={500} alt="Logo Png" />
      </div>
      <div className="div--intro">
        <Link className="link--navigation" href="./contact-me">
          booking
        </Link>
        <Link className="link--navigation" href="./works">
          works
        </Link>
        <Link className="link--navigation" href="/shop">
          shop
        </Link>
      </div>
    </>
  );
}
