import React from "react";

const Newsletter: React.FC = () => {
    return (
        <section
            id="newsletter"
            className="w-full h-[460px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        >
            <h1 className="text-[28px] sm:text-[36px] lg:text-[54px] font-medium text-[#141414] leading-[68.9px] font-rajdhani mb-4">
                Cadastre-se em nossa Newsletter
            </h1>
            <p className="text-[14px] sm:text-[16px] sm:leading[20px] leading-[22.4px] text-gray-600 text-center max-w-[600px] mb-6 font-redhat">
                Inscreva-se em nossa newsletter e acompanhe todas as novidades do nosso Instituto e do mercado de inovação e tecnologia.
            </p>
            <div className="flex sm:flex-row items-center w-full sm: flex-col justify-center rounded-sm font-redhat">
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="
                        w-[554px] h-[82px] px-[40px] py-[10px] bg-[#F2F2F2] flex justify-between outline-none"
                    />
                <button
                    className="
                        w-[215px] h-[82px] bg-[#5E97A8] text-white font-redhat text-[20px] font-semibold leading-[26.46px]
                        sm:w-[180px] sm:h-[70px] sm:text-[18px]
                        md:w-[200px] md:h-[75px] md:text-[19px]
                        lg:w-[215px] lg:h-[82px] lg:text-[20px]"
                >
                    Cadastrar
                </button>
            </div>
        </section>
    );
}
export default Newsletter;