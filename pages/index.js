import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_1.png";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR("/api/works", fetcher);

  useEffect(() => {
    if (data) {
      console.log("Data fetched on Home page:", data); // Debug log
      localStorage.setItem("worksData", JSON.stringify(data));
    }
  }, [data]);

  if (error) return <div>Failed to load data in the background</div>;

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
        <Link className="link--navigation" href="/about-me">
          about
        </Link>
      </div>
    </>
  );
}
