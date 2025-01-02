import React from "react";

const Newsletter: React.FC = () => {
    return (
        <section
            id="newsletter"
            className="w-full h-[460px] flex flex-col justify-center items-center sm: px-6 lg:px-8"
        >
            <h1 className="sm: leading-[40px] sm: text-[40px] lg:text-[54px] font-medium text-[#141414] lg:leading-[68.9px] font-rajdhani mb-4 text-center sm: px-[30px]">
                Cadastre-se em nossa Newsletter
            </h1>
            <p className="lg:text-[18px] lg:leading-[30px] sm: text-[12.8px] sm: leading-[18.8px] sm: w-[307px] font-normal text-[#141414] text-center lg:w-[581px] mb-6 font-redhat">
                Inscreva-se em nossa newsletter e acompanhe todas as novidades do nosso Instituto e do mercado de inovação e tecnologia.
            </p>
            <div className="flex sm:flex-row items-center w-full sm: flex-col justify-center rounded-sm font-redhat">
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="
                        lg:w-[554px] lg:h-[82px] sm: w-[350px]  sm: h-[72px] px-[40px] py-[10px] bg-[#F2F2F2] flex justify-between outline-none"
                />
                <button
                    className="
                       lg:w-[215px] sm: w-[350px]  sm: h-[72px] lg:h-[82px] bg-[#5E97A8] text-white font-redhat text-[20px] font-semibold leading-[26.46px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#12395a]"
                >
                    Cadastrar
                </button>
            </div>
        </section>
    );
};

export default Newsletter;
