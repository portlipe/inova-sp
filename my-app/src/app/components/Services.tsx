import React, { useState } from "react";
import Image from "next/image";
import Rectangle from "../media/Rectangle_blue.svg";
import Human_Target from "../media/human_target.svg";
import Palestras from "../media/palestras.svg";
import Treinamentos from "../media/treinamentos.svg";
import Pesquisas from "../media/pesquisas.svg";
import Button from "../media/Button.svg";

const Services: React.FC = () => {
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

    const cards = [
        {
            title: "Consultoria",
            description:
                "Oferecemos consultoria especializada para auxiliar as organizações na implementação de gestão ágil, tecnologias emergentes e na transformação digital de seus processos.",
            image: Human_Target,
            textWidth: "lg:max-w-[577px] sm: max-w-[280px]",
            subtasks: [
                {
                    title: "Consultoria em Transformação Digital",
                    content:
                        "Analisamos e planejamos a implementação de tecnologias inovadoras, como sistemas de gestão integrada, automação de processos, inteligência artificial e big data, oferecendo suporte na transição para serviços digitais e modernização de sistemas de gestão.",
                    contentWidth: "lg:max-w-[730px] sm: max-w-[253px]",
                },
                {
                    title: "Processos de CPSI",
                    content:
                        "Apoiamos a condução de processos de compras públicas de inovação, como as aquisições por Encomendas Tecnológicas (Lei nº 10.973/2004) e os Contratos Públicos de Soluções Inovadoras – CPSI (Marco Legal das Startups e do Empreendedorismo Inovador - LC 182/2021).",
                    contentWidth: "lg:max-w-[740px] sm: max-w-[260px]",
                },
                {
                    title: "Gestão de Projetos de Inovação",
                    content:
                        "Realizamos o planejamento e o gerenciamento de projetos de inovação, desde a concepção até a implementação, garantindo a aplicação de metodologias ágeis e práticas de gestão modernas, além de monitoramento e avaliação para assegurar o alcance dos objetivos estratégicos.",
                    contentWidth: "lg:max-w-[730px] sm: max-w-[265px]",
                },
                {
                    title: 'Consultoria em Políticas Públicas Inovadoras',
                    content:
                        'Para instituições públicas, prestamos apoio no desenvolvimento de políticas públicas que integram inovação tecnológica, sustentabilidade e melhoria dos serviços ao cidadão. Realizamos estudos e oferecemos recomendações para a aplicação de novas tecnologias que solucionem desafios específicos, como mobilidade urbana, saúde pública, educação e segurança, além de desenvolver estratégias que integrem práticas sustentáveis e critérios de ESG (ambiental, social e governança) nas políticas públicas.',
                    contentWidth: "lg:max-w-[740px] sm: max-w-[265px]",
                },
                {
                    title: 'Cultura de Inovação',
                    content:
                        'Pesquisa sobre mapeamento de maturidade estratégica do ambiente de inovação por meio da metodologia da OCDE e proposta de melhora da cultura organizacional.',
                    contentWidth: "lg:max-w-[740px]  sm: max-w-[253px] sm: pb-[116px] lg:pb-0",
                }
            ],
        },
        {
            title: "Palestras",
            description:
                "Organizamos palestras com especialistas renomados para disseminar conhecimento e incentivar a adoção de práticas inovadoras.",
            image: Palestras,
            textWidth: "lg:max-w-[577px] sm: max-w-[304px]",
            subtasks: [
                {
                    title: "Eventos",
                    content:
                        "Realizamos congressos e seminários voltados para a inovação no setor público, reunindo especialistas, autoridades e stakeholders. As palestras são focadas em disseminar conhecimento, apresentar casos de sucesso e promover boas práticas de inovação.",
                    contentWidth: "lg:max-w-[767px]  lg:h-[110px] sm: max-w-[265px]",
                },
                {
                    title: "Palestras e Workshops",
                    content: "Oferecemos palestras e workshops em temas essenciais para a inovação, como governança digital, segurança cibernética, análise de dados, comunicação digital, inteligência artificial, design de serviços centrado no cliente ou cidadão, gestão de projetos ágeis e critérios de sustentabilidade e ESG. Cada workshop é desenvolvido para proporcionar conhecimento prático e aplicável, visando aprimorar a eficiência e a transparência nos processos de gestão",
                    contentWidth: "lg:max-w-[750px]  lg:h-[104px] sm: max-w-[265px] sm: pb-[116px] lg:pb-0",
                },
            ],
        },
        {
            title: "Treinamentos",
            description:
                "Promovemos treinamentos para capacitar profissionais em ferramentas e técnicas avançadas de tecnologia e inovação.",
            image: Treinamentos,
            textWidth: "lg:max-w-[597px] sm: max-w-[304px]",
            subtasks: [
                {
                    title: "Programa de Capacitação",
                    content:
                        "Treinamos servidores e gestores públicos em temas como transformação digital, uso de tecnologias emergentes, metodologias ágeis, design thinking e inovação no setor público.",
                    contentWidth: "lg:max-w-[767px] sm: max-w-[265px] sm: pb-[116px] lg:pb-0",
                },
            ],
        },
        {
            title: "Pesquisas",
            description:
                "Conduzimos pesquisas voltadas para a aplicação prática da inovação e tecnologia, com o objetivo de solucionar desafios específicos de diversos setores da economia.",
            image: Pesquisas,
            textWidth: "lg:max-w-[577px] sm: max-w-[273px]",
            subtasks: [
                {
                    title: "Pesquisas Aplicadas e Desenvolvimento de estudos",
                    content:
                        "Realizamos pesquisas para mapear o impacto de tecnologias e metodologias inovadoras, bem como estudos de viabilidade e impacto social que embasam decisões estratégicas de investimento em inovação.",
                    contentWidth: "lg:max-w-[747px] sm: max-w-[265px]",
                },
                {
                    title: "Desenvolvimento de Soluções Tecnológicas",
                    content:
                        "Criamos plataformas digitais customizadas, como portais para gestão de dados, aplicativos de serviço ao cidadão e soluções de e-Government, além de implementar tecnologias para automação de processos administrativos e operacionais para empresas do setor privado",
                    contentWidth: "lg:max-w-[767px] sm: max-w-[265px] sm: pb-[116px] lg:pb-0    ",
                },
            ],
        },
    ];

    return (
        <section
            id="servicos"
            className="w-full lg:min-h-screen bg-[#0B2B40] flex flex-col items-center justify-start text-center lg:px-4 lg:pb-32 py-[70px]"
        >
            <div className="">
                <h1 className="sm: text-[50px] sm: leading-[50px] lg:text-[54px] leading-[66px] text-white mb-6 font-rajdhani font-medium">
                    Nossos Serviços
                </h1>
                <p className="lg:text-[14px] lg: eading-[22.4px] sm: text-[13px] sm: leading-[20.8px] font-redhat text-white lg:w-[853.17px] sm: w-[306px] mb-12 lg:mx-[293px] sm: mx-auto">
                    Com uma equipe especializada, oferecemos soluções que tornam a tecnologia e a inovação ferramentas concretas de transformação. Nossos serviços visam não apenas aprimorar a eficiência dos processos de gestão das organizações, mas também gerar um impacto positivo na vida das pessoas, promovendo uma gestão mais inteligente e orientada ao desenvolvimento da sociedade
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-[20px] w-full lg:max-w-[1135px] sm: max-w-[373px]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col bg-[#F2F2F2] rounded-md shadow-md text-left transition-all ${openCardIndex === index ? "h-auto" : "lg:h-[167px] sm: h-[190px]"
                            }`}
                    >
                        {/* Card Header */}
                        <div className="flex lg:pt-[46px] sm: pt-[35px] lg:pl-[45px] sm: pl-[10px]">
                            {/* Imagem */}
                            <div className="relative flex items-center justify-center lg:w-[75px] lg:h-[75px] sm: w-[46px] sm: h-[46px] flex-shrink-0">
                                <Image
                                    src={Rectangle}
                                    alt="Rectangle Blue"
                                    className="absolute lg:w-[75px] lg:h-[75px] sm: w-[46px] sm: h-[46px]"
                                />
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute lg:w-[47px] lg:h-[47px] sm: w-[26px] sm: h-[26px]"
                                />
                            </div>

                            {/* Título e Descrição */}
                            <div className={`flex-1 lg:pl-6 sm: pl-2 ${card.textWidth}`}>
                                <h3 className="lg:text-[26px] sm: text-[16px] lg:leading-[34.4px] sm: leading-[21px] font-extrabold text-black font-redhat truncate">
                                    {card.title}
                                </h3>
                                <p className="text-[#5E5E5E] lg:text-[14px] sm: text-[14px] lg:leading-[22.4px] sm: leading-[20.8px] sm: pt-1 font-redhat font-normal">
                                    {card.description}
                                </p>
                            </div>
                        </div>

                        {/* Botão */}
                        <div className="absolute lg:top-[60px] sm: bottom-[12px] lg:right-[45px] sm: right-[10.5px]">
                            <Image
                                src={Button}
                                alt={openCardIndex === index ? "Fechar Card" : "Abrir Card"}
                                className={`lg:w-[54px] sm: w-[32px] lg:h-[54px] sm: h-[32px] cursor-pointer transform transition-transform duration-300 hover:scale-110 ${openCardIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                                onClick={() =>
                                    setOpenCardIndex(openCardIndex === index ? null : index)
                                }
                            />
                        </div>

                        {/* Subtasks */}
                        {openCardIndex === index && card.subtasks && (
                            <div className="space-y-5 lg:ml-[141px] mt-4 lg:mb-[45px] sm: ml-[67px]">
                                {card.subtasks.map((subtask, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className={`mb-2 ${subtask.contentWidth}`}
                                    >
                                        <h4 className="lg: text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] font-extrabold text-[#5E5E5E] font-redhat">
                                            {subtask.title}
                                        </h4>
                                        <p className="text-[#5E5E5E] lg:text-[14px] sm: text-[14px] lg:leading-[22.4px] sm: leading-[20.8px] font-redhat font-medium break-words">
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
