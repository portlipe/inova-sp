import React from "react";
import Image from "next/image";
import HeroImage from "../media/hero.svg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full lg:h-[618px] md:h-[1018px] sm: h-[518px] flex items-center justify-center bg-[#C2C2C2]">
      
      {/* Vídeo de fundo para Desktop */}
      <video
          src="/videos/desktop.mp4"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 block"
        />

      {/* Vídeo de fundo para Mobile */}
      <video
          src="/videos/mobile.mp4"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 block lg:hidden"
        />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

      {/* Versão com texto para mobile */}
      <div className="lg:hidden flex items-center justify-center w-full h-full z-10">
        <h1 className="w-[975px] lg:h-[117px] sm: max-w-[326px] sm: max-h-[229px] md:max-w-[350px] md:max-h-[750px] md:text-[80px] md:leading-[74px] sm: text-[52px] text-white font-rajdhani font-semibold sm: leading-[49.4px] flex items-left justify-center text-left animate-fade-in">
          Impulsionando organizações com
          Inovação, Tecnologia e Gestão
        </h1>
      </div>

      {/* Versão com imagem para telas desktop */}
      <div className="hidden lg:flex items-center justify-center w-[975px] h-[117px] animate-fade-in z-10">
        <h1 className="w-[975px] lg:h-[117px] text-[70px] leading-[71px] text-white font-rajdhani font-semibold">
        Impulsionando organizações com
        Inovação, Tecnologia e Gestão
        </h1>
      </div>
    </section>
  );
};

export default Hero;
