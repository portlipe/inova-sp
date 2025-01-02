import React from "react";
import Image from "next/image";
import Logo_2 from '../media/Logo_2.svg';
import Logo_zion from '../media/Logo_zion.svg';

const Footer: React.FC = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
            className="w-full lg:h-[475px] sm: h-auto bg-[#0B2D44] text-white sm: py-8 lg:py-12">
            <div className="max-w-[1135px] lg:ml-24 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 sm: pl-[32px]">
                {/* Logo e descrição */}
                <div className="flex flex-col">
                    <Image
                        src={Logo_2}
                        alt="logo_2"
                    />
                    <p className="text-[11px] mt-4 leading-[17px] font-redhat lg:w-[349px] sm: w-[289px]">
                        Atuamos para impulsionar instituições públicas e privadas por meio
                        da inovação, tecnologia, gestão estratégica e pesquisas avançadas.
                    </p>
                </div>

                {/* Navegação e dados */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] sm:gap-8 font-redhat lg:pl-0 text-[13px] leading-[16px] lg:ml-[100px]">
                    <div>
                        <ul className="space-y-8 flex flex-col">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleScroll(item.id)}
                                    className="cursor-pointer group relative pt-4 lg:pt-0"
                                >
                                    <span className="relative">
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-8 sm: mt-8">
                            <li>
                                <strong>E-mail:</strong>{" "}
                                <a
                                    href="mailto:contato@inovasp.org"
                                    className="hover:underline"
                                >
                                    <br />contato@inovasp.org
                                </a>
                            </li>
                            <li className="whitespace-nowrap">
                                <strong>Endereço:</strong> <br />
                                Av. Angélica, 2491 – 10º andar, sala
                                105 – São Paulo / SP
                            </li>
                            <li className="whitespace-nowrap">
                                <strong>CNPJ:</strong> <br />45.895.492/0001-69
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
                className="inline-block cursor-pointer"
            />
        </a>
    </p>
</div>

        </footer>
    );
};

export default Footer;
