import React from "react";
import Image from "next/image";
import Flower from "../media/big_flower.svg";


const AboutUs: React.FC = () => {
    return (
        <section
            id="Instituto"
            className="w-full lg: h-[680px] sm: h-[550px] flex flex-col lg:flex-row items-center sm: px-[45px]" 
        >
            {/* Coluna da imagem visível apenas em telas grandes */}
            <div className="lg:flex w-1/2 h-[700px] justify-start hidden-overflow">
                <Image
                    src={Flower}
                    alt="big_flower"
                    className="left-[-32px] max-h-screen"
                />
            </div>

            {/* Coluna do texto com imagem de fundo em telas menores */}
            <div
                className="max-w-[466px] lg:ml-[200px] bg-big-flower bg-no-repeat bg-contain bg-left-bottom lg:bg-none"
            >
                <h2 className="lg:text-[24px] sm: text-[50px] sm: leading-[62px] lg:text-[54px] font-bold text-black mb-4 font-rajdhani font-medium">
                    O Instituto
                </h2>
                <p className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] text-black font-redhat">
                    O Instituto INOVA-SP é dedicado a impulsionar as organizações por meio da inovação, tecnologia e gestão estratégica. Oferecemos uma ampla gama de serviços especializados, incluindo consultoria estratégica e tecnológica, programas de inovação, trilhas de capacitação e pesquisas aplicadas. Nosso objetivo é promover a adoção de soluções inovadoras e tecnológicas que transformem a gestão das organizações, promovendo eficiência, transparência e desenvolvimento sustentável.
                </p>
                <p className="lg:text-[14px] sm: text-[13px] lg:leading-[22.4px] sm: leading-[20.8px] text-black mt-4 font-redhat sm: mb-[60px]">
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