import React, { useEffect, useRef, useState } from "react";
import cuidaAppLogo from "../assets/imgs/app/CuidApp.png";
const links = [
  { to: "#funcionalidades", label: "Funcionalidades", type: "anchor" },
  { to: "#testimonios", label: "Testimonios", type: "anchor" },
  { to: "#tipos-usuario", label: "Especialidades", type: "anchor" },
  { to: "#precios", label: "Precios", type: "anchor" },
];

const NavBar = () => {
  const wrapRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const ctaRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let raf = 0;
    const range = 96;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || 0;
        let t = Math.min(1, Math.max(0, y / range));
        if (wrapRef.current) {
          wrapRef.current.style.transform = `translateY(${12 * t}px)`;
        }
        if (navRef.current) {
          navRef.current.style.width = `${100 - 8 * t}%`;
          navRef.current.style.margin = "0 auto";
          navRef.current.style.borderRadius = `${16 * t}px`;
          navRef.current.style.border = `1px solid rgba(0,0,0,${0.06 * t})`;
          navRef.current.style.backgroundColor = `rgba(255,255,255,${
            0.8 + 0.2 * t
          })`;
          navRef.current.style.boxShadow = `0 10px 30px rgba(0,0,0,${0.1 * t})`;
        }
        if (logoRef.current) {
          logoRef.current.style.transform = `scale(${1 - 0.2 * t})`;
        }
        if (ctaRef.current) {
          const h = 44 - 8 * t;
          const px = 20 - 4 * t;
          ctaRef.current.style.height = `${h}px`;
          ctaRef.current.style.padding = `0 ${px}px`;
        }
      });
    };

    if (!reduceMotion) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleAnchor = (e, to) => {
    const id = to.split("#")[1];
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    window.addEventListener("wheel", closeOnScroll, { passive: true });
    window.addEventListener("touchmove", closeOnScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", closeOnScroll);
      window.removeEventListener("wheel", closeOnScroll);
      window.removeEventListener("touchmove", closeOnScroll);
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <div
        ref={wrapRef}
        className="transition-transform duration-200 will-change-transform"
      >
        <nav
          ref={navRef}
          className="px-4 sm:px-6 lg:px-8"
          style={{
            height: "72px",
            width: "100%",
            margin: "0 auto",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "1px solid transparent",
          }}
        >
          <div className="h-full flex items-center justify-between">
            <a
              href="#hero"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", "/");
                setOpen(false);
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={cuidaAppLogo}
                  alt="CuidApp Logo"
                  className="w-10 h-10 rounded-xl shadow-sm"
                />
                <span className="text-xl font-bold">
                  Cuidapp
                </span>
              </div>
            </a>
            <div className="hidden lg:flex gap-11 font-medium">
              {links.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleAnchor(e, link.to)}
                  className="relative transition-colors text-slate-600 hover:text-purple-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-purple-600 after:origin-left after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              ref={ctaRef}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
              style={{ height: 44, padding: "0 20px", fontSize: 14 }}
            >
              Solicitar Demo
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm hover:bg-white/90 transition"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className={`h-6 w-6 transition-transform ${
                  open ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path d="M6 6L18 18M6 18L18 6" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
        <div
          className={`lg:hidden fixed inset-0 z-40 transition ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        >
          <div
            className={`absolute inset-0  transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-[72px] left-0 right-0 z-50 origin-top transition-transform duration-200`}
          style={{ transform: open ? "scaleY(1)" : "scaleY(0.96)" }}
        >
          <div
            className={`mx-4 rounded-2xl border border-purple-200 bg-white shadow-xl overflow-hidden transition-[opacity,transform] duration-200 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleAnchor(e, link.to)}
                  className="px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2 pb-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700 transition-all duration-200"
                >
                  Solicitar Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
