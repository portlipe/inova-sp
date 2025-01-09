import React, { useState } from "react";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita o recarregamento da página
        setIsSubmitting(true);

        const googleFormURL =
            "https://docs.google.com/forms/d/e/1FAIpQLScsnCeH8jkoyEcoRHl_Fe2UaSCYUWe-KQFOW1Hk91iGVLfxlg/formResponse";

        const formData = new FormData();
        formData.append("entry.2082843926", email); // Certifique-se de que o 'entry.ID' está correto

        try {
            await fetch(googleFormURL, {
                method: "POST",
                mode: "no-cors", // Necessário devido à política de CORS do Google Forms
                body: formData,
            });

            alert("E-mail cadastrado com sucesso!");
        } catch (error) {
            alert("Ocorreu um erro ao cadastrar o e-mail. Tente novamente.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
            setEmail(""); // Reseta o campo de e-mail após o envio
        }
    };

    return (
        <section
            id="newsletter"
            className="w-full h-[460px] flex flex-col justify-center items-center lg:px-8 md:my-[80px]"
            aria-label="Seção de cadastro para a Newsletter"
        >
            <h1 className="sm: w-[324px] lg:w-full md:w-[500px] sm: leading-[40px] sm: text-[40px] lg:text-[54px] font-medium text-[#141414] lg:leading-[68.9px] md:text-[64px] md:leading-[66px] font-rajdhani lg:mb-[35px] md:mb-[30px] mb-4 text-center">
                Faça parte da nossa Comunidade
            </h1>
            <p className="lg:text-[18px] lg:leading-[30px] sm: text-[12.8px] sm: leading-[18.8px] sm: w-[307px] md:text-[18px] md:leading-[25px] font-normal text-[#141414] text-center lg:w-[776px] md:w-[580px] lg:mb-[50px] md:mb-[45px] mb-6 font-redhat">
                Conecte-se com uma comunidade engajada em inovação, tecnologia e transformação digital. Fique por dentro das novidades do nosso Instituto e das tendências que estão moldando o futuro.
            </p>
            <form
                onSubmit={handleSubmit} // Adiciona o evento de envio ao formulário
                className="flex lg:flex-row items-center w-full sm: flex-col justify-center rounded-sm font-redhat"
                role="form"
                aria-labelledby="newsletter-title"
            >
                <label htmlFor="email" className="sr-only">
                    Digite seu e-mail
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="lg:w-[554px] lg:h-[82px] md:w-[550px] sm: w-[350px] sm: h-[72px] px-[40px] py-[10px] bg-[#F2F2F2] flex justify-between outline-none"
                    aria-required="true"
                    required // Garante que o campo seja obrigatório
                />
                <button
                    type="submit"
                    disabled={isSubmitting} // Desativa o botão enquanto está enviando
                    className="lg:w-[215px] sm: w-[350px] md:w-[550px] sm: h-[72px] lg:h-[82px] bg-[#12395a] text-white font-redhat text-[20px] font-semibold leading-[26.46px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#5E97A8]"
                    aria-label="Cadastrar e-mail na newsletter"
                >
                    Cadastrar
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
