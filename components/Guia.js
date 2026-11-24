import { MODULOS, FUENTES } from "../data/modulos";
import { t } from "../data/i18n";

export default function Guia({ lang }) {
  return (
    <div className="guia">
      <section className="tarjeta">
        <h2>{t(lang, "guiaQueExige")}</h2>
        <p>{t(lang, "guiaIntro")}</p>
        <div className="modulos">
          {MODULOS.map((m) => (
            <details key={m.id} className="modulo" open={m.id === 1}>
              <summary>
                <span className="num">{m.id}</span>
                {m.nombre[lang] ?? m.nombre.es}
              </summary>
              <ul>
                {(m.resultados[lang] ?? m.resultados.es).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="tarjeta">
        <h2>{t(lang, "cambios2026")}</h2>
        <ul className="lista">
          <li>{t(lang, "c2026a")}</li>
          <li>{t(lang, "c2026b")}</li>
          <li>{t(lang, "c2026c")}</li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>{t(lang, "normativa")}</h2>
        <ul className="lista">
          <li>{t(lang, "nor1")}</li>
          <li>{t(lang, "nor2")}</li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>{t(lang, "formato")}</h2>
        <ul className="lista">
          <li>{t(lang, "f1")}</li>
          <li>{t(lang, "f2")}</li>
          <li>{t(lang, "f3")}</li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>{t(lang, "incidentes")}</h2>
        <ul className="lista">
          <li>{t(lang, "inc1")}</li>
          <li>{t(lang, "inc2")}</li>
          <li>{t(lang, "inc3")}</li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>{t(lang, "fuentes")}</h2>
        <ol className="fuentes">
          {FUENTES.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noopener noreferrer">
                {f.titulo}
              </a>
            </li>
          ))}
        </ol>
        <p className="nota">{t(lang, "fuentesNota")}</p>
      </section>
    </div>
  );
}
