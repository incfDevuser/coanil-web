import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      testimonio:
        "Desde que usamos CuidApp en nuestro hogar de ancianos, la coordinación entre el personal ha mejorado un 70%. Las alertas automáticas nos han permitido intervenir a tiempo en varias situaciones críticas.",
      nombre: "Dra. Laura Silva",
      cargo: 'Directora del Hogar "Vitalia"',
      iniciales: "LS",
      color: "blue",
      rating: 5,
    },
    {
      id: 2,
      testimonio:
        "Como cuidadora, CuidApp me ha facilitado enormemente el trabajo. El checklist de rutinas me asegura que no olvido nada importante, y el botón de pánico me da seguridad para manejar situaciones de emergencia.",
      nombre: "María Cortés",
      cargo: "Cuidadora profesional",
      iniciales: "MC",
      color: "blue",
      rating: 5,
    },
    {
      id: 3,
      testimonio:
        "La aplicación es tan fácil de usar que hasta mi mamá de 82 años puede reportar cómo se siente. El botón SOS nos da tranquilidad a toda la familia, sabiendo que puede pedir ayuda en cualquier momento.",
      nombre: "Ana García",
      cargo: "Hija y cuidadora",
      iniciales: "AG",
      color: "blue",
      rating: 5,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        gradient: "from-blue-500 to-blue-600",
      },
    };
    return colors[color];
  };

  return (
    <section id="testimonios" className="py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Historias de{" "}
            <span className="text-blue-600">tranquilidad compartida</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Descubre cómo{" "}
            <span className="font-semibold text-blue-700">CuidApp</span> ha
            transformado la experiencia de cuidado para miles de familias y
            profesionales.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio, index) => {
            const colors = getColorClasses(testimonio.color);
            return (
              <motion.div
                key={testimonio.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <FaQuoteLeft className="text-white text-lg" />
                </div>
                <div className="flex items-center gap-1 mb-4 pt-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  "{testimonio.testimonio}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">
                      {testimonio.iniciales}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonio.nombre}
                    </h4>
                    <p className={`${colors.text} font-medium text-sm`}>
                      {testimonio.cargo}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
