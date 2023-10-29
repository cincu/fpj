import Disclaimer from "@/components/Disclaimer/Disclaimer";
import Link from "next/link";
export default function AboutMe() {
  return (
    <>
      <hr className="breaker--hr" />

      <Link href="/works" className="back--button">
        ↽
      </Link>
      <Disclaimer />
    </>
  );
}
