import React from "react";
import Image from "next/image";
import Flower from "../media/big_flower.svg";


const AboutUs: React.FC = () => {
    return (
        <section
            id="Instituto"
            className="w-full flex flex-col lg:flex-row items-center relative"
        >
            {/* Coluna da imagem visível apenas em telas grandes */}
            <div className="hidden lg:flex w-1/2 h-[710px] relative justify-start mb-6 lg:mb-0 overflow-hidden">
                <Image
                    src={Flower}
                    alt="big_flower"
                    className="max-w-full w-[740.13px] max-h-screen"
                />
            </div>

            {/* Coluna do texto com imagem de fundo em telas menores */}
            <div
                className="max-w-[466px] lg:ml-[200px] bg-big-flower bg-no-repeat bg-contain bg-left-bottom lg:bg-none"
            >
                <h2 className="text-[24px] sm:text-[36px] lg:text-[54px] font-bold text-black mb-4 font-rajdhani font-medium">
                    O Instituto
                </h2>
                <p className="text-[14px] leading-[22.4px] text-black font-redhat">
                    O Instituto INOVA-SP é dedicado a impulsionar as organizações por meio da inovação, tecnologia e gestão estratégica. Oferecemos uma ampla gama de serviços especializados, incluindo consultoria estratégica e tecnológica, programas de inovação, trilhas de capacitação e pesquisas aplicadas. Nosso objetivo é promover a adoção de soluções inovadoras e tecnológicas que transformem a gestão das organizações, promovendo eficiência, transparência e desenvolvimento sustentável.
                </p>
                <p className="text-[14px] leading-[22.4px] text-black mt-4 font-redhat">
                    Nossa missão é criar soluções sob medida para os desafios de hoje e
                    antecipando as necessidades de amanhã. Com isso, trabalhamos para
                    tornar a tecnologia um ativo poderoso que impulsiona o crescimento e
                    a qualidade dos serviços oferecidos à sociedade.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
