import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";
export default function Home() {
  return (
    <>
      <Image className="logo" src={logo} width={550} alt="Logo Png" />
      <div className="div--intro">
        <Link className="link--navigation" href="./contact-me">
          booking
        </Link>
        <Link className="link--navigation" href="./works">
          works
        </Link>
        {/* <Link
          className="link--navigation"
          href={`/shop?selectedCategory=${data.category}`}
        >
          shop
        </Link> */}
      </div>
    </>
  );
}
