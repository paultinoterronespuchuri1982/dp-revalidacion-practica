"use client";

import { useEffect, useMemo, useState } from "react";
import { PRACTICOS } from "../data/practicos";
import { INTEGRADOS } from "../data/integrados";
import { CASOS } from "../data/casos";
import { CIRCULARES } from "../data/circulares";
import { MODULOS } from "../data/modulos";
import { t } from "../data/i18n";

const LETRAS = ["A", "B", "C", "D"];

// Nombre del módulo en el idioma pedido (cae al español si falta).
function nombre(m, lang) {
  return m?.nombre[lang] ?? m?.nombre.es ?? "";
}

function construirLista(modo, lang) {
  if (modo === "circulares") {
    return CIRCULARES.map((c, i) => ({
      id: 2000 + i,
      m: c.m,
      a: c.a,
      q: (c[lang] ?? c.es).q,
      o: (c[lang] ?? c.es).o,
      e: (c[lang] ?? c.es).e,
      ref: c.ref,
    }));
  }
  if (modo === "casos") {
    return CASOS.map((c, i) => ({
      id: 1000 + i,
      m: c.m,
      a: c.a,
      caso: (c[lang] ?? c.es).caso,
      q: (c[lang] ?? c.es).q,
      o: (c[lang] ?? c.es).o,
      e: (c[lang] ?? c.es).e,
      fuente: c.fuente,
    }));
  }
  return [...PRACTICOS, ...INTEGRADOS].map((p, id) => ({
    id,
    m: p.m,
    a: p.a,
    caso: (p[lang] ?? p.es).caso,
    q: (p[lang] ?? p.es).q,
    o: (p[lang] ?? p.es).o,
    e: (p[lang] ?? p.es).e,
  }));
}

export default function Quiz({ lang }) {
  const [modo, setModo] = useState("preguntas");
  const [modulo, setModulo] = useState("todos");
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [fin, setFin] = useState(false);

  const lista = useMemo(
    () =>
      construirLista(modo, lang).filter(
        (q) => modulo === "todos" || q.m === Number(modulo),
      ),
    [modo, modulo, lang],
  );

  const actual = lista[idx];
  const respondida = actual ? resp[actual.id] !== undefined : false;

  function reiniciar(nuevoModo = modo, nuevoModulo = modulo) {
    setModo(nuevoModo);
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

  // Atajos: 1-4 responder, Enter (si ya respondiste) o → siguiente, ← anterior
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

  // Cambiar de idioma conserva el progreso: se recalcula la lista con el nuevo idioma
  // y las respuestas siguen siendo válidas porque el id no cambia.

  if (fin) {
    return (
      <Resultado
        lang={lang}
        lista={lista}
        resp={resp}
        onReiniciar={() => reiniciar()}
      />
    );
  }

  const nombreModulo = (id) => nombre(MODULOS.find((m) => m.id === id), lang);
  const progreso = lista.length ? ((idx + 1) / lista.length) * 100 : 0;

  return (
    <section className="quiz" aria-live="polite">
      <div className="toolbar">
        <div className="seg" role="group" aria-label={t(lang, "modoPreguntas")}>
          <button
            type="button"
            className={modo === "preguntas" ? "on" : ""}
            onClick={() => reiniciar("preguntas", "todos")}
          >
            {t(lang, "modoPreguntas")}
          </button>
          <button
            type="button"
            className={modo === "casos" ? "on" : ""}
            onClick={() => reiniciar("casos", "todos")}
          >
            {t(lang, "modoCasos")}
          </button>
          <button
            type="button"
            className={modo === "circulares" ? "on" : ""}
            onClick={() => reiniciar("circulares", "todos")}
          >
            {t(lang, "modoCirculares")}
          </button>
        </div>
        <label className="select-wrap">
          <span>{t(lang, "modulo")}</span>
          <select value={modulo} onChange={(e) => reiniciar(modo, e.target.value)}>
            <option value="todos">{t(lang, "todos")}</option>
            {MODULOS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id}. {nombre(m, lang)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {!actual ? (
        <p className="vacio">{t(lang, "sinPreguntas")}</p>
      ) : (
        <>
          <div className="progreso" aria-hidden="true">
            <div style={{ width: `${progreso}%` }} />
          </div>
          <p className="contador">
            {t(lang, "contador", { a: idx + 1, b: lista.length })}
          </p>

          <article className="tarjeta fade-in" key={actual.id}>
            <span className="chip">
              {modo === "casos"
                ? `${t(lang, "casoLabel")} · ${t(lang, "dificultad")}`
                : modo === "circulares"
                  ? `MSC.1/Circ.1580 · ${actual.ref}`
                  : `${t(lang, "modulo")} ${actual.m} · ${nombreModulo(actual.m)}`}
            </span>
            {actual.caso && <p className="caso">{actual.caso}</p>}
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
                    ? t(lang, "correcto")
                    : t(lang, "incorrecto", { l: LETRAS[actual.a] })}
                </strong>
                <p>{actual.e}</p>
              </div>
            )}
          </article>

          <div className="acciones">
            <button type="button" className="btn ghost" onClick={anterior} disabled={idx === 0}>
              {t(lang, "anterior")}
            </button>
            <button type="button" className="btn" onClick={siguiente}>
              {idx === lista.length - 1 ? t(lang, "verResultado") : t(lang, "siguiente")}
            </button>
          </div>

          <p className="atajos">
            {t(lang, "atajos", { r: "1–4", e: "Enter", n: "← →" })}
          </p>
        </>
      )}
    </section>
  );
}

function Resultado({ lang, lista, resp, onReiniciar }) {
  const aciertos = lista.filter((q) => resp[q.id] === q.a).length;
  const pct = lista.length ? Math.round((aciertos / lista.length) * 100) : 0;
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
        <p className="chip">{t(lang, "resultado")}</p>
        <div className="marcador">
          {aciertos}
          <span>/{lista.length}</span>
        </div>
        <p className="veredicto">
          {t(lang, "aciertos", { p: pct })} {pct >= 70 ? t(lang, "aprobado") : t(lang, "reprobado")}
        </p>

        <h3>{t(lang, "porModulo")}</h3>
        <ul className="barras">
          {porModulo.map((m) => (
            <li key={m.id}>
              <span>
                {m.id}. {nombre(m, lang)}
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
            <h3>
              {t(lang, "paraRepasar")} ({fallos.length})
            </h3>
            <ol className="fallos">
              {fallos.map((q) => (
                <li key={q.id}>
                  <strong>{q.q}</strong>
                  <p>
                    {t(lang, "tuRespuesta", { t: LETRAS[resp[q.id]], c: LETRAS[q.a] })} {q.e}
                  </p>
                </li>
              ))}
            </ol>
          </>
        )}

        <button type="button" className="btn" onClick={onReiniciar}>
          {t(lang, "repetir")}
        </button>
      </article>
    </section>
  );
}
