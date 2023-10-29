import "./globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const navigationRender = router.pathname !== "/";
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
      {/* {navigationRender && <Navigation />} */}

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  );
}
