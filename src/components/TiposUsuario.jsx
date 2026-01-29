import React from "react";
import { motion } from "framer-motion";
import {
  FaUserNurse,
  FaUser,
  FaUserMd,
  FaUserTie,
  FaCheck,
} from "react-icons/fa";
import {
  UserIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const TiposUsuario = () => {
  const usuarios = [
    {
      id: 0,
      nombre: "Cuidadora",
      descripcion: "Profesional especializada en el cuidado directo",
      icono: HeartIcon,
      color: "sky",
      funcionalidades: [
        "Lista de pacientes con fichas completas y alertas importantes",
        "Checklist de rutinas diarias (medicación, alimentación, higiene)",
        "Registro rápido de signos vitales con gráficos integrados",
        "Notas y evidencias con fotos para seguimiento detallado",
        "Agenda organizada por paciente y actividad",
        "Botón de pánico para emergencias médicas",
      ],
    },
    {
      id: 1,
      nombre: "Paciente",
      descripcion: "Interfaz simple y accesible para el usuario final",
      icono: UserIcon,
      color: "lightBlue",
      funcionalidades: [
        "Botón de SOS para solicitar ayuda inmediata",
        "Interfaz accesible con letras grandes y alto contraste",
        "Lenguaje claro y sencillo para fácil comprensión",
        "Registro de estado de ánimo y bienestar general",
      ],
    },
    {
      id: 2,
      nombre: "Especialista",
      descripción: "Médicos y profesionales de la salud",
      icono: UserGroupIcon,
      color: "blue",
      funcionalidades: [
        "Vista organizada de pacientes por pabellón/residencia",
        "Acceso completo a instrucciones y planes de tratamiento",
        "Creación y modificación de instrucciones para pacientes",
        "Seguimiento de tendencias de salud y evolución",
        "Revisión de resultados de exámenes y signos vitales",
      ],
    },
    {
      id: 3,
      nombre: "Administrador",
      descripcion: "Gestión y supervisión integral del sistema",
      icono: ClipboardDocumentListIcon,
      color: "teal",
      funcionalidades: [
        "Dashboard con métricas clave y resumen general",
        "Sistema centralizado de alertas médicas organizadas",
        "Identificación de pacientes con más alertas",
        "Historial y análisis de tendencias de alertas",
        "Gestión completa de personal y asignaciones",
        "Supervisión de actividades pendientes y completadas",
        "Filtros avanzados para análisis detallado por fecha, paciente o área",
      ],
    },
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      sky: {
        bg: "bg-sky-600",
        bgLight: "bg-sky-50",
        text: "text-sky-600",
        textDark: "text-sky-700",
        border: "border-sky-200",
        hover: "hover:bg-sky-50",
        gradient: "from-sky-500 to-sky-600",
      },
      lightBlue: {
        bg: "bg-cyan-500",
        bgLight: "bg-cyan-50",
        text: "text-cyan-600",
        textDark: "text-cyan-700",
        border: "border-cyan-200",
        hover: "hover:bg-cyan-50",
        gradient: "from-cyan-400 to-cyan-500",
      },
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        textDark: "text-blue-700",
        border: "border-blue-200",
        hover: "hover:bg-blue-50",
        gradient: "from-blue-500 to-blue-600",
      },
      teal: {
        bg: "bg-teal-600",
        bgLight: "bg-teal-50",
        text: "text-teal-600",
        textDark: "text-teal-700",
        border: "border-teal-200",
        hover: "hover:bg-teal-50",
        gradient: "from-teal-500 to-teal-600",
      },
    };
    return colors[color][type];
  };

  return (
    <section id="tipos-usuario" className="py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Diseñado para cada miembro del{" "}
            <span className="text-blue-600">equipo de cuidado</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            <span className="font-semibold text-blue-700">CuidApp</span> ofrece
            funcionalidades específicas para cada perfil de usuario, optimizando
            la colaboración y la calidad del cuidado.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {usuarios.map((usuario, index) => (
            <motion.div
              key={usuario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 ${getColorClasses(
                    usuario.color,
                    "bgLight"
                  )} rounded-2xl flex items-center justify-center shadow-sm border ${getColorClasses(
                    usuario.color,
                    "border"
                  )}`}
                >
                  {React.createElement(usuario.icono, {
                    className: `w-8 h-8 ${getColorClasses(
                      usuario.color,
                      "text"
                    )} stroke-2`,
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {usuario.nombre}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {usuario.descripcion}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {usuario.funcionalidades
                  .slice(0, 6)
                  .map((funcionalidad, funcIndex) => (
                    <div key={funcIndex} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 ${getColorClasses(
                          usuario.color,
                          "bgLight"
                        )} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <FaCheck
                          className={`w-3 h-3 ${getColorClasses(
                            usuario.color,
                            "text"
                          )}`}
                        />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {funcionalidad}
                      </p>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposUsuario;
