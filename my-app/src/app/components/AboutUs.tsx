import React from "react";
import Image from "next/image";
import Flower from "../media/big_flower.svg";

const AboutUs: React.FC = () => {
  return (
    <section
      id="instituto"
      className="w-full lg:h-[618px] sm: h-[632px] flex flex-col lg:flex-row items-center relative overflow-hidden py-[70px]"
    >
      {/* Coluna da imagem visível apenas em telas grandes */}
      <div className="hidden lg:flex w-1/2 h-auto relative justify-start">
        <Image
          src={Flower}
          alt="big_flower"
          className="max-w-full w-[710px] max-h-screen overflow-hidden lg:animate-fade-in"
        />
      </div>
      
      <div className="absolute top-[-100px] left-[70px] transform -translate-x-1/2 lg:hidden w-[800px] max-h-screen overflow-hidden"> 
          <Image
            src={Flower}
            alt="big_flower"
            className="w-full h-full z-0 object-contain"
          />
        </div>
      
      {/* Texto com imagem posicionada no fundo para telas menores */}
      <div className="relative lg:max-w-[466px] sm: max-w-[321px] lg:ml-32">
        <h2 className="sm: text-[50px] sm: leading-[62px] lg:text-[54px] lg:leading-[66px] font-medium text-black mb-3 font-rajdhani">
          O Instituto
        </h2>
        <p className="lg:text-[14px] lg:leading-[22.4px] sm: text-[13px] sm: leading-[20.8px] text-black font-redhat">
          O Instituto INOVA-SP é dedicado a impulsionar as organizações por meio
          da inovação, tecnologia e gestão estratégica. Oferecemos uma ampla gama
          de serviços especializados, incluindo consultoria estratégica e
          tecnológica, programas de inovação, trilhas de capacitação e pesquisas
          aplicadas. Nosso objetivo é promover a adoção de soluções inovadoras e
          tecnológicas que transformem a gestão das organizações, promovendo
          eficiência, transparência e desenvolvimento sustentável.
        </p>
        <p className="lg:text-[14px] leading-[22.4px] sm: text-[13px] sm: leading-[20.8px] text-black mt-3 font-redhat">
          Nossa missão é criar soluções sob medida para os desafios de hoje e
          antecipar as necessidades de amanhã. Com isso, trabalhamos para
          tornar a tecnologia um ativo poderoso que impulsiona o crescimento e a
          qualidade dos serviços oferecidos à sociedade.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
