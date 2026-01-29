import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Home,
  Users,
  Activity,
  Heart,
  Building,
  Layout,
  FilePlus,
  ChevronRight,
} from "lucide-react";

import CrearCentro from "../assets/media/admin/crear_centro.png";
import PestañaPrincipalCodigo from "../assets/media/admin/pestaña_principal.png";
import CrearEntidades from "../assets/media/admin/crear_entidades.png";
import CrearResidencia from "../assets/media/admin/crear_residencia.png";
import CrearPabellon from "../assets/media/admin/crear_pabellon.png";
import CrearEspecialidad from "../assets/media/admin/crear_especialidad.png";
import PestañaPrincipalHome from "../assets/media/admin/pestnaña_principal_home.png";
import GestionPacientes from "../assets/media/admin/gestion_pacientes.png";
import GestionPersonal from "../assets/media/admin/gestion_personal.png";
import GestionActividadesPorPaciente from "../assets/media/admin/actividades_por_pacientes.png";
import GestionSignosVitales from "../assets/media/admin/signos_vitales.png";

const BrowserFrame = ({ children, title }) => (
  <div className="relative mx-auto w-full bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden group transition-all duration-300 hover:shadow-blue-900/10">
    <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
      </div>
      <div className="ml-4 flex-1 bg-white h-6 rounded-md border border-slate-200 text-[10px] flex items-center px-3 text-slate-400 font-mono">
        admin.cuidados-app.com / {title}
      </div>
    </div>
    <div className="relative bg-slate-50 aspect-video flex items-center justify-center overflow-hidden">
      {children}
    </div>
  </div>
);

