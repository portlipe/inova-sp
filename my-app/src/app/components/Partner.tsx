import React from "react";

const Partner: React.FC = () => {
  return (
    <section
      id="partner"
      className="w-full min-h-screen bg-[#5E97A8] flex flex-col items-center justify-center px-6 py-10 lg:flex-row lg:gap-60"
    >
      {/* Texto da seção */}
      <div className="text-center lg:text-left max-w-[387px] w-full mb-8 lg:mb-0">
        <h1 className="sm: text-[40px] sm: leading-[40px] lg:text-[54px] font-medium text-white font-rajdhani lg:leading-[51px] pb-4 sm: px-[30px]">
          Vamos inovar Juntos?
        </h1>
        <p className="lg:text-[14px] leading-[22.4px] sm: text-[13px] sm: leading-[20.8px] text-white font-redhat lg:pr-[26px] sm: w-[266px] lg:mx-8 sm: mx-[61px]">
          Estamos prontos para iniciar a transformação na sua organização. Preencha o formulário para se tornar um cliente ou associado e nossa equipe entrará em contato.
        </p>
      </div>

      {/* Formulário */}
      <div className="w-full max-w-[670px] bg-white flex flex-col rounded-sm p-6 lg:py-[43px] lg:px-[77px] shadow-md">
        <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-black font-rajdhani leading-[1.2] mb-4">
          Faça parte da <strong>Rede INOVA-SP</strong> e impulsione a inovação com a gente.
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-4">
          {/* Nome */}
          <p
            id="nome"
            className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
          >
            Nome
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </p>

          {/* Telefone */}
          <p
            id="telefone"
            className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
          >
            Telefone
            <input
              type="text"
              placeholder="(00) 0 0000-0000"
              className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </p>
        </div>

        {/* E-mail */}
        <p
          id="email"
          className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
        >
          E-mail
          <input
            type="email"
            placeholder="Endereço de e-mail"
            className="w-full outline-none py-2 border-b focus:border-[#5E97A8]"
          />
        </p>

        {/* Escolha */}
        <p
          id="escolha"
          className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold flex flex-col text-black font-redhat pt-4 lg:pt-[30px]"
        >
          O que você deseja se tornar?
          <select
            defaultValue=""
            className="w-full text-black py-3 border bg-transparent outline-none cursor-pointer mt-2 focus:border-[#5E97A8]"
          >
            <option value="" disabled>
              Escolha uma opção
            </option>
            <option value="cliente">Quero ser cliente</option>
            <option value="associado">Quero ser associado</option>
          </select>
        </p>

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
          className="lg:w-[194px] lg:h-[46px] sm: w-[100%] sm: h-[46px] rounded-sm bg-[#5E97A8] mt-4 lg:mt-[30px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-[#12395a]"
        >
          <p className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-semibold text-white font-redhat">
            Enviar Mensagem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
