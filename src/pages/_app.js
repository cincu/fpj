import "@/styles/globals.css";
// import useSWR from "swr";
// //useSWR FETCH ALL THE DATA HERE AND PASS PROPS DOWN
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // const { data: images, error, isLoading } = useSWR("/api/user/123", fetcher);

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return <Component {...pageProps} />;
}
