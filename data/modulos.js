// Módulos del curso de inducción del Nautical Institute (NI) para DPO.
// Fuente: documento de esquema de formación del NI (2014) y material de cursos acreditados por el NI.
// Los pesos por módulo NO están publicados por el NI; no se incluyen porcentajes inventados.

export const MODULOS = [
  { id: 1, nombre: "Principios del DP", resultados: [
      "Definir los principios del posicionamiento dinámico.",
      "Entender las clases de equipo y la normativa IMO aplicable (MSC.1/Circ.1580).",
  ]},
  { id: 2, nombre: "Elementos del sistema DP", resultados: [
      "Reconocer las partes componentes de un sistema DP.",
      "Entender la redundancia aplicada al sistema DP y los modos de fallo (FMEA).",
  ]},
  { id: 3, nombre: "Operación práctica del sistema DP", resultados: [
      "Entender los modos de control del sistema DP (Auto DP, joystick, rumbo).",
      "Preparar el sistema DP para una tarea u operación concreta.",
  ]},
  { id: 4, nombre: "Sistemas de referencia de posición", resultados: [
      "Conocer los sistemas de referencia (GNSS, hidroacústicos, microondas, cable tenso, láser) y sus limitaciones.",
      "Detectar lecturas incoherentes y actuar sobre ellas.",
  ]},
  { id: 5, nombre: "Sensores ambientales y equipos auxiliares", resultados: [
      "Entender cómo viento, corriente y oleaje afectan al buque y cómo se miden.",
      "Reconocer los equipos auxiliares (girocompás, MRU) que alimentan el sistema.",
  ]},
  { id: 6, nombre: "Generación, suministro y propulsión de energía", resultados: [
      "Entender la gestión de potencia, la reserva y el riesgo de blackout.",
      "Conocer la configuración de los propulsores y su relación con la energía disponible.",
  ]},
  { id: 7, nombre: "Operaciones DP", resultados: [
      "Realizar un análisis de consecuencias y de capacidad (capability) antes de operar.",
      "Aplicar los procedimientos operativos y estudiar incidentes DP conocidos y sus lecciones aprendidas.",
  ]},
];

export const FUENTES = [
  { titulo: "Esquema de formación del DPO del Nautical Institute (versión 2012/2014)", url: "https://www.nialexisplatform.org/media/1374/dp-training-certification-scheme-v-11-dec-2014.pdf" },
  { titulo: "Estándar de certificación y acreditación, Vol. 1: formación (NI)", url: "https://www.nialexisplatform.org/media/1567839/the-nautical-institute-dynamic-positioning-certification-and-accreditation-standard-vol-1-training-and-certification-v1-jan.pdf" },
  { titulo: "Preguntas frecuentes de revalidación (NI, examen en línea de 30 preguntas)", url: "https://nialexisplatform.kayako.com/section/7-offshore-revalidation" },
  { titulo: "Cambios de CPD para renovar el certificado DP (IMCA)", url: "https://www.imca-int.com/media/0z2hyzx3/dp-cpd-changes-april-2024-website.pdf" },
  { titulo: "Curso de revalidación unificado con el estándar 2026 (STAR Center / AMO)", url: "https://www.amo-union.org/?p=4579" },
  { titulo: "MSC.1/Circ.1580, directrices IMO para buques con sistemas DP (2017)", url: "https://www.dco.uscg.mil/Portals/9/OCSNCOE/References/DP-Guidance/IMO/MSC.1-Circ.1580.pdf" },
  { titulo: "Guía introductoria a los sistemas DP (USCG, 2019)", url: "https://www.dco.uscg.mil/Portals/9/OCSNCOE/References/Custom-Ref-Books/Intro-to-DP-Systems-Dec2019.pdf" },
  { titulo: "Historia de las directrices IMO: MSC/Circ.645 y MSC.1/Circ.1580 (IMCA)", url: "https://www.imca-int.com/?p=28343" },
];
