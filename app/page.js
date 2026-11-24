"use client";

import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import Guia from "../components/Guia";
import { t } from "../data/i18n";

export default function Home() {
  const [vista, setVista] = useState("quiz");
  const [lang, setLang] = useState("es");

  // Recuerda el idioma elegido (si el navegador lo permite) y actualiza <html lang>.
  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem("dp-lang");
      if (guardado === "es" || guardado === "pt" || guardado === "en") setLang(guardado);
    } catch {
      /* almacenamiento no disponible: se usa el idioma por defecto */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";
    try {
      window.localStorage.setItem("dp-lang", lang);
    } catch {
      /* ignorar */
    }
  }, [lang]);

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <p className="eyebrow">{t(lang, "eyebrow")}</p>
            <div className="lang" role="group" aria-label="Idioma · Idioma · Language">
              <button
                type="button"
                className={lang === "es" ? "on" : ""}
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
              >
                Español
              </button>
              <button
                type="button"
                className={lang === "pt" ? "on" : ""}
                onClick={() => setLang("pt")}
                aria-pressed={lang === "pt"}
              >
                Português
              </button>
              <button
                type="button"
                className={lang === "en" ? "on" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                title="English"
              >
                <svg
                  className="icono-idioma"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
                </svg>
                English
              </button>
            </div>
          </div>
          <h1>{t(lang, "titulo")}</h1>
          <p className="sub">{t(lang, "sub")}</p>
        </div>
      </header>

      <nav className="tabs" aria-label="Secciones">
        <button
          type="button"
          className={vista === "quiz" ? "tab activa" : "tab"}
          onClick={() => setVista("quiz")}
        >
          {t(lang, "tabPracticar")}
        </button>
        <button
          type="button"
          className={vista === "guia" ? "tab activa" : "tab"}
          onClick={() => setVista("guia")}
        >
          {t(lang, "tabGuia")}
        </button>
      </nav>

      <main className="contenedor">
        {vista === "quiz" ? <Quiz lang={lang} /> : <Guia lang={lang} />}
      </main>

      <footer className="pie">{t(lang, "pie")}</footer>
    </>
  );
}
