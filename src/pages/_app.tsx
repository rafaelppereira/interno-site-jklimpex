import { Poppins } from "next/font/google";

import "@/styles/globals.css";

// Config Swiper
import "swiper/css";
import "swiper/css/pagination";

// Config Toast
import "react-modal-video/css/modal-video.css";
import { Toaster } from "react-hot-toast";

// Config Font
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: any) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
