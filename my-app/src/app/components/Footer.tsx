import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo_2 from "../media/Logo_2.svg";
import Logo_zion from "../media/Logo_zion.svg";

const Footer: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return; // Impede a verificação se a animação já foi executada

      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true); // Define que a animação ocorreu
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "O Instituto", id: "instituto" },
    { name: "Serviços", id: "servicos" },
    { name: "Newsletter", id: "newsletter" },
    { name: "Associe-se", id: "partner" },
    { name: "Contato", id: "footer" },
  ];

  return (
    <footer
      id="footer"
      className="w-full lg:h-[475px] sm: h-auto bg-[#0B2D44] text-white sm: py-8 lg:py-12"
    >
      <div className="max-w-[1135px] lg:ml-24 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 sm: pl-[32px]">
        {/* Logo e descrição */}
        <div className="flex flex-col">
          <div
            className={`transform transition-all duration-1000 opacity-0 ${
              hasAnimated ? "opacity-100 translate-y-0" : "translate-y-20"
            }`}
          >
            <Image src={Logo_2} alt="logo_2" />
          </div>
          <p className="text-[11px] mt-4 leading-[17px] font-redhat lg:w-[349px] sm: w-[289px]">
            Atuamos para impulsionar instituições públicas e privadas por meio da
            inovação, tecnologia, gestão estratégica e pesquisas avançadas.
          </p>
        </div>

        {/* Navegação e dados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] sm: gap-8 font-redhat lg:pl-0 text-[13px] leading-[16px] lg:ml-[100px]">
          <div>
            <ul className="space-y-8 flex flex-col">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer group relative pt-4 lg:pt-0"
                >
                  <span className="relative group z-10">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-8 lg:mt-0 sm: mt-8">
              <li>
                <strong className="block mb-3">E-mail:</strong>{" "}
                <a href="mailto:contato@inovasp.org" className="hover:underline">
                  contato@inovasp.org
                </a>
              </li>
              <li className="whitespace-nowrap">
                <strong className="block">Endereço:</strong> <br />
                Av. Angélica, 2491 – 10º andar, sala 105 – São Paulo / SP
              </li>
              <li className="whitespace-nowrap">
                <strong className="block">CNPJ:</strong> <br />
                45.895.492/0001-69
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="lg:mt-[110px] text-[12px] leading-[15px] font-redhat sm: mt-10 w-full flex flex-col items-center border-t-2 border-gray-600">
        <p className="flex items-center gap-2 pt-6">
          Desenvolvido por
          <a
            href="https://www.zionsoftwarehouse.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Logo_zion}
              alt="logo_zion"
              width={44.75}
              height={13.34}
              className={`inline-block cursor-pointer transition-opacity duration-[3000ms] opacity-0 ${
                hasAnimated ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
