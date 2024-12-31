import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../media/logo.svg";
import LogoMenu from "../media/logo_menu.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Fecha o menu automaticamente no layout lg
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full h-[80px] lg:h-[149.12px] flex items-center justify-between px-6 lg:px-[84px] shadow-md z-40 transition-all duration-300 ${
          isOpen ? "bg-[#164772]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <Image
          src={Logo}
          alt="logo"
          width={216}
          height={82}
          className="p-[10px] lg:p-[33.35px]"
          priority
        />

        {/* Botão Menu (Hambúrguer) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            className="w-6 h-6 text-[#164772]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-[#164772] z-50 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } lg:static lg:w-auto lg:bg-transparent lg:z-auto lg:flex lg:items-center`}
        >
          <div className="flex items-center justify-between p-4">
            <Image
              src={LogoMenu}
              alt="logo_menu"
              className="w-[168px] mt-[17px] ml-8 p-0"
              priority
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 text-white lg:hidden focus:outline-none"
              aria-label="Fechar menu"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`flex flex-col lg:flex-row ${
              isOpen ? "mt-16" : "mt-0"
            } gap-y-8 lg:gap-y-0 items-left ml-12 gap-x-10 text-white lg:text-black text-xs uppercase font-redhat`}
          >
            {[
              "Home",
              "O Instituto",
              "Serviços",
              "Newsletter",
              "Associe-se",
              "Contato",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer group relative pt-4 lg:pt-0"
              >
                <span>{item}</span>
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white lg:bg-black transform scale-x-0 group-hover:opacity-0 group-hover:translate-x-full origin-left transition-all duration-300"></span>
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white lg:bg-black transform scale-x-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 origin-left transition-all duration-300 delay-300"></span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Ajuste para não "comer" a próxima seção */}
      <div className="h-[80px] lg:h-[149.12px]" />
    </>
  );
};

export default Header;
