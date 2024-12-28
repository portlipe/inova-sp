import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const figureRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Quando 10% do elemento estiver visível
    );

    if (figureRef.current) {
      observer.observe(figureRef.current);
    }

    return () => {
      if (figureRef.current) {
        observer.unobserve(figureRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-[618px] flex items-center justify-center bg-[#C2C2C2]"
    >
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        {/* Texto Principal */}
        <h1 className="max-w-full w-full text-[70.22px] text-white font-rajdhani font-semibold leading-[71.63px] flex items-center justify-center text-center animate-fade-up z-10 mt-[225px]">
          Impulsionando organizações com <br /> Inovação, &nbsp;&nbsp;Tecnologia &nbsp;&nbsp;e Gestão
        </h1>

        {/* Container do Vídeo */}
        <div
          ref={figureRef}
          className={`flex-1 w-full relative z-2 transition-all duration-700 ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[3.9393rem] opacity-0"
            }`}
          style={{
            clipPath: isVisible
              ? "inset(0px 0px 0px 0px)"
              : "inset(0px 289.082px 119.112px 401.483px)",
          }}
        >
          {/* Placeholder para Layout */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
