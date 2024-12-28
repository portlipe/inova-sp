import React from "react";

const Partner: React.FC = () => {
  return (
    <section
      id="partner"
      className="w-full h-[768px] bg-[#5E97A8] flex items-center justify-center gap-60"
    >
      {/* Texto da seção */}
      <div className="max-w-[387px] w-full h-[87px] lg:h-[198px] mb-6 lg:mb-0 lg:ml-[70px] text-center lg:text-left">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[54px] font-medium text-white font-rajdhani leading-[51.84px] pb-[22px]">
          Vamos inovar Juntos?
        </h1>

        <p className="lg: text-[14px] leading-[22.4px] w-[294px] lg: mx-0 text-white font-redhat">
          Estamos prontos para iniciar a transformação na sua organização. Preencha o formulário para se tornar um cliente ou associado e nossa equipe entrará em contato.
        </p>
      </div>

      {/* Formulário */}
      <div className="max-w-[670px] w-full h-auto bg-white flex flex-col rounded-sm p-6 lg: py-[43px] lg: px-[77px] shadow-md pl-[76px]">
        <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-black font-rajdhani leading-[1.2]">
          Faça parte da <strong>Rede INOVA-SP</strong> e impulsione a inovação com a gente.
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-4">
          <p
            id="nome"
            className="text-[14px] leading-[1.6] font-semibold flex-col flex text-black font-redhat pt-[30px] lg:pt-[50px]"
          >
            Nome
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </p>

          <p
            id="telefone"
            className="text-[14px] leading-[1.6] font-semibold flex-col flex text-black font-redhat pt-[30px] lg:pt-[50px]"
          >
            Telefone
            <input
              type="text"
              placeholder="(00) 0 0000-0000"
              className="w-full lg:w-[240px] outline-none py-2 border-b focus:border-[#5E97A8]"
            />
          </p>
        </div>

        <p
          id="email"
          className="text-[14px] leading-[1.6] font-semibold flex-col flex text-black font-redhat pt-[30px] lg:pt-[50px]"
        >
          E-mail
          <input
            type="email"
            placeholder="Endereço de e-mail"
            className="w-[500px] outline-none py-2 border-b focus:border-[#5E97A8]"
          />
        </p>

        <p
          id="escolha"
          className="text-[14px] leading-[1.6] font-semibold flex-col flex text-black font-redhat pt-[30px] lg:pt-[50px]"
        >
          O que você deseja se tornar?
          <select
            defaultValue=""
            className="w-full text-black py-4 border bg-transparent outline-none cursor-pointer mt-4 focus:border-[#164772]"
          >
            <option value="" disabled>
              Escolha uma opção
            </option>
            <option value="cliente">Quero ser cliente</option>
            <option value="associado">Quero ser associado</option>
          </select>
        </p>

        <div className="flex items-center mt-[20px] lg:mt-[30px]">
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

        <div
          id="mensagem"
          className="w-full lg:w-[194px] h-[46px] rounded-sm bg-[#5E97A8] mt-[15px] lg:mt-[30px] flex items-center justify-center cursor-pointer hover:bg-[#12395a] transition-colors"
        >
          <p className="text-[14px] leading-[1.6] font-semibold text-white font-redhat">
            Enviar Mensagem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
