import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";

import {
  List,
  Phone,
  FacebookLogo,
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <section className="bg-primary-500 w-full h-[30px] lg:h-[50px] flex items-center ">
        <div className="flex items-center justify-between px-8 max-w-7xl w-full mx-auto ">
          <div className="hidden lg:flex items-center gap-2">
            <Link
              target="_blank"
              href="https://instagram.com/qualivida__saude?igshid=MzRlODBiNWFlZA=="
              className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
              title="Clique para ir para o nosso Instagram"
            >
              <InstagramLogo size={24} />
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com/qualividagestaoemsaude"
              className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
              title="Clique para ir para o nosso Facebook"
            >
              <FacebookLogo size={24} />
            </Link>

            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=554830244370"
              className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
              title="Clique para ir para o nosso Whatsapp"
            >
              <WhatsappLogo size={24} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm font-light text-white">
            <span className="flex items-center gap-2 border-r pr-4 mr-2">
              <EnvelopeSimple size={20} />
              atendimento@clinicasantte.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={20} /> (48) 3024-4370
            </span>
          </div>
        </div>
      </section>

      <div className="w-full bg-white border-b-2 border-gray-100">
        <div className="flex items-center justify-between h-[120px] px-8 max-w-7xl mx-auto">
          <figure>
            <img
              className="h-[120px] lg:h-[140px] aspect-square select-none"
              src="/logo.svg"
              alt="Qualivida Gestão em Saúde"
            />
          </figure>

          <div className="hidden lg:flex items-center text-[15px] text-gray-500 font-light">
            <Link
              href=""
              className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4 text-primary-500 font-normal"
            >
              Início
            </Link>

            <button
              type="button"
              className="uppercase border-b-4 border-primary-500 h-[120px] leading-[120px] px-4"
            >
              Quem somos
            </button>
            <Link
              href=""
              className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
            >
              Missão e Visão
            </Link>
            <Link
              href=""
              className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
            >
              Terceirização em Saúde
            </Link>
            <Link
              href=""
              className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
            >
              Serviços
            </Link>
          </div>

          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=554830244370"
            title="Clique para entrar em contato"
            className="hidden xl:flex bg-secondary-500 items-center gap-2 text-white px-7 py-3 text-sm rounded-md hover:brightness-90 transition-all"
          >
            <WhatsappLogo size={20} />
            Entrar em contato
          </Link>

          <button
            type="button"
            title="Clique para entrar em contato"
            className="flex lg:hidden items-center gap-2 text-zinc-500 p-3 text-sm rounded-md hover:brightness-90 transition-all"
          >
            <List size={30} />
          </button>
        </div>
      </div>

      <div className="bg-gray-100 h-[12px] flex items-center justify-center" />
    </header>
  );
}
