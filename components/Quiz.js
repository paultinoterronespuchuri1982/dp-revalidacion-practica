"use client";

import { useEffect, useMemo, useState } from "react";
import { PREGUNTAS } from "../data/preguntas";
import { MODULOS } from "../data/modulos";

const LETRAS = ["A", "B", "C", "D"];

export default function Quiz() {
  const [modulo, setModulo] = useState("todos");
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [fin, setFin] = useState(false);

  const lista = useMemo(
    () =>
      PREGUNTAS.map((q, id) => ({ ...q, id })).filter(
        (q) => modulo === "todos" || q.m === Number(modulo),
      ),
    [modulo],
  );

  const actual = lista[idx];
  const respondida = actual ? resp[actual.id] !== undefined : false;

  function reiniciar(nuevoModulo = modulo) {
    setModulo(nuevoModulo);
    setIdx(0);
    setResp({});
    setFin(false);
  }

  function elegir(i) {
    if (!actual || respondida || fin) return;
    setResp((r) => ({ ...r, [actual.id]: i }));
  }

  function siguiente() {
    if (idx === lista.length - 1) setFin(true);
    else setIdx(idx + 1);
  }

  function anterior() {
    if (idx > 0) setIdx(idx - 1);
  }

  // Atajos de teclado: 1-4 responder, Enter/→ siguiente, ← anterior
  useEffect(() => {
    function onKey(e) {
      if (fin || !actual) return;
      if (/^[1-4]$/.test(e.key)) elegir(Number(e.key) - 1);
      else if (e.key === "Enter" && respondida) siguiente();
      else if (e.key === "ArrowRight") siguiente();
      else if (e.key === "ArrowLeft") anterior();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (fin) return <Resultado lista={lista} resp={resp} onReiniciar={() => reiniciar()} />;

  if (!actual) {
    return <p className="vacio">No hay preguntas en este módulo.</p>;
  }

  const progreso = ((idx + 1) / lista.length) * 100;
  const modNombre = MODULOS.find((m) => m.id === actual.m)?.nombre ?? "";

  return (
    <section className="quiz" aria-live="polite">
      <div className="toolbar">
        <label className="select-wrap">
          <span>Módulo</span>
          <select value={modulo} onChange={(e) => reiniciar(e.target.value)}>
            <option value="todos">Todos (100)</option>
            {MODULOS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id}. {m.nombre}
              </option>
            ))}
          </select>
        </label>
        <span className="contador">
          {idx + 1} / {lista.length}
        </span>
      </div>

      <div className="progreso" aria-hidden="true">
        <div style={{ width: `${progreso}%` }} />
      </div>

      <article className="tarjeta fade-in" key={actual.id}>
        <span className="chip">Módulo {actual.m} · {modNombre}</span>
        <h2 className="pregunta">{actual.q}</h2>

        <div className="opciones">
          {actual.o.map((texto, i) => {
            const elegida = resp[actual.id] === i;
            const correcta = actual.a === i;
            let estado = "";
            if (respondida) {
              if (correcta) estado = "correcta";
              else if (elegida) estado = "incorrecta";
            }
            return (
              <button
                key={i}
                type="button"
                className={`opcion ${estado}`}
                disabled={respondida}
                onClick={() => elegir(i)}
              >
                <span className="letra">{LETRAS[i]}</span>
                <span>{texto}</span>
              </button>
            );
          })}
        </div>

        {respondida && (
          <div className={`explicacion ${resp[actual.id] === actual.a ? "ok" : "mal"}`}>
            <strong>
              {resp[actual.id] === actual.a
                ? "¡Correcto!"
                : `Incorrecto. La respuesta correcta es la ${LETRAS[actual.a]}.`}
            </strong>
            <p>{actual.e}</p>
          </div>
        )}
      </article>

      <div className="acciones">
        <button type="button" className="btn ghost" onClick={anterior} disabled={idx === 0}>
          ← Anterior
        </button>
        <button type="button" className="btn" onClick={siguiente}>
          {idx === lista.length - 1 ? "Ver resultado" : "Siguiente →"}
        </button>
      </div>

      <p className="atajos">
        Atajos: <kbd>1</kbd>–<kbd>4</kbd> responder · <kbd>Enter</kbd> siguiente · <kbd>←</kbd>
        <kbd>→</kbd> navegar
      </p>
    </section>
  );
}

function Resultado({ lista, resp, onReiniciar }) {
  const aciertos = lista.filter((q) => resp[q.id] === q.a).length;
  const pct = Math.round((aciertos / lista.length) * 100);
  const fallos = lista.filter((q) => resp[q.id] !== undefined && resp[q.id] !== q.a);

  const porModulo = MODULOS.map((m) => {
    const del = lista.filter((q) => q.m === m.id);
    return {
      ...m,
      total: del.length,
      ok: del.filter((q) => resp[q.id] === q.a).length,
    };
  }).filter((m) => m.total > 0);

  return (
    <section className="resultado">
      <article className="tarjeta fade-in">
        <p className="chip">Resultado</p>
        <div className="marcador">
          {aciertos}
          <span>/{lista.length}</span>
        </div>
        <p className="veredicto">
          {pct}% de aciertos.{" "}
          {pct >= 70
            ? "Por encima del 70 %, la nota de aprobado de la revalidación del NI. Ojo: es un simulacro, no el examen real."
            : "Por debajo del 70 %. Repasa los módulos con menos aciertos antes de presentarte."}
        </p>

        <h3>Aciertos por módulo</h3>
        <ul className="barras">
          {porModulo.map((m) => (
            <li key={m.id}>
              <span>
                {m.id}. {m.nombre}
              </span>
              <div className="barra">
                <div style={{ width: `${(m.ok / m.total) * 100}%` }} />
              </div>
              <b>
                {m.ok}/{m.total}
              </b>
            </li>
          ))}
        </ul>

        {fallos.length > 0 && (
          <>
            <h3>Para repasar ({fallos.length})</h3>
            <ol className="fallos">
              {fallos.map((q) => (
                <li key={q.id}>
                  <strong>{q.q}</strong>
                  <p>
                    Tu respuesta: {LETRAS[resp[q.id]]}. Correcta: {LETRAS[q.a]}. {q.e}
                  </p>
                </li>
              ))}
            </ol>
          </>
        )}

        <button type="button" className="btn" onClick={onReiniciar}>
          Repetir práctica
        </button>
      </article>
    </section>
  );
}
