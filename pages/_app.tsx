import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "@component/components/Loading";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 10000);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </>
      )}
    </>
  );
}
