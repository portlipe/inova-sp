"use client"
import Image from "next/image";
import Logo from './media/logo.svg';
import Hero from './media/hero.svg'
import Flower from './media/big_flower.svg';
import { useState } from "react";

  export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <main className="bg-white w-full">
        <section
          id="header"
          className="relative w-full h-[80px] lg:h-[149.12px] flex items-center justify-between px-6 lg:px-[84px] bg-white shadow-md"
        >
          {/* Logo */}
          <Image
            src={Logo}
            alt="logo"
            className="w-[100px] lg:w-auto p-[10px] lg:p-[33.35px]"
            priority
          />

          {/* Botão Menu (Hambúrguer) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>

          {/* Navigation */}
          <nav
            className={`absolute top-[80px] left-0 w-full bg-white lg:static lg:w-auto lg:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
              } lg:flex lg:items-center`}
          >
            <ul className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center gap-x-10 text-black text-xs uppercase font-redhat">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">O Instituto</li>
              <li className="hover:text-gray-400 cursor-pointer">Serviços</li>
              <li className="hover:text-gray-400 cursor-pointer">Newsletter</li>
              <li className="hover:text-gray-400 cursor-pointer">Associe-se</li>
              <li className="hover:text-gray-400 cursor-pointer">Contato</li>
            </ul>
          </nav>
        </section>
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full h-screen min-h-[618px] flex items-center justify-center bg-[#C2C2C2]">
          <Image
            src={Hero}
            alt="hero-phrase"
            className="cursor-text"
          />
        </section>

        <section
          id="Instituto"
          className="w-full flex flex-col lg:flex-row items-center relative"
        >
          {/* Coluna da imagem */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src={Flower}
              alt="big_flower"
              className="w-full max-w-[400px] lg:max-w-none lg:h-auto object-contain"
            />
          </div>

          {/* Coluna do texto */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
            <div className="max-w-[466px]">
              <h2 className="text-[36px] lg:text-[54px] font-bold text-gray-900 mb-4 font-rajdhani font-medium">
                O Instituto
              </h2>
              <p className="text-[14px] leading-[22.4px] text-gray-700 font-redhat">
                O Instituto INOVA-SP é dedicado a impulsionar as organizações por meio da inovação, tecnologia e gestão estratégica. Oferecemos uma ampla gama de serviços especializados, incluindo consultoria estratégica e tecnológica, programas de inovação, trilhas de capacitação e pesquisas aplicadas.
              </p>
              <p className="text-[14px] leading-[22.4px] text-gray-700 mt-4 font-redhat">
                Nossa missão é criar soluções sob medida para os desafios de hoje e antecipando as necessidades de amanhã. Com isso, trabalhamos para tornar a tecnologia um ativo poderoso que impulsiona o crescimento e a qualidade dos serviços oferecidos à sociedade.
              </p>
            </div>
          </div>
        </section>


        <section
          id="servicos"
          className="w-full min-h-screen bg-[#0B2B40] flex flex-col items-center justify-start text-center px-4"
        >
          <div className="mt-32">
            <h1 className="text-[54px] leading-[66.96px] text-white mb-6 font-rajdhani font-medium">
              NOSSOS SERVIÇOS
            </h1>

            <p className="text-[14px] leading-[22.4px] font-redhat text-white max-w-[853.17px] text-center mb-12">
              Com uma equipe especializada, oferecemos soluções que tornam a tecnologia e a inovação ferramentas concretas de transformação. Nossos serviços visam não apenas aprimorar a eficiência dos processos de gestão das organizações, mas também gerar um impacto positivo na vida das pessoas.
            </p>
          </div>

          {/* Cards de Serviços */}
          <div className="flex flex-col gap-6 w-full max-w-5xl">
            {/* Card 1 - Consultoria */}
            <div className="flex flex-col bg-white rounded-md shadow-md p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#0B2B40] mb-4">Consultoria</h3>
              <p className="text-gray-700">
                Oferecemos consultoria especializada para auxiliar as organizações na implementação de gestão ágil, tecnologias emergentes e na transformação digital de seus processos.
              </p>
            </div>

            {/* Card 2 - Palestras */}
            <div className="flex flex-col bg-white rounded-md shadow-md p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#0B2B40] mb-4">Palestras</h3>
              <p className="text-gray-700">
                Organizamos palestras com especialistas renomados para disseminar conhecimento e incentivar a adoção de práticas inovadoras.
              </p>
            </div>

            {/* Card 3 - Treinamentos */}
            <div className="flex flex-col bg-white rounded-md shadow-md p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#0B2B40] mb-4">Treinamentos</h3>
              <p className="text-gray-700">
                Promovemos treinamentos para capacitar profissionais em ferramentas e técnicas avançadas de tecnologia e inovação.
              </p>
            </div>

            {/* Card 4 - Pesquisas */}
            <div className="flex flex-col bg-white rounded-md shadow-md p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#0B2B40] mb-4">Pesquisas</h3>
              <p className="text-gray-700">
                Conduzimos pesquisas voltadas para a aplicação prática da inovação e tecnologia, com o objetivo de solucionar desafios específicos de diversos setores da economia.
              </p>
            </div>
          </div>
        </section>

      </main>
    );
  }

