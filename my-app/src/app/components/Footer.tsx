import React from "react";
import Image from "next/image";
import Logo_2 from '../media/Logo_2.svg';
import Logo_zion from '../media/Logo_zion.svg';

const Footer: React.FC = () => {
    return (
        <footer className="w-full lg:h-[475px] sm: h-[768px] bg-[#0B2D44] text-white sm: py-8 lg:py-12">
            <div className="max-w-[1135px] lg:ml-24 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 sm: pl-[32px]">
                {/* Logo e descrição */}
                <div className="flex flex-col">
                    <Image
                        src={Logo_2}
                        alt="logo_2"
                    />
                    <p className="text-[11px] mt-4 leading-[17px] font-redhat sm: max-w-[289px]">
                        Atuamos para impulsionar instituições públicas e privadas por meio
                        da inovação, tecnologia, gestão estratégica e pesquisas avançadas.
                    </p>
                </div>

                {/* Navegação e dados */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] sm: gap-8 font-redhat lg:pl-0 text-[13px] leading-[16px]">
                    <div>
                        <ul className="space-y-8">
                            {["Home", "O Instituto", "Serviços", "Newsletter", "Associe-se", "Contato"].map((item, index) => (
                                <li key={index} className="relative group">
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white transform scale-x-0 group-hover:opacity-0 group-hover:translate-x-full origin-left transition-all duration-300"></span>
                                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white transform scale-x-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 origin-left transition-all duration-300 delay-300"></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-8">
                            <li>
                                <strong>E-mail:</strong> contato@inovasp.org
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
            <div className="lg:mt-[110px] text-[12px] leading-[18px] sm: mt-10 w-full flex flex-col items-center border-t-2 border-gray-600">
                <p className="flex items-center gap-2 pt-6">
                    Desenvolvido por
                    <Image
                        src={Logo_zion}
                        alt="logo_zion"
                        width={44.75}
                        height={13.34}
                        className="inline-block"
                    />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
