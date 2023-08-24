import { FirstAidKit, Desktop, HouseLine, CaretUp } from "phosphor-react";
import { useState } from "react";

interface ButtonQueriesProps {}

export function ButtonQueries() {
  const [openButton, setOpenButton] = useState(false);

  return (
    <main className=" flex flex-col items-start justify-center fixed right-3 bottom-1/2 translate-y-1/2 z-[999] ">
      {openButton && (
        <div className="w-full h-full bg-[#495E7F]/50 pt-[50px] gap-2 px-2 flex flex-col items-start justify-center rounded-tl-[50px] rounded-[7px]">
          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Consulta Médica Presencial
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Consulta Médica Online
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">Visita Domiciliar</p>
          </div>

          <button className="w-full h-7 bg-[#465976] text-white text-xs font-light rounded-md mb-[30px]">
            Agende sua consulta
          </button>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Eletrocardiograma Monitoramento
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Monitoramento da Apneia do Sono
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Ultrassom com Doppler de Carótidas
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
            <p className="text-white text-xs font-light">
              Ultrassom com Doppler Membros Inf
            </p>
          </div>

          <button className="w-full h-7 bg-[#465976] text-white text-xs font-light rounded-md mb-5">
            Resultados e laudos
          </button>
        </div>
      )}

      <button
        onClick={() => setOpenButton(!openButton)}
        className="w-[250px] h-12 flex items-center justify-start pl-5 bg-[#CD9F97] text-white text-xs font-light mt-[10px] rounded-lg"
      >
        <CaretUp size={24} color="#FFF" />
        Agendamentos
      </button>
    </main>
  );
}
