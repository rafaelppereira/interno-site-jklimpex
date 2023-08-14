import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import { Header } from "@/components/Header";
import "@/styles/globals.css";

// Config Swiper
import "swiper/css";
import "swiper/css/pagination";

import "react-modal-video/css/modal-video.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
