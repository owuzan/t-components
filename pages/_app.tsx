import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppWrapper from "@/components/AppWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
