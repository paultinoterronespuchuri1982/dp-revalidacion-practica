import { MODULOS, FUENTES } from "../data/modulos";

export default function Guia() {
  return (
    <div className="guia">
      <section className="tarjeta">
        <h2>Qué exige el Nautical Institute a un DPO</h2>
        <p>
          El curso de inducción del NI se organiza en siete módulos. Estos son los temas y resultados de
          aprendizaje que el NI describe en su material de formación.
        </p>
        <div className="modulos">
          {MODULOS.map((m) => (
            <details key={m.id} className="modulo" open={m.id === 1}>
              <summary>
                <span className="num">{m.id}</span>
                {m.nombre}
              </summary>
              <ul>
                {m.resultados.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="tarjeta">
        <h2>Lo que cambia en 2026</h2>
        <ul className="lista">
          <li>
            Los cursos de refresco y de revalidación se unificaron en un único curso de revalidación DP, según el
            estándar de certificación de 2026.
          </li>
          <li>
            Para renovar, hay que completar tres años de programa CPD aprobado por el NI y su examen en línea, o un
            curso de refresco de cinco días en tierra con examen.
          </li>
          <li>
            El contenido del curso de revalidación se centra en la normativa vigente, las referencias y sensores, los
            incidentes conocidos y sus lecciones aprendidas.
          </li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>Normativa de referencia</h2>
        <ul className="lista">
          <li>
            <strong>MSC.1/Circ.1580</strong> (OMI, 16 de junio de 2017) es la directriz vigente para buques y unidades con
            sistemas DP. Sustituye a la MSC/Circ.645 de 1994 para los buques construidos a partir del 9 de junio de 2017.
          </li>
          <li>
            Para las clases de equipo, las directrices IMO definen tres niveles: Clase 1 sin redundancia; Clase 2 con
            redundancia en componentes activos; Clase 3 capaz de soportar la pérdida de un compartimento.
          </li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>Formato del examen</h2>
        <ul className="lista">
          <li>
            <strong>Revalidación (examen en línea del NI):</strong> 30 preguntas tipo test, 1 hora, aprobado con 70 %.
            Fuente: preguntas frecuentes del NI.
          </li>
          <li>
            <strong>Inducción (fase A):</strong> según un proveedor de preparación de exámenes, 40 preguntas en 1 h 15
            min con 70 %. Es un dato de terceros que no he podido confirmar con el NI.
          </li>
          <li>
            <strong>Porcentajes por tema:</strong> el NI no publica el reparto oficial de preguntas por módulo. Por eso
            esta guía no incluye porcentajes.
          </li>
        </ul>
      </section>

      <section className="tarjeta">
        <h2>Fuentes</h2>
        <ol className="fuentes">
          {FUENTES.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noopener noreferrer">
                {f.titulo}
              </a>
            </li>
          ))}
        </ol>
        <p className="nota">
          Algunas fuentes son de años anteriores al estándar 2026. Confirma siempre con tu centro de formación y con el
          material oficial del NI antes de tu examen.
        </p>
      </section>
    </div>
  );
}
