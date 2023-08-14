import { Info } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Reveal } from "../animation/Reveal";
import { ContactFormData, contactFormSchema } from "@/libs/zod/contact.schema";
import { toast } from "react-hot-toast";

export function Contact() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  function handleSubmitFormToContact(data: ContactFormData) {
    reset();
    toast.success("Mensagem enviada com sucesso");
  }

  return (
    <section className="py-20">
      <div className="container flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <Reveal>
            <h1 className="mt-6 text-zinc-500 font-semibold text-3xl">
              Localização
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-sm md:text-md mt-1 font-light text-zinc-500">
              Estamos localizado no endereço: <br />- Av. Santa Catarina, 1197 –
              Sala 405 Black Office Class Estreito <br /> – CEP 88075-500 –
              Florianópolis – SC
            </p>
          </Reveal>

          <Reveal>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3525777844898!2d-48.58775302378798!3d-27.582596621527316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527482723aa9d57%3A0xc445d76cecc986ff!2sAv.%20Santa%20Catarina%2C%201197%20-%20Canto%2C%20Florian%C3%B3polis%20-%20SC%2C%2088075-500!5e0!3m2!1spt-BR!2sbr!4v1691723922733!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                loading="lazy"
                className="mt-5 border-2 border-zinc-200 rounded-md"
              />
              <img
                className="absolute right-3 bottom-3 w-44 h-44 select-none object-cover rounded-md border-4 border-zinc-300"
                src="/black_office.png"
                alt="Black Office"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex-1">
          <Reveal>
            <h1 className="mt-6 text-zinc-500 font-semibold text-3xl">
              Contato
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-sm sm:text-md mt-1 font-light text-zinc-500">
              Entre em contato conosco agora mesmo <br /> por meio do nosso
              e-mail.
            </p>
          </Reveal>

          <form
            method="post"
            className="w-full flex flex-col gap-4 mt-10"
            onSubmit={handleSubmit(handleSubmitFormToContact)}
          >
            <Reveal>
              <div className="flex flex-1 flex-col w-full">
                <label className="text-zinc-500 text-sm">Enviar para</label>
                <select className="bg-zinc-100 mt-2 h-12 pl-4 rounded-md border-2 border-zinc-200 placeholder:text-sm text-sm text-zinc-500">
                  <option value="all">Ambos</option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="email">E-mail</option>
                </select>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-1 flex-col w-full">
                <label className="text-zinc-500 text-sm">Nome completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo..."
                  className="bg-zinc-100 mt-2 h-12 pl-4 rounded-md border-2 border-zinc-200 placeholder:text-sm"
                  {...register("name")}
                />

                {errors.name && (
                  <span className="text-sm text-red-500 mt-2 block">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-1 flex-col w-full">
                <label className="text-zinc-500 text-sm">
                  Endereço de e-mail
                </label>
                <input
                  type="text"
                  placeholder="Digite seu endereço de e-mail..."
                  className="bg-zinc-100 mt-2 h-12 pl-4 rounded-md border-2 border-zinc-200 placeholder:text-sm"
                  {...register("email")}
                />

                {errors.email && (
                  <span className="text-sm text-red-500 mt-2 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-1 flex-col w-full">
                <label className="text-zinc-500 text-sm">
                  Telefone (Whatsapp)
                </label>
                <input
                  type="text"
                  placeholder="Digite seu telefone..."
                  className="bg-zinc-100 mt-2 h-12 pl-4 rounded-md border-2 border-zinc-200 placeholder:text-sm"
                  {...register("phone")}
                />

                {errors.phone && (
                  <span className="text-sm text-red-500 mt-2 block">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-1 flex-col w-full">
                <label className="text-zinc-500 text-sm">Mensagem</label>
                <textarea
                  placeholder="Digite sua mensagem..."
                  className="bg-zinc-100 h-[120px] resize-none mt-2 p-4 rounded-md border-2 border-zinc-200 placeholder:text-sm"
                  {...register("message")}
                />

                {errors.message && (
                  <span className="text-sm text-red-500 mt-2 block">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="text-sm flex items-center gap-2 rounded-md">
                <div className="p-[2px] bg-yellow-100 border border-yellow-300 rounded-md">
                  <Info />
                </div>

                <span className="text-xs text-zinc-500/80">
                  Confirmo em compartilhar minhas informações com a Qualivida.
                </span>
              </div>
            </Reveal>

            <Reveal>
              <button
                type="submit"
                className="w-full mt-5 py-3 bg-primary-500 text-white rounded-md hover:brightness-90 transition-all"
              >
                Enviar mensagem
              </button>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  );
}
