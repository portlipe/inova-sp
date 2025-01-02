import React from "react";
import Image from "next/image";
import HeroImage from "../media/hero.svg";


const Hero: React.FC = () => {

  return (
    <section id="hero"
    className="w-full lg:h-[618px] sm: h-[518px] flex items-center justify-center bg-[#C2C2C2]">

      {/* Versão com texto para telas menores */}
      <div className="lg:hidden flex items-center justify-center w-full h-full">
        <h1 className="max-w-[326px] max-h-[229] text-[52px] text-white font-rajdhani font-semibold leading-[49.4px] flex items-left justify-center text-left animate-fade-in z-10">
          Impulsionando organizações com
          Inovação, Tecnologia e Gestão
        </h1>
      </div>

      {/* Versão com imagem para telas desktop */}
      <div className="hidden lg:flex items-center justify-center w-[975px] h-[117px] animate-fade-in">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={975}
          height={117}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;