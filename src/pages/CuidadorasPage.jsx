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
        MockUp
        <br />
        <span className="text-indigo-600">{label}</span>
      </p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
  </div>
);

const CuidadorasPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider mb-4">
            Perfil Profesional
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Manual para <span className="text-indigo-600">Cuidadoras</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bienvenida al equipo. Sigue estos pasos para activar tu cuenta y
            comenzar a gestionar a tus pacientes de forma digital.
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
              Crea tu Cuenta Profesional
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El primer paso es registrarte en la plataforma. Es importante que
              uses tus datos reales para que el centro pueda validarte.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <p className="text-slate-700">
                  Abre la app y selecciona <strong>"Registrarse"</strong>.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <p className="text-slate-700">
                  Elige el perfil <strong>"Cuidadora"</strong> (Icono azul).
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <p className="text-slate-700">
                  Completa tu Nombre, RUT, Email y crea una contraseña segura.
                </p>
              </li>
            </ul>
          </div>
          <MobileMockupSpace label="Pantalla de Registro" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <MobileMockupSpace label="Modal Ingresar Código" />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-4">
              PASO 2
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vinculación al Centro
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Al entrar por primera vez, verás tu pantalla vacía. Para acceder a
              los pacientes, necesitas unirte a tu lugar de trabajo.
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Instrucciones de Vinculación
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-indigo-800 text-sm">
                <li>
                  Solicita el <strong>Código de Acceso</strong> a tu
                  administrador o supervisor.
                </li>
                <li>
                  En el Home de la app, pulsa el botón{" "}
                  <strong>"Unirse a un Centro"</strong>.
                </li>
                <li>
                  Ingresa el código (ej: <code>XY99</code>).
                </li>
                <li>
                  ¡Listo! El sistema cargará automáticamente tu pabellón y
                  pacientes.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-4">
              PASO 3
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tu Tablero de Control
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Una vez vinculada, verás tu <strong>Dashboard</strong>. Aquí
              gestionas el día a día.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 font-bold">
                  A
                </div>
                <div>
                  <strong className="block text-slate-900 text-lg">
                    Lista de Pacientes
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Visualiza a todos los residentes de tu pabellón. Pulsa sobre
                    uno para ver su ficha.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 font-bold">
                  B
                </div>
                <div>
                  <strong className="block text-slate-900 text-lg">
                    Registrar Actividad
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Usa el botón "+" para anotar medicamentos, comidas o higiene
                    realizada.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <MobileMockupSpace label="Dashboard Principal" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <MobileMockupSpace label="Pantalla de Alerta Activa" />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4 animate-pulse">
              IMPORTANTE
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Respuesta a Emergencias
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Si un paciente activa su botón SOS, recibirás una alerta
              prioritaria en tu pantalla.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-red-900 mb-2">
                Protocolo de Acción:
              </h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li className="flex items-start gap-2">
                  <span>🚨</span>
                  Identifica quién pide ayuda (La tarjeta se pone roja).
                </li>
                <li className="flex items-start gap-2">
                  <span>🏃‍♀️</span>
                  Acude a su ubicación inmediatamente.
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  Al controlar la situación, presiona{" "}
                  <strong>"Resolver Alerta"</strong> en la app para notificar al
                  resto del equipo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuidadorasPage;
