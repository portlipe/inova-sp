import React from "react";
import Image from "next/image";
import HeroImage from "../media/hero.svg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full lg:h-[618px] sm: h-[518px] flex items-center justify-center bg-[#C2C2C2]">
      
      {/* Vídeo de fundo para Desktop */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden lg:block">
        <source src="/videos/desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Vídeo de fundo para Mobile */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0 block lg:hidden">
        <source src="/videos/mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Filtro escuro sobre o vídeo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

      {/* Versão com texto para telas menores */}
      <div className="lg:hidden flex items-center justify-center w-full h-full z-10">
        <h1 className="max-w-[326px] max-h-[229px] text-[52px] text-white font-rajdhani font-semibold leading-[49.4px] flex items-left justify-center text-left animate-fade-in">
          Impulsionando organizações com
          Inovação, Tecnologia e Gestão
        </h1>
      </div>

      {/* Versão com imagem para telas desktop */}
      <div className="hidden lg:flex items-center justify-center w-[975px] h-[117px] animate-fade-in z-10">
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
