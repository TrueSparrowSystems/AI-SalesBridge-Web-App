import { ConnectProvider } from "@/providers/ConnectProvider";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ConnectProvider>
      <Component {...pageProps} />;
    </ConnectProvider>
  );
}
