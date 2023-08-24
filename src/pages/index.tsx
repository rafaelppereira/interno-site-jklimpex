import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { scrollPage } from "@/utils/scroll-page";
import { Contact } from "@/components/plus/Contact";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonQueries } from "@/components/ButtonQueries";

import {
  X,
  List,
  Phone,
  FacebookLogo,
  WhatsappLogo,
  CircleDashed,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";
import { convenios } from "@/utils/content/convenios";
import { servicesContent } from "@/utils/content/servicos";

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
        <title>Início | Clínica Santté</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A Santté Saúde foi idealizada para oferecer o melhor para você e para toda sua família Primamos pelo atendimento humanizado, conforto e qualidade! ​"
        />
        <meta name="author" content="Clínica Santté" />
        <meta
          name="keywords"
          content="clinica, clínica, saúde, saude, santté, Santté"
        />
        <meta name="copyright" content="© 2024 Clínica Santté" />
        <meta name="robots" content="all" />

        <meta property="og:site_name" content="Clínica Santté" />
        <meta property="og:title" content="Conheça o site da clínica Santté" />
        <meta
          property="og:description"
          content="A Santté Saúde foi idealizada para oferecer o melhor para você e para toda sua família Primamos pelo atendimento humanizado, conforto e qualidade!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/BSbZ7x31SqmJXdajL7Ut"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <ButtonQueries />

      <header className="fixed left-0 top-0 z-50 w-full">
        <section className="bg-primary-500 w-full h-[30px] lg:h-[50px] flex items-center ">
          <div className="flex items-center justify-between px-8 max-w-7xl w-full mx-auto ">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href=""
                target="_blank"
                className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Instagram"
              >
                <InstagramLogo size={24} />
              </Link>

              <Link
                href=""
                target="_blank"
                className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Facebook"
              >
                <FacebookLogo size={24} />
              </Link>

              <Link
                href=""
                target="_blank"
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
                <Phone size={20} /> (48) 9999-9999
              </span>
            </div>
          </div>
        </section>

        <div className="w-full bg-white border-b-2 border-gray-100">
          <div className="flex items-center justify-between h-[120px] px-8 max-w-7xl mx-auto">
            <figure>
              <img
                className="h-[120px] lg:h-[120px] aspect-square select-none"
                src="/logo.svg"
                alt="Clínica Santté"
              />
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
                onClick={() =>
                  scrollPage(refProfessionais, setHasToggleMenuMobile)
                }
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Especialistas
              </button>
              <button
                onClick={() => scrollPage(refConvenios, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Convênios
              </button>

              <button className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4">
                Estética
              </button>

              <button
                onClick={() => scrollPage(refContact, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Contato
              </button>
            </div>

            <Link
              href=""
              target="_blank"
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
              <button
                onClick={() =>
                  scrollPage(refBanner, setHasToggleMenuMobile, true)
                }
              >
                Início
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollPage(refAbout, setHasToggleMenuMobile, true)
                }
              >
                Quem somos
              </button>

              <button
                onClick={() =>
                  scrollPage(refServices, setHasToggleMenuMobile, true)
                }
              >
                Serviços
              </button>
              <button
                onClick={() =>
                  scrollPage(refProfessionais, setHasToggleMenuMobile, true)
                }
              >
                Especialistas
              </button>
              <button
                onClick={() =>
                  scrollPage(refConvenios, setHasToggleMenuMobile, true)
                }
              >
                Convênios
              </button>

              <button>Estética</button>

              <button
                onClick={() =>
                  scrollPage(refContact, setHasToggleMenuMobile, true)
                }
              >
                Contato
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
                  Cardiologia
                </h1>
              </Reveal>
              <Reveal>
                <span className="text-2xl md:text-4xl drop-shadow-md font-medium">
                  Consulta de exames
                </span>
              </Reveal>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full  h-[350px] md:h-[650px] text-white uppercase bg-zinc-100 bg-nutricaoBanner bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-5xl md:text-8xl font-semibold drop-shadow-md">
                  Nutrição
                </h1>
              </Reveal>
              <Reveal>
                <span className="text-2xl mt-2 block md:text-4xl drop-shadow-md font-medium">
                  Clínica e esportiva
                </span>
              </Reveal>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-16 md:py-20" ref={refAbout}>
        <div className="container flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="flex-1 w-full ">
            <Reveal>
              <img
                src="/santte/image_about.png"
                alt="Imagem da Clínica Santté"
                className="w-full h-full object-cover rounded-lg "
              />
            </Reveal>
          </div>
          <div className="flex-1">
            <Reveal>
              <h1 className="sm:text-4xl text-3xl text-zinc-600 font-semibold">
                SOBRE NÓS
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-md sm:text-lg">
                A Santté Saúde foi idealizada para oferecer o melhor para você e
                para toda sua família Primamos pelo atendimento humanizado,
                conforto e qualidade! ​ <br />
                <br />
                Somos uma Equipe de Profissionais Especializados nas Áreas da
                Saúde e Bem estar: Cardiologia, Cirurgião vascular, Estética
                avançada, Nutrição e Psicologia. ​ <br />
                <br />​ Um novo espaço em Palhoça SC! Agende a Sua Consulta!
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
            className="default "
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {servicesContent.map((item, index) => {
              return (
                <SwiperSlide key={index} className="n2Class">
                  <div className="flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                    <Reveal>
                      <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                        <CircleDashed size={23} />
                      </div>
                      <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                        Atendimento médico
                      </h1>
                    </Reveal>
                    <Reveal>
                      <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        pellentesque diam erat morbi sed diam feugiat. Eu
                        habitasse commodo justo mauris dictum leo ut nisl
                        blandit. Pretium hendrerit feugiat morbi pellentesque.
                        Elementum at adipiscing aliquam integer rutrum.
                      </p>
                    </Reveal>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide>
              <div className="flex-1 bg-rose-500 p-7 sm:p-10 text-left rounded-md">
                <Reveal>
                  <div className="w-11 h-11 bg-rose-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Procedimentos
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                    pellentesque diam erat morbi sed diam feugiat. Eu habitasse
                    commodo justo mauris dictum leo ut nisl blandit. Pretium
                    hendrerit feugiat morbi pellentesque. Elementum at
                    adipiscing aliquam integer rutrum.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Atendimento remoto
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                    pellentesque diam erat morbi sed diam feugiat. Eu habitasse
                    commodo justo mauris dictum leo ut nisl blandit. Pretium
                    hendrerit feugiat morbi pellentesque. Elementum at
                    adipiscing aliquam integer rutrum.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Atendimento médico
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                    pellentesque diam erat morbi sed diam feugiat. Eu habitasse
                    commodo justo mauris dictum leo ut nisl blandit. Pretium
                    hendrerit feugiat morbi pellentesque. Elementum at
                    adipiscing aliquam integer rutrum.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-1 bg-rose-500 p-7 sm:p-10 text-left rounded-md">
                <Reveal>
                  <div className="w-11 h-11 bg-rose-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Procedimentos
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                    pellentesque diam erat morbi sed diam feugiat. Eu habitasse
                    commodo justo mauris dictum leo ut nisl blandit. Pretium
                    hendrerit feugiat morbi pellentesque. Elementum at
                    adipiscing aliquam integer rutrum.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Atendimento remoto
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                    pellentesque diam erat morbi sed diam feugiat. Eu habitasse
                    commodo justo mauris dictum leo ut nisl blandit. Pretium
                    hendrerit feugiat morbi pellentesque. Elementum at
                    adipiscing aliquam integer rutrum.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide> */}
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
                Nossos especialistas
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 font-light leading-relaxed text-md sm:text-lg">
                Lorem ipsum dolor sit amet consectetur. Sit semper aliquam vel
                in massa amet ultricies ac dignissim. Lobortis amet scelerisque
                pellentesque consectetur tellus amet eget.
                <br />
                <br />
                Mi sit ac pulvinar suspendisse sit nisl curabitur. Urna nisi
                pharetra quam fermentum vel tincidunt. Orci volutpat nulla
                gravida phasellus lectus. Vitae consectetur malesuada eu felis.
                Integer nulla sociis mollis ultricies purus ultrices platea
                eros. vel tincidunt. Orci volutpat nulla gravida phasellus
                lectus. Vitae consectetur malesuada eu felis. Integer nulla
                sociis mollis ultricies purus ultrices platea eros.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dr. Rafael Meirelles
                  </h2>
                  <p>Médico Cardiologista | Responsável Técnico</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dra. Lenira Maluf
                  </h2>
                  <p>Biomédica Especialista em Estética Avançada</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dr. Gabriel Fázzeri
                  </h2>
                  <p>Médico Cardiologista</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Carline Moesch
                  </h2>
                  <p>Nutricionista</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Ingrid Maciel
                  </h2>
                  <p>Psicóloga</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    6
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dr Pedro Ceretta
                  </h2>
                  <p>Médico Cirurgião Vascular</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    7
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dra Thaynara R Fagundes
                  </h2>
                  <p>Psiquiatra</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={refConvenios}
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
      >
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Convênios
            </h2>
          </Reveal>
        </div>

        <div className="container flex flex-col md:flex-row gap-10 mt-20">
          <Swiper
            effect="fade"
            spaceBetween={20}
            slidesPerView={1}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="default"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {convenios.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex flex-col aspect-square overflow-hidden bg-white border-2 border-zinc-200 rounded-md">
                    <div className="flex-1 flex items-center justify-center p-5">
                      <img
                        src={item.image_url}
                        alt={`Convênio da ${item.name}`}
                        className=" object-contain"
                      />
                    </div>

                    <div className="bg-primary-500 py-4 uppercase">
                      <Reveal>
                        <h1 className="text-white text-xl">{item.name}</h1>
                      </Reveal>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="py-20  border-t-2 border-b-2 border-zinc-200">
        <div className="container flex flex-col md:flex-row items-center gap-20">
          <div className="relative rounded-md shrink-0 w-full sm:w-auto">
            <img
              src="/santte/imagem_medico.jpg"
              alt="Imagem do médico"
              className="w-full  md:w-[400px] md:h-[500px] object-cover object-bottom  border-4 border-zinc-200/70"
            />

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">Renato Cabral</h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Nisi eiusmod pariatur amet anim esse dolor.
                </p>

                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Nisi eiusmod pariatur amet anim esse dolor.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h1 className="text-3xl text-zinc-500 font-semibold">
                Responsável técnico
              </h1>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-lg mt-4 text-zinc-500">
                Amet aute ut minim sint labore adipisicing proident amet. Quis
                mollit laboris in sit voluptate irure laborum cillum qui
                commodo. Duis dolor non ea nulla consectetur qui incididunt
                ipsum. Eiusmod pariatur sit magna consectetur quis deserunt. Ut
                veniam esse incididunt sunt tempor veniam aliqua culpa commodo
                consequat.
                <br />
                <br />
                Proident adipisicing id aliquip cupidatat. Adipisicing magna est
                do adipisicing tempor. Irure cillum proident aliquip aliquip
                cillum non laboris duis culpa id duis ullamco proident. Labore
                tempor proident laboris occaecat commodo eiusmod do ea occaecat
                velit ullamco nostrud esse. Occaecat irure id adipisicing minim
                id voluptate aliqua dolore velit irure eu excepteur.
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
                A Santté Saúde foi idealizada para oferecer o melhor para você e
                para toda sua família Primamos pelo atendimento humanizado,
                conforto e qualidade!
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
                  Especialistas
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
                  href=""
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <InstagramLogo size={24} />
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href=""
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <FacebookLogo size={24} />
                  Facebook
                </Link>
                <Link
                  target="_blank"
                  href=""
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
                  href=""
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Whatsapp
                </Link>
                <Link
                  target="_blank"
                  href="mailto:atendimento@clinicasantte.com"
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
                Santté clinica médica Ltda - CNPJ: 09091209/0001-23 | Santté
                clínica médica
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
