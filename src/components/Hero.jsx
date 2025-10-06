import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";
import DashboardView from "../assets/imgs/app/DashboardWeb.svg";
const Hero = () => {
  const [swapped, setSwapped] = useState(false);

  const scrollToFuncionalidades = () => {
    document.getElementById("funcionalidades").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contacto").scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDemoRequest = () => {
    document.getElementById("contacto").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-white min-h-screen overflow-hidden mt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-32 h-32 sm:w-72 sm:h-72 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200 rounded-full opacity-15 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 sm:pt-16 pb-10 sm:pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              La tranquilidad de un
              <span className="text-blue-600 relative">
                {" "}
                cuidado excepcional
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-blue-300"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,7 Q50,0 100,7 T200,7"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="block text-purple-600 mt-1 sm:mt-2">
                al alcance
                <span className="relative">
                  {" "}
                  de tu mano
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-purple-300"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,7 Q50,0 100,7 T200,7"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              <span className="font-semibold text-purple-700">CuidApp</span> es
              la plataforma integral que simplifica el cuidado:
              <span className="font-semibold text-gray-800">
                {" "}
                coordina equipos, gestiona rutinas y monitorea la salud
              </span>{" "}
              en un solo lugar seguro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-sky-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 stroke-2" />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  Certificado HIPAA
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-blue-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 stroke-2" />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  Soporte 24/7
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="group relative px-8 py-4 bg-purple-600 text-white rounded-xl 
                hover:bg-purple-700 transition-all duration-300 text-lg font-semibold 
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-300"
                onClick={handleDemoRequest}
              >
                <span className="relative z-10">Ver Video Explicativo</span>
                <div className="absolute inset-0 bg-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                className="px-8 py-4 bg-white border-2 border-sky-500 
                text-sky-700 rounded-xl hover:bg-sky-50 hover:border-sky-600
                transition-all duration-300 text-lg font-semibold shadow-sm hover:shadow-md
                focus:outline-none focus:ring-4 focus:ring-sky-200"
                onClick={scrollToFuncionalidades}
              >
                Descargar Gratis
              </button>
            </div>

            <div className="relative px-4 sm:px-0">
              <motion.div
                className="hidden sm:block absolute -top-8 -left-8 w-4 sm:w-6 h-4 sm:h-6 bg-sky-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="hidden sm:block absolute -top-4 -right-12 w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  x: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="hidden md:block absolute -bottom-6 -left-6 w-6 sm:w-8 h-6 sm:h-8 bg-sky-400 rounded-full shadow-lg opacity-80"
                animate={{
                  y: [0, 12, 0],
                  x: [0, 8, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              <motion.div
                className="hidden md:block absolute -bottom-8 -right-8 w-4 sm:w-5 h-4 sm:h-5 bg-purple-400 rounded-full shadow-lg"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              />

              <motion.div
                className="absolute inset-0 bg-sky-200/30 rounded-xl sm:rounded-2xl blur-xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute top-4 sm:top-8 right-4 sm:right-8 hidden lg:grid grid-cols-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
              <div className="hidden sm:block mx-auto w-full max-w-lg sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl rounded-xl sm:rounded-2xl relative z-10 shadow-xl sm:shadow-2xl bg-white p-2 sm:p-3 md:p-4 lg:p-6">
                  <img
                    src={DashboardView}
                    alt="Dashboard de CuidApp - Vista previa de la aplicación"
                    className="w-full h-full object-contain p-2"
                  />
                <div className="text-center mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base font-medium text-purple-600">
                    Dashboard de CuidApp
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Gestión integral de cuidados médicos
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 sm:pt-6 border-t border-gray-200 max-w-xs sm:max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                Confiado por profesionales de la salud en:
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  Fundacion Coanil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
