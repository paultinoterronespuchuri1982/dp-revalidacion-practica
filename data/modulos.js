// Módulos del curso de inducción del Nautical Institute (NI) para DPO.
// Fuente: esquema de formación del NI (2014) y material de cursos acreditados por el NI.
// El NI no publica el peso de cada módulo, así que no se incluyen porcentajes.

export const MODULOS = [
  {
    id: 1,
    nombre: { es: "Principios del DP", pt: "Princípios do DP" },
    resultados: {
      es: [
        "Definir los principios del posicionamiento dinámico.",
        "Entender las clases de equipo y la normativa IMO aplicable (MSC.1/Circ.1580).",
      ],
      pt: [
        "Definir os princípios do posicionamento dinâmico.",
        "Entender as classes de equipamento e a regulamentação IMO aplicável (MSC.1/Circ.1580).",
      ],
    },
  },
  {
    id: 2,
    nombre: { es: "Elementos del sistema DP", pt: "Elementos do sistema DP" },
    resultados: {
      es: [
        "Reconocer las partes componentes de un sistema DP.",
        "Entender la redundancia aplicada al sistema DP y los modos de fallo (FMEA).",
      ],
      pt: [
        "Reconhecer as partes componentes de um sistema DP.",
        "Entender a redundância aplicada ao sistema DP e os modos de falha (FMEA).",
      ],
    },
  },
  {
    id: 3,
    nombre: { es: "Operación práctica del sistema DP", pt: "Operação prática do sistema DP" },
    resultados: {
      es: [
        "Entender los modos de control del sistema DP (Auto DP, joystick, rumbo).",
        "Preparar el sistema DP para una tarea u operación concreta.",
      ],
      pt: [
        "Entender os modos de controle do sistema DP (Auto DP, joystick, proa).",
        "Preparar o sistema DP para uma tarefa ou operação específica.",
      ],
    },
  },
  {
    id: 4,
    nombre: { es: "Sistemas de referencia de posición", pt: "Sistemas de referência de posição" },
    resultados: {
      es: [
        "Conocer los sistemas de referencia (GNSS, hidroacústicos, microondas, cable tenso, láser) y sus limitaciones.",
        "Detectar lecturas incoherentes y actuar sobre ellas.",
      ],
      pt: [
        "Conhecer os sistemas de referência (GNSS, hidroacústicos, microondas, cabo tensionado, laser) e suas limitações.",
        "Detectar leituras incoerentes e agir sobre elas.",
      ],
    },
  },
  {
    id: 5,
    nombre: { es: "Sensores ambientales y equipos auxiliares", pt: "Sensores ambientais e equipamentos auxiliares" },
    resultados: {
      es: [
        "Entender cómo viento, corriente y oleaje afectan al buque y cómo se miden.",
        "Reconocer los equipos auxiliares (girocompás, MRU) que alimentan el sistema.",
      ],
      pt: [
        "Entender como vento, corrente e ondas afetam o navio e como são medidos.",
        "Reconhecer os equipamentos auxiliares (giroscópio, MRU) que alimentam o sistema.",
      ],
    },
  },
  {
    id: 6,
    nombre: { es: "Generación, suministro y propulsión de energía", pt: "Geração, fornecimento e propulsão de energia" },
    resultados: {
      es: [
        "Entender la gestión de potencia, la reserva y el riesgo de blackout.",
        "Conocer la configuración de los propulsores y su relación con la energía disponible.",
      ],
      pt: [
        "Entender a gestão de potência, a reserva e o risco de apagão (blackout).",
        "Conhecer a configuração dos propulsores e sua relação com a energia disponível.",
      ],
    },
  },
  {
    id: 7,
    nombre: { es: "Operaciones DP", pt: "Operações DP" },
    resultados: {
      es: [
        "Realizar un análisis de consecuencias y de capacidad (capability) antes de operar.",
        "Aplicar los procedimientos operativos y estudiar incidentes DP conocidos y sus lecciones aprendidas.",
      ],
      pt: [
        "Realizar uma análise de consequências e de capacidade (capability) antes de operar.",
        "Aplicar os procedimentos operacionais e estudar incidentes DP conhecidos e suas lições aprendidas.",
      ],
    },
  },
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
  { titulo: "Informe IMCA: revisión de eventos de mantenimiento de posición DP en 2025 (marzo 2026)", url: "https://www.imca-int.com/resources/technical-library/document/bcbd808d-a418-f111-8342-0022484152a2/" },
  { titulo: "Learning from Incidents 2025-1: fallo de circuito de parada de emergencia (DP Committee)", url: "https://dynamic-positioning.com/learning-from-incidents-2/" },
  { titulo: "Conferencia DP IMCA 2025: informe final (factores humanos y apagones)", url: "https://www.imca-int.com/media/dv0dageq/dp-conference-2025-final-report.pdf" },
  { titulo: "North P&I: traspaso de control entre estaciones DP y lecciones aprendidas", url: "https://north-standard.com/insights-and-resources/resources/publications/dynamic-positioning-control-change-over" },
];
