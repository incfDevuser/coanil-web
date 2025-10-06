import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Caracteristicas = () => {
  const caracteristicas = [
    {
      id: 1,
      titulo: "Seguridad Máxima",
      descripcion:
        "Cumplimiento de normativas HIPAA/GDPR con cifrado de extremo a extremo para proteger toda la información médica.",
      icono: ShieldCheckIcon,
      color: "sky",
    },
    {
      id: 2,
      titulo: "Sincronización en Tiempo Real",
      descripcion:
        "Toda la información se actualiza instantáneamente para todos los miembros del equipo, evitando errores de comunicación.",
      icono: ArrowPathIcon,
      color: "lightBlue",
    },
    {
      id: 3,
      titulo: "Acceso Multiplataforma",
      descripcion:
        "Disponible en web, iOS y Android con interfaces adaptadas específicamente para cada dispositivo.",
      icono: DevicePhoneMobileIcon,
      color: "blue",
    },
    {
      id: 4,
      titulo: "Reportes Avanzados",
      descripcion:
        "Generación automática de reportes detallados para análisis de tendencias y toma de decisiones informadas.",
      icono: ChartBarIcon,
      color: "teal",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      sky: {
        bg: "bg-sky-600",
        bgLight: "bg-sky-50",
        text: "text-sky-600",
        border: "border-sky-200",
        gradient: "from-sky-500 to-sky-600",
      },
      lightBlue: {
        bg: "bg-cyan-500",
        bgLight: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-200",
        gradient: "from-cyan-400 to-cyan-500",
      },
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600",
      },
      teal: {
        bg: "bg-teal-600",
        bgLight: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        gradient: "from-teal-500 to-teal-600",
      },
    };
    return colors[color];
  };

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Características que marcan{" "}
            <span className="text-blue-600">la diferencia</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Diseñadas pensando en la{" "}
            <span className="font-semibold text-blue-700">
              seguridad, eficiencia y bienestar
            </span>{" "}
            de todos los involucrados en el proceso de cuidado.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caracteristicas.map((caracteristica, index) => {
            const colors = getColorClasses(caracteristica.color);
            return (
              <motion.div
                key={caracteristica.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-16 h-16 ${colors.bgLight} rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${colors.border} relative z-10`}
                >
                  {React.createElement(caracteristica.icono, {
                    className: `w-8 h-8 ${colors.text} stroke-2`,
                  })}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {caracteristica.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {caracteristica.descripcion}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
