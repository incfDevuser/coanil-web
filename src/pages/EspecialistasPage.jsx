import React from "react";

const MobileMockupSpace = ({ label }) => (
  <div className="mx-auto w-[280px] h-[580px] bg-gray-100 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
    <div className="absolute top-0 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-400 text-gray-400">
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
        <span className="text-purple-600">{label}</span>
      </p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
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
          <MobileMockupSpace label="Pantalla Registro Especialista" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <MobileMockupSpace label="Modal Ingreso de Código" />
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
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
              PASO 3
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ronda Médica Digital
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Accede al listado completo de pacientes. Usa el buscador para
              filtrar rápidamente por nombre, RUT o pabellón.
            </p>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3">
                Perfil del Paciente
              </h4>
              <p className="text-slate-600 text-sm mb-3">
                Al seleccionar un paciente, tendrás una vista 360° de su estado:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    A
                  </span>
                  <span>Información personal y diagnósticos activos.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    B
                  </span>
                  <span>Historial de signos vitales recientes.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    C
                  </span>
                  <span>Instrucciones vigentes.</span>
                </div>
              </div>
            </div>
          </div>
          <MobileMockupSpace label="Lista de Pacientes / Perfil" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <MobileMockupSpace label="Nueva Instrucción Médica" />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">
              PASO 4
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
        </div>
      </div>
    </div>
  );
};

export default EspecialistasPage;
