import React from "react";
import Image from "next/image";
import Rectangle from '../media/Rectangle_blue.svg';
import Human_Target from '../media/human_target.svg';
import Palestras from '../media/palestras.svg';
import Treinamentos from '../media/treinamentos.svg';
import Pesquisas from '../media/pesquisas.svg';
import Button from "../media/Button.svg";
import { useState } from "react";


const Services: React.FC = () => {
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

    const cards = [
        {
            title: "Consultoria",
            description:
                "Oferecemos consultoria especializada para auxiliar as organizações na implementação de gestão ágil, tecnologias emergentes e na transformação digital de seus processos.",
            image: Human_Target,
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
                    title: 'Consultoria em Políticas Públicas Inovadoras',
                    content:
                        'Para instituições públicas, prestamos apoio no desenvolvimento de políticas públicas que integram inovação tecnológica, sustentabilidade e melhoria dos serviços ao cidadão. Realizamos estudos e oferecemos recomendações para a aplicação de novas tecnologias que solucionem desafios específicos, como mobilidade urbana, saúde pública, educação e segurança, além de desenvolver estratégias que integrem práticas sustentáveis e critérios de ESG (ambiental, social e governança) nas políticas públicas.',
                },
                {
                    title: 'Cultura de Inovação',
                    content:
                        'Pesquisa sobre mapeamento de maturidade estratégica do ambiente de inovação por meio da metodologia da OCDE e proposta de melhora da cultura organizacional.',
                }
            ],
        },
        {
            title: "Palestras",
            description:
                "Organizamos palestras com especialistas renomados para disseminar conhecimento e incentivar a adoção de práticas inovadoras.",
            image: Palestras,
            subtasks: [
                {
                    title: "Eventos",
                    content:
                        "Realizamos congressos e seminários voltados para a inovação no setor público, reunindo especialistas, autoridades e stakeholders. As palestras são focadas em disseminar conhecimento, apresentar casos de sucesso e promover boas práticas de inovação.",
                },
                {
                    title: 'Palestras e Workshops',
                    content:
                        'Oferecemos palestras e workshops em temas essenciais para a inovação, como governança digital, segurança cibernética, análise de dados, comunicação digital, inteligência artificial, design de serviços centrado no cliente ou cidadão, gestão de projetos ágeis e critérios de sustentabilidade e ESG. Cada workshop é desenvolvido para proporcionar conhecimento prático e aplicável, visando aprimorar a eficiência e a transparência nos processos de gestão.',
                }
            ],
        },
        {
            title: "Treinamentos",
            description:
                "Promovemos treinamentos para capacitar profissionais em ferramentas e técnicas avançadas de tecnologia e inovação.",
            image: Treinamentos,
            subtasks: [
                {
                    title: 'Programa de Capacitação',
                    content: 'Treinamos servidores e gestores públicos em temas como transformação digital, uso de tecnologias emergentes, metodologias ágeis, design thinking e inovação no setor público.',
                },
            ],
        },
        {
            title: "Pesquisas",
            description:
                "Conduzimos pesquisas voltadas para a aplicação prática da inovação e tecnologia, com o objetivo de solucionar desafios específicos de diversos setores da economia.",
            image: Pesquisas,
            subtasks: [
                {
                    title: 'Pesquisas Aplicadas e Desenvolvimento de Estudos',
                    content: 'Realizamos pesquisas para mapear o impacto de tecnologias e metodologias inovadoras, bem como estudos de viabilidade e impacto social que embasam decisões estratégicas de investimento em inovação.',
                },
                {
                    title: 'Desenvolvimento de Soluções Tecnológicas',
                    content: 'Criamos plataformas digitais customizadas, como portais para gestão de dados, aplicativos de serviço ao cidadão e soluções de e-Government, além de implementar tecnologias para automação de processos administrativos e operacionais para empresas do setor privado.',
                },
            ],
        },
    ];

    return (
        <section
            id="servicos"
            className="w-full min-h-screen bg-[#0B2B40] flex flex-col items-center justify-start text-center px-4 pb-32"
        >
            <div className="mt-32">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.2] text-white mb-6 font-rajdhani font-medium">Nossos Serviços</h1>
                <p className="text-[12px] sm:text-[14px] leading-[1.6] font-redhat text-white max-w-[853.17px] text-center mb-12">
                Com uma equipe especializada, oferecemos soluções que tornam a tecnologia e a inovação ferramentas concretas de transformação. Nossos serviços visam não apenas aprimorar a eficiência dos processos de gestão das organizações, mas também gerar um impacto positivo na vida das pessoas, promovendo uma gestão mais inteligente e orientada ao desenvolvimento da sociedade.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-[20px] w-full max-w-[1135px] mx-auto px-4 sm:px-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col pt-6 pb-8 bg-white rounded-md shadow-md text-left transition-all${openCardIndex === index ? "h-auto" : "h-[200px]"}`}
                    >
                        {/* Card Header */}
                        <div className="flex items-center pt-4 flex-wrap">
                            <div className="relative flex items-center justify-center w-[75px] h-[75px] flex-shrink-0 sm:ml-0 lg:ml-[50px]">
                                <Image
                                    src={Rectangle}
                                    alt="Rectangle Blue"
                                    className="absolute w-[75px] h-[75px]"
                                />
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute w-[40px] h-[40px]"
                                />
                            </div>
                            <div className="flex-1 pr-[175px] pl-8">
                                <h3 className="text-[18px] sm:text-[22px] lg:text-[26px] leading-[22.4px] pb-4 font-bold text-black font-redhat truncate">
                                    {card.title}
                                </h3>
                                <p className="text-[#5E5E5E] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.6] font-redhat font-normal break-words">
                                    {card.description}
                                </p>
                            </div>
                            <div className={`flex items-center pr-12 justify-center sm:ml-4 ${openCardIndex === index ? "justify-end" : ""}`}>
                                <Image
                                    src={Button}
                                    alt={openCardIndex === index ? "Fechar Card" : "Abrir Card"}
                                    className={`w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] cursor-pointer transform transition-transform ${openCardIndex === index ? "rotate-180" : "rotate-0"}`}
                                    onClick={() => setOpenCardIndex(openCardIndex === index ? null : index)}
                                />
                            </div>
                        </div>

                        {/* Subtasks */}
                        {openCardIndex === index && card.subtasks && (
                            <div className="mt-4 space-y-5 pb-5 lg:pl-[141px] lg:pr-[170px]">
                                {card.subtasks.map((subtask, subIndex) => (
                                    <div key={subIndex} className="mb-2">
                                        <h4 className="text-[14px] sm:text-[16px] pl-4 leading-[1.4] font-bold text-black font-redhat">
                                            {subtask.title}
                                        </h4>
                                        <p className="text-[#5E5E5E] text-[12px] pl-4 pr-4 sm:text-[14px] leading-[1.6] font-redhat break-words">
                                            {subtask.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
