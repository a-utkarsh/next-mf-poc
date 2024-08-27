import RemoteComp from "@/components/fedcomp/module";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>This is remote application</h1>
      <RemoteComp />
    </div>
  )
}
