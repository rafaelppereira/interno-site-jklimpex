import { CaretUp } from "phosphor-react";
import { useState } from "react";

export function ButtonQueries() {
  const [openButton, setOpenButton] = useState(true);

  return (
    <main className=" flex flex-col items-start justify-center fixed right-4 bottom-5 shadow-lg z-[999]">
      <div
        className={`${openButton
          ? "scale-100 visible opacity-100"
          : "scale-0 invisible opacity-0"
          } origin-bottom transition-all w-full h-full backdrop-blur-sm bg-[#495E7F]/80 pt-[50px] gap-2 px-2 flex flex-col items-start justify-center rounded-tl-[50px] rounded-[7px]`}
      >
        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">
            Consulta Médica Presencial
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">
            Consulta Médica Online
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">Visita Domiciliar</p>
        </div>

        <button className="w-full h-7 bg-[#465976] text-white text-xs font-light rounded-md mb-[30px]">
          Agende sua consulta
        </button>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">
            Eletrocardiograma Monitoramento
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">
            Monitoramento da Apneia do Sono
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm md:text-sm font-light">
            Ultrassom com Doppler de Carótidas
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white text-xs md:text-sm font-light">
            Ultrassom com Doppler Membros Inf
          </p>
        </div>

        <button className="w-full h-7 bg-[#465976] text-white text-xs font-light rounded-md mb-5">
          Resultados e laudos
        </button>
      </div>

      <button
        onClick={() => setOpenButton(!openButton)}
        className="w-full  hover:brightness-90 transition-all h-12 flex items-center gap-2 justify-start pl-5 bg-primary-500 text-white text-xs font-light mt-[10px] rounded-lg"
      >
        <CaretUp
          size={20}
          color="#FFF"
          className={
            openButton ? "rotate-0 transition-all" : "rotate-180 transition-all"
          }
        />
        Agendamentos
      </button>
    </main>
  );
}
