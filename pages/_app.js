import "./globals.css";
import { SWRConfig } from "swr";
import { RouteGuard } from "../components/RouteGuard";
export default function App({ Component, pageProps }) {
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
      <RouteGuard session={pageProps.session}>
        <Component {...pageProps} />
      </RouteGuard>
    </SWRConfig>
  );
}
