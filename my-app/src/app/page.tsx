"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const CookiePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  const handleDismiss = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 lg:right-0 lg:left-[47px] flex bg-opacity-90 z-50 sm: mx-[30px]">
      <div className="bg-white p-6 lg:w-[542px] lg:h-[245px] sm: w-[348px] sm: h-[158px] lg:px-[51px] border shadow-sm">
        <p className="text-center text-black lg:text-[18px] lg:leading-[29px] sm: text-[11px] sm: leading-[19px] lg:mb-8 sm: mb-4 lg:pt-[38px]">
          Este site utiliza cookies para melhorar sua experiência e para
          analisar o desempenho de tráfego.
        </p>
        <div className="flex flex-row justify-center items-center lg:mb-[47px] lg:text-[17px] lg:leading-[21px] sm: text-[11px] sm: leading-[13px]">
          <button
            onClick={handleAccept}
            className="lg:w-[219px] lg:h-[64px] sm: w-[145px] sm: h-[41px] bg-[#5C7383] text-white px-6 py-2 hover:scale-110 transition-transform duration-300"
          >
            Permitir cookies
          </button>
          <button
            onClick={handleDismiss}
            className="lg:w-[103px] lg:h-[64px] sm: w-[60px] sm: h-[41px] bg-white text-[#5C7383] hover:text-gray-700 hover:scale-110 transition-transform duration-300"
          >
            Dispensar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <main className="bg-white w-full overflow-hidden">
      <Header />

      <Hero />

      <AboutUs />

      <Services />

      <Newsletter />

      <Partner />

      <Footer />

      {/* Componente de Cookies */}
      <CookiePopup />
    </main>
  );
}
