import Counter from "../components/Counter";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>This is host application</h1>
    <Counter />
    </div>
  )
}
