import React from "react";
import { motion } from "framer-motion";
import {
  CheckIcon,
  StarIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon as CheckIconSolid } from "@heroicons/react/24/solid";

const Precios = () => {
  const planes = [
    {
      id: 1,
      nombre: "Micro",
      subtitulo: "Para centros pequeños",
      precio: "29.000",
      periodo: "/mes por centro",
      descripcion: "Hasta 15 pacientes activos incluidos",
      color: "sky",
      icono: BuildingOfficeIcon,
      popular: false,
      usuarios: "5 cuidadoras + 2 especialistas",
      caracteristicas: [
        "Lista completa de pacientes",
        "Rutinas del día (checklist)",
        "Signos vitales 1-tap",
        "Notas y fotos de seguimiento",
        "Agenda integrada",
        "Notificaciones inteligentes",
        "Panel administrativo básico",
        "Histórico de 12 meses",
        "Exportación CSV mensual",
        "Soporte por email (48h)",
      ],
    },
    {
      id: 2,
      nombre: "Esencial",
      subtitulo: "El más popular",
      precio: "39.000",
      periodo: "/mes por centro",
      descripcion: "Mínimo 25 pacientes activos",
      color: "blue",
      icono: StarIcon,
      popular: true,
      usuarios: "Todo lo de Micro +",
      caracteristicas: [
        "Panel de Alertas médicas completo",
        "Monitoreo: temperatura, SPO2, PA, FC/FR",
        "Contador de alertas por signo vital",
        "Filtros por pabellón/cuidadora/fechas",
        "SOS Paciente con trazabilidad",
        "Identificación de pacientes críticos",
        "Histórico extendido de 24 meses",
        "Soporte email + chat (24-48h)",
        "Alertas activas y históricas",
        "Dashboard de pacientes prioritarios",
      ],
    },
    {
      id: 3,
      nombre: "Pro",
      subtitulo: "Analítica avanzada",
      precio: "69.000",
      periodo: "/mes por centro",
      descripcion: "Mínimo 40 pacientes activos",
      color: "teal",
      icono: ChartBarIcon,
      popular: false,
      usuarios: "Todo lo de Esencial +",
      caracteristicas: [
        "Gráficos y tendencias avanzadas",
        "Analítica día/semana/mes",
        "Motor de reglas inteligente",
        "Planes de cuidado automatizados",
        "Roles y permisos avanzados",
        "API de lectura + webhooks",
        "Escalamiento automático",
        "Histórico de 36 meses",
        "Soporte prioritario (≤24h)",
        "Onboarding guiado incluido",
      ],
    },
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      sky: {
        bg: "bg-sky-600",
        bgLight: "bg-sky-50",
        text: "text-sky-600",
        border: "border-sky-200",
        gradient: "from-sky-500 to-sky-600",
        ring: "ring-sky-200",
      },
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-300",
        gradient: "from-blue-500 to-blue-600",
        ring: "ring-blue-200",
      },
      teal: {
        bg: "bg-teal-600",
        bgLight: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        gradient: "from-teal-500 to-teal-600",
        ring: "ring-teal-200",
      },
      slate: {
        bg: "bg-slate-600",
        bgLight: "bg-slate-50",
        text: "text-slate-600",
        border: "border-slate-200",
        gradient: "from-slate-500 to-slate-600",
        ring: "ring-slate-200",
      },
    };
    return colors[color][type];
  };

  return (
    <section id="precios" className="py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Planes diseñados para{" "}
            <span className="text-blue-600">cada necesidad</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Desde centros pequeños hasta redes hospitalarias completas.{" "}
            <span className="font-semibold text-blue-700">Comienza gratis</span>{" "}
            y escala según tus necesidades.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium"
          >
            <StarIcon className="w-5 h-5" />
            <span>Prueba gratuita de 30 días · Plan Esencial</span>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {planes.map((plan, index) => {
            const colors = getColorClasses(plan.color, "bg");
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular
                    ? "border-blue-300 ring-4 ring-blue-100"
                    : "border-gray-200 hover:border-gray-300"
                } overflow-hidden`}
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(
                        plan.color,
                        "bgLight"
                      )} rounded-2xl flex items-center justify-center`}
                    >
                      {React.createElement(plan.icono, {
                        className: `w-8 h-8 ${getColorClasses(
                          plan.color,
                          "text"
                        )} stroke-2`,
                      })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.nombre}
                    </h3>
                    <p
                      className={`text-sm font-medium ${getColorClasses(
                        plan.color,
                        "text"
                      )} mb-4`}
                    >
                      {plan.subtitulo}
                    </p>
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-gray-900">
                          ${plan.precio.toLocaleString()}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {plan.periodo}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {plan.descripcion}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm font-medium mb-6">
                      {plan.usuarios}
                    </p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.caracteristicas
                      .slice(0, 8)
                      .map((caracteristica, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckIconSolid
                            className={`w-5 h-5 ${getColorClasses(
                              plan.color,
                              "text"
                            )} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {caracteristica}
                          </span>
                        </div>
                      ))}
                  </div>
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : `border-2 ${getColorClasses(
                            plan.color,
                            "border"
                          )} ${getColorClasses(
                            plan.color,
                            "text"
                          )} hover:${getColorClasses(
                            plan.color,
                            "bgLight"
                          )} bg-white`
                    }`}
                  >
                    {plan.id === 4 ? "Contactar Ventas" : "Comenzar Prueba"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Beneficios incluidos en todos los planes
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIconSolid className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Anual Prepago</h4>
              <p className="text-gray-600 text-sm">
                2 meses gratis al pagar anualmente
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600 stroke-2" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Descuento ONG</h4>
              <p className="text-gray-600 text-sm">
                15% de descuento para fundaciones
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-6 h-6 text-purple-600 stroke-2" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Descuento Volumen
              </h4>
              <p className="text-gray-600 text-sm">
                Precios decrecientes para redes +200 pacientes
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas un plan personalizado?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede ayudarte a encontrar la solución perfecta para
            tu centro médico o red hospitalaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Agendar Demostración
            </button>
            <button className="border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200">
              Hablar con Ventas
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Precios;
