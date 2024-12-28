"use client"
import Image from "next/image";
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatsappIcon from './media/wpp_button.svg';
import Header from "./components/Header";
import Partner from './components/Partner';
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="bg-white w-full">
      <Header />

      <Hero />

      <AboutUs />

      <Services />

      <Newsletter />

      <Partner />

      <Footer />

      {/* Botão WhatsApp */}
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5591234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-11 right-16 z-50 cursor-pointer hidden"
      >
        <Image
          src={WhatsappIcon}
          width={60.69}
          height={60.69}
          alt="WhatsApp Icon"
        />
      </a>
    </main >
  );
}
