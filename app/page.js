"use client";

import { useState } from "react";
import Quiz from "../components/Quiz";
import Guia from "../components/Guia";

export default function Home() {
  const [vista, setVista] = useState("quiz");

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Revalidación DPO · Nautical Institute</p>
          <h1>Evaluador de posicionamiento dinámico</h1>
          <p className="sub">
            100 preguntas de práctica por módulo, con la explicación de cada respuesta.
          </p>
        </div>
      </header>

      <nav className="tabs" aria-label="Secciones">
        <button
          type="button"
          className={vista === "quiz" ? "tab activa" : "tab"}
          onClick={() => setVista("quiz")}
        >
          Practicar
        </button>
        <button
          type="button"
          className={vista === "guia" ? "tab activa" : "tab"}
          onClick={() => setVista("guia")}
        >
          Guía de estudio
        </button>
      </nav>

      <main className="contenedor">{vista === "quiz" ? <Quiz /> : <Guia />}</main>

      <footer className="pie">
        Material de repaso, no sustituye el temario oficial del NI. Verifica siempre contra tu material del curso.
      </footer>
    </>
  );
}
