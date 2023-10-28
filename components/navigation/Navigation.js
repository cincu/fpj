import Link from "next/link";
import logo from "../../public/logo_1.png";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="div--navigation">
      <Image className="logo" src={logo} width={200} alt="Logo Png" href="/" />
      <Link className="navigation--links" href="/works">
        works
      </Link>
      <Link className="navigation--links" href="/contact-me">
        booking
      </Link>
    </div>
  );
}
