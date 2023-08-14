import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Site em construção | Qualivida Gestão Saúde</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <section className="bg-maintenance min-h-screen w-full text-white flex items-center justify-center bg-cover bg-center bg-no-repeat  flex-col">
        <div className="bg-white px-8 py-4 rounded-lg border-2 border-zinc-300 shadow-lg">
          <Image
            src="/logo.svg"
            width={250}
            height={250}
            alt="Logo da Qualivida"
          />
        </div>
        <h1 className="mt-4 text-2xl">Site em construção</h1>
        <p className="max-w-md mt-1 font-extralight text-center">
          Em breve com novidades...
        </p>

        <Link
          href="https://api.whatsapp.com/send?phone=554830244370"
          type="button"
          className="bg-white px-4 py-2 flex items-center gap-2 rounded-full text-gray-500 mt-10 hover:brightness-90 transition-all"
          title="Clique para entrar em contato"
          target="_blank"
        >
          <WhatsappLogo />
          Entrar em contato
        </Link>
      </section>
    </>
  );
}
