import Head from "next/head";
import { useRef, useState } from "react";

import { Autoplay } from "swiper";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CircleDashed,
  EnvelopeSimple,
  Eye,
  FacebookLogo,
  HandPointing,
  InstagramLogo,
  List,
  Phone,
  Play,
  WhatsappLogo,
  X,
} from "phosphor-react";

import { Reveal } from "@/components/animation/Reveal";
import Link from "next/link";
import { Contact } from "@/components/plus/Contact";

export default function HomePage() {
  const [hasOpenModalWatchVideo, setHasOpenModalWatchVideo] = useState(false);
  const [hasToggleMenuMobile, setHasToggleMenuMobile] = useState(false);

  const refBanner: any = useRef();
  const refAbout: any = useRef();
  const refMissionAndVision: any = useRef();
  const refTerceirization: any = useRef();
  const refServices: any = useRef();

  function handleScroll(refOffsetTop: any, close?: boolean) {
    window.scroll({
      top: refOffsetTop.current.offsetTop - 182,
      behavior: "smooth",
    });

    if (close) {
      setHasToggleMenuMobile(false);
    }
  }

  return (
    <>
      <Head>
        <title>Início | Qualivida Gestão em Saúde</title>
      </Head>

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
                atendimento@qualividagestaosaude.com
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
              <button
                onClick={() => handleScroll(refBanner)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4 text-primary-500 font-normal"
              >
                Início
              </button>

              <button
                type="button"
                onClick={() => handleScroll(refAbout)}
                className="uppercase border-b-4 border-white hover:border-primary-500 h-[120px] leading-[120px] px-4"
              >
                Quem somos
              </button>

              <button
                onClick={() => handleScroll(refMissionAndVision)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Missão e Visão
              </button>
              <button
                onClick={() => handleScroll(refTerceirization)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Terceirização em Saúde
              </button>
              <button
                onClick={() => handleScroll(refServices)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Serviços
              </button>
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
              onClick={() => setHasToggleMenuMobile(!hasToggleMenuMobile)}
              className="flex lg:hidden items-center gap-2 text-zinc-500 p-3 text-sm rounded-md hover:brightness-90 transition-all"
            >
              {hasToggleMenuMobile ? <X size={30} /> : <List size={30} />}
            </button>

            <div
              className={`${
                hasToggleMenuMobile
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } md:hidden transition-all absolute left-0 top-[165px] w-full px-5 py-8 bg-primary-500 flex flex-col gap-3 text-white uppercase`}
            >
              <button onClick={() => handleScroll(refBanner)}>Início</button>

              <button
                type="button"
                onClick={() => handleScroll(refAbout, true)}
              >
                Quem somos
              </button>

              <button onClick={() => handleScroll(refMissionAndVision, true)}>
                Missão e Visão
              </button>
              <button onClick={() => handleScroll(refTerceirization, true)}>
                Terceirização em Saúde
              </button>
              <button onClick={() => handleScroll(refServices, true)}>
                Serviços
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-[12px] flex items-center justify-center" />
      </header>

      <ModalVideo
        isOpen={hasOpenModalWatchVideo}
        channel="custom"
        onClose={() => setHasOpenModalWatchVideo(!hasOpenModalWatchVideo)}
        url="https://media.graphassets.com/A9rWFoFyQiKGytaG4W1Q"
        allowFullScreen={false}
      />

      <section
        className="mt-[calc(50px+120px+12px)] w-full  rounded-md container"
        ref={refBanner}
      >
        <Swiper
          effect="fade"
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative group">
              <button
                type="button"
                onClick={() =>
                  setHasOpenModalWatchVideo(!hasOpenModalWatchVideo)
                }
                className="opacity-0 transition-all invisible group-hover:opacity-100 group-hover:visible absolute rounded-b-xl z-20 flex items-center justify-center left-0 top-0 bg-zinc-700/20 w-full h-full"
              >
                <Play size={70} weight="fill" className=" text-white" />
              </button>

              <video
                muted
                autoPlay
                src="https://media.graphassets.com/A9rWFoFyQiKGytaG4W1Q"
                className="h-full w-full rounded-b-xl border-4 border-zinc-100"
              />

              <div className="absolute z-10 flex items-center gap-2 left-5 bottom-5 bg-secondary-500 text-white text-sm px-4 py-2 rounded-md">
                <HandPointing size={20} />
                Clique para assistir o vídeo
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-16 md:py-20" ref={refAbout}>
        <div className="container flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="flex-1 w-full ">
            <Reveal>
              <img
                src="/qualivida/alan_nicole_roberta.jpg"
                alt="Imagem dos proprietários da Qualivida"
                className="w-full h-full object-cover rounded-lg border-4 border-zinc-200 z-10"
              />
            </Reveal>
          </div>
          <div className="flex-1">
            <Reveal>
              <h1 className="sm:text-4xl text-3xl text-zinc-600 font-semibold">
                Quem somos
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-md sm:text-lg">
                A Qualivida Gestão em Saúde foi fundada em Julho de 2017 com a
                finalidade de prestar serviços de terceirização para o setor de
                saúde, como consultórios, clínicas e hospitais, estabelecidos na
                Grande Florianópolis.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
        ref={refMissionAndVision}
      >
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Missão e Visão
            </h2>
          </Reveal>
        </div>

        <div className="container flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex-1 bg-primary-500 p-7 sm:p-10 rounded-md">
            <Reveal>
              <div className="w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                <CircleDashed size={23} />
              </div>
              <h1 className="mt-6 text-white text-2xl sm:text-3xl">Missão</h1>
            </Reveal>
            <Reveal>
              <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                Oferecer soluções individualizadas de Gestão em Saúde para
                nossos parceiros, proporcionando o máximo em performance,
                modernizando processos e reduzindo custos, atuando de forma
                responsável, com a finalidade de fazer prosperar
                progressivamente o negócio de nossos parceiros.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 bg-primary-500 p-7 sm:p-10 rounded-md">
            <Reveal>
              <div className="w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                <Eye size={23} />
              </div>
              <h1 className="mt-6 text-white text-2xl sm:text-3xl">Visão</h1>
            </Reveal>
            <Reveal>
              <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                Ser referencial como empresa de Gestão em Saúde, reconhecida
                como a melhor opção por consultórios, clínicas e hospitais pela
                excelência em nossos serviços e vínculo com nossos parceiros.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20" ref={refTerceirization}>
        <div className="container flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <Reveal>
              <span className="uppercase text-secondary-500 font-medium text-lg sm:text-xl">
                O que é?
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-500">
                Terceirização em Saúde
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 font-light leading-relaxed text-md sm:text-lg">
                Terceirização é a contratação de empresa para a realização de
                serviços específicos dentro do processo produtivo da empresa
                contratante. De forma simplificada a empresa contratada será a
                intermediadora do serviço e as relações trabalhistas serão entre
                o trabalhador e a empresa prestadora de serviços, e não com a
                contratante. O conceito de terceirização prevê que a empresa
                contratada deve realizar os serviços com organização própria,
                autonomia técnica e jurídica, cumprindo o objeto do contrato.
                <br />
                <br />
                Assim, cada empresa é responsável pela contratação e remuneração
                de seus funcionários, e pelo cumprimento de suas obrigações
                trabalhistas e previdenciárias com seus respectivos empregados.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 ">
            <Reveal>
              <h1 className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-semibold">
                Quais os benefícios de terceirizar <br /> processos produtivos
                e/ou operacionais?
              </h1>
            </Reveal>

            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    A terceirização de serviços possibilita priorizar a
                    atividade fim (core-business) da empresa
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Reduz custos com mão de obra e estrutura organizacional,
                    encargos trabalhistas, rescisões de contratos, férias,
                    faltas, licenças médicas, turn over, FGTS, INSS e ações
                    trabalhistas
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Moderniza processos através da reorganização e
                    especialização da empresa contratada
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Qualificação dos profissionais para cada setor terceirizado,
                    pelo constante investimento em capacitação dos nossos
                    colaboradores
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Otimização do tempo, proporcionando à empresa contratante
                    maior foco nas estratégias de performance e crescimento
                  </h2>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="container mt-20 md:mt-28 ">
          <div className="bg-zinc-100/50 gap-20 border-2 border-zinc-100 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
            <div className="flex-1 w-full">
              <Reveal>
                <img
                  src="/qualivida/nicole.jpg"
                  alt="Imagem da Sócia Nicole Soares da Qualivida Gestão em Saúde"
                  className="h-[300px] object-cover rounded-lg border-4 border-zinc-200 z-10"
                />
              </Reveal>
            </div>
            <div className="flex-1">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-500">
                  Quanto custa?
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-zinc-600 font-light leading-relaxed text-sm sm:text-md md:text-lg">
                  As necessidades de terceirização das empresas são exclusivas
                  de cada negócio. Com soluções individualizadas de acordo com
                  cada necessidade, garantimos redução de custos se comparados
                  aos custos de contratação e manutenção da folha de pagamento
                  de colaboradores contratados.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
        ref={refServices}
      >
        <div className="container flex flex-col-reverse md:flex-row gap-16 items-start">
          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Pré-anáise das guias para identificar e corrigir
                    inconformidades
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Digitação das guias em sistema apropriado
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Envio do faturamento físico ou eletrônico conforme
                    calendário de entrega
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Apresentação das faturas aos convênios em suas datas
                    previstas
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Emissão de relatórios de faturamento detalhando previsão de
                    recebimento por mês
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    6
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Provisão do fluxo de caixa mensal
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    7
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Conferência e recuperação de eventuais glosas
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    8
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Melhorar tempo de recebimento e perda zero
                  </h2>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="flex-1 md:sticky md:top-[550px]">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-zinc-500">
                Faturamento médico
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
                Nulla incididunt velit non culpa. Nulla adipisicing ipsum ut ex
                occaecat dolore nisi est enim mollit esse fugiat laboris
                adipisicing. Do adipisicing est incididunt ad ullamco ad ad
                culpa veniam consectetur eu commodo dolor.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[550px]">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-zinc-500">
                Agendamento de consultas
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
                Nulla incididunt velit non culpa. Nulla adipisicing ipsum ut ex
                occaecat dolore nisi est enim mollit esse fugiat laboris
                adipisicing. Do adipisicing est incididunt ad ullamco ad ad
                culpa veniam consectetur eu commodo dolor.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Secretária capacitada para excelência no atendimento
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Número de telefone exclusivo
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Atendimento personalizado para cada médico/ consultório/
                    clínica
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Agendamento via WhatsApp
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Número de WhatsApp próprio com a logo da clínica
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    6
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Atendimento Humanizado
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    7
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Mensagens eletrônicas de confirmação de consultas
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    8
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Mensagens manuais de confirmação de consultas
                  </h2>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200">
        <div className="container flex flex-col-reverse md:flex-row gap-16 items-start">
          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Solicitação e acompanhamento de autorização de consultas,
                    medicamentos e procedimentos
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Orientações aos pacientes quanto aos documentos necessários
                    para autorização de procedimentos (prescrição, pedido
                    médico, exames, etc)
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Credenciamento de convênios para diversas especialidades
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Credenciamento de convênios para medicamentos
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Credenciamento de convênios para procedimentos
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    6
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Negociações atrativas quanto ao volume de atendimentos e
                    margem operacional
                  </h2>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="flex-1 md:sticky md:top-[550px]">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-zinc-500">
                Relacionamento com Convênios
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
                Nulla incididunt velit non culpa. Nulla adipisicing ipsum ut ex
                occaecat dolore nisi est enim mollit esse fugiat laboris
                adipisicing. Do adipisicing est incididunt ad ullamco ad ad
                culpa veniam consectetur eu commodo dolor.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[550px]">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-zinc-500">
                Gestão Administrativa e Financeira
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
                Nulla incididunt velit non culpa. Nulla adipisicing ipsum ut ex
                occaecat dolore nisi est enim mollit esse fugiat laboris
                adipisicing. Do adipisicing est incididunt ad ullamco ad ad
                culpa veniam consectetur eu commodo dolor.
              </p>
            </Reveal>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Análise para melhoria da margem operacional e payback
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-primary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Negociação com fornecedores para reduzir custos fixos e
                    variáveis
                  </h2>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200">
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Gerência Qualivida
            </h2>
          </Reveal>
        </div>

        <div className="container mt-10 flex flex-col md:flex-row gap-16">
          <div className="flex-1 h-[500px] relative rounded-md">
            <Reveal>
              <img
                src="/qualivida/alan_retrato.jpg"
                alt="Imagem de Alan Bub Cabral"
                className="h-full w-full object-cover object-bottom  border-4 border-zinc-200/70"
              />
            </Reveal>

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">Alan Bub Cabral</h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  MBA em Marketing <br /> – Fundação Getúlio Vargas – FGV
                </p>
                <p className="text-xs mt-1 text-zinc-200 leading-relaxed">
                  Administração <br /> – Universidade do Vale do Itajaí –
                  UNIVALI
                </p>
                <p className="text-xs mt-1 text-zinc-200 leading-relaxed">
                  Gestão Hospitalar <br /> – Universidade Anhembi Morumbi
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex-1 h-[500px] relative rounded-md">
            <Reveal>
              <img
                src="/qualivida/nicole_retrato.jpg"
                alt="Imagem de Nicole Soares"
                className="h-full w-full object-cover  border-4 border-zinc-200/70"
              />
            </Reveal>

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">Nicole Soares</h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  Administração <br /> – Universidade Estácio de Sá
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex-1 h-[500px] relative rounded-md">
            <Reveal>
              <img
                src="/qualivida/roberta_retrato.jpg"
                alt="Imagem de Roberta Soares Bub Cabral"
                className="h-full w-full object-cover  border-4 border-zinc-200/70"
              />
            </Reveal>

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">
                  Roberta Soares Bub Cabral
                </h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  Gestão de Recursos Humanos <br /> – Universidade Estácio de Sá
                </p>
                <p className="text-xs mt-1 text-zinc-200 leading-relaxed">
                  Gestão da Qualidade <br /> – Universidade Estácio de Sá
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-primary-500 border-t-2 border-zinc-200">
        <div className="container ">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-2 py-5 px-6 bg-white rounded-b-2xl">
              <img className="w-20" src="/logo.svg" alt="" />
              <p className="hidden md:block pl-5 text-zinc-500 leading-relaxed">
                A Qualivida Gestão em Saúde foi fundada em Julho de 2017 com a
                finalidade de prestar serviços de terceirização para o setor de
                saúde, como consultórios, clínicas e hospitais, estabelecidos na
                Grande Florianópolis.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="flex-1 flex justify-center ">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2 className="text-xl font-medium">Menu</h2>
                <button
                  onClick={() => handleScroll(refBanner)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Início
                </button>
                <button
                  onClick={() => handleScroll(refAbout)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Quem somos
                </button>
                <button
                  onClick={() => handleScroll(refMissionAndVision)}
                  className="mt-2 text-center md:text-left font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Missão e Visão
                </button>
                <button
                  onClick={() => handleScroll(refTerceirization)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Terceirização em Saúde
                </button>
                <button
                  onClick={() => handleScroll(refServices)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Serviços
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2>Redes sociais</h2>
                <Link
                  target="_blank"
                  href="https://instagram.com/qualivida__saude?igshid=MzRlODBiNWFlZA=="
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <InstagramLogo size={24} />
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/qualividagestaoemsaude"
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <FacebookLogo size={24} />
                  Facebook
                </Link>
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=554830244370"
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <WhatsappLogo size={24} />
                  Whatsapp
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2>Contato</h2>
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=554830244370"
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Whatsapp
                </Link>
                <Link
                  target="_blank"
                  href="mailto:atendimento@qualividagestaosaude.com"
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  E-mail
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 mt-10 flex flex-col items-center justify-center">
            <Reveal>
              <span className="text-sm text-zinc-200 font-light text-center md:text-left block">
                Sapiens Assessoria Empresarial Ltda – EPP CNPJ:
                41.801.848/0001-05 | Qualivida Gestão em Saúde
              </span>
            </Reveal>
            <Reveal>
              <span className="text-sm text-zinc-400 mt-2 font-light">
                Desenvolvido por Alpha tecnologia
              </span>
            </Reveal>
          </div>
        </div>
      </footer>
    </>
  );
}
