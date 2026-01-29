import React from "react";

import Paso1 from "../assets/media/especialista/paso1.MP4"
import Paso2 from "../assets/media/especialista/paso2.MP4"
import Paso3 from "../assets/media/especialista/paso3.MP4"

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

const EspecialistasPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider mb-4">
            Gestión Clínica
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Manual para <span className="text-purple-600">Especialistas</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Optimiza tu práctica médica. Sigue estos pasos para acceder a los
            expedientes y gestionar tratamientos desde la app.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-4">
              PASO 1
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Crea tu Perfil Clínico
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Comienza registrándote en la plataforma. Es fundamental que
              selecciones el rol correcto para habilitar las herramientas
              médicas.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <strong className="block text-slate-900">
                    Registro Nuevo
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Abre la app y selecciona <strong>"Registrarse"</strong>.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <strong className="block text-slate-900">
                    Selección de Rol
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Elige la opción <strong>"Especialista"</strong> (Icono
                    morado).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <strong className="block text-slate-900">
                    Datos Profesionales
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Ingresa tu nombre completo, RUT y especialidad.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <MobileMockupSpace label="Pantalla Registro Especialista" videoSrc={Paso1} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
            <MobileMockupSpace label="Modal Ingreso de Código" videoSrc={Paso2} />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-4">
              PASO 2
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Acceso Seguro al Centro
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Por seguridad de los datos médicos, tu cuenta inicia vacía. Debes
              vincularte a un centro autorizado para ver pacientes.
            </p>

            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Proceso de Vinculación
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-indigo-800 text-sm">
                <li>
                  Solicita el <strong>Código de Especialista</strong> al
                  director del centro.
                </li>
                <li>
                  En tu Dashboard, pulsa el botón{" "}
                  <strong>"Unirse a un Centro"</strong>.
                </li>
                <li>
                  Introduce la clave (ej: <code>MED-2024</code>).
                </li>
                <li>
                  Al confirmar, se desbloqueará el acceso a los expedientes.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-1">
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">
              PASO 3
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Indicaciones y Tratamiento
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Comunícate directamente con el equipo de cuidado a través de
              instrucciones digitales precisas.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-4">
                Cómo crear una instrucción:
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="block text-green-900">Acción</strong>
                    <p className="text-green-800 text-sm">
                      Dentro del perfil del paciente, pulsa{" "}
                      <strong>"Nueva Instrucción"</strong>.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="block text-green-900">Detalle</strong>
                    <p className="text-green-800 text-sm">
                      Escribe el tratamiento, cambio de dosis o cuidado
                      especial. Sé específico.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="block text-green-900">
                      Sincronización
                    </strong>
                    <p className="text-green-800 text-sm">
                      Al guardar, las cuidadoras recibirán la actualización en
                      su dispositivo inmediatamente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <MobileMockupSpace label="Nueva Instrucción Médica" videoSrc={Paso3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspecialistasPage;
