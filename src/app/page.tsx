"use client"
import Image from "next/image";
import Logo from './media/logo.svg';
import Hero from './media/hero.svg'
import Flower from './media/big_flower.svg';
import Reactnagle from './media/Rectangle_blue.svg';
import Human_Target from './media/human_target.svg';
import Button from "./media/Button.svg";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Consultoria",
      description:
        "Oferecemos consultoria especializada para auxiliar as organizações na implementação de gestão ágil, tecnologias emergentes e na transformação digital de seus processos.",
      subtasks: [
        {
          title: "Consultoria em Transformação Digital",
          content:
            "Analisamos e planejamos a implementação de tecnologias inovadoras, como sistemas de gestão integrada, automação de processos, inteligência artificial e big data, oferecendo suporte na transição para serviços digitais e modernização de sistemas de gestão.",
        },
        {
          title: "Processos de CPSI",
          content:
            "Apoiamos a condução de processos de compras públicas de inovação, como as aquisições por Encomendas Tecnológicas (Lei nº 10.973/2004) e os Contratos Públicos de Soluções Inovadoras – CPSI (Marco Legal das Startups e do Empreendedorismo Inovador - LC 182/2021).",
        },
        {
          title: "Gestão de Projetos de Inovação",
          content:
            "Realizamos o planejamento e o gerenciamento de projetos de inovação, desde a concepção até a implementação, garantindo a aplicação de metodologias ágeis e práticas de gestão modernas, além de monitoramento e avaliação para assegurar o alcance dos objetivos estratégicos.",
        },
        {
          title: "Consultoria em Políticas Públicas Inovadoras",
          content:
            "Para instituições públicas, prestamos apoio no desenvolvimento de políticas públicas que integram inovação tecnológica, sustentabilidade e melhoria dos serviços ao cidadão. Realizamos estudos e oferecemos recomendações para a aplicação de novas tecnologias que solucionem desafios específicos, como mobilidade urbana, saúde pública, educação e segurança, além de desenvolver estratégias que integrem práticas sustentáveis e critérios de ESG (ambiental, social e governança) nas políticas públicas.",
        },
        {
          title: "Cultura de Inovação",
          content:
            "Pesquisa sobre mapeamento de maturidade estratégica do ambiente de inovação por meio da metodologia da OCDE e proposta de melhora da cultura organizacional.",
        },
      ],
    },
    {
      title: "Palestras",
      description:
        "Organizamos palestras com especialistas renomados para disseminar conhecimento e incentivar a adoção de práticas inovadoras.",
    },
    {
      title: "Treinamentos",
      description:
        "Promovemos treinamentos para capacitar profissionais em ferramentas e técnicas avançadas de tecnologia e inovação.",
    },
    {
      title: "Pesquisas",
      description:
        "Conduzimos pesquisas voltadas para a aplicação prática da inovação e tecnologia, com o objetivo de solucionar desafios específicos de diversos setores da economia.",
    },
  ];

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

      {/* Services Section */}
      <section 
      id="servicos" 
      className="w-full min-h-screen bg-[#0B2B40] flex flex-col items-center justify-start text-center px-4 pb-32">
        <div className="mt-32">
          <h1 className="text-[54px] leading-[66.96px] text-white mb-6 font-rajdhani font-medium">NOSSOS SERVIÇOS</h1>
          <p className="text-[14px] leading-[22.4px] font-redhat text-white max-w-[853.17px] text-center mb-12">
            Com uma equipe especializada, oferecemos soluções que tornam a tecnologia e a inovação ferramentas concretas de transformação. Nossos serviços visam não apenas aprimorar a eficiência dos processos de gestão das organizações, mas também gerar um impacto positivo na vida das pessoas, promovendo uma gestão mais inteligente e orientada ao desenvolvimento da sociedade
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 w-full max-w-5xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white rounded-md shadow-md p-4 text-left transition-all ${openCardIndex === index ? "h-auto" : "h-[157px]"
                } w-[100%] mx-auto`}
            >
              {/* Card Header */}
              <div className="flex items-center pt-7">
                <div className="relative flex items-center justify-center w-[75px] h-[75px] flex-shrink-0">
                  <Image src={Reactnagle} alt="Rectangle Blue" className="w-[75px] h-[75px]" />
                  <Image src={Human_Target} alt="Human Target" className="absolute w-[40px] h-[40px]" />
                </div>
                <div className="ml-4 flex-shrink-0 w-[58%]">
                  <h3 className="text-[26px] leading-[34.4px] font-bold text-black font-redhat">{card.title}</h3>
                  <p className="text-[#5E5E5E] text-[14px] leading-[22.4px] font-redhat font-normal">{card.description}</p>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300">
                  <Image
                    src={Button}
                    alt={openCardIndex === index ? "Fechar Card" : "Abrir Card"}
                    className={`w-[54px] h-[54px] cursor-pointer transform transition-transform ${openCardIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    onClick={() => setOpenCardIndex(openCardIndex === index ? null : index)}
                  />
                </div>
              </div>

              {/* Subtasks */}
              {openCardIndex === index && card.subtasks && (
                <div className="mt-4 pl-[85px] space-y-5 pb-5">
                  {card.subtasks.map((subtask, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <h4 className="text[14px] leading-[22.4px] text[#5E5E5E] font-bold text-black font-redhat">{subtask.title}</h4>
                      <p className="text-[#5E5E5E] text-[14px] leading-[22.4px] font-redhat">{subtask.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
