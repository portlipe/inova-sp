"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CookiePopup from "./components/Cookies";

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

      <CookiePopup />
    </main>
  );
}
