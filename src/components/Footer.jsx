import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaShieldAlt,
  FaUserMd,
  FaDownload,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import cuidaAppLogo from "../assets/imgs/app/CuidApp.png";

const Footer = () => {
  const enlaces = {
    producto: [
      { nombre: "Características", href: "#caracteristicas" },
      { nombre: "Para Cuidadores", href: "#tipos-usuario" },
      { nombre: "Para Profesionales", href: "#tipos-usuario" },
      { nombre: "Seguridad", href: "#seguridad" },
      { nombre: "Precios", href: "#precios" },
    ],
    recursos: [
      { nombre: "Centro de Ayuda", href: "#ayuda" },
      { nombre: "Guía de Cuidados", href: "#guia" },
      { nombre: "Blog Médico", href: "#blog" },
      { nombre: "Webinars", href: "#webinars" },
      { nombre: "Testimonios", href: "#testimonios" },
    ],
    empresa: [
      { nombre: "Sobre Nosotros", href: "#about" },
      { nombre: "Carreras", href: "#careers" },
      { nombre: "Prensa", href: "#press" },
      { nombre: "Contacto", href: "#contact" },
      { nombre: "Partners", href: "#partners" },
    ],
    legal: [
      { nombre: "Política de Privacidad", href: "#privacy" },
      { nombre: "Términos de Uso", href: "#terms" },
      { nombre: "Cumplimiento HIPAA", href: "#hipaa" },
      { nombre: "Cookies", href: "#cookies" },
    ],
  };

  const redesSociales = [
    {
      nombre: "Facebook",
      icono: FaFacebookF,
      href: "#",
      color: "hover:bg-blue-600",
    },
    {
      nombre: "Twitter",
      icono: FaTwitter,
      href: "#",
      color: "hover:bg-blue-400",
    },
    {
      nombre: "LinkedIn",
      icono: FaLinkedinIn,
      href: "#",
      color: "hover:bg-blue-700",
    },
    {
      nombre: "Instagram",
      icono: FaInstagram,
      href: "#",
      color: "hover:bg-pink-600",
    },
  ];

  const certificaciones = [
    { nombre: "Certificado HIPAA", icono: FaShieldAlt },
    { nombre: "FDA Aprobado", icono: FaUserMd },
    { nombre: "ISO 27001", icono: FaShieldAlt },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={cuidaAppLogo}
                    alt="CuidApp Logo"
                    className="w-10 h-10 rounded-xl"
                  />
                  <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                    CuidApp
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transformando el cuidado de la salud a través de tecnología
                  innovadora. Conectamos familias, cuidadores y profesionales
                  para brindar atención excepcional.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-400 mb-3">
                    Descargar la App
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center gap-3 bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-gray-500 transition-colors">
                      <FaApple className="text-2xl" />
                      <div className="text-left">
                        <div className="text-xs text-gray-400">
                          Descargar en
                        </div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </button>
                    <button className="flex items-center gap-3 bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-gray-500 transition-colors">
                      <FaGooglePlay className="text-2xl" />
                      <div className="text-left">
                        <div className="text-xs text-gray-400">
                          Disponible en
                        </div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6 text-blue-400">Producto</h3>
              <ul className="space-y-3">
                {enlaces.producto.map((enlace) => (
                  <li key={enlace.nombre}>
                    <a
                      href={enlace.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6 text-green-400">
                Recursos
              </h3>
              <ul className="space-y-3">
                {enlaces.recursos.map((enlace) => (
                  <li key={enlace.nombre}>
                    <a
                      href={enlace.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6 text-purple-400">
                Empresa
              </h3>
              <ul className="space-y-3">
                {enlaces.empresa.map((enlace) => (
                  <li key={enlace.nombre}>
                    <a
                      href={enlace.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-6 text-orange-400">
                Contacto
              </h3>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-400 mb-3">
                  Síguenos
                </p>
                <div className="flex gap-3">
                  {redesSociales.map((red) => (
                    <a
                      key={red.nombre}
                      href={red.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${red.color}`}
                    >
                      {React.createElement(red.icono, { className: "text-sm" })}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-sm text-gray-400 font-medium">
                  Certificado por:
                </span>
                {certificaciones.map((cert) => (
                  <div
                    key={cert.nombre}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    {React.createElement(cert.icono, {
                      className: "text-green-400",
                    })}
                    <span className="text-sm">{cert.nombre}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Servicio activo 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 CuidApp. Todos los derechos reservados.
              </div>

              <div className="flex flex-wrap gap-6">
                {enlaces.legal.map((enlace) => (
                  <a
                    key={enlace.nombre}
                    href={enlace.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {enlace.nombre}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
