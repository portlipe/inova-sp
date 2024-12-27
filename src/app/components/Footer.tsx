import React from "react";
import Image from "next/image";
import Logo_2 from '../media/Logo_2.svg';
import Logo_zion from '../media/Logo_zion.svg';
import Linkedin from '../media/linkedin_logo.svg';
import Instagram from '../media/instagram_logo.svg'

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-[475px] bg-[#0B2D44] text-white py-8 lg:py-12">
            <div className="max-w-[1135px] mx-24 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Logo e descrição */}
                <div className="flex flex-col">
                    <Image
                        src={Logo_2}
                        alt='logo_2'
                        className=""
                    />
                    <p className="text-[11px] mt-4 leading-[17px] font-redhat">
                        Atuamos para impulsionar instituições públicas e privadas por meio
                        da inovação, tecnologia, gestão estratégica e pesquisas avançadas.
                    </p>
                </div>

                {/* Navegação */}
                <div className="grid grid-cols-2 pl-[80px] gap-[80px] font-redhat">
                    <div>
                        <ul className="text-sm space-y-8">
                            {["Home", "O Instituto", "Serviços", "Newsletter", "Associe-se", "Contato"].map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group inline-block"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white transform scale-x-0 group-hover:opacity-0 group-hover:translate-x-full origin-left transition-all duration-300"></span>
                                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white transform scale-x-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 origin-left transition-all duration-300 delay-300"></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="text-sm space-y-8">
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

                {/* Redes sociais */}
                <div className="flex items-end lg:mt-[330px] ml-[800px]">
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#5E97A8] rounded-full flex items-center justify-center">
                            <Image
                                src={Linkedin}
                                alt="linkedin"
                                className="w-4"
                            />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#5E97A8] rounded-full flex items-center justify-center"
                        >
                            {/* Ícone do Instagram */}
                            <Image
                                src={Instagram}
                                alt="instagram"
                                className="w-4"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-[20px] max-w-full w-full items-center justify-center flex border-t-2 border-gray-600">
                <p className="flex flex-row gap-2 pt-2 ">
                    Desenvlvido por
                    <Image
                        src={Logo_zion}
                        alt="logo_zion"
                        width={44.75}
                        height={13.34}
                    />
                </p>
            </div>
        </footer>
    );
};

export default Footer;