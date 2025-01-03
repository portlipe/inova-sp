import React, { useState } from "react";
import Image from "next/image";
import seta from "../media/seta.svg";

const Partner: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectClick = () => {
    setIsSelectOpen((prev) => !prev);
  };

  return (
    <section
      id="partner"
      className="w-full lg:h-[768px] sm: h-[865px] bg-[#5E97A8] sm: py-[70px] flex flex-col lg:items-center sm: items-center lg:justify-center lg:flex-row lg:gap-[170px]"
    >
      <div className="lg:w-[1135px] sm: w-[367px] lg:h-[616px] sm: h-[685px] lg:flex lg:flow-row lg:justify-between">
        {/* Texto da seção */}
        <div className="sm: flex flex-col lg:justify-center lg:items-left sm: text-center sm: mx-auto lg:text-left lg:w-[387px] sm: w-[299px]">
          <h1 className="sm: text-[40px] sm: leading-[40px] lg:text-[54px] font-medium text-white font-rajdhani lg:leading-[51px] lg:pb-[35px] sm: pb-[15px]">
            Vamos inovar Juntos?
          </h1>
          <p className="text-[13px] leading-[20.8px] text-white font-redhat lg:w-[273px] sm: w-[266px] sm: mx-auto lg:mx-0 lg:text-left lg:pb-0 sm: pb-[30px]">
            Estamos prontos para iniciar a transformação na sua organização.
            Preencha o formulário para se tornar um cliente ou associado e nossa equipe entrará em contato.
          </p>
        </div>

        {/* Formulário */}
        <div className="w-full max-w-[670px] lg:h-[616px] bg-white flex flex-col rounded-sm p-6 lg:py-[63px] lg:px-[77px] sm: mx-auto shadow-md">
          <h1 className="lg:text-[30px] lg:leading-[33px] sm: text-[22px] font-medium text-black font-rajdhani leading-[20.8px] mb-4 lg:text-left sm: text-center">
            Faça parte da <strong>Rede INOVA-SP</strong> e impulsione a inovação com a gente.
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-4">
            {/* Nome */}
            <div
              id="nome"
              className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
            >
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
              />
            </div>

            {/* Telefone */}
            <div
              id="telefone"
              className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
            >
              <label>Telefone</label>
              <input
                type="text"
                placeholder="(00) 0 0000-0000"
                className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
              />
            </div>
          </div>

          {/* E-mail */}
          <div
            id="email"
            className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
          >
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              className="w-full outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </div>

          {/* Escolha */}
          <div
            id="escolha"
            className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
          >
            <label>O que você deseja se tornar?</label>
            <div className="relative w-full">
              <select
                defaultValue=""
                className="w-full text-black py-3 pr-12 border bg-transparent outline-none cursor-pointer mt-2 focus:border-[#5E97A8] p-4 appearance-none"
                onClick={handleSelectClick}
              >
                <option value="" disabled>
                  O que você deseja se tornar?
                </option>
                <option value="cliente">Quero ser cliente</option>
                <option value="associado">Quero ser associado</option>
              </select>
              {/* Seta personalizada */}
              <span
                className={`absolute inset-y-0 right-4 flex items-center transform transition-transform duration-300 ${isSelectOpen ? "rotate-0" : "rotate-180"
                  }`}
              >
                <Image src={seta} alt="seta" width={15} height={15} />
              </span>

            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-4 lg:mt-[30px]">
            <input
              type="checkbox"
              id="accept-terms"
              className="mr-2 cursor-pointer"
            />
            <label
              htmlFor="accept-terms"
              className="text-[14px] text-black font-redhat cursor-pointer"
            >
              Aceito os termos de uso
            </label>
          </div>

          {/* Botão */}
          <div
            id="mensagem"
            className="lg:w-[194px] lg:h-[46px] sm: w-[100%] sm: h-[46px] rounded-sm bg-[#12395a] mt-4 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <p className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold text-white font-redhat">
              Enviar Mensagem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
