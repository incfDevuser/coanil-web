import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TiposUsuario from "./components/TiposUsuario";
import Caracteristicas from "./components/Caracteristicas";
import Testimonios from "./components/Testimonios";
import CTA from "./components/CTA";
import Precios from "./components/Precios";
function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <TiposUsuario />
        <Caracteristicas />
        <Testimonios />
        <Precios />
        <CTA />
        {/* Secciones */}
        <div className="my-20">{/* Otra seccion */}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
