import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCalendarAlt,
  FaFileDownload,
  FaArrowRight,
} from "react-icons/fa";

const CTA = () => {
  const acciones = [
    {
      id: 1,
      titulo: "Descargar App Gratis",
      descripcion: "Disponible en iOS y Android",
      icono: FaDownload,
      color: "blue",
      tipo: "primary",
    },
    {
      id: 2,
      titulo: "Agendar Demostración",
      descripcion: "Sesión personalizada 30 min",
      icono: FaCalendarAlt,
      color: "blue",
      tipo: "secondary",
    },
    {
      id: 3,
      titulo: "Descargar Guía de Cuidados",
      descripcion: "Manual completo PDF gratis",
      icono: FaFileDownload,
      color: "purple",
      tipo: "secondary",
    },
  ];

  const getColorClasses = (color, tipo) => {
    const colors = {
      blue: {
        primary:
          "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl",
        secondary:
          "bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50",
        icon: "text-blue-600",
      },
      green: {
        primary:
          "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl",
        secondary:
          "bg-white border-2 border-green-600 text-green-700 hover:bg-green-50",
        icon: "text-green-600",
      },
      purple: {
        primary:
          "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl",
        secondary:
          "bg-white border-2 border-purple-600 text-purple-700 hover:bg-purple-50",
        icon: "text-purple-600",
      },
    };
    return colors[color][tipo];
  };

  return (
    <section className="py-20 bg-gradient-to-br  relative overflow-hidden mt-20">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Empieza a Transformar{" "}
            <span className="text-blue-600">el Cuidado</span>{" "}
            <span className="block text-purple-600">Hoy Mismo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Únete a miles de familias y profesionales que ya confían en{" "}
            <span className="font-bold text-blue-700">CuidApp</span> para
            brindar una atención excepcional.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {acciones.map((accion, index) => (
            <motion.div
              key={accion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <button
                className={`w-full p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${getColorClasses(
                  accion.color,
                  accion.tipo
                )} flex flex-col items-center gap-4`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    accion.tipo === "primary" ? "bg-white/20" : "bg-gray-100"
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.createElement(accion.icono, {
                    className: `text-2xl ${
                      accion.tipo === "primary"
                        ? "text-white"
                        : getColorClasses(accion.color, "icon").split(" ")[0]
                    }`,
                  })}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{accion.titulo}</h3>
                  <p
                    className={`text-sm ${
                      accion.tipo === "primary"
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {accion.descripcion}
                  </p>
                </div>
                <FaArrowRight
                  className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                    accion.tipo === "primary"
                      ? "text-white/60"
                      : getColorClasses(accion.color, "icon").split(" ")[0]
                  }`}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
