import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full lg:h-[618px] sm:h-[520px] sm:items-center flex justify-center relative overflow-hidden bg-[#C2C2C2]"
    >
      {/* Vídeo de fundo */}
      <video
        src="my-app\my-app\src\app\media\desktop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Conteúdo do Hero */}
      <div className="relative z-10">
        <motion.h1
          className="lg:w-[975px] sm:w-[326px] lg:text-[70px] lg:leading-[70px] sm:text-[50px] sm:leading-[62px] text-white font-semibold font-rajdhani lg:text-center lg:pb-[100px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Impulsionando organizações com Inovação, &nbsp;&nbsp; Tecnologia e &nbsp;&nbsp; Gestão
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
