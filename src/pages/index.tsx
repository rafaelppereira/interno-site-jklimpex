import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { scrollPage } from "@/utils/scroll-page";
import { Contact } from "@/components/plus/Contact";
import { Reveal } from "@/components/animation/Reveal";

import {
  X,
  List,
  Phone,
  WhatsappLogo,
  CircleDashed,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";
import { convenios } from "@/utils/content/convenios";

export default function HomePage() {
  const [hasToggleMenuMobile, setHasToggleMenuMobile] = useState(false);

  const refAbout: any = useRef();
  const refBanner: any = useRef();
  const refContact: any = useRef();
  const refServices: any = useRef();
  const refConvenios: any = useRef();
  const refProfessionais: any = useRef();

  return (
    <>
      <Head>
        <title>Início | JRLimpex</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Na JRLimpex, a qualidade é a nossa prioridade número um. Nossa equipe altamente treinada e experiente utiliza os métodos mais avançados e equipamentos de limpeza de alta tecnologia para garantir que suas coifas e cozinhas estejam impecáveis. Além disso, adotamos rigorosos padrões de segurança para proteger tanto os nossos funcionários quanto o seu estabelecimento durante o processo de limpeza. ​"
        />
        <meta name="author" content="JR Limpex" />
        <meta
          name="keywords"
          content="limpeza, coifa, profissional, limpeza de cozinhas, cozinhas, cozinha"
        />
        <meta name="copyright" content="© 2024 JR Limpex" />
        <meta name="robots" content="all" />

        <meta property="og:site_name" content="JR Limpex" />
        <meta property="og:title" content="Conheça o site da JR Limpex" />
        <meta
          property="og:description"
          content="Na JRLimpex, a qualidade é a nossa prioridade número um. Nossa equipe altamente treinada e experiente utiliza os métodos mais avançados e equipamentos de limpeza de alta tecnologia para garantir que suas coifas e cozinhas estejam impecáveis. Além disso, adotamos rigorosos padrões de segurança para proteger tanto os nossos funcionários quanto o seu estabelecimento durante o processo de limpeza."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/C1FeBfmdTrKlZr8rZJPo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <Link
        href="https://api.whatsapp.com/send?phone=5548991541048"
        target="_blank"
        title="Clique para entrar em contato"
        className="fixed right-10 bottom-5 z-50 w-16 h-16 animate-bounce"
      >
        <img src="/whatsapp.png" />
      </Link>

      <header className="fixed left-0 top-0 z-50 w-full">
        <section className="bg-zinc-800 w-full h-[30px] lg:h-[50px] flex items-center ">
          <div className="flex items-center justify-between px-8 max-w-7xl w-full mx-auto ">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="https://www.instagram.com/jrlimpex_/"
                target="_blank"
                className="bg-zinc-700 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Instagram"
              >
                <InstagramLogo size={24} />
              </Link>

              <Link
                href=""
                target="_blank"
                className="bg-zinc-700 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Whatsapp"
              >
                <WhatsappLogo size={24} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm font-light text-white">
              <span className="flex items-center gap-2 border-r pr-4 mr-2">
                <EnvelopeSimple size={20} />
                ailtonjunior1234pereira@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={20} /> (48) 99154-1048
              </span>
            </div>
          </div>
        </section>

        <div className="w-full bg-white border-b-2 border-gray-100">
          <div className="flex items-center justify-between h-[120px] px-8 max-w-7xl mx-auto">
            <figure>
              <img src="/logo.svg" alt="Logo da JRLimpex" />
            </figure>

            <div className="hidden lg:flex items-center text-[15px] text-gray-500 font-light">
              <button
                onClick={() => scrollPage(refBanner, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4 text-primary-500 font-normal"
              >
                Início
              </button>

              <button
                type="button"
                onClick={() => scrollPage(refAbout, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 h-[120px] leading-[120px] px-4"
              >
                Quem somos
              </button>

              <button
                onClick={() => scrollPage(refServices, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Serviços
              </button>

              <button
                onClick={() => scrollPage(refContact, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Contato
              </button>
            </div>

            <Link
              href="https://api.whatsapp.com/send?phone=5548991541048"
              target="_blank"
              title="Clique para entrar em contato"
              className="hidden xl:flex bg-zinc-700 items-center gap-2 text-white px-7 py-3 text-sm rounded-md hover:brightness-90 transition-all"
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
              } md:hidden uppercase transition-all absolute left-0 top-[165px] w-full px-5 py-8 bg-zinc-700 flex flex-col gap-3 text-white`}
            >
              <button
                onClick={() =>
                  scrollPage(refBanner, setHasToggleMenuMobile, true)
                }
              >
                INÍCIO
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollPage(refAbout, setHasToggleMenuMobile, true)
                }
              >
                QUEM SOMOS
              </button>

              <button
                onClick={() =>
                  scrollPage(refServices, setHasToggleMenuMobile, true)
                }
              >
                SERVIÇOS
              </button>

              <button
                onClick={() =>
                  scrollPage(refContact, setHasToggleMenuMobile, true)
                }
              >
                CONTATO
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-[12px] flex items-center justify-center" />
      </header>

      <section
        className="mt-[calc(50px+120px+12px)] w-full rounded-md"
        ref={refBanner}
      >
        <Swiper
          effect="fade"
          spaceBetween={20}
          slidesPerView={1}
          pagination={true}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="w-full h-[350px] md:h-[650px] text-white uppercase bg-zinc-100 bg-banner bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-5xl md:text-8xl font-semibold drop-shadow-md">
                  JR LIMPEX
                </h1>
              </Reveal>
              <Reveal>
                <span className="text-2xl md:text-4xl drop-shadow-md font-medium">
                  Serviços profissionais de limpeza
                </span>
              </Reveal>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-16 md:py-20" ref={refAbout}>
        <div className="container flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="flex-1 md:w-1/2 w-full">
            <Swiper
              effect="fade"
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              autoHeight={true}
              className="default"
              modules={[Autoplay, Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/1.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/2.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/3.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/4.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/6.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
              <SwiperSlide>
                <Reveal>
                  <img
                    src="/5.png"
                    alt="Imagem da JR Limpex"
                    className="w-full h-[500px] object-contain rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1">
            <Reveal>
              <h1 className="sm:text-4xl text-3xl text-zinc-600 font-semibold">
                SOBRE NÓS
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-md sm:text-lg">
                Na JRLimpex, a qualidade é a nossa prioridade número um. Nossa
                equipe altamente treinada e experiente utiliza os métodos mais
                avançados e equipamentos de limpeza de alta tecnologia para
                garantir que suas coifas e cozinhas estejam impecáveis. Além
                disso, adotamos rigorosos padrões de segurança para proteger
                tanto os nossos funcionários quanto o seu estabelecimento
                durante o processo de limpeza.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
        ref={refServices}
      >
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Serviços
            </h2>
          </Reveal>
        </div>

        <div className="container flex flex-col md:flex-row gap-10 mt-20">
          <Swiper
            effect="fade"
            spaceBetween={20}
            slidesPerView={1}
            pagination={true}
            autoHeight={true}
            className="default"
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide className="n2Class">
              <div className="h-[400px] border-b-[1rem] border-zinc-800 overflow-y-auto flex-1 bg-zinc-800 p-6 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-zinc-700 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Limpeza e Manutenção Preventiva para Coifas, Dutos e
                    Tubulações de Exaustão
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    A qualidade do ar em ambientes comerciais e industriais é
                    fundamental para garantir a segurança e o bem-estar de todos
                    os ocupantes. Para assegurar um sistema de exaustão
                    eficiente e livre de riscos, a limpeza e a manutenção
                    preventiva de coifas, dutos e tubulações de exaustão são
                    essenciais.
                    <br />
                    <br />
                    Por que é importante?
                    <br />
                    <br />
                    Segurança contra Incêndios: A acumulação de gordura nas
                    coifas e dutos pode representar um risco significativo de
                    incêndio. A limpeza regular remove resíduos inflamáveis,
                    reduzindo drasticamente a probabilidade de ocorrer um
                    incêndio no sistema de exaustão. <br />
                    <br />
                    Eficiência Energética: Dutos e coifas obstruídos podem
                    comprometer a eficiência do sistema de exaustão, levando a
                    um aumento no consumo de energia. A limpeza preventiva
                    garante que o sistema funcione de maneira otimizada,
                    contribuindo para a eficiência energética e redução de
                    custos operacionais.
                    <br />
                    <br />
                    Qualidade do Ar Interno: A presença de partículas acumuladas
                    nos componentes do sistema de exaustão pode comprometer a
                    qualidade do ar interno. A limpeza regular remove
                    contaminantes, garantindo um ambiente mais saudável para os
                    ocupantes.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[400px] border-b-[1rem] border-zinc-800 overflow-y-auto flex-1 bg-zinc-800 p-6 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-zinc-700 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Limpeza Geral de Cozinhas: Elevando a Higiene e Eficiência
                    no Coração do seu Espaço Culinar
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Uma cozinha limpa não é apenas uma questão de estética, mas
                    é crucial para garantir a segurança alimentar, a eficiência
                    operacional e o bem-estar de todos os envolvidos. Oferecemos
                    serviços especializados de limpeza geral de cozinhas,
                    abrangendo desde os equipamentos até os espaços de
                    preparação, assegurando um ambiente imaculado e propício
                    para a excelência culinária.
                    <br />
                    <br />
                    Nossos Serviços Abrangentes:
                    <br />
                    <br />
                    Limpeza Profunda de Equipamentos: Realizamos a desmontagem e
                    limpeza minuciosa de fogões, fornos, grelhas, exaustores e
                    outros equipamentos, removendo depósitos de gordura e
                    resíduos que possam comprometer o desempenho e a segurança.
                    <br />
                    Higienização de Superfícies e Bancadas: Todas as
                    superfícies, incluindo bancadas, mesas de preparação e áreas
                    de trabalho, são higienizadas de forma rigorosa para
                    prevenir a contaminação cruzada e garantir um ambiente
                    seguro para a manipulação de alimentos.
                    <br />
                    <br />
                    Limpeza de Dutos e Exaustores: Os sistemas de ventilação são
                    fundamentais para manter a qualidade do ar na cozinha.
                    Realizamos a limpeza de dutos e exaustores, removendo
                    acúmulos de gordura e resíduos que podem comprometer a
                    eficiência e representar riscos à segurança.
                    <br />
                    <br />
                    Limpeza de Pisos e Rejuntes: A limpeza profunda de pisos e
                    rejuntes é essencial para prevenir escorregões, quedas e a
                    proliferação de bactérias. Utilizamos produtos adequados
                    para garantir a máxima higiene em todas as áreas.
                    <br />
                    <br />
                    Descarte Adequado de Resíduos: Gerenciamos o descarte
                    responsável de resíduos gerados durante o processo de
                    limpeza, seguindo todas as normas e regulamentações
                    ambientais.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-20" ref={refProfessionais}>
        <div className="container flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <Reveal>
              <span className="uppercase text-secondary-500 font-medium text-lg sm:text-xl">
                Quais são?
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-500">
                Nossas especialidades
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 font-light leading-relaxed text-md sm:text-lg">
                Bem-vindo à JRLimpex, onde a excelência se encontra com a
                limpeza para proporcionar cozinhas impecáveis e seguras. Estamos
                comprometidos em oferecer soluções de limpeza especializadas
                para garantir que sua cozinha não apenas brilhe, mas também
                cumpra os mais altos padrões de higiene.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-zinc-600 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Desengorduramento Profundo
                  </h2>
                  <p className="text-zinc-500">
                    Utilizamos técnicas avançadas e produtos especializados para
                    eliminar resíduos de gordura e sujeira, deixando suas
                    superfícies de cozinha imaculadas.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-zinc-600 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Desinfecção Eficiente
                  </h2>
                  <p className="text-zinc-500">
                    Priorizamos a segurança alimentar por meio de protocolos
                    rigorosos de desinfecção, eliminando bactérias e germes para
                    garantir um ambiente de cozinha higienizado.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-zinc-600 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Manutenção Preventiva
                  </h2>
                  <p className="text-zinc-500">
                    Oferecemos programas personalizados de manutenção
                    preventiva, prolongando a vida útil dos equipamentos de
                    cozinha e reduzindo custos com reparos.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-zinc-600 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Treinamento de Equipe
                  </h2>
                  <p className="text-zinc-500">
                    Nossa equipe é treinada para garantir que cada detalhe,
                    desde áreas de difícil acesso até equipamentos específicos,
                    seja tratado com a máxima atenção.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-zinc-600 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Sustentabilidade Ambiental
                  </h2>
                  <p className="text-zinc-500">
                    Comprometemo-nos com práticas sustentáveis, utilizando
                    produtos eco-friendly sempre que possível e minimizando o
                    impacto ambiental durante nossos serviços.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  border-t-2 border-b-2 border-zinc-200">
        <div className="container flex flex-col md:flex-row items-center gap-20">
          <div className="relative rounded-md shrink-0 w-full sm:w-auto">
            <img
              src="/limpex/foto.jpeg"
              alt="Imagem do médico"
              className="w-full  md:w-[450px] md:h-[500px] aspect-square md:aspect-auto object-cover object-bottom  border-4 border-zinc-200/70"
            />

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">Junior Limpex</h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Responsável técnico
                </p>

                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Proprietário da JRLimpex
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h1 className="text-2xl md:text-3xl text-zinc-500 font-semibold">
                Responsável técnico
              </h1>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-md md:text-lg mt-4 text-zinc-500">
                Olá, sou Junior, o fundador e proprietário da JRLimpex, uma
                empresa dedicada à excelência na limpeza de cozinhas. Com uma
                paixão profunda pelo que faço, meu compromisso é ir além da
                limpeza convencional, proporcionando ambientes de cozinha que
                não apenas brilham, mas também garantem padrões impecáveis de
                higiene e segurança alimentar.
                <br />
                <br />
                Sobre Mim: <br />
                Desde o início, minha jornada no setor de limpeza de cozinhas
                foi impulsionada pela visão de oferecer serviços que transcendem
                as expectativas dos clientes. <br /> Minha experiência prática e
                a compreensão das nuances específicas do ambiente da cozinha me
                permitiram estabelecer a JRLimpex como uma referência em nosso
                campo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div ref={refContact}>
        <Contact />
      </div>

      <footer className="bg-primary-500 border-t-2 border-zinc-200">
        <div className="container ">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-2 py-5 px-6 bg-white rounded-b-2xl">
              <img className="w-20" src="/logo.svg" alt="" />
              <p className="hidden md:block pl-5 text-zinc-500 leading-relaxed">
                Na JRLimpex, a qualidade é a nossa prioridade número um. Nossa
                equipe altamente treinada e experiente utiliza os métodos mais
                avançados e equipamentos de limpeza de alta tecnologia para
                garantir que suas coifas e cozinhas estejam impecáveis. Além
                disso, adotamos rigorosos padrões de segurança para proteger
                tanto os nossos funcionários quanto o seu estabelecimento
                durante o processo de limpeza.
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
                  onClick={() => scrollPage(refAbout, setHasToggleMenuMobile)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Quem somos
                </button>
                <button
                  onClick={() =>
                    scrollPage(refServices, setHasToggleMenuMobile)
                  }
                  className="mt-2 text-center md:text-left font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Serviços
                </button>
                <button
                  onClick={() =>
                    scrollPage(refProfessionais, setHasToggleMenuMobile)
                  }
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Especialidades
                </button>
                <button
                  onClick={() => scrollPage(refContact, setHasToggleMenuMobile)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Contato
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2>Redes sociais</h2>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/jrlimpex_/"
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <InstagramLogo size={24} />
                  Instagram
                </Link>

                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5548991541048"
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
                  href="https://api.whatsapp.com/send?phone=5548991541048"
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Whatsapp
                </Link>
                <Link
                  target="_blank"
                  href="mailto:ailtonjunior1234pereira@gmail.com"
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
                JR Limpex - Todos os direitos reservados | JR Limpex @2023
              </span>
            </Reveal>
            <Reveal>
              <span className="text-sm text-zinc-400 mt-2 font-light">
                Feito por Nitro desenvolvimento
              </span>
            </Reveal>
          </div>
        </div>
      </footer>
    </>
  );
}
