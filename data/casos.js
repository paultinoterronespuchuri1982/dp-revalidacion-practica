// 20 casos prácticos de nivel difícil, basados en tipos de incidente documentados por
// IMCA, el DP Committee (Learning from Incidents), North P&I y la conferencia DP IMCA 2025.
// Los escenarios están simplificados: son ilustrativos, no relatos de incidentes concretos.
// Campos: m = módulo NI; a = índice correcto; fuente = tipo de incidente en el que se basa.

export const CASOS = [
  {
    m: 2, a: 1, fuente: "Cambio de control entre estaciones (North P&I, Control Change Over)",
    es: {
      caso: "Estás en guardia en la consola 1 con el buque en Auto DP. Vas a pasar el control a la consola 2. Su operador ya la tiene encendida, pero con un setpoint de proa distinto al tuyo y la referencia GNSS 2 deseleccionada.",
      q: "¿Qué debes hacer antes de transferir el control?",
      o: ["Transferir de inmediato, el sistema corrige solo", "Igualar setpoint, modo y referencias en ambas consolas y confirmar la transferencia en voz alta", "Apagar la consola 2 y empezar de cero", "Pasar a joystick mientras se transfiere"],
      e: "Una transferencia con setpoint o referencias distintas hace que el buque cambie de posición o de proa al cambiar de consola. Hay que igualar los parámetros, confirmar el estado y comunicarlo en voz alta.",
    },
    pt: {
      caso: "Você está de serviço no console 1 com o navio em Auto DP. Vai passar o controle para o console 2. O operador dele já o tem ligado, mas com um setpoint de proa diferente do seu e com a referência GNSS 2 desselecionada.",
      q: "O que você deve fazer antes de transferir o controle?",
      o: ["Transferir imediatamente, o sistema corrige sozinho", "Igualar setpoint, modo e referências nos dois consoles e confirmar a transferência em voz alta", "Desligar o console 2 e começar do zero", "Passar para joystick enquanto transfere"],
      e: "Uma transferência com setpoint ou referências diferentes faz o navio mudar de posição ou de proa na troca de console. É preciso igualar os parâmetros, confirmar o estado e comunicar em voz alta.",
    },
  },
  {
    m: 6, a: 2, fuente: "Falha de barramento com apagão (conferencia DP IMCA 2025)",
    es: {
      caso: "Con el buque en DP y un grúa trabajando, la barra 1 falla. Las barras estaban acopladas. El apagón deja a los propulsores sin alimentación y el buque empieza a derivar. La tripulación pide a la grúa soltar la carga.",
      q: "¿Qué debe revisarse primero para entender por qué la barra restante no sostuvo la carga?",
      o: ["Solo el combustible del tanque de servicio", "La hora de la última revisión del girocompás", "La configuración de acoplamiento de barras y el margen de carga de la barra restante antes del fallo", "El color de los cables"],
      e: "Un fallo de barra con acoplamiento mal configurado o sin margen de carga puede arrastrar a toda la red. El análisis debe partir de la configuración de la red y de la carga en el momento del fallo.",
    },
    pt: {
      caso: "Com o navio em DP e um guindaste em operação, o barramento 1 falha. As barras estavam acopladas. O apagão deixa os propulsores sem alimentação e o navio começa a derivar. A equipe pede ao guindaste que solte a carga.",
      q: "O que deve ser verificado primeiro para entender por que a barra restante não sustentou a carga?",
      o: ["Somente o combustível do tanque de serviço", "A hora da última revisão do giroscópio", "A configuração do acoplamento das barras e a margem de carga da barra restante antes da falha", "A cor dos cabos"],
      e: "A falha de uma barra, com acoplamento mal configurado ou sem margem de carga, pode arrastar toda a rede. A análise deve partir da configuração da rede e da carga no momento da falha.",
    },
  },
  {
    m: 2, a: 0, fuente: "Circuito de parada de emergencia con modo común (LFI 2025-1)",
    es: {
      caso: "Ambos propulsores principales se detienen al mismo tiempo durante una operación. La investigación encuentra que el circuito de parada de emergencia, normalmente energizado, es común a los dos. La redundancia de los propulsores existía en el papel.",
      q: "¿Qué tipo de fallo describe este caso y por qué la redundancia no lo cubrió?",
      o: ["Fallo de causa común: ambos propulsores dependían del mismo circuito, así que la redundancia no era independiente", "Fallo único independiente: la redundancia funcionó bien", "Error humano exclusivamente", "Falla de sensor aislado"],
      e: "La redundancia solo protege si los componentes son independientes. Si dos equipos comparten un mismo circuito, un único fallo puede tumbarlos a los dos. Por eso el FMEA debe identificar estas dependencias ocultas.",
    },
    pt: {
      caso: "Os dois propulsores principais param ao mesmo tempo durante uma operação. A investigação constata que o circuito de parada de emergência, normalmente energizado, é comum aos dois. A redundância dos propulsores existia apenas no papel.",
      q: "Que tipo de falha descreve este caso e por que a redundância não a cobriu?",
      o: ["Falha de causa comum: os dois propulsores dependiam do mesmo circuito, então a redundância não era independente", "Falha única independente: a redundância funcionou bem", "Exclusivamente erro humano", "Falha de sensor isolado"],
      e: "A redundância só protege se os componentes forem independentes. Se dois equipamentos compartilham um mesmo circuito, uma única falha pode derrubar os dois. Por isso a FMEA deve identificar essas dependências ocultas.",
    },
  },
  {
    m: 7, a: 3, fuente: "Factores humanos como principal contribuyente (conferencia DP IMCA 2025)",
    es: {
      caso: "Tras un evento de pérdida de posición, el equipo de investigación concluye que la causa técnica inmediata fue un sensor. Pero el mismo tipo de sensor ya había dado lecturas dudosas dos veces en el último mes y no se registró ninguna acción.",
      q: "¿Cuál es el enfoque de análisis más útil para este caso?",
      o: ["Sancionar al operador que estaba de guardia", "Cambiar el sensor y cerrar el caso", "Atribuir todo a la mala suerte", "Buscar la causa raíz en la gestión: por qué las señales previas no generaron una acción, además de la falla del sensor"],
      e: "Los factores humanos y de gestión son el contribuyente más frecuente en las pérdidas de posición. Las señales previas que no se actuaron muestran un fallo del sistema de gestión, no solo del equipo.",
    },
    pt: {
      caso: "Após um evento de perda de posição, a equipe de investigação conclui que a causa técnica imediata foi um sensor. Mas o mesmo tipo de sensor já tinha dado leituras duvidosas duas vezes no último mês e nenhuma ação foi registrada.",
      q: "Qual é a abordagem de análise mais útil para este caso?",
      o: ["Punir o operador que estava de serviço", "Trocar o sensor e encerrar o caso", "Atribuir tudo à má sorte", "Buscar a causa raiz na gestão: por que os sinais anteriores não geraram ação, além da falha do sensor"],
      e: "Os fatores humanos e de gestão são o contribuinte mais frequente nas perdas de posição. Os sinais anteriores que não foram tratados revelam uma falha do sistema de gestão, não só do equipamento.",
    },
  },
  {
    m: 3, a: 2, fuente: "Confianza en indicación de estado falsa (MDPI, factores humanos en DP, 2026)",
    es: {
      caso: "Un propulsor pierde su señal de 'listo' pero la pantalla lo sigue mostrando como listo. El DPO lo reselecciona para recuperar la posición. El propulsor no responde.",
      q: "¿Qué error de criterio se cometió?",
      o: ["Usar el propulsor en Auto DP", "Reseleccionar un equipo sin verificar", "Confiar en la indicación del sistema sin verificar el estado real del equipo antes de reseleccionarlo", "No registrar la reselección"],
      e: "La indicación de la pantalla no es el estado real del equipo. Antes de reseleccionar un propulsor hay que confirmar su estado en el terreno o con otra fuente, porque un indicador engañoso puede llevar a una decisión equivocada.",
    },
    pt: {
      caso: "Um propulsor perde seu sinal de 'pronto', mas a tela continua mostrando-o como pronto. O DPO o reseleciona para recuperar a posição. O propulsor não responde.",
      q: "Que erro de critério foi cometido?",
      o: ["Usar o propulsor em Auto DP", "Reselecionar um equipamento sem verificar", "Confiar na indicação do sistema sem verificar o estado real do equipamento antes de reselecioná-lo", "Não registrar a reseleção"],
      e: "A indicação da tela não é o estado real do equipamento. Antes de reselecionar um propulsor é preciso confirmar seu estado no local ou com outra fonte, porque um indicador enganoso pode levar a uma decisão errada.",
    },
  },
  {
    m: 4, a: 1, fuente: "Degradación gradual de referencias (práctica de detección de lecturas incoherentes)",
    es: {
      caso: "El GNSS 1 pierde precisión de forma gradual durante varias horas, sin alarma. El sistema sigue usándolo en Auto DP. El operador solo lo nota cuando el buque ya se ha desplazado 4 metros.",
      q: "¿Qué medida habría detectado el problema antes?",
      o: ["Subir el volumen de la alarma sonora", "Comparar tendencias de las referencias entre sí y verificar la coherencia periódicamente, no solo ante alarmas", "Desactivar la referencia de inmediato sin verificar", "Confiar en el GNSS porque no hay alarma"],
      e: "Una degradación sin alarma solo se detecta comparando las referencias entre sí y vigilando sus tendencias. Esperar a que salte una alarma puede ser tarde, porque la posición ya se alejó.",
    },
    pt: {
      caso: "O GNSS 1 perde precisão gradualmente por várias horas, sem alarme. O sistema continua usando-o em Auto DP. O operador só percebe quando o navio já se deslocou 4 metros.",
      q: "Que medida teria detectado o problema antes?",
      o: ["Aumentar o volume do alarme sonoro", "Comparar as tendências das referências entre si e verificar a coerência periodicamente, não só quando há alarme", "Desativar a referência imediatamente sem verificar", "Confiar no GNSS porque não há alarme"],
      e: "Uma degradação sem alarme só é detectada comparando as referências entre si e acompanhando suas tendências. Esperar um alarme pode ser tarde, porque a posição já se afastou.",
    },
  },
  {
    m: 1, a: 2, fuente: "Normativa IMO aplicable a buques construidos después de 2017 (IMCA)",
    es: {
      caso: "Un buque construido en 2019 con sistema DP quiere justificar su configuración basándose en la directriz de 1994, porque 'siempre se ha hecho así'. La clasificación actual debe reflejar la normativa vigente.",
      q: "¿Qué directriz debe usar como referencia para un buque construido después del 9 de junio de 2017?",
      o: ["MSC/Circ.645 únicamente, porque es la original", "Ninguna, porque los buques antiguos no tienen normativa", "MSC.1/Circ.1580, que aplica a buques construidos a partir de esa fecha", "MARPOL Anexo VI"],
      e: "MSC.1/Circ.1580 se recomienda para buques construidos desde el 9 de junio de 2017. Para buques anteriores sigue aplicando MSC/Circ.645, y algunas secciones de la nueva directriz se recomiendan a todos los buques.",
    },
    pt: {
      caso: "Um navio construído em 2019 com sistema DP quer justificar sua configuração com base na diretriz de 1994, porque 'sempre foi feito assim'. A classificação atual deve refletir a regulamentação vigente.",
      q: "Qual diretriz deve ser usada como referência para um navio construído após 9 de junho de 2017?",
      o: ["Somente a MSC/Circ.645, por ser a original", "Nenhuma, porque navios antigos não têm regulamentação", "MSC.1/Circ.1580, que se aplica a navios construídos a partir dessa data", "MARPOL Anexo VI"],
      e: "A MSC.1/Circ.1580 é recomendada para navios construídos a partir de 9 de junho de 2017. Para os anteriores continua valendo a MSC/Circ.645, e algumas seções da nova diretriz são recomendadas a todos os navios.",
    },
  },
  {
    m: 5, a: 0, fuente: "Sensor de viento congelado o mal calibrado (práctica de control de carga ambiental)",
    es: {
      caso: "Con viento de 25 nudos del noroeste, el anemómetro marca 0 nudos y dirección fija durante 20 minutos. El buque se desplaza lentamente hacia sotavento y el sistema apenas aumenta el empuje.",
      q: "¿Qué debió indicar el comportamiento del sistema al operador?",
      o: ["Que la lectura del viento era falsa, y el sistema estaba subestimando la carga real", "Que el buque estaba fondeado", "Que la corriente era nula", "Que todo estaba bien porque el sistema no mostraba alarma"],
      e: "El viento a 0 nudos con dirección fija es una lectura imposible con viento real. Con esa entrada errónea el controlador subestima la carga, así que el buque se desplaza. Debe contrastarse el sensor con otras fuentes.",
    },
    pt: {
      caso: "Com vento de 25 nós do noroeste, o anemômetro marca 0 nós e direção fixa por 20 minutos. O navio se desloca lentamente a sotavento e o sistema quase não aumenta o empuxo.",
      q: "O que o comportamento do sistema deveria ter indicado ao operador?",
      o: ["Que a leitura do vento era falsa, e o sistema estava subestimando a carga real", "Que o navio estava fundeado", "Que a corrente era nula", "Que estava tudo bem porque o sistema não mostrava alarme"],
      e: "Vento de 0 nós com direção fixa é uma leitura impossível com vento real. Com essa entrada errada o controlador subestima a carga, por isso o navio se desloca. O sensor deve ser confrontado com outras fontes.",
    },
  },
  {
    m: 7, a: 2, fuente: "Planificación con margen insuficiente (capability y análisis de consecuencias)",
    es: {
      caso: "El capability plot indica un margen de solo 10 % para viento de 25 nudos y corriente de 1,5 nudos. El cliente quiere mantener la operación porque el pronóstico 'podría mejorar'. No hay plan de contingencia escrito.",
      q: "¿Qué decisión es la correcta?",
      o: ["Proceder porque el cliente lo pide", "Proceder y confiar en que el pronóstico mejore", "No proceder sin un análisis de riesgo, un plan de contingencia y un acuerdo previo; reducir o detener la operación", "Cambiar a joystick para compensar el margen"],
      e: "Operar con margen insuficiente y sin contingencia escrita es exponerse a una pérdida de posición. La decisión debe basarse en el análisis de riesgo y en el plan, no en la presión comercial ni en esperanzas sobre el pronóstico.",
    },
    pt: {
      caso: "O capability plot indica margem de apenas 10 % para vento de 25 nós e corrente de 1,5 nó. O cliente quer manter a operação porque a previsão 'poderia melhorar'. Não há plano de contingência escrito.",
      q: "Qual decisão é a correta?",
      o: ["Prosseguir porque o cliente pede", "Prosseguir e torcer para a previsão melhorar", "Não prosseguir sem uma análise de risco, um plano de contingência e um acordo prévio; reduzir ou interromper a operação", "Passar para joystick para compensar a margem"],
      e: "Operar com margem insuficiente e sem contingência escrita expõe a uma perda de posição. A decisão deve se basear na análise de risco e no plano, não na pressão comercial nem na expectativa sobre a previsão.",
    },
  },
  {
    m: 6, a: 0, fuente: "Disparo de generador bajo carga alta (gestión de potencia)",
    es: {
      caso: "Dos generadores están en línea con carga alta al 85 %. Uno se desconecta por protección de sobrecarga. El otro sube al 100 % y empieza a alarmar.",
      q: "¿Qué es lo primero que debe hacer el operador?",
      o: ["Confirmar la carga restante y reducir el consumo no esencial o la demanda de propulsión según el procedimiento, para evitar un segundo disparo", "Apagar los propulsores para ahorrar energía", "Esperar a que el generador se recupere solo", "Cambiar de rumbo para reducir el viento"],
      e: "Con un generador menos, el que queda puede disparar también y provocar un apagón. Lo prioritario es reducir la demanda según el procedimiento y evitar la cascada, no esperar ni apagar equipos de forma improvisada.",
    },
    pt: {
      caso: "Dois geradores estão em serviço com carga alta, a 85 %. Um desliga por proteção de sobrecarga. O outro sobe para 100 % e começa a alarmar.",
      q: "O que o operador deve fazer primeiro?",
      o: ["Confirmar a carga restante e reduzir o consumo não essencial ou a demanda de propulsão conforme o procedimento, para evitar um segundo desligamento", "Desligar os propulsores para economizar energia", "Esperar o gerador se recuperar sozinho", "Mudar a proa para reduzir o vento"],
      e: "Com um gerador a menos, o que resta também pode desligar e provocar um apagão. A prioridade é reduzir a demanda conforme o procedimento e evitar a cascata, não esperar nem desligar equipamentos de forma improvisada.",
    },
  },
  {
    m: 2, a: 3, fuente: "Análisis FMEA desactualizado tras modificaciones (gestión del cambio)",
    es: {
      caso: "Se instaló un nuevo sensor de referencia hace tres meses. El FMEA del buque es de hace dos años y no lo incluye. El sistema ahora depende de ese sensor para la posición en una operación.",
      q: "¿Qué implica esta situación?",
      o: ["Nada, el sensor nuevo siempre es más fiable", "Que el FMEA es solo un trámite de la auditoría", "Que el sistema no necesita verificación en pruebas", "Que el FMEA ya no representa el sistema real y debe actualizarse con un proceso de gestión del cambio antes de depender de él"],
      e: "Un FMEA desactualizado no muestra los nuevos modos de fallo ni las dependencias del sensor. Cualquier modificación del sistema debe pasar por gestión del cambio y actualizar el análisis antes de usarlo en operación.",
    },
    pt: {
      caso: "Um novo sensor de referência foi instalado há três meses. A FMEA do navio é de dois anos atrás e não o inclui. O sistema agora depende desse sensor para a posição em uma operação.",
      q: "O que essa situação implica?",
      o: ["Nada, o sensor novo é sempre mais confiável", "Que a FMEA é apenas um trâmite da auditoria", "Que o sistema não precisa de verificação em testes", "Que a FMEA já não representa o sistema real e deve ser atualizada por um processo de gestão de mudanças antes de depender dele"],
      e: "Uma FMEA desatualizada não mostra os novos modos de falha nem as dependências do sensor. Qualquer modificação do sistema deve passar por gestão de mudanças e atualizar a análise antes de ser usada em operação.",
    },
  },
  {
    m: 4, a: 0, fuente: "Coincidencia de lecturas con causa común (análisis de referencias)",
    es: {
      caso: "Dos referencias hidroacústicas muestran la misma deriva de 2 metros al norte. La referencia GNSS muestra posición estable. Ambas hidroacústicas están en el mismo transductor de casco.",
      q: "¿Cuál es la mejor interpretación?",
      o: ["Puede haber una causa común en el transductor compartido, así que el acuerdo entre las dos no basta para confiar en ellas", "Las dos tienen razón por ser mayoría", "El GNSS debe descartarse automáticamente", "No hay que hacer nada porque coinciden"],
      e: "Dos lecturas que coinciden no son independientes si comparten el mismo origen. Antes de confiar en la mayoría hay que comprobar si las referencias tienen una causa común, como un transductor compartido.",
    },
    pt: {
      caso: "Duas referências hidroacústicas mostram o mesmo desvio de 2 metros para o norte. A referência GNSS mostra posição estável. As duas hidroacústicas estão no mesmo transdutor do casco.",
      q: "Qual é a melhor interpretação?",
      o: ["Pode haver uma causa comum no transdutor compartilhado, então a concordância entre as duas não basta para confiar nelas", "As duas têm razão por serem maioria", "O GNSS deve ser descartado automaticamente", "Não é preciso fazer nada porque concordam"],
      e: "Duas leituras que concordam não são independentes se compartilham a mesma origem. Antes de confiar na maioria é preciso verificar se as referências têm uma causa comum, como um transdutor compartilhado.",
    },
  },
  {
    m: 3, a: 1, fuente: "Modo de respaldo no detectado por el puente (conferencia IMCA y reportes de incidentes DP)",
    es: {
      caso: "Durante la navegación hacia la zona de trabajo, el DPO nota que el buque opera en modo de respaldo (backup) y no lo ha comunicado al puente. El puente desconocía que la configuración de energía había cambiado.",
      q: "¿Qué falló en la comunicación?",
      o: ["Nada, el modo de respaldo es normal y no necesita comunicarse", "No se comunicó un cambio en la configuración de energía que afecta a la capacidad de posición", "El puente debía haber apagado el sistema", "Solo era necesario anotarlo en el diario de cubierta"],
      e: "Un cambio en la configuración de energía altera la capacidad de posición y debe comunicarse a todo el equipo, sobre todo al puente. Que el puente lo desconociera es un fallo de comunicación con impacto directo en la operación.",
    },
    pt: {
      caso: "Durante a navegação até a área de trabalho, o DPO percebe que o navio está operando em modo de reserva (backup) e não comunicou isso à ponte. A ponte desconhecia que a configuração de energia havia mudado.",
      q: "O que falhou na comunicação?",
      o: ["Nada, o modo de reserva é normal e não precisa ser comunicado", "Não foi comunicada uma mudança na configuração de energia que afeta a capacidade de posição", "A ponte deveria ter desligado o sistema", "Bastava anotar no diário de bordo"],
      e: "Uma mudança na configuração de energia altera a capacidade de posição e deve ser comunicada a toda a equipe, sobretudo à ponte. Que a ponte desconhecesse isso é uma falha de comunicação com impacto direto na operação.",
    },
  },
  {
    m: 7, a: 0, fuente: "Análisis de causa raíz vs. culpa individual (IMCA, revisión de eventos DP 2025)",
    es: {
      caso: "El análisis de un evento mostró que la causa inmediata fue una acción del operador. Pero la investigación revela que el procedimiento de mantenimiento era ambiguo y que el operador nunca recibió formación sobre ese caso.",
      q: "¿Qué enfoque corresponde a una revisión de incidente bien hecha?",
      o: ["Buscar la causa raíz en el sistema y los procedimientos, y corregirlos para que el error no se repita", "Culpar al operador y darlo por cerrado", "Ocultar el caso para no dañar la reputación", "Cambiar al operador sin tocar el procedimiento"],
      e: "La acción del operador fue la causa inmediata, pero la causa raíz es un procedimiento ambiguo y una formación incompleta. Corregir el sistema evita que se repita con otra persona. Culpar al individuo deja el riesgo intacto.",
    },
    pt: {
      caso: "A análise de um evento mostrou que a causa imediata foi uma ação do operador. Mas a investigação revela que o procedimento de manutenção era ambíguo e que o operador nunca recebeu treinamento sobre esse caso.",
      q: "Qual abordagem corresponde a uma revisão de incidente bem feita?",
      o: ["Buscar a causa raiz no sistema e nos procedimentos, e corrigi-los para que o erro não se repita", "Culpar o operador e dar o caso por encerrado", "Ocultar o caso para não prejudicar a reputação", "Trocar o operador sem mexer no procedimento"],
      e: "A ação do operador foi a causa imediata, mas a causa raiz é um procedimento ambíguo e um treinamento incompleto. Corrigir o sistema evita que se repita com outra pessoa. Culpar o indivíduo deixa o risco intacto.",
    },
  },
  {
    m: 6, a: 2, fuente: "Reserva de empuje limitada por potencia (gestión de potencia y propulsión)",
    es: {
      caso: "El buque tiene cuatro propulsores. Por la limitación de potencia en línea, la capacidad de empuje disponible es ahora un 30 % menor. La operación requiere empuje cercano al máximo.",
      q: "¿Qué debe hacer el DPO?",
      o: ["Mantener la operación sin cambios porque los propulsores siguen funcionando", "Ignorar la limitación porque el sistema compensa solo", "Revisar la capacidad disponible frente a la requerida, reconfigurar la potencia o reducir la operación, y comunicarlo", "Desactivar la limitación de potencia para aumentar el empuje"],
      e: "Con menos empuje disponible, la operación puede quedar fuera de la capacidad del buque. Hay que comparar la capacidad real con la requerida, actuar sobre la configuración de potencia o la operación, y comunicarlo.",
    },
    pt: {
      caso: "O navio tem quatro propulsores. Por causa da limitação de potência em serviço, a capacidade de empuxo disponível agora é 30 % menor. A operação exige empuxo próximo do máximo.",
      q: "O que o DPO deve fazer?",
      o: ["Manter a operação sem mudanças porque os propulsores continuam funcionando", "Ignorar a limitação porque o sistema compensa sozinho", "Comparar a capacidade real disponível com a exigida, reconfigurar a potência ou reduzir a operação, e comunicar", "Desativar a limitação de potência para aumentar o empuxo"],
      e: "Com menos empuxo disponível, a operação pode ficar fora da capacidade do navio. É preciso comparar a capacidade real com a exigida, atuar sobre a configuração de potência ou sobre a operação, e comunicar.",
    },
  },
  {
    m: 7, a: 1, fuente: "Traspaso de guardia sin comunicación estructurada (North P&I y conferencia IMCA 2025)",
    es: {
      caso: "En el cambio de guardia, el DPO saliente se marcha sin explicar que la referencia 3 tiene una lectura inestable. El entrante asume la consola en joystick sin revisar el estado de las referencias.",
      q: "¿Qué falló en el traspaso?",
      o: ["Nada, el entrante conoce el sistema y no necesita información", "Una transferencia de guardia sin verificación ni información de incidencias pendientes", "El entrante debió cambiar a Auto DP sin revisar nada", "La duración del turno fue demasiado corta"],
      e: "El traspaso debe incluir el estado actual de los sistemas, las referencias y las incidencias pendientes, y debe verificarse. Una transferencia sin ello es una de las causas humanas más frecuentes en las pérdidas de posición.",
    },
    pt: {
      caso: "Na troca de turno, o DPO que sai vai embora sem explicar que a referência 3 tem uma leitura instável. O que entra assume o console em joystick sem revisar o estado das referências.",
      q: "O que falhou na passagem de turno?",
      o: ["Nada, quem entra conhece o sistema e não precisa de informação", "Uma passagem de turno sem verificação nem informação sobre ocorrências pendentes", "Quem entra deveria ter passado para Auto DP sem revisar nada", "A duração do turno foi curta demais"],
      e: "A passagem deve incluir o estado atual dos sistemas, das referências e as ocorrências pendentes, e deve ser verificada. Uma transferência sem isso é uma das causas humanas mais frequentes nas perdas de posição.",
    },
  },
  {
    m: 5, a: 3, fuente: "Subestimación de corriente en la planificación (análisis de capacidad)",
    es: {
      caso: "En la planificación se usó una corriente de 0,5 nudos, un dato de hace cinco años. Durante la operación la corriente real es de 1,8 nudos.",
      q: "¿Cuál es la consecuencia más probable?",
      o: ["Ninguna, la corriente siempre es constante", "Un consumo de combustible algo menor", "Una mejora en la capacidad de posición", "La capacidad de posición estaba sobrestimada y el buque puede perder posición sin previo aviso"],
      e: "Usar un dato de corriente antiguo sobrestima la capacidad real del buque. Cuando la corriente aumenta, el margen desaparece. Los datos ambientales de la planificación deben ser actuales y revisarse durante la operación.",
    },
    pt: {
      caso: "No planejamento foi usada uma corrente de 0,5 nó, um dado de cinco anos atrás. Durante a operação, a corrente real é de 1,8 nó.",
      q: "Qual é a consequência mais provável?",
      o: ["Nenhuma, a corrente é sempre constante", "Um consumo de combustível um pouco menor", "Uma melhora na capacidade de posição", "A capacidade de posição estava superestimada e o navio pode perder posição sem aviso prévio"],
      e: "Usar um dado antigo de corrente superestima a capacidade real do navio. Quando a corrente aumenta, a margem desaparece. Os dados ambientais do planejamento devem ser atuais e revisados durante a operação.",
    },
  },
  {
    m: 4, a: 2, fuente: "Referencias en condiciones de visibilidad y línea de vista (práctica operacional)",
    es: {
      caso: "Con niebla densa, la referencia láser pierde lecturas de forma intermitente. El sistema la deselecciona automáticamente y pasa a GNSS y cable tenso. El DPO no lo registra porque 'el sistema lo resuelve solo'.",
      q: "¿Qué debe hacer el DPO?",
      o: ["Nada, el sistema lo resuelve y no hay que registrarlo", "Desactivar el GNSS para forzar el uso del láser", "Registrar y revisar el cambio de referencias, verificar que las restantes son coherentes y comunicarlo al puente", "Cambiar a joystick de inmediato"],
      e: "Una deselección automática sigue siendo un cambio relevante que debe registrarse y verificarse. El sistema puede resolverlo, pero el operador tiene que confirmar que las referencias que quedan son coherentes y comunicarlo.",
    },
    pt: {
      caso: "Com névoa densa, a referência laser perde leituras de forma intermitente. O sistema a desseleciona automaticamente e passa para GNSS e cabo tensionado. O DPO não registra porque 'o sistema resolve sozinho'.",
      q: "O que o DPO deve fazer?",
      o: ["Nada, o sistema resolve e não precisa registrar", "Desativar o GNSS para forçar o uso do laser", "Registrar e revisar a mudança de referências, verificar se as restantes são coerentes e comunicar à ponte", "Passar para joystick imediatamente"],
      e: "Uma desseleção automática ainda é uma mudança relevante que deve ser registrada e verificada. O sistema pode resolver, mas o operador precisa confirmar que as referências restantes são coerentes e comunicar.",
    },
  },
];
