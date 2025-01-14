import React, { useEffect, useState } from "react";
import Image from "next/image";
import Flower from "../media/big_flower.svg";


const AboutUs: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;

      const imageElement = document.getElementById("flower-image");
      if (imageElement) {
        const rect = imageElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
      <section
        id="instituto"
        className="w-full lg:h-[618px] md:h-[918px] sm: h-[588px] flex flex-col lg:flex-row items-center relative overflow-hidden py-[70px]"
        aria-labelledby="about-us-title"
      >
        {/* Coluna da imagem visível apenas em telas grandes */}
        <div className="hidden lg:flex w-1/2 h-auto relative justify-start">
          <Image
            id="flower-image"
            src={Flower}
            alt="Ilustração de uma flor estilizada representando inovação"
            className={`max-w-full w-[710px] max-h-screen overflow-hidden transition-transform transition-opacity duration-[3000ms] ease-in-out ${
              hasAnimated
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            unoptimized={true}
          />
        </div>

        {/* Imagem para telas menores */}
        <div
          id="flower-image-mobile"
          className={`absolute sm: top-[-90px] md:top-[-150px] md:left-[200px] sm: left-[90px] transform -translate-x-1/2 lg:hidden sm: w-[740px] md:w-[1200px] max-h-screen transition-transform transition-opacity duration-[3000ms] ease-in-out ${
            hasAnimated
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <Image
            src={Flower}
            alt="Ilustração de uma flor estilizada representando inovação"
            className="w-full h-full z-0 object-contain"
            loading="lazy"
            unoptimized={true}
          />
        </div>

        {/* Texto */}
        <div className="relative lg:max-w-[466px] md:max-w-[450px] sm: max-w-[321px] lg:ml-32 md:space-y-[40px] md:my-auto lg:space-y-[20px]">
          <h2
            id="about-us-title"
            className="sm: text-[50px] sm: leading-[62px] lg:text-[54px] lg:leading-[66px] md:text-[64px] md:leading-[66px] font-medium text-black mb-3 font-rajdhani"
          >
            O Instituto
          </h2>
          <p className="lg:text-[14px] lg:leading-[22.4px] sm: text-[13px] sm: leading-[20.8px] md:text-[18px] md:leading-[22px] text-black font-redhat">
            O Instituto INOVA-SP é dedicado a impulsionar as organizações por
            meio da inovação, tecnologia e gestão estratégica. Oferecemos uma
            ampla gama de serviços especializados, incluindo consultoria
            estratégica e tecnológica, programas de inovação, trilhas de
            capacitação e pesquisas aplicadas. Nosso objetivo é promover a
            adoção de soluções inovadoras e tecnológicas que transformem a
            gestão das organizações, promovendo eficiência, transparência e
            desenvolvimento sustentável.
          </p>
          <p className="lg:text-[14px] lg:leading-[22.4px] sm: text-[13px] sm: leading-[20.8px] md:text-[18px] md:leading-[25px] text-black mt-3 font-redhat">
            Nossa missão é criar soluções sob medida para os desafios de hoje e
            antecipar as necessidades de amanhã. Com isso, trabalhamos para
            tornar a tecnologia um ativo poderoso que impulsiona o crescimento
            e a qualidade dos serviços oferecidos à sociedade.
          </p>
        </div>
      </section>
  );
};

export default AboutUs;
