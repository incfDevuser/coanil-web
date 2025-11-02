import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Páginas
import HomePage from "./pages/HomePage";
import CuidadorasPage from "./pages/CuidadorasPage";
import EspecialistasPage from "./pages/EspecialistasPage";
import AdminPage from "./pages/AdminPage";
import PacientePage from "./pages/PacientePage";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuidadoras" element={<CuidadorasPage />} />
        <Route path="/especialistas" element={<EspecialistasPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/pacientes" element={<PacientePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
