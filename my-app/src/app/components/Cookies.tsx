'use client';
import React, { useState, useEffect } from "react";

const CookiePopup: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
        console.log(localStorage.getItem("cookiesAccepted"));
        if (!hasAcceptedCookies) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = async () => {
        await handleCookieConsent(); // Enviar dados ao Google Forms
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
    };

    const handleDismiss = () => {
        setShowPopup(false);
    };

    const handleCookieConsent = async () => {
        try {
            // 1. Capturar informações do navegador e localização
            const res = await fetch("https://ipinfo.io/json?token=ec5e1e368842f7");
    
            console.log('Resposta do IPInfo:', res); // Verifica a resposta
            if (!res.ok) {
                throw new Error('Falha ao obter dados de localização');
            }
            
            const locationData = await res.json();
            console.log('Dados de localização:', locationData); // Verifique os dados retornados
    
            const browser = navigator.userAgent;
            const device =
                /Mobi|Android|iPhone/.test(navigator.userAgent) ? "Mobile" : "Desktop";
            const screenResolution = `${window.screen.width}x${window.screen.height}`;
            const language = navigator.language || navigator.languages[0];
            const { city, region, country } = locationData;
    
            // 2. Enviar os dados para o Google Forms
            const formData = new FormData();
            formData.append("entry.1121593718", browser);
            formData.append("entry.94950720", device);
            formData.append("entry.1050691582", screenResolution);
            formData.append("entry.1700647167", language);
            formData.append("entry.1104564840", city);
            formData.append("entry.1234493609", region);
            formData.append("entry.1416471697", country);
    
            const response = await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSdEiidfPnscMQMmiQCU8TWUo5osJzjCFDqGl9zViE40srqqnQ/formResponse",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                }
            );
    
            console.log('Resposta do Google Forms:', response); // Verifique se a resposta é bem-sucedida
            console.log("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
        }
    };
    

    if (!showPopup) return null;

    return (
        <div className="fixed bottom-0 lg:right-0 lg:left-[47px] flex bg-opacity-90 z-50 sm: w-auto sm: ml-5">
            <div className="bg-white p-6 lg:w-[542px] lg:h-[245px] sm: w-[348px] sm: h-[158px] lg:px-[51px] border shadow-sm">
                <p className="text-center text-black lg:text-[18px] lg:leading-[29px] sm: text-[11px] sm: leading-[19px] lg:mb-8 sm: mb-4 lg:pt-[38px] font-redhat">
                    Este site utiliza cookies para melhorar sua experiência e para
                    analisar o desempenho de tráfego.
                </p>
                <div className="flex flex-row justify-center items-center lg:mb-[47px] lg:text-[17px] lg:leading-[21px] sm: text-[11px] sm: leading-[13px]">
                    <button
                        onClick={handleAccept}
                        className="lg:w-[219px] lg:h-[64px] sm: w-[145px] sm: h-[41px] bg-[#5C7383] text-white px-6 py-2 hover:scale-110 transition-transform duration-300 font-redhat"
                    >
                        Permitir cookies
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="lg:w-[103px] lg:h-[64px] sm: w-[60px] sm: h-[41px] bg-white text-[#5C7383] hover:text-gray-700 hover:scale-110 transition-transform duration-300 font-redhat"
                    >
                        Dispensar
                    </button>
                </div>
            </div>

        </div>

    );
};

export default CookiePopup;
