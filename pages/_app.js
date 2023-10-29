import "./globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import MySidebar from "@/components/MySidebar/MySidebar";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo_1.png";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const navigationRender = router.pathname !== "/";
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      {navigationRender && <MySidebar />}
      {navigationRender && (
        <Link href="/">
          <Image
            className="logo--small"
            src={logo}
            width={200}
            alt="Logo Png"
          />
        </Link>
      )}
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  );
}
