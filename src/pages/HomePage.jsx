import React from "react";
import Hero from "../components/Hero";
import TiposUsuario from "../components/TiposUsuario";
import Caracteristicas from "../components/Caracteristicas";
import Testimonios from "../components/Testimonios";
import Precios from "../components/Precios";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <TiposUsuario />
      <Caracteristicas />
      <Testimonios />
      {/* <Precios /> */}
      <CTA />
    </div>
  );
};

export default HomePage;
