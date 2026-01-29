import React from "react";

import Paso1 from "../assets/media/pacientes/paso1.MP4"
import Paso2 from "../assets/media/pacientes/paso2.MP4"
import Paso3 from "../assets/media/pacientes/paso3.MP4"

const MobileMockupSpace = ({ label, videoSrc }) => (
  <div className="mx-auto w-[300px] h-[640px]  rounded-[2.5rem] shadow-2xl flex items-center justify-center relative overflow-hidden group">
    <div className="absolute inset-6 bg-white rounded-[1.8rem] overflow-hidden flex items-center justify-center shadow-inner">
      {videoSrc ? (
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300 text-gray-400">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm">
            MockUp <br />
            <span className="text-blue-600">{label}</span>
          </p>
        </div>
      )}
    </div>
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent mix-blend-overlay"></div>
  </div>
);

const PacientePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Manual del Paciente
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bienvenido a CuidApp. Sigue estos 4 pasos sencillos para configurar
            tu cuenta y comenzar a usar la aplicación.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
              PASO 1
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Crea tu cuenta
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Para comenzar, necesitas registrarte en la plataforma. Asegúrate
              de seleccionar la opción correcta para que podamos configurar tus
              herramientas.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <p className="text-slate-700">
                  Abre la app y presiona <strong>"Registrarse"</strong>.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <p className="text-slate-700">
                  Selecciona el rol <strong>"Paciente"</strong>.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <p className="text-slate-700">
                  Completa tus datos personales (Nombre, RUT, Correo) y crea una
                  contraseña.
                </p>
              </li>
            </ul>
          </div>
          <MobileMockupSpace label="Pantalla de Registro" videoSrc={Paso1} />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <MobileMockupSpace label="Modal Unirse a Centro" videoSrc={Paso2} />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-4">
              PASO 2
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Únete a tu Centro
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Una vez dentro, verás que no perteneces a ningún centro. Debes
              vincularte para que tus enfermeras puedan recibir tus alertas.
            </p>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                El Código de Acceso
              </h4>
              <p className="text-teal-800 text-sm mb-4">
                Tu administrador o enfermera te entregará un código único de 6
                caracteres.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-teal-800 text-sm font-medium">
                <li>
                  Presiona el botón <strong>"Unirse a un centro"</strong> en el
                  Home.
                </li>
                <li>
                  Ingresa el código (ej: <code>A4F2</code>).
                </li>
                <li>
                  ¡Listo! Verás el nombre de tu centro en la parte superior.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4 animate-pulse">
              IMPORTANTE
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Emergencias: Botón SOS
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Si te sientes mal o necesitas ayuda urgente, usa el botón rojo
              grande en el centro de la pantalla.
            </p>

            <div className="bg-white border-l-4 border-red-500 pl-6 py-2">
              <h4 className="font-bold text-red-600 mb-2">
                Instrucciones de uso:
              </h4>
              <p className="text-slate-700 mb-4">
                Para evitar accidentes, el botón no funciona con un toque
                rápido.
              </p>
              <div className="flex items-center gap-4 text-slate-800 font-medium bg-slate-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white border-2 border-red-200 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">👆</span>
                </div>
                <span>
                  Mantén presionado por <strong>2 segundos</strong> hasta sentir
                  la vibración.
                </span>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <MobileMockupSpace label="Lista de Actividades" videoSrc={Paso3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacientePage;