const InteractiveShowcase = ({
  steps,
  activeIndex,
  onStepChange,
  align = "left",
}) => {
  return (
    <div
      className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${align === "right" ? "direction-rtl" : ""}`}
    >
      <div
        className={`lg:col-span-5 flex flex-col gap-3 ${align === "right" ? "lg:order-2" : "lg:order-1"}`}
      >
        {steps.map((step, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onStepChange(idx)}
              className={`text-left p-4 rounded-xl transition-all duration-300 border-l-4 group relative overflow-hidden
                ${
                  isActive
                    ? "bg-white shadow-lg border-blue-600 scale-105 z-10"
                    : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200 opacity-70 hover:opacity-100"
                }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 p-2 rounded-lg transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400"}`}
                >
                  {step.icon}
                </div>
                <div>
                  <h4
                    className={`font-bold text-lg mb-1 transition-colors ${isActive ? "text-slate-900" : "text-slate-600"}`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 animate-slide-right w-full opacity-10"></div>
              )}
            </button>
          );
        })}
      </div>
      <div
        className={`lg:col-span-7 ${align === "right" ? "lg:order-1" : "lg:order-2"}`}
      >
        <BrowserFrame title={steps[activeIndex].label}>
          <img
            src={steps[activeIndex].image}
            alt={steps[activeIndex].label}
            className="w-full h-full object-contain transition-all duration-500 transform animate-fade-in-up"
            key={activeIndex}
          />
        </BrowserFrame>
        <div className="mt-6 text-center lg:text-right">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Visualizando: {steps[activeIndex].label}
          </span>
        </div>
      </div>
    </div>
  );
};
const StepHeader = ({ number, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
      Paso {number}
    </span>
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-lg text-slate-500">{subtitle}</p>
  </div>
);

const AdminPage = () => {
  const [step1Index, setStep1Index] = useState(0);
  const [step2Index, setStep2Index] = useState(0);
  const [step3Index, setStep3Index] = useState(0);

  const dataStep1 = [
    {
      title: "Registro del Centro",
      description:
        "Ingresa los datos fiscales y dirección. Es la base de tu ecosistema de cuidados.",
      label: "Formulario de Registro",
      image: CrearCentro,
      icon: <Building size={20} />,
    },
    {
      title: "Obtención del Código Seguro",
      description:
        "El sistema genera una llave única. Este código vinculará a todo tu personal y pacientes.",
      label: "Dashboard - Código Generado",
      image: PestañaPrincipalCodigo,
      icon: <CheckCircle size={20} />,
    },
  ];

  const dataStep2 = [
    {
      title: "Residencias",
      description: "Crea las macro-estructuras (ej. Edificio Norte, Piso 1).",
      label: "Vista de Entidades",
      image: CrearResidencia,
      icon: <Home size={20} />,
    },
    {
      title: "Pabellones",
      description: "Divide las residencias en salas o unidades manejables.",
      label: "Crear Pabellón",
      image: CrearPabellon,
      icon: <Layout size={20} />,
    },
    {
      title: "Especialidades",
      description:
        "Configura las áreas médicas disponibles (Kine, Nutrición, etc).",
      label: "Crear Especialidad",
      image: CrearEspecialidad,
      icon: <FilePlus size={20} />,
    },
    {
      title: "Vista General",
      description:
        "Visualiza toda la jerarquía de tu centro en una sola pantalla.",
      label: "Dashboard Entidades",
      image: CrearEntidades,
      icon: <Building size={20} />,
    },
  ];

  const dataStep3 = [
    {
      title: "Dashboard Principal",
      description:
        "Podrás visualizar métricas clave y el estado actual del centro en tiempo real.",
      label: "Home Admin",
      image: PestañaPrincipalHome,
      icon: <Activity size={20} />,
    },
    {
      title: "Pacientes",
      description:
        "Podrás gestionar expedientes digitales, historial y asignación de camas.",
      label: "Gestión Pacientes",
      image: GestionPacientes,
      icon: <Users size={20} />,
    },
    {
      title: "Personal",
      description:
        "Podrás administrar turnos, roles y permisos de acceso del equipo.",
      label: "Gestión RRHH",
      image: GestionPersonal,
      icon: <Users size={20} />,
    },
    {
      title: "Actividades",
      description:
        "Podrás programar el calendario de terapias y tareas diarias por residente.",
      label: "Calendario Actividades",
      image: GestionActividadesPorPaciente,
      icon: <Layout size={20} />,
    },
    {
      title: "Signos Vitales",
      description:
        "Podrás revisar gráficos de evolución clínica y configurar alertas tempranas.",
      label: "Monitoreo Salud",
      image: GestionSignosVitales,
      icon: <Heart size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Manual de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Administrador
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Guía interactiva para configurar, gestionar y monitorear tu centro
            de cuidados.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <section>
          <StepHeader
            number="1"
            title="Inicialización del Centro"
            subtitle="El primer paso es registrar tu institución y obtener las credenciales maestras."
          />
          <InteractiveShowcase
            steps={dataStep1}
            activeIndex={step1Index}
            onStepChange={setStep1Index}
            align="left"
          />
        </section>

        <div className="w-full flex justify-center opacity-20">
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-slate-900 to-transparent"></div>
        </div>

        <section>
          <StepHeader
            number="2"
            title="Arquitectura Digital"
            subtitle="Replica la estructura física de tu centro (edificios y salas) en la plataforma."
          />
          <InteractiveShowcase
            steps={dataStep2}
            activeIndex={step2Index}
            onStepChange={setStep2Index}
            align="right"
          />
        </section>

        <div className="w-full flex justify-center opacity-20">
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-slate-900 to-transparent"></div>
        </div>

        <section>
          <StepHeader
            number="3"
            title="Ecosistema de Gestión"
            subtitle="Explora los módulos de control diario para pacientes y personal."
          />
          <InteractiveShowcase
            steps={dataStep3}
            activeIndex={step3Index}
            onStepChange={setStep3Index}
            align="left"
          />
        </section>
      </div>

      <div className="bg-slate-50 border-t border-slate-200 py-20 text-center">
        <h3 className="text-2xl font-bold mb-6">¿Listo para comenzar?</h3>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 mx-auto">
          Ir al Panel de Administración
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
