import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const text = "Impulsionando organizações com Inovação,   Tecnologia e   Gestão   ";
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState<string[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    words.forEach((word, index) => {
      timeout = setTimeout(() => {
        setVisibleWords((prev) => [...prev, word]);
      }, index * 200); // Adiciona cada palavra a cada 500ms
    });

    return () => clearTimeout(timeout);
  }, [words]);

  return (
    <section
      id="hero"
      className="w-full h-[618px] flex items-center justify-center relative overflow-hidden bg-[#C2C2C2] bg-cover bg-center"
      style={{
        backgroundImage: `url('/media/desktop.mp4')`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Texto com animação */}
      <div className="flex items-center justify-center w-full h-full">
        <h1 className="max-w-full w-full text-[32px] sm:text-[52px] lg:text-[70px] lg:leading-[71px] px-[32px] text-white font-rajdhani font-semibold leading-[49.4px] text-center z-10">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className={`inline-block opacity-0 transform translate-y-4 transition-all duration-700 ${
                  visibleWords.includes(word)
                    ? "opacity-100 translate-y-0"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {word}
              </span>
              {/* Quebra de linha condicional para telas maiores */}
              {word === "com" && (
                <span className="hidden lg:block w-full">
                  <br />
                </span>
              )}
              &nbsp;
            </React.Fragment>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
