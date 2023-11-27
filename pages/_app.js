import "./globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import MySidebar from "@/components/MySidebar/MySidebar";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo_1.png";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "../public/ShoppingCartIcon.js";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const navigationRender = router.pathname !== "/";
  const [isCartFull, setIsCartFull] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState("shoppingCart", []);

  useEffect(() => {
    if (cartItems?.length) setIsCartFull(true);
  }, [cartItems]);
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
      {navigationRender && (
        <div>
          <MySidebar />
          <Link className="openbtn shoppingcart" href="/cart">
            <ShoppingCartIcon isFull={isCartFull} />
          </Link>
        </div>
      )}
      {navigationRender && (
        <>
          <Link href="/">
            <Image
              className="logo--small"
              src={logo}
              width={200}
              alt="Logo Png"
            />
          </Link>
          <hr />
        </>
      )}
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Footer />
    </SWRConfig>
  );
}
