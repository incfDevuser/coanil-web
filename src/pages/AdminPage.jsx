import React from "react";

const WebMockupSpace = ({ label }) => (
  <div className="mx-auto w-full max-w-lg aspect-video bg-gray-100 rounded-xl border-4 border-gray-800 shadow-2xl flex flex-col relative overflow-hidden group">
    <div className="h-8 bg-gray-800 w-full flex items-center px-4 gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <div className="ml-4 bg-gray-700 h-4 rounded-full w-1/2 opacity-50"></div>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-white relative">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-slate-300 text-slate-400">
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
      <p className="font-bold text-slate-500 uppercase tracking-widest text-sm text-center">
        MockUp Web <br />
        <span className="text-blue-600">{label}</span>
      </p>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900 text-blue-200 text-sm font-bold uppercase tracking-wider mb-4 border border-blue-700">
            Panel de Control
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Manual de <span className="text-blue-400">Administrador</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Gestiona centros, configura entidades y monitorea métricas en tiempo
            real desde la plataforma web.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
              PASO 1
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Configuración del Centro
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El primer paso es crear el gemelo digital de tu institución y
              generar los accesos para tu equipo.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <strong className="block text-slate-900">Crear Centro</strong>
                  <p className="text-slate-600 text-sm">
                    Ingresa a <em>Centros → Crear</em>. Completa el nombre,
                    dirección y contacto principal.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <strong className="block text-slate-900">
                    Generar Invitación
                  </strong>
                  <p className="text-slate-600 text-sm">
                    El sistema creará un <strong>Código Único</strong>.
                    Compártelo con tu personal y pacientes para que puedan
                    unirse.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800 text-sm font-medium">
                <strong>Seguridad:</strong> Rota los códigos de invitación
                periódicamente desde la configuración del centro para evitar
                accesos no autorizados.
              </p>
            </div>
          </div>
          <WebMockupSpace label="Formulario Crear Centro" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* MOCKUP 2 (Orden alternado) */}
          <div className="order-2 md:order-1">
            <WebMockupSpace label="Gestión de Pabellones/Residencias" />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-700 font-bold text-sm mb-4">
              PASO 2
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Estructura Organizacional
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Define la arquitectura de tu centro para organizar a los pacientes
              y cuidadores correctamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl">🏢</div>
                <div>
                  <strong className="block text-slate-900">Residencias</strong>
                  <p className="text-slate-600 text-sm">
                    Crea las unidades macro (ej: Edificio Norte).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 ml-8 relative">
                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-slate-300"></div>{" "}
                <div className="absolute -left-6 top-0 h-1/2 w-0.5 bg-slate-300"></div>
                <div className="text-2xl">🛏️</div>
                <div>
                  <strong className="block text-slate-900">Pabellones</strong>
                  <p className="text-slate-600 text-sm">
                    Dentro de cada residencia, crea los pabellones. Aquí es
                    donde asignarás a los pacientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl">🩺</div>
                <div>
                  <strong className="block text-slate-900">
                    Especialidades
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Define las áreas médicas (Kinesiología, Nutrición) para
                    clasificar a tu personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">
              PASO 3
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Monitor de Control
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Tu centro de mando. Visualiza en tiempo real lo que ocurre en la
              institución y toma decisiones basadas en datos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="text-red-500 font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Alertas Activas
                </div>
                <p className="text-xs text-slate-500">
                  Monitorea botones de pánico y emergencias médicas al instante.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="text-blue-600 font-bold mb-1">
                  KPIs y Métricas
                </div>
                <p className="text-xs text-slate-500">
                  Analiza tiempos de respuesta y carga de trabajo por pabellón.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="text-slate-800 font-bold mb-1">Reportes</div>
                <p className="text-xs text-slate-500">
                  Exporta historiales para auditoría y mejora de procesos.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="text-slate-800 font-bold mb-1">Usuarios</div>
                <p className="text-xs text-slate-500">
                  Gestiona roles, permisos y revoca accesos si es necesario.
                </p>
              </div>
            </div>
          </div>
          <WebMockupSpace label="Dashboard Principal con Gráficos" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
