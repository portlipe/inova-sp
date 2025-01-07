
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
      <div className="lg:w-[1135px] md:w-[560px] sm: w-[367px] lg:h-[616px] sm: h-[685px] lg:py-[25px] lg:flex lg:flow-row lg:justify-between">
        {/* Texto da seção */}
        <div className="sm: flex flex-col lg:justify-center lg:items-left sm: text-center sm: mx-auto md:ml-[25px] lg:text-left lg:w-[387px] sm: w-[299px]">
          <h1 className="sm: text-[40px] sm: leading-[40px] lg:text-[54px] md:text-[64px] md:leading-[66px] md:w-[359px] font-medium text-white font-rajdhani md:ml-[90px] lg:leading-[51px] lg:pb-[35px] sm: pb-[15px] md:pb-[20px]">
            Vamos inovar juntos?
          </h1>
          <p className="sm: text-[13px] lg:text-[14px] lg:leading-[22.4px] sm: leading-[20.8px] text-white font-redhat lg:w-[294px] md:text-[18px] md:leading-[25px] md:w-[520px] sm: w-[266px] sm: mx-auto lg:mx-0 lg:text-left sm: pb-[30px]">
            Estamos prontos para iniciar a transformação na sua organização.
            Preencha o formulário para se tornar um cliente ou associado e nossa equipe entrará em contato.
          </p>
        </div>
        {/* Formulário */}
        <div className="w-full max-w-[670px] lg:h-[586px] bg-white flex flex-col rounded-sm p-6 lg:py-[43px] lg:px-[77px] sm: mx-auto shadow-md md:mx-auto">
          <h1 className="lg:text-[30px] lg:leading-[33px] sm: text-[22px] font-medium text-black font-rajdhani leading-[20.8px] mb-4 lg:text-left md:text-center md:leading-[26px] sm: text-center lg:w-full md: w-[320px] md:mx-auto md:items-center">
            Faça parte da <strong>Rede INOVA-SP</strong> e impulsione a inovação com a gente.
          </h1>

          <div className="flex flex-col lg:flex-row md:flex md:flex-row lg:gap-4">
            {/* Nome */}
            <div
              id="nome"
              className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
            >
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full lg:w-[240px] md:w-[230px] outline-none py-2 border-b focus:border-[#5E97A8]"
              />
            </div>

            {/* Telefone */}
            <div
              id="telefone"
              className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px] md:pl-4"
            >
              <label>Telefone</label>
              <input
                type="text"
                placeholder="(00) 0 0000-0000"
                className="w-full lg:w-[260px] md:w-[230px] outline-none py-2 border-b focus:border-[#5E97A8]"
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
              className="w-full md:w-[470px] outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </div>

          {/* Escolha */}
          <div
            id="escolha"
            className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
          >
            <label className="pb-[20px]">O que você deseja se tornar?</label>
            <div className="relative w-full">
              <select
                defaultValue=""
                className="w-full text-black py-3 pr-12 border bg-transparent outline-none cursor-pointer focus:border-[#5E97A8] p-4 appearance-none"
                onClick={handleSelectClick}
              >
                <option value="" disabled>
                  Escolha uma opção
                </option>
                <option value="cliente">Quero ser cliente</option>
                <option value="associado">Quero ser associado</option>
              </select>
              {/* Seta personalizada */}
              <span
                className={`absolute inset-y-0 right-4 flex items-center transform transition-transform duration-300 ${isSelectOpen ? "rotate-0" : "rotate-180"
                  }`}
              >
                <Image src={seta} alt="seta" width={15} height={15} unoptimized={true} />
              </span>

            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center my-4 lg:my-[20px]">
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
            className="lg:w-[194px] lg:h-[46px] sm: w-[100%] md:w-[294px] sm: h-[46px] rounded-sm bg-[#12395a] p-3 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-[#5E97A8]"
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
