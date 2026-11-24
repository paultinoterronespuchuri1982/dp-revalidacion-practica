// 100 casos prácticos de nivel técnico alto, redactados desde la perspectiva de un DPO con experiencia.
// Cada caso describe una situación de operación y pide una decisión o un diagnóstico que exige combinar
// varios datos (configuración, carga, sensores, criterios de clase). Son ilustrativos, no incidentes reales,
// y están inspirados en los tipos de fallo que documentan IMCA, el DP Committee y North P&I.
// Campos: m = módulo del curso NI (ver data/modulos.js); a = índice de la opción correcta (0 = A).

export const PRACTICOS = [
  {
    m: 1, a: 1,
    es: {
      caso: "Un buque de apoyo a perforación en Clase 2 tiene dos generadores en paralelo, cada uno al 45 % de carga. Durante una operación de elevación, uno de ellos dispara por falla de aislamiento.",
      q: "¿Qué debe verificar el DPO de inmediato para afirmar que la configuración sigue cumpliendo la Clase 2?",
      o: ["Que el generador restante puede mantener la posición sin ninguna limitación, porque la Clase 2 no exige margen de potencia", "Que el generador restante asume la carga sin pérdida de posición, y que a un 90 % de carga sigue dentro de su capacidad y de las protecciones", "Que el sistema pasa a joystick automáticamente y el operador controla la posición", "Que la elevación puede continuar, porque el disparo solo afecta a la red y no a los propulsores"],
      e: "La Clase 2 exige que la pérdida de un generador no cause pérdida de posición. Pero el generador restante pasa de 45 % a 90 % de carga, un nivel que puede superar los límites de sobrecarga o disparar las protecciones. El DPO debe confirmar ese margen con los datos reales, no suponerlo."
    },
    pt: {
      caso: "Um navio de apoio a perfuração em Classe 2 tem dois geradores em paralelo, cada um a 45 % de carga. Durante uma operação de içamento, um deles dispara por falha de isolamento.",
      q: "O que o DPO deve verificar imediatamente para afirmar que a configuração continua atendendo à Classe 2?",
      o: ["Que o gerador restante pode manter a posição sem nenhuma limitação, porque a Classe 2 não exige margem de potência", "Que o gerador restante assume a carga sem perda de posição e que, a 90 % de carga, continua dentro da capacidade e das proteções", "Que o sistema passa para joystick automaticamente e o operador controla a posição", "Que o içamento pode continuar, porque o disparo afeta só a rede e não os propulsores"],
      e: "A Classe 2 exige que a perda de um gerador não cause perda de posição. Mas o gerador restante passa de 45 % para 90 % de carga, um nível que pode ultrapassar os limites de sobrecarga ou acionar as proteções. O DPO deve confirmar essa margem com os dados reais, não presumi-la."
    }
  },
  {
    m: 1, a: 3,
    es: {
      caso: "Un buque Clase 2 con tres sistemas de referencia de posición opera con un GNSS fuera de servicio. El análisis de consecuencias del plan asume tres referencias activas. El cliente quiere mantener la operación porque el tiempo de trabajo restante es corto.",
      q: "¿Cuál es la decisión técnica correcta según el plan y la clase?",
      o: ["Continuar, porque dos referencias son suficientes para Clase 2 en cualquier operación", "Continuar con una referencia menos siempre que el viento esté por debajo de 20 nudos", "Continuar sin cambios, porque el GNSS fuera de servicio solo afecta a la precisión", "Revisar el plan con la configuración real: el análisis asumía tres referencias, así que la operación debe valorarse de nuevo, o suspenderse si no cumple"],
      e: "La configuración real ya no coincide con la que sustenta el análisis de consecuencias. La Clase 2 exige al menos tres sistemas de referencia en la configuración de análisis, así que una referencia menos cambia la conclusión. Solo un nuevo análisis con la configuración real puede justificar continuar."
    },
    pt: {
      caso: "Um navio Classe 2 com três sistemas de referência de posição opera com um GNSS fora de serviço. A análise de consequências do plano assume três referências ativas. O cliente quer manter a operação porque o tempo de trabalho restante é curto.",
      q: "Qual é a decisão técnica correta segundo o plano e a classe?",
      o: ["Continuar, porque duas referências bastam para a Classe 2 em qualquer operação", "Continuar com uma referência a menos, desde que o vento esteja abaixo de 20 nós", "Continuar sem mudanças, porque o GNSS fora de serviço afeta apenas a precisão", "Revisar o plano com a configuração real: a análise assumia três referências, então a operação deve ser reavaliada ou suspensa se não atender"],
      e: "A configuração real já não coincide com a que sustenta a análise de consequências. A Classe 2 exige ao menos três sistemas de referência na configuração analisada, então uma referência a menos muda a conclusão. Só uma nova análise com a configuração real pode justificar continuar."
    }
  },
  {
    m: 1, a: 0,
    es: {
      caso: "Un buque de Clase 1 realiza un trabajo de tendido de cable con el propulsor de proa en modo auto. Un fallo único en la fuente de control provoca la pérdida del controlador DP, y el buque deriva durante cuarenta segundos antes de que la tripulación reaccione.",
      q: "¿Qué afirma la clasificación sobre esta situación y qué debe concluir el DPO?",
      o: ["Es coherente con Clase 1, que no exige redundancia del control ni de su alimentación, así que la operación debe planificarse teniendo en cuenta que un fallo único puede causar pérdida de posición", "No es coherente con ninguna clase, porque cualquier buque DP debe tolerar un fallo único en el control", "Es coherente con Clase 3, que cubre la pérdida del control", "Es un incumplimiento de la Clase 1, que sí exige redundancia de alimentación del control"],
      e: "La Clase 1 no exige redundancia de la fuente de control ni del controlador. Un fallo único puede causar pérdida de posición, y eso es lo que la clase acepta. El DPO debe planificar la operación con ese riesgo presente y no tratar el buque como si tuviera la redundancia de la Clase 2."
    },
    pt: {
      caso: "Um navio Classe 1 realiza um lançamento de cabo com o propulsor de proa em modo automático. Uma falha única na fonte de controle causa a perda do controlador DP, e o navio deriva por quarenta segundos antes que a tripulação reaja.",
      q: "O que a classificação afirma sobre esta situação e o que o DPO deve concluir?",
      o: ["É coerente com a Classe 1, que não exige redundância do controle nem da alimentação dele, então a operação deve ser planejada considerando que uma falha única pode causar perda de posição", "Não é coerente com nenhuma classe, porque qualquer navio DP deve tolerar uma falha única no controle", "É coerente com a Classe 3, que cobre a perda do controle", "É um descumprimento da Classe 1, que exige redundância da alimentação do controle"],
      e: "A Classe 1 não exige redundância da fonte de controle nem do controlador. Uma falha única pode causar perda de posição, e isso é o que a classe aceita. O DPO deve planejar a operação com esse risco presente e não tratar o navio como se tivesse a redundância da Classe 2."
    }
  },
  {
    m: 1, a: 2,
    es: {
      caso: "Antes de iniciar una operación en Clase 2, el DPO revisa el FMEA. El documento fue aprobado hace dos años y desde entonces se añadió un segundo sistema de referencia y se cambió la fuente de alimentación de uno de los controladores.",
      q: "¿Qué conclusión debe sacar el DPO sobre el FMEA?",
      o: ["Sigue válido, porque el FMEA se aprueba una vez para toda la vida del buque", "Sigue válido si el sistema anterior era más fiable", "No puede considerarse válido para la configuración actual: debe actualizarse y confirmarse con pruebas antes de operar en DP", "Basta con anotar los cambios en el diario de guardia"],
      e: "El FMEA describe una configuración concreta. Un cambio en la alimentación de un controlador y la adición de un sistema de referencia modifican los modos de fallo. La actualización y la confirmación mediante pruebas son obligatorias antes de volver a operar en DP en Clase 2."
    },
    pt: {
      caso: "Antes de iniciar uma operação em Classe 2, o DPO revisa a FMEA. O documento foi aprovado há dois anos e, desde então, foi acrescentado um segundo sistema de referência e trocada a fonte de alimentação de um dos controladores.",
      q: "Que conclusão o DPO deve tirar sobre a FMEA?",
      o: ["Continua válida, porque a FMEA é aprovada uma vez para toda a vida do navio", "Continua válida se o sistema anterior era mais confiável", "Não pode ser considerada válida para a configuração atual: deve ser atualizada e confirmada com testes antes de operar em DP", "Basta anotar as mudanças no diário de bordo"],
      e: "A FMEA descreve uma configuração específica. A troca da alimentação de um controlador e o acréscimo de um sistema de referência alteram os modos de falha. A atualização e a confirmação por testes são obrigatórias antes de voltar a operar em DP na Classe 2."
    }
  },
  {
    m: 1, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un capability plot que muestra un margen aceptable para viento de 30 nudos desde la aleta de babor. El DPO se entera de que, en la misma zona, la corriente prevista será de 1,5 nudos desde la proa, un valor que el plot no incluía.",
      q: "¿Qué debe hacer el DPO antes de iniciar la operación?",
      o: ["Iniciar la operación, porque el viento es el factor dominante en el plot", "Pedir un nuevo capability plot con la corriente real, porque el análisis original no representa la condición prevista", "Reducir el empuje de los propulsores para ahorrar combustible", "Dejar la corriente para el turno de noche"],
      e: "El capability plot solo es válido para las condiciones con las que se calculó. Una corriente de 1,5 nudos desde proa cambia la fuerza que debe compensar el sistema. El DPO debe obtener un plot que incluya la corriente prevista antes de decidir."
    },
    pt: {
      caso: "Um navio Classe 2 tem um capability plot que mostra margem aceitável para vento de 30 nós pela alheta de bombordo. O DPO descobre que, na mesma área, a corrente prevista será de 1,5 nó pela proa, valor que o plot não incluía.",
      q: "O que o DPO deve fazer antes de iniciar a operação?",
      o: ["Iniciar a operação, porque o vento é o fator dominante no plot", "Pedir um novo capability plot com a corrente real, porque a análise original não representa a condição prevista", "Reduzir o empuxo dos propulsores para economizar combustível", "Deixar a corrente para o turno da noite"],
      e: "O capability plot só vale para as condições com que foi calculado. Uma corrente de 1,5 nó pela proa muda a força que o sistema deve compensar. O DPO deve obter um plot que inclua a corrente prevista antes de decidir."
    }
  },
  {
    m: 2, a: 2,
    es: {
      caso: "Un buque Clase 2 tiene dos computadores DP. El computador A está en control y el B en espera. El DPO observa que el B recibe las lecturas de los sensores a través del mismo conmutador de red que el A, y que el conmutador tiene una sola fuente de alimentación.",
      q: "¿Qué falla de diseño limita la redundancia real de este sistema?",
      o: ["Ninguna: la redundancia se cumple porque hay dos computadores", "El computador B debería estar en control para equilibrar la carga", "Un fallo del conmutador o de su alimentación puede dejar a los dos computadores sin datos, así que no hay independencia entre ellos", "Los sensores deberían conectarse solo al computador A"],
      e: "La redundancia exige independencia. Si ambos computadores dependen del mismo conmutador y de la misma alimentación, un único fallo puede dejarlos sin datos a la vez. Eso es un fallo común, y la clase exige que no ocurra."
    },
    pt: {
      caso: "Um navio Classe 2 tem dois computadores DP. O computador A está no controle e o B em espera. O DPO observa que o B recebe as leituras dos sensores pelo mesmo switch de rede que o A, e que esse switch tem uma única fonte de alimentação.",
      q: "Qual falha de projeto limita a redundância real deste sistema?",
      o: ["Nenhuma: a redundância está atendida porque há dois computadores", "O computador B deveria estar no controle para equilibrar a carga", "Uma falha do switch ou da sua alimentação pode deixar os dois computadores sem dados, então não há independência entre eles", "Os sensores deveriam ser ligados somente ao computador A"],
      e: "A redundância exige independência. Se os dois computadores dependem do mesmo switch e da mesma alimentação, uma única falha pode deixá-los sem dados ao mesmo tempo. Isso é uma falha comum, e a classe exige que ela não ocorra."
    }
  },
  {
    m: 2, a: 0,
    es: {
      caso: "En una Clase 3, el sistema DP principal y el de respaldo están en locales A-60 separados. Sin embargo, los cables de alimentación de ambos sistemas pasan por el mismo ducto de cables en la cubierta principal.",
      q: "¿Qué requisito de separación queda sin cumplir?",
      o: ["La separación física de los sistemas redundantes, que debe alcanzar también a sus cables de alimentación y de control", "El local A-60, que debería ser A-0", "La ventilación del local de respaldo", "Ninguno, la separación de locales basta"],
      e: "La Clase 3 exige separación física de los sistemas redundantes, y eso incluye sus cables. Si los dos sistemas comparten el mismo ducto, un incendio o una inundación en ese recorrido puede dañar a ambos aunque estén en locales separados."
    },
    pt: {
      caso: "Em uma Classe 3, o sistema DP principal e o de reserva estão em locais A-60 separados. No entanto, os cabos de alimentação dos dois sistemas passam pelo mesmo duto de cabos no convés principal.",
      q: "Qual requisito de separação fica sem cumprir?",
      o: ["A separação física dos sistemas redundantes, que deve atingir também seus cabos de alimentação e de controle", "O local A-60, que deveria ser A-0", "A ventilação do local de reserva", "Nenhum, a separação de locais basta"],
      e: "A Classe 3 exige separação física dos sistemas redundantes, e isso inclui seus cabos. Se os dois sistemas compartilham o mesmo duto, um incêndio ou uma inundação nesse percurso pode danificar os dois, mesmo com locais separados."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "Un buque Clase 2 usa el sistema de control de propulsores con dos PLC en paralelo. Durante una prueba de FMEA, se simula el fallo de uno de los PLC y el buque mantiene la posición. Pero al simular el fallo del módulo de salidas de ese PLC, que es común a ambos, la posición se pierde.",
      q: "¿Qué debe concluir el DPO de la prueba?",
      o: ["Que la prueba es inválida, porque solo se simulan fallos de procesador", "Que el fallo del PLC es aceptable porque el buque mantiene la posición en la primera prueba", "Que el sistema cumple la Clase 2 en ambos casos", "Que existe un modo de fallo común no tolerado: el módulo de salidas compartido debe corregirse o justificarse en el FMEA"],
      e: "Un PLC redundante solo protege si sus componentes críticos no son comunes. La segunda prueba revela un modo de fallo común en el módulo de salidas, que el sistema no tolera. Esto debe corregirse en el diseño o documentarse y resolverse antes de considerar cumplida la Clase 2."
    },
    pt: {
      caso: "Um navio Classe 2 usa o sistema de controle dos propulsores com dois CLPs em paralelo. Durante um teste de FMEA, simula-se a falha de um dos CLPs e o navio mantém a posição. Mas, ao simular a falha do módulo de saídas desse CLP, que é comum aos dois, a posição é perdida.",
      q: "O que o DPO deve concluir do teste?",
      o: ["Que o teste é inválido, porque só se simulam falhas de processador", "Que a falha do CLP é aceitável porque o navio manteve a posição no primeiro teste", "Que o sistema atende à Classe 2 nos dois casos", "Que existe um modo de falha comum não tolerado: o módulo de saídas compartilhado deve ser corrigido ou justificado na FMEA"],
      e: "Um CLP redundante só protege se seus componentes críticos não forem comuns. O segundo teste revela um modo de falha comum no módulo de saídas, que o sistema não tolera. Isso deve ser corrigido no projeto ou documentado e resolvido antes de considerar a Classe 2 atendida."
    }
  },
  {
    m: 2, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene dos barras acopladas con disyuntor de acoplamiento. Por mantenimiento, el disyuntor de acoplamiento se mantiene cerrado de forma permanente con un puente de cable para repartir la carga entre generadores.",
      q: "¿Qué consecuencia tiene esta práctica sobre la clase?",
      o: ["Ninguna, porque el puente mejora la disponibilidad de potencia", "Se elimina la división de energía: un fallo en una barra puede arrastrar a la otra, y la clase no se cumple mientras el puente exista", "Solo afecta a la eficiencia del combustible", "Permite cumplir Clase 3 porque ambas barras comparten carga"],
      e: "La división de energía con disyuntores separables es lo que aísla un fallo. Un puente permanente elimina esa separación, así que una falla en una barra puede propagarse a la otra. Mientras el puente exista, la configuración no cumple la clase."
    },
    pt: {
      caso: "Um navio Classe 2 tem duas barras acopladas por disjuntor de acoplamento. Por manutenção, o disjuntor de acoplamento foi mantido fechado de forma permanente com um jumper de cabo para repartir a carga entre os geradores.",
      q: "Qual consequência essa prática tem sobre a classe?",
      o: ["Nenhuma, porque o jumper melhora a disponibilidade de potência", "Elimina-se a divisão de energia: uma falha em uma barra pode arrastar a outra, e a classe não é atendida enquanto o jumper existir", "Afeta somente a eficiência do combustível", "Permite atender à Classe 3 porque as duas barras compartilham a carga"],
      e: "A divisão de energia com disjuntores separáveis é o que isola uma falha. Um jumper permanente elimina essa separação, então uma falha em uma barra pode se propagar para a outra. Enquanto o jumper existir, a configuração não atende à classe."
    }
  },
  {
    m: 2, a: 2,
    es: {
      caso: "Un sistema DP tiene tres sensores de viento. Dos de ellos están conectados al mismo módulo de entrada analógica, y el tercero, a un módulo distinto. Durante una tormenta, el módulo común se degrada y da lecturas de viento falsas pero coherentes entre sí.",
      q: "¿Por qué el sistema no detecta el error con sus tres sensores?",
      o: ["Porque el viento no es una variable de DP", "Porque la comparación entre sensores siempre detecta cualquier error, así que el fallo no existió", "Porque dos de los tres sensores comparten el mismo módulo de entrada: su error es común, y la votación de tres solo sirve si las entradas son independientes", "Porque el tercer sensor no tiene suficiente resolución"],
      e: "La votación entre tres sensores solo detecta errores si son independientes. Dos sensores que pasan por el mismo módulo comparten un fallo común, así que pueden coincidir en un valor falso. El diseño debe separar físicamente las entradas de sensores redundantes."
    },
    pt: {
      caso: "Um sistema DP tem três sensores de vento. Dois deles estão ligados ao mesmo módulo de entrada analógica, e o terceiro a outro módulo. Durante uma tempestade, o módulo comum se degrada e dá leituras de vento falsas, mas coerentes entre si.",
      q: "Por que o sistema não detecta o erro com seus três sensores?",
      o: ["Porque o vento não é uma variável do DP", "Porque a comparação entre sensores sempre detecta qualquer erro, então a falha não existiu", "Porque dois dos três sensores compartilham o mesmo módulo de entrada: o erro deles é comum, e a votação de três só funciona se as entradas forem independentes", "Porque o terceiro sensor não tem resolução suficiente"],
      e: "A votação entre três sensores só detecta erros se forem independentes. Dois sensores que passam pelo mesmo módulo compartilham uma falha comum, então podem concordar num valor falso. O projeto deve separar fisicamente as entradas dos sensores redundantes."
    }
  },
  {
    m: 2, a: 0,
    es: {
      caso: "Un buque en Clase 2 opera con el sistema de referencia hidroacústico y dos GNSS. El DPO observa que, tras una pérdida de comunicación del transpondedor, el sistema sigue usando el valor antiguo durante varios minutos sin marcar la referencia como degradada.",
      q: "¿Qué función del sistema falla en este caso?",
      o: ["La monitorización de la calidad de la referencia: el sistema debe detectar la pérdida y excluir la fuente del cálculo de posición", "La alimentación de la hidroacústica", "La medición de la profundidad", "El registro del diario de operaciones"],
      e: "Una referencia que deja de actualizarse debe ser detectada por la monitorización y excluida del cálculo. Usar un valor antiguo durante minutos sin marcarlo es un fallo de la lógica de validación, no de la hidroacústica en sí."
    },
    pt: {
      caso: "Um navio em Classe 2 opera com o sistema de referência hidroacústico e dois GNSS. O DPO observa que, após uma perda de comunicação do transponder, o sistema continua usando o valor antigo por vários minutos sem marcar a referência como degradada.",
      q: "Qual função do sistema falha neste caso?",
      o: ["A monitoração da qualidade da referência: o sistema deve detectar a perda e excluir a fonte do cálculo de posição", "A alimentação da hidroacústica", "A medição da profundidade", "O registro no diário de operações"],
      e: "Uma referência que deixa de atualizar deve ser detectada pela monitoração e excluída do cálculo. Usar um valor antigo por minutos sem marcá-lo é uma falha da lógica de validação, não do hidroacústico em si."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un sistema de energía con dos generadores y una barra de emergencia. El generador de emergencia alimenta un cuadro que también recibe la barra de reserva de la Clase 2, a través de un único cable de conexión.",
      q: "¿Qué requisito de división de energía queda incumplido?",
      o: ["La energía de emergencia en puente, que no tiene relación con el DP", "Ninguno, un cable único es suficiente si el generador es de emergencia", "El cable debe ser de mayor sección", "La división de la energía en sistemas separados: un fallo del cable único puede dejar sin energía a la parte que depende de él"],
      e: "La Clase 2 exige que la energía esté dividida y que un fallo único no cause pérdida de posición. Un punto único de conexión compartido es una falla que puede dejar sin energía a varios sistemas. La sección del cable no resuelve la falta de separación."
    },
    pt: {
      caso: "Um navio Classe 2 tem um sistema de energia com dois geradores e uma barra de emergência. O gerador de emergência alimenta um quadro que também recebe a barra de reserva da Classe 2, por um único cabo de conexão.",
      q: "Qual requisito de divisão de energia fica descumprido?",
      o: ["A energia de emergência na ponte, que não tem relação com o DP", "Nenhum, um cabo único basta se o gerador é de emergência", "O cabo deve ter maior seção", "A divisão da energia em sistemas separados: uma falha do cabo único pode deixar sem energia a parte que depende dele"],
      e: "A Classe 2 exige que a energia esteja dividida e que uma falha única não cause perda de posição. Um ponto de conexão único compartilhado é uma falha que pode deixar vários sistemas sem energia. A seção do cabo não resolve a falta de separação."
    }
  },
  {
    m: 2, a: 1,
    es: {
      caso: "En un buque Clase 2 con dos computadores DP, el software se actualizó en ambos en la misma ventana de mantenimiento. Tras la actualización, un parámetro de filtrado quedó mal configurado en los dos, y ambos reaccionan igual ante una referencia ruidosa.",
      q: "¿Qué tipo de fallo describe mejor este caso, y qué control habría reducido el riesgo?",
      o: ["Fallo aleatorio independiente; un sensor de reserva", "Fallo común por configuración idéntica; procedimientos de actualización escalonada y verificación independiente de parámetros", "Fallo de hardware; más mantenimiento preventivo", "Error del operador; formación adicional"],
      e: "Dos computadores con el mismo software y la misma configuración comparten su punto débil. Una actualización simultánea propaga el mismo error a ambos. La mitigación es escalonar las actualizaciones y verificar los parámetros de forma independiente, además del FMEA."
    },
    pt: {
      caso: "Em um navio Classe 2 com dois computadores DP, o software foi atualizado nos dois na mesma janela de manutenção. Após a atualização, um parâmetro de filtragem ficou mal configurado nos dois, e ambos reagem igual a uma referência ruidosa.",
      q: "Que tipo de falha descreve melhor este caso, e que controle teria reduzido o risco?",
      o: ["Falha aleatória independente; um sensor de reserva", "Falha comum por configuração idêntica; atualizações escalonadas e verificação independente dos parâmetros", "Falha de hardware; mais manutenção preventiva", "Erro do operador; treinamento adicional"],
      e: "Dois computadores com o mesmo software e a mesma configuração compartilham o mesmo ponto fraco. Uma atualização simultânea propaga o mesmo erro para os dois. A mitigação é escalonar as atualizações e verificar os parâmetros de forma independente, além da FMEA."
    }
  },
  {
    m: 2, a: 2,
    es: {
      caso: "Un buque Clase 2 realiza un trabajo con grúa. El sistema de gestión de potencia desconecta automáticamente un consumidor de la barra 2 para proteger la red. El consumidor es el ventilador de la sala de baterías de la unidad de control.",
      q: "¿Qué falla de diseño se identifica?",
      o: ["Ninguna, la desconexión protege la red y es correcta", "Que el ventilador debe conectarse a la barra 1 exclusivamente", "Que la prioridad de consumidores no tuvo en cuenta la dependencia de la unidad de control: su enfriamiento sostiene un servicio de DP", "Que las baterías no deben tener ventilación"],
      e: "Un consumidor que parece secundario puede sostener una función de control. Si el enfriamiento de baterías de la unidad de control se pierde, esa unidad puede fallar. La clasificación de prioridades debe analizar las dependencias reales, no solo la potencia consumida."
    },
    pt: {
      caso: "Um navio Classe 2 executa um trabalho com guindaste. O sistema de gestão de potência desliga automaticamente um consumidor da barra 2 para proteger a rede. O consumidor é o ventilador da sala de baterias da unidade de controle.",
      q: "Qual falha de projeto é identificada?",
      o: ["Nenhuma, o desligamento protege a rede e é correto", "Que o ventilador deve ser ligado exclusivamente à barra 1", "Que a prioridade dos consumidores não considerou a dependência da unidade de controle: o resfriamento das baterias sustenta um serviço do DP", "Que as baterias não devem ter ventilação"],
      e: "Um consumidor que parece secundário pode sustentar uma função de controle. Se o resfriamento das baterias da unidade de controle é perdido, essa unidade pode falhar. A classificação de prioridades deve analisar as dependências reais, não só a potência consumida."
    }
  },
  {
    m: 2, a: 0,
    es: {
      caso: "En una Clase 2 con tres generadores, el DPO comprueba que los tres están en paralelo y que el reparto de carga es correcto. Pero el disyuntor de salida de uno de ellos tiene un contacto auxiliar que indica 'cerrado' aunque el interruptor esté abierto.",
      q: "¿Qué riesgo introduce este defecto para la clase?",
      o: ["Que el sistema cree tener generación disponible que en realidad no existe, con el riesgo de que la reserva de potencia calculada sea falsa", "Ninguno, el reparto de carga es correcto", "Que el generador se sobrecalienta", "Que la clase cambia de 2 a 3 automáticamente"],
      e: "El sistema decide con la información que recibe. Si un contacto auxiliar miente, la reserva de potencia que calcula es falsa, y el DPO puede confiar en una capacidad que no tiene. Un contacto de estado defectuoso es un fallo que afecta a la clase, no un detalle menor."
    },
    pt: {
      caso: "Em uma Classe 2 com três geradores, o DPO verifica que os três estão em paralelo e que a repartição de carga está correta. Mas o disjuntor de saída de um deles tem um contato auxiliar que indica 'fechado' mesmo com o interruptor aberto.",
      q: "Que risco esse defeito introduz para a classe?",
      o: ["Que o sistema acredite ter geração disponível que não existe, e que a reserva de potência calculada seja falsa", "Nenhum, a repartição de carga está correta", "Que o gerador superaquece", "Que a classe muda de 2 para 3 automaticamente"],
      e: "O sistema decide com as informações que recebe. Se um contato auxiliar informa errado, a reserva de potência calculada é falsa, e o DPO pode confiar numa capacidade que não existe. Um contato de estado defeituoso é uma falha que afeta a classe, não um detalhe menor."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "Un buque Clase 2 con dos computadores DP usa un temporizador de vigilancia para detectar si el computador activo se congela. El temporizador se configuró a 60 segundos, pero el controlador necesita 20 segundos para reiniciarse y reasumir el control.",
      q: "¿Qué consecuencia tiene este ajuste sobre la redundancia?",
      o: ["Ninguna, 60 segundos es suficiente en cualquier caso", "Que el computador de reserva nunca se activa, porque el temporizador no expira", "Que la reserva tarda en asumir el control, pero como el ajuste es razonable no afecta a la operación", "Que la detección tardía puede causar una pérdida de posición antes de que la reserva tome el control; el tiempo de conmutación debe analizarse en el FMEA"],
      e: "Una conmutación lenta puede provocar un movimiento antes de que la reserva asuma el control. La detección y la conmutación forman parte del análisis de consecuencias. Un temporizador mal calibrado convierte una falla recuperable en una pérdida de posición."
    },
    pt: {
      caso: "Um navio Classe 2 com dois computadores DP usa um temporizador de vigilância para detectar se o computador ativo travou. O temporizador foi configurado para 60 segundos, mas o controlador precisa de 20 segundos para reiniciar e reassumir o controle.",
      q: "Qual consequência esse ajuste tem sobre a redundância?",
      o: ["Nenhuma, 60 segundos é suficiente em qualquer caso", "Que o computador de reserva nunca é ativado, porque o temporizador não expira", "Que a reserva demora a assumir o controle, mas como o ajuste é razoável não afeta a operação", "Que a detecção tardia pode causar perda de posição antes de a reserva assumir o controle; o tempo de comutação deve ser analisado na FMEA"],
      e: "Uma comutação lenta pode provocar um movimento antes de a reserva assumir o controle. A detecção e a comutação fazem parte da análise de consequências. Um temporizador mal calibrado transforma uma falha recuperável em perda de posição."
    }
  },
  {
    m: 2, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene dos sistemas de referencia de posición de principio distinto: un GNSS y un radar de microondas. Durante una operación, ambos sistemas usan el mismo servidor de correcciones diferenciales, que sufre una degradación que desplaza las dos posiciones en la misma dirección.",
      q: "¿Por qué la comparación entre estas dos referencias no detecta el error?",
      o: ["Porque el radar no admite correcciones diferenciales", "Porque comparten una dependencia común (las correcciones): ambas se desplazan igual y su coherencia no prueba la exactitud", "Porque la comparación solo funciona con tres referencias", "Porque el GNSS siempre es más preciso que el radar"],
      e: "Dos referencias de principio distinto pueden compartir una dependencia común. Si esa dependencia falla, ambas se desplazan igual y parecen coherentes. La coherencia no prueba exactitud cuando hay una causa común, así que hay que identificar las dependencias compartidas de cada referencia."
    },
    pt: {
      caso: "Um navio Classe 2 tem dois sistemas de referência de posição de princípios diferentes: um GNSS e um radar de micro-ondas. Durante uma operação, os dois usam o mesmo servidor de correções diferenciais, que sofre uma degradação que desloca as duas posições na mesma direção.",
      q: "Por que a comparação entre essas duas referências não detecta o erro?",
      o: ["Porque o radar não aceita correções diferenciais", "Porque compartilham uma dependência comum (as correções): ambas se deslocam igual, e sua coerência não prova a exatidão", "Porque a comparação só funciona com três referências", "Porque o GNSS é sempre mais preciso que o radar"],
      e: "Duas referências de princípios diferentes podem compartilhar uma dependência comum. Se essa dependência falha, ambas se deslocam igual e parecem coerentes. A coerência não prova exatidão quando há uma causa comum, então é preciso identificar as dependências compartilhadas de cada referência."
    }
  },
  {
    m: 3, a: 2,
    es: {
      caso: "Durante una operación de posicionamiento en Auto DP, el DPO cambia el setpoint de proa de 090 a 120 grados con un viento de 25 nudos por la amura de babor. El buque tarda casi dos minutos en estabilizarse y deriva dos metros fuera de la posición.",
      q: "¿Qué procedimiento de operación debía haberse seguido, y por qué?",
      o: ["Ninguno: el cambio de proa es una operación rutinaria sin riesgo de posición", "Pasar a joystick y girar a mano para no depender del controlador", "Un cambio gradual de proa, con el capability plot revisado para la nueva orientación frente al viento, porque el empuje disponible depende del ángulo", "Apagar las referencias de posición durante el giro"],
      e: "La capacidad de empuje depende de la orientación relativa al viento. Al girar 30 grados el buque entra en una condición con menos margen, y un cambio brusco de setpoint sobrepasa el control. El procedimiento correcto es un cambio gradual y verificar el plot para la nueva orientación."
    },
    pt: {
      caso: "Durante uma operação de posicionamento em Auto DP, o DPO muda a proa de referência de 090 para 120 graus com vento de 25 nós pela amura de bombordo. O navio leva quase dois minutos para estabilizar e desloca dois metros para fora da posição.",
      q: "Que procedimento de operação deveria ter sido seguido, e por quê?",
      o: ["Nenhum: a mudança de proa é uma operação rotineira sem risco de posição", "Passar para joystick e girar manualmente para não depender do controlador", "Uma mudança gradual de proa, com o capability plot revisado para a nova orientação diante do vento, porque o empuxo disponível depende do ângulo", "Desligar as referências de posição durante a guinada"],
      e: "A capacidade de empuxo depende da orientação relativa ao vento. Ao girar 30 graus o navio entra numa condição com menos margem, e uma mudança brusca de referência ultrapassa o controle. O procedimento correto é uma mudança gradual e verificar o plot para a nova orientação."
    }
  },
  {
    m: 3, a: 0,
    es: {
      caso: "Un buque en Auto DP tiene una alarma de 'tensión de cable fuera de rango' en la referencia de cable tenso. El operador la deselecciona y continúa. Diez minutos después, la posición deriva un metro en la dirección del cable deseleccionado.",
      q: "¿Qué error de procedimiento se cometió?",
      o: ["Deseleccionar la referencia sin investigar la causa ni evaluar el efecto en la configuración de referencias restante, y sin registrar la decisión", "Deseleccionar la referencia es siempre correcto ante cualquier alarma", "No deseleccionarla: el sistema debió seguir usándola con la alarma activa", "Que la alarma debió ignorarse porque el cable siempre da lecturas erróneas"],
      e: "Una alarma de tensión fuera de rango puede indicar un fallo del sensor o un daño en el cable. Deseleccionarla sin investigar y sin evaluar qué referencias quedan es un error de procedimiento, y sin registro no se puede reconstruir la decisión. La deriva posterior demuestra que la referencia restante no era suficiente en esa condición."
    },
    pt: {
      caso: "Um navio em Auto DP tem um alarme de 'tensão de cabo fora de faixa' na referência de cabo tenso. O operador a desseleciona e continua. Dez minutos depois, a posição desloca um metro na direção do cabo desselecionado.",
      q: "Que erro de procedimento foi cometido?",
      o: ["Desselecionar a referência sem investigar a causa nem avaliar o efeito na configuração de referências restante, e sem registrar a decisão", "Desselecionar a referência é sempre correto diante de qualquer alarme", "Não desselecioná-la: o sistema devia continuar usando-a com o alarme ativo", "Que o alarme devia ser ignorado porque o cabo sempre dá leituras erradas"],
      e: "Um alarme de tensão fora de faixa pode indicar falha do sensor ou dano no cabo. Desselecionar sem investigar e sem avaliar quais referências restam é um erro de procedimento, e sem registro não se reconstrói a decisão. O deslocamento posterior mostra que a referência restante não bastava naquela condição."
    }
  },
  {
    m: 3, a: 3,
    es: {
      caso: "El DPO prepara una operación en Clase 2. Revisa la lista de verificación previa, pero no contrasta el calado del modelo con el calado real del buque tras cargar un contenedor adicional en cubierta. El capability plot se calcula con el calado de proyecto.",
      q: "¿Qué consecuencia tiene esta omisión sobre la operación?",
      o: ["Ninguna, la masa adicional en cubierta no afecta a la posición", "Que el capability plot es válido porque el calado de proyecto siempre es el real", "Que el buque tendrá más margen de empuje por ser más pesado", "Que el modelo y el plot no representan la condición real: el margen calculado puede ser falso, y la verificación previa debe incluir los datos de carga"],
      e: "El modelo del buque y el capability plot dependen del calado y de la distribución de masas. Un contenedor adicional cambia el calado, el desplazamiento y la respuesta a viento y corriente. Un margen calculado con datos no actualizados puede ser falso, y la verificación previa debe contrastar esos datos con la condición de carga real."
    },
    pt: {
      caso: "O DPO prepara uma operação em Classe 2. Revisa a lista de verificação prévia, mas não confere o calado do modelo com o calado real do navio após carregar um contêiner adicional no convés. O capability plot é calculado com o calado de projeto.",
      q: "Qual consequência essa omissão tem sobre a operação?",
      o: ["Nenhuma, a massa adicional no convés não afeta a posição", "Que o capability plot é válido porque o calado de projeto é sempre o real", "Que o navio terá mais margem de empuxo por ser mais pesado", "Que o modelo e o plot não representam a condição real: a margem calculada pode ser falsa, e a verificação prévia deve incluir os dados de carga"],
      e: "O modelo do navio e o capability plot dependem do calado e da distribuição de massas. Um contêiner adicional muda o calado, o deslocamento e a resposta a vento e corrente. Uma margem calculada com dados desatualizados pode ser falsa, e a verificação prévia deve conferir esses dados com a condição de carga real."
    }
  },
  {
    m: 3, a: 1,
    es: {
      caso: "Durante la vigilancia de una operación, el DPO nota que el empuje de un propulsor de popa aumenta poco a poco mientras el buque se mantiene en posición, sin cambios de viento ni de corriente. El sistema no emite alarma.",
      q: "¿Qué debe sospecharse y qué acción es la adecuada?",
      o: ["Un aumento normal del empuje por inercia: no hacer nada hasta que haya alarma", "Una degradación lenta de un sensor o de una referencia que el controlador compensa con más empuje: contrastar las lecturas y verificar la coherencia de las referencias", "Un fallo de combustible: cambiar a generador de reserva", "Un efecto de la temperatura del agua: anotarlo para el turno siguiente"],
      e: "Un empuje que sube sin cambio ambiental es un síntoma de que el controlador compensa algo que no existe, por ejemplo una referencia que deriva. Como no hay alarma, la vigilancia es la única forma de detectarlo. La acción es contrastar las lecturas entre referencias y sensores antes de que la deriva comprometa la posición."
    },
    pt: {
      caso: "Durante a vigilância de uma operação, o DPO percebe que o empuxo de um propulsor de popa aumenta aos poucos enquanto o navio se mantém na posição, sem mudança de vento nem de corrente. O sistema não emite alarme.",
      q: "O que deve ser suspeitado e qual ação é a adequada?",
      o: ["Um aumento normal do empuxo por inércia: não fazer nada até haver alarme", "Uma degradação lenta de um sensor ou referência que o controlador compensa com mais empuxo: conferir as leituras e verificar a coerência das referências", "Uma falha de combustível: passar para o gerador de reserva", "Um efeito da temperatura da água: anotar para o turno seguinte"],
      e: "Um empuxo que sobe sem mudança ambiental é sintoma de que o controlador compensa algo que não existe, por exemplo uma referência que deriva. Como não há alarme, a vigilância é a única forma de detectar. A ação é conferir as leituras entre referências e sensores antes que a deriva comprometa a posição."
    }
  },
  {
    m: 3, a: 2,
    es: {
      caso: "El DPO de guardia recibe el relevo de su compañero a mitad de una operación de 6 horas. El relevo se hace verbalmente: 'todo está en Auto DP, con las tres referencias activas'. El DPO saliente no entrega la lista de referencias deseleccionadas en la última hora.",
      q: "¿Qué debe exigirse en el relevo para cumplir el procedimiento?",
      o: ["Un relevo solo verbal, porque el DPO entrante ya conoce el buque", "Que el relevo se haga en el puente, sin documentación", "Un relevo documentado que incluya el estado de referencias, las deselecciones recientes y las incidencias pendientes, y que el entrante lo confirme", "Que el DPO saliente permanezca en guardia cuatro horas más"],
      e: "El relevo debe transferir el conocimiento del estado real del sistema. Decir que hay tres referencias activas oculta que una se deseleccionó en la última hora. Un traspaso documentado, con referencias, incidencias y confirmación del entrante, evita que el sistema se opere con una imagen incorrecta."
    },
    pt: {
      caso: "O DPO de serviço recebe a troca do colega no meio de uma operação de 6 horas. A troca é feita verbalmente: 'está tudo em Auto DP, com as três referências ativas'. O DPO que sai não informa a lista de referências desselecionadas na última hora.",
      q: "O que deve ser exigido na troca para cumprir o procedimento?",
      o: ["Uma troca apenas verbal, porque o DPO que entra já conhece o navio", "Que a troca seja feita na ponte, sem documentação", "Uma troca documentada que inclua o estado das referências, as desseleções recentes e as ocorrências pendentes, e que o que entra confirme", "Que o DPO que sai permaneça de serviço por mais quatro horas"],
      e: "A troca deve transferir o conhecimento do estado real do sistema. Dizer que há três referências ativas esconde que uma foi desselecionada na última hora. Uma passagem documentada, com referências, ocorrências e confirmação de quem entra, evita que o sistema seja operado com uma imagem incorreta."
    }
  },
  {
    m: 3, a: 0,
    es: {
      caso: "Un buque en Clase 2 entra en un área con cables submarinos señalizados. El DPO decide usar la referencia hidroacústica para trabajar cerca del cable, pero el transpondedor está montado en un punto que el casco de un buque de apoyo tapa parcialmente durante las maniobras.",
      q: "¿Qué debe evaluar el DPO antes de confiar en la referencia?",
      o: ["Que la línea de visión y la geometría de la referencia se mantienen durante las maniobras, y que la referencia no queda degradada por el propio buque de apoyo", "Que el cable submarino no interfiere con la referencia por definición", "Que el transpondedor debe cambiarse por uno de mayor potencia", "Que la hidroacústica no sirve en áreas con cables"],
      e: "Las referencias acústicas dependen de la geometría y de que el camino de la señal no se interrumpa. Un casco que tapa el transpondedor o que refleja la señal degrada la lectura. El DPO debe evaluar la geometría durante las maniobras, no solo en la configuración inicial."
    },
    pt: {
      caso: "Um navio em Classe 2 entra em uma área com cabos submarinos sinalizados. O DPO decide usar a referência hidroacústica para trabalhar perto do cabo, mas o transponder está montado num ponto que o casco de um navio de apoio tapa parcialmente durante as manobras.",
      q: "O que o DPO deve avaliar antes de confiar na referência?",
      o: ["Que a linha de visada e a geometria da referência se mantêm durante as manobras, e que a referência não é degradada pelo próprio navio de apoio", "Que o cabo submarino não interfere na referência por definição", "Que o transponder deve ser trocado por um de maior potência", "Que a hidroacústica não serve em áreas com cabos"],
      e: "As referências acústicas dependem da geometria e de o caminho do sinal não ser interrompido. Um casco que tapa o transponder ou reflete o sinal degrada a leitura. O DPO deve avaliar a geometria durante as manobras, não apenas na configuração inicial."
    }
  },
  {
    m: 3, a: 3,
    es: {
      caso: "El DPO de un buque Clase 2 registra en el diario que 'la posición se mantuvo sin incidencias durante toda la operación'. Sin embargo, el registro de referencias muestra que dos de ellas se deseleccionaron durante quince minutos, y que no se anotó la causa.",
      q: "¿Qué problema documental y técnico tiene este registro?",
      o: ["Ninguno: la posición se mantuvo, así que el registro es correcto", "Que el registro debió ser más breve", "Que la deselección no debe registrarse para no alarmar al cliente", "Que el registro oculta una pérdida de redundancia durante quince minutos, sin causa ni análisis: el diario debe reflejar lo que pasó"],
      e: "Una operación puede mantener la posición y aun así haber estado sin redundancia durante un tiempo. El diario debe reflejar las deselecciones, sus causas y su efecto. Un registro que solo dice 'sin incidencias' impide reconstruir la operación y analizar si la clase se cumplió en todo momento."
    },
    pt: {
      caso: "O DPO de um navio Classe 2 registra no diário que 'a posição foi mantida sem ocorrências durante toda a operação'. No entanto, o registro de referências mostra que duas delas foram desselecionadas por quinze minutos, e a causa não foi anotada.",
      q: "Qual problema documental e técnico tem este registro?",
      o: ["Nenhum: a posição foi mantida, então o registro está correto", "Que o registro devia ser mais breve", "Que a deseleção não deve ser registrada para não alarmar o cliente", "Que o registro oculta uma perda de redundância por quinze minutos, sem causa nem análise: o diário deve refletir o que aconteceu"],
      e: "Uma operação pode manter a posição e ainda ter ficado sem redundância por algum tempo. O diário deve refletir as desseleções, suas causas e seu efeito. Um registro que só diz 'sem ocorrências' impede reconstruir a operação e analisar se a classe foi atendida em todo o período."
    }
  },
  {
    m: 3, a: 1,
    es: {
      caso: "Un buque Clase 2 opera en Auto DP cerca de una plataforma. Un tripulante cambia manualmente el modo de un propulsor a 'local' para hacer una prueba, y olvida devolverlo a 'remoto' al terminar. El sistema DP sigue mostrando el propulsor como disponible.",
      q: "¿Qué falla de procedimiento y de interfaz se identifica?",
      o: ["Ninguna: el propulsor en local sigue disponible para el DP", "La interfaz no indica claramente que el propulsor no está bajo control del DP, y el procedimiento no exige restaurar el modo ni verificarlo antes de reanudar la operación", "Que las pruebas no deben hacerse en Auto DP nunca", "Que el propulsor debió apagarse permanentemente"],
      e: "Un propulsor en modo local no responde al controlador DP, pero el sistema lo mostró como disponible. Eso es un fallo de interfaz y de procedimiento: la capacidad real no coincidía con la que el DP creía tener. El procedimiento debe exigir restaurar y verificar cada modo antes de reanudar la operación."
    },
    pt: {
      caso: "Um navio Classe 2 opera em Auto DP perto de uma plataforma. Um tripulante muda manualmente o modo de um propulsor para 'local' para fazer um teste, e esquece de voltar para 'remoto' ao terminar. O sistema DP continua mostrando o propulsor como disponível.",
      q: "Qual falha de procedimento e de interface é identificada?",
      o: ["Nenhuma: o propulsor em local continua disponível para o DP", "A interface não indica claramente que o propulsor não está sob controle do DP, e o procedimento não exige restaurar o modo nem verificá-lo antes de retomar a operação", "Que os testes nunca devem ser feitos em Auto DP", "Que o propulsor devia ter sido desligado permanentemente"],
      e: "Um propulsor em modo local não responde ao controlador DP, mas o sistema o mostrou como disponível. Isso é uma falha de interface e de procedimento: a capacidade real não coincidia com a que o DP acreditava ter. O procedimento deve exigir restaurar e verificar cada modo antes de retomar a operação."
    }
  },
  {
    m: 3, a: 2,
    es: {
      caso: "Al preparar una operación en Clase 2, el DPO revisa la lista de verificación de sensores. Todos están marcados como 'OK', pero el anemómetro 2 fue calibrado hace tres años y la calibración exige anualmente. La lista no incluye la fecha de calibración.",
      q: "¿Qué debe hacer el DPO antes de iniciar la operación?",
      o: ["Iniciar la operación, porque la lista indica OK", "Usar el anemómetro 2 solo si el viento es bajo", "Verificar la calibración vigente del anemómetro 2 y, si no está al día, excluirlo o recalibrarlo antes de confiar en el feed-forward de viento", "Cambiar la fecha de calibración en la lista para que quede al día"],
      e: "Una lista de verificación que marca 'OK' sin contrastar la vigencia de la calibración deja pasar un sensor fuera de especificación. Antes de confiar en el feed-forward de viento hay que confirmar la calibración. Corregir la fecha en la lista sin recalibrar sería falsear el registro."
    },
    pt: {
      caso: "Ao preparar uma operação em Classe 2, o DPO revisa a lista de verificação de sensores. Todos estão marcados como 'OK', mas o anemômetro 2 foi calibrado há três anos, e a calibração é anual. A lista não inclui a data da calibração.",
      q: "O que o DPO deve fazer antes de iniciar a operação?",
      o: ["Iniciar a operação, porque a lista indica OK", "Usar o anemômetro 2 somente se o vento estiver fraco", "Verificar a calibração vigente do anemômetro 2 e, se não estiver em dia, excluí-lo ou recalibrá-lo antes de confiar no feed-forward de vento", "Alterar a data de calibração na lista para que fique em dia"],
      e: "Uma lista de verificação que marca 'OK' sem conferir a validade da calibração deixa passar um sensor fora de especificação. Antes de confiar no feed-forward de vento é preciso confirmar a calibração. Corrigir a data na lista sem recalibrar seria falsificar o registro."
    }
  },
  {
    m: 3, a: 0,
    es: {
      caso: "Durante una operación de tendido de tubería en Auto DP, el DPO detecta que la lista de vigilancia de cada hora se ha marcado como 'completa' en los últimos cuatro registros, pero los valores de tensión de cable y de estado de alimentación son idénticos cada vez.",
      q: "¿Qué indica este patrón y qué debe hacerse?",
      o: ["Posible registro automático o no real de la vigilancia: verificar con inspección directa y revisar si la lista se está cumplimentando sin comprobar", "Que los valores son estables y no requieren revisión", "Que la lista debe reducirse a dos comprobaciones por turno", "Que el cable no tiene tensión variable por definición"],
      e: "Valores idénticos durante cuatro horas en parámetros que deberían variar indican que la vigilancia no se hace realmente. Una lista marcada sin verificación es peor que ninguna, porque da una falsa sensación de control. Hay que comprobar directamente los parámetros y corregir el procedimiento."
    },
    pt: {
      caso: "Durante uma operação de lançamento de tubulação em Auto DP, o DPO percebe que a lista de vigilância de cada hora foi marcada como 'completa' nos últimos quatro registros, mas os valores de tensão do cabo e de estado da alimentação são idênticos em todas as vezes.",
      q: "O que esse padrão indica e o que deve ser feito?",
      o: ["Possível registro automático ou não real da vigilância: verificar por inspeção direta e checar se a lista está sendo preenchida sem conferência", "Que os valores são estáveis e não exigem revisão", "Que a lista deve ser reduzida a duas verificações por turno", "Que o cabo não tem tensão variável por definição"],
      e: "Valores idênticos por quatro horas em parâmetros que deveriam variar indicam que a vigilância não está sendo feita de verdade. Uma lista marcada sem verificação é pior que nenhuma, porque dá uma falsa sensação de controle. É preciso conferir os parâmetros diretamente e corrigir o procedimento."
    }
  },
  {
    m: 4, a: 2,
    es: {
      caso: "Un buque Clase 2 usa dos GNSS y un sistema de cable tenso. Durante una maniobra, el GNSS 1 sufre una pérdida de seguimiento de cuatro satélites y el GNSS 2 mantiene la solución, pero con una precisión horizontal que se duplica. El cable tenso da una lectura coherente con la del GNSS 2.",
      q: "¿Qué debe hacer el DPO con el GNSS 1 y cómo evalúa la configuración?",
      o: ["Mantener el GNSS 1 porque la pérdida de cuatro satélites es normal en maniobras", "Desseleccionar el GNSS 2 para que no domine el cálculo", "Desseleccionar el GNSS 1 por degradación, verificar que la configuración restante cumple el análisis de consecuencias y registrar la causa", "Cambiar a joystick sin evaluar las referencias"],
      e: "Una pérdida de seguimiento y una precisión que se duplica indican degradación de la referencia. La decisión correcta es excluirla, pero el DPO debe verificar que la configuración restante cumple el análisis de consecuencias, porque ya se opera con menos referencias. Registrar la causa permite investigar después."
    },
    pt: {
      caso: "Um navio Classe 2 usa dois GNSS e um sistema de cabo tenso. Durante uma manobra, o GNSS 1 perde o rastreio de quatro satélites e o GNSS 2 mantém a solução, mas com precisão horizontal que dobra. O cabo tenso dá uma leitura coerente com a do GNSS 2.",
      q: "O que o DPO deve fazer com o GNSS 1 e como avalia a configuração?",
      o: ["Manter o GNSS 1, porque a perda de quatro satélites é normal em manobras", "Desselecionar o GNSS 2 para que não domine o cálculo", "Desselecionar o GNSS 1 por degradação, verificar que a configuração restante atende à análise de consequências e registrar a causa", "Passar para joystick sem avaliar as referências"],
      e: "Perda de rastreio e precisão que dobra indicam degradação da referência. A decisão correta é excluí-la, mas o DPO deve verificar que a configuração restante atende à análise de consequências, porque já se opera com menos referências. Registrar a causa permite investigar depois."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "En una operación en Clase 2, el sistema de referencia por radar de microondas está montado en una estructura que vibra con la rotación de un propulsor de proa a determinadas revoluciones. La lectura de posición presenta oscilaciones que coinciden con esa frecuencia.",
      q: "¿Qué tipo de error es este y cómo debe tratarse?",
      o: ["Un error aleatorio sin relación con el equipo: se corrige con más filtrado sin investigar", "Un error de multitrayectoria: se corrige cambiando de referencia", "Un error de ambiente del sistema, sin relación con la vibración", "Un error inducido por vibración estructural, que se debe investigar y, mientras tanto, se evita operar a esas revoluciones o se excluye la referencia"],
      e: "Una oscilación que coincide con la frecuencia de rotación de un propulsor indica una interacción mecánica entre el equipo de referencia y la estructura. No es ruido aleatorio, y un filtro más fuerte puede ocultar el problema. La solución es investigar la causa de la vibración y, mientras tanto, evitar esas revoluciones o excluir la referencia."
    },
    pt: {
      caso: "Em uma operação em Classe 2, o sistema de referência por radar de micro-ondas está montado numa estrutura que vibra com a rotação de um propulsor de proa em determinadas rotações. A leitura de posição apresenta oscilações que coincidem com essa frequência.",
      q: "Que tipo de erro é este e como deve ser tratado?",
      o: ["Um erro aleatório sem relação com o equipamento: corrigir com mais filtragem sem investigar", "Um erro de multicaminho: corrigir trocando de referência", "Um erro do ambiente do sistema, sem relação com a vibração", "Um erro induzido por vibração estrutural, que deve ser investigado e, enquanto isso, evitar operar naquelas rotações ou excluir a referência"],
      e: "Uma oscilação que coincide com a frequência de rotação de um propulsor indica uma interação mecânica entre o equipamento de referência e a estrutura. Não é ruído aleatório, e um filtro mais forte pode esconder o problema. A solução é investigar a causa da vibração e, enquanto isso, evitar essas rotações ou excluir a referência."
    }
  },
  {
    m: 4, a: 1,
    es: {
      caso: "El DPO compara las lecturas de tres referencias durante una operación. El GNSS y la hidroacústica coinciden dentro de 0,3 metros. El radar de microondas se desvía 2,5 metros, pero la desviación es constante desde que el buque cambió de calado tras cargar.",
      q: "¿Qué interpretación es la más probable y qué debe hacerse?",
      o: ["Un fallo del GNSS, que debe deseleccionarse", "Un cambio en el origen de referencia del radar tras la carga, consistente con el cambio de calado y de posición de la antena: revisar la configuración del offset del radar", "Una deriva normal del radar que no requiere acción", "Un error de la hidroacústica por temperatura del agua"],
      e: "Una desviación constante que aparece tras un cambio de carga apunta a un error sistemático, no aleatorio. El cambio de calado altera la posición de la antena respecto al origen del buque, y si el offset no se actualiza, la lectura se desplaza. La acción es revisar la configuración del offset y no tratarla como ruido."
    },
    pt: {
      caso: "O DPO compara as leituras de três referências durante uma operação. O GNSS e a hidroacústica coincidem dentro de 0,3 metro. O radar de micro-ondas se desvia 2,5 metros, mas o desvio é constante desde que o navio mudou de calado após o carregamento.",
      q: "Qual interpretação é a mais provável e o que deve ser feito?",
      o: ["Uma falha do GNSS, que deve ser desselecionado", "Uma mudança na origem de referência do radar após o carregamento, coerente com a mudança de calado e de posição da antena: revisar a configuração do offset do radar", "Uma deriva normal do radar que não exige ação", "Um erro da hidroacústica pela temperatura da água"],
      e: "Um desvio constante que aparece após uma mudança de carga aponta para um erro sistemático, não aleatório. A mudança de calado altera a posição da antena em relação à origem do navio, e se o offset não for atualizado a leitura se desloca. A ação é revisar a configuração do offset e não tratar como ruído."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "Una referencia de posición absoluta (GNSS) y una relativa (hidroacústica) se usan juntas. Durante una operación de instalación, la hidroacústica da una posición fija, pero el GNSS muestra una deriva lenta hacia el sur. El controlador da más peso a la hidroacústica por su mayor frecuencia de actualización.",
      q: "¿Qué riesgo introduce esta ponderación?",
      o: ["Que la posición final depende del mismo transpondedor, que puede estar fijo a un punto que ya no es la referencia real, y el sistema no detecta la deriva absoluta", "Ninguno: la frecuencia de actualización es el criterio correcto", "Que la hidroacústica no puede ser absoluta", "Que el GNSS debería ponderarse más porque siempre es exacto"],
      e: "Una referencia relativa mide respecto a un punto que puede moverse o estar mal fijado. Si el sistema pondera la referencia de mayor frecuencia, la deriva absoluta del GNSS se pierde. La ponderación debe basarse en la calidad y la coherencia, no solo en la frecuencia de actualización."
    },
    pt: {
      caso: "Uma referência de posição absoluta (GNSS) e uma relativa (hidroacústica) são usadas juntas. Durante uma operação de instalação, a hidroacústica dá uma posição fixa, mas o GNSS mostra uma deriva lenta para o sul. O controlador dá mais peso à hidroacústica por sua maior frequência de atualização.",
      q: "Que risco essa ponderação introduz?",
      o: ["Que a posição final depende do mesmo transponder, que pode estar fixo num ponto que já não é a referência real, e o sistema não detecta a deriva absoluta", "Nenhum: a frequência de atualização é o critério correto", "Que a hidroacústica não pode ser absoluta", "Que o GNSS devia ter mais peso porque sempre é exato"],
      e: "Uma referência relativa mede em relação a um ponto que pode se mover ou estar mal fixado. Se o sistema pondera a referência de maior frequência, a deriva absoluta do GNSS se perde. A ponderação deve se basear na qualidade e na coerência, não só na frequência de atualização."
    }
  },
  {
    m: 4, a: 2,
    es: {
      caso: "Un buque Clase 2 opera con un GNSS y una referencia de cable tenso. En plena operación, el GNSS muestra la solución 'fija' (RTK) durante toda la maniobra, pero el DPO sospecha que la solución se está manteniendo tras perder la línea de corrección.",
      q: "¿Qué indicador debe comprobar el DPO para confirmar la calidad de la solución del GNSS?",
      o: ["Solo la potencia de la señal, porque una señal fuerte garantiza una solución correcta", "Que el GNSS muestre siempre el mismo número de satélites, porque el número de satélites define la solución", "El tipo de solución y su edad: una solución fija que no se actualiza con la corrección es una solución degradada, aunque el sistema la muestre como fija", "La hora del receptor, porque la solución depende solo del reloj"],
      e: "Una solución fija mantenida sin corrección actualizada es una solución degradada. El tipo de solución y la edad de las correcciones indican si la posición se está calculando bien. Una señal fuerte o un número de satélites no prueban que la corrección siga vigente."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um GNSS e uma referência de cabo tenso. Em plena operação, o GNSS mostra a solução 'fixa' (RTK) durante toda a manobra, mas o DPO suspeita que a solução está sendo mantida após perder a linha de correção.",
      q: "Que indicador o DPO deve conferir para confirmar a qualidade da solução do GNSS?",
      o: ["Somente a potência do sinal, porque um sinal forte garante uma solução correta", "Que o GNSS mostre sempre o mesmo número de satélites, porque o número de satélites define a solução", "O tipo de solução e a idade da correção: uma solução fixa que não se atualiza com a correção é uma solução degradada, mesmo que o sistema a mostre como fixa", "A hora do receptor, porque a solução depende só do relógio"],
      e: "Uma solução fixa mantida sem correção atualizada é degradada. O tipo de solução e a idade das correções indicam se a posição está sendo calculada corretamente. Um sinal forte ou um número de satélites não provam que a correção ainda está válida."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "Una operación Clase 2 usa tres referencias: dos GNSS en el puente y una hidroacústica. La hidroacústica está instalada en el casco de popa, cerca de la hélice de un propulsor de gran potencia. Al aumentar el empuje de ese propulsor, la hidroacústica pierde lecturas de forma intermitente.",
      q: "¿Qué debe concluir el DPO y qué acción tomar?",
      o: ["Un ruido acústico del propio propulsor degrada la referencia a ciertas potencias: limitar esa potencia o cambiar la ubicación del transpondedor, y evaluar la configuración con la referencia degradada", "Que la hidroacústica no sirve en buques con propulsores de gran potencia", "Que el propulsor está averiado y debe apagarse", "Que los GNSS deben desconectarse para que la hidroacústica funcione"],
      e: "El ruido de cavitación de un propulsor de gran potencia puede interferir con la señal acústica. La referencia se degrada en esas condiciones concretas. La solución es limitar la potencia del propulsor en ese rango o revisar la ubicación, y evaluar si la configuración restante cumple el análisis de consecuencias durante esa limitación."
    },
    pt: {
      caso: "Uma operação Classe 2 usa três referências: dois GNSS na ponte e uma hidroacústica. A hidroacústica está instalada no casco de popa, perto da hélice de um propulsor de alta potência. Ao aumentar o empuxo desse propulsor, a hidroacústica perde leituras de forma intermitente.",
      q: "O que o DPO deve concluir e que ação tomar?",
      o: ["O ruído de cavitação do próprio propulsor degrada a referência em certas potências: limitar essa potência ou mudar a posição do transponder, e avaliar a configuração com a referência degradada", "Que a hidroacústica não serve em navios com propulsores de alta potência", "Que o propulsor está com defeito e deve ser desligado", "Que os GNSS devem ser desconectados para que a hidroacústica funcione"],
      e: "O ruído de cavitação de um propulsor de alta potência pode interferir no sinal acústico. A referência se degrada nessas condições específicas. A solução é limitar a potência do propulsor nessa faixa ou revisar a posição, e avaliar se a configuração restante atende à análise de consequências durante essa limitação."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "Durante un trabajo en Clase 2, el sensor de viento del puente da 15 nudos desde 180 y el sensor del mástil da 26 nudos desde 185. El DPO mantiene el feed-forward con el sensor del puente porque es el que el sistema usaba antes de la alarma de discrepancia.",
      q: "¿Qué criterio debe aplicarse para decidir qué sensor usar?",
      o: ["Usar el sensor del puente porque su historial es más largo, sin comprobar la posición del sensor", "Promediar ambos sensores siempre, sin considerar su posición ni su estado", "Usar el sensor de mayor valor siempre, por precaución", "Evaluar la posición de cada sensor (apantallamiento por estructuras), su calibración y la coherencia con el movimiento del buque, y usar el que resulte fiable para la condición"],
      e: "Dos sensores que discrepan no indican cuál es correcto. Un sensor puede estar apantallado por una estructura o descalibrado. La decisión debe basarse en la posición, la calibración y la coherencia con otras variables, no en el historial ni en un promedio ciego."
    },
    pt: {
      caso: "Durante um trabalho em Classe 2, o sensor de vento da ponte indica 15 nós de 180 e o sensor do mastro indica 26 nós de 185. O DPO mantém o feed-forward com o sensor da ponte porque é o que o sistema usava antes do alarme de discrepância.",
      q: "Que critério deve ser aplicado para decidir qual sensor usar?",
      o: ["Usar o sensor da ponte porque seu histórico é mais longo, sem verificar a posição do sensor", "Fazer a média dos dois sensores sempre, sem considerar sua posição nem seu estado", "Usar sempre o sensor de maior valor, por precaução", "Avaliar a posição de cada sensor (blindagem por estruturas), sua calibração e a coerência com o movimento do navio, e usar o que for confiável para a condição"],
      e: "Dois sensores que discordam não indicam qual está certo. Um sensor pode estar blindado por uma estrutura ou descalibrado. A decisão deve se basear na posição, na calibração e na coerência com outras variáveis, não no histórico nem numa média cega."
    }
  },
  {
    m: 4, a: 1,
    es: {
      caso: "Un buque Clase 2 usa un MRU para corregir las lecturas del radar de microondas en mar de fondo fuerte. Tras una reparación, el MRU se reinstala con la unidad de referencia desplazada 40 cm respecto a su posición original, pero la configuración no se actualiza.",
      q: "¿Qué efecto tiene esta situación sobre la posición calculada?",
      o: ["Ninguno: el MRU compensa cualquier desplazamiento de montaje", "Un error sistemático en la corrección de balance y cabeceo, que aumenta con la intensidad del movimiento del buque", "Solo afecta al rumbo, no a la posición", "Solo afecta cuando el buque está fondeado"],
      e: "El MRU necesita conocer su posición de montaje respecto al origen de referencia. Un desplazamiento no configurado produce un error que crece con el balance y el cabeceo. En mar fuerte el error es mayor, así que el problema es sistemático y dependiente de la condición del mar."
    },
    pt: {
      caso: "Um navio Classe 2 usa um MRU para corrigir as leituras do radar de micro-ondas em mar de través forte. Após um reparo, o MRU é reinstalado com a unidade de referência deslocada 40 cm em relação à posição original, mas a configuração não é atualizada.",
      q: "Que efeito essa situação tem sobre a posição calculada?",
      o: ["Nenhum: o MRU compensa qualquer deslocamento de montagem", "Um erro sistemático na correção de balanço e arfagem, que cresce com a intensidade do movimento do navio", "Afeta somente a proa, não a posição", "Afeta somente quando o navio está fundeado"],
      e: "O MRU precisa conhecer sua posição de montagem em relação à origem de referência. Um deslocamento não configurado produz um erro que cresce com o balanço e a arfagem. Em mar forte o erro é maior, então o problema é sistemático e depende da condição do mar."
    }
  },
  {
    m: 4, a: 2,
    es: {
      caso: "En una operación con GNSS, el DPO observa que el sistema filtra los datos de posición con una constante de tiempo muy larga para evitar saltos. Durante un movimiento rápido del buque por cambio de proa, la posición filtrada va retrasada y el controlador reacciona tarde.",
      q: "¿Qué compromiso técnico se ha producido con el filtro?",
      o: ["Ninguno: el filtro siempre mejora la respuesta", "El filtro elimina el ruido, pero un filtro demasiado lento introduce retardo en la estimación, lo que empeora la respuesta del controlador ante movimientos reales", "El filtro solo afecta a la pantalla, no al controlador", "El filtro debe anularse para evitar cualquier retardo"],
      e: "Todo filtro es un compromiso: reduce el ruido a costa de retardo. Una constante de tiempo demasiado larga suaviza los saltos, pero también enmascara los movimientos reales del buque. El ajuste debe elegirse según la dinámica de la operación y el ruido de los sensores."
    },
    pt: {
      caso: "Em uma operação com GNSS, o DPO observa que o sistema filtra os dados de posição com uma constante de tempo muito longa para evitar saltos. Durante um movimento rápido do navio por mudança de proa, a posição filtrada fica atrasada e o controlador reage tarde.",
      q: "Que compromisso técnico foi gerado pelo filtro?",
      o: ["Nenhum: o filtro sempre melhora a resposta", "O filtro elimina o ruído, mas um filtro lento demais introduz atraso na estimativa, o que piora a resposta do controlador a movimentos reais", "O filtro afeta só a tela, não o controlador", "O filtro deve ser anulado para evitar qualquer atraso"],
      e: "Todo filtro é um compromisso: reduz o ruído à custa de atraso. Uma constante de tempo longa demais suaviza os saltos, mas também mascara os movimentos reais do navio. O ajuste deve ser escolhido de acordo com a dinâmica da operação e o ruído dos sensores."
    }
  },
  {
    m: 5, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un anemómetro en el mástil, cerca de una antena de radar de gran potencia. Las lecturas de viento son estables, pero siempre dan 4 nudos más que el anemómetro de reserva situado en otra posición, con independencia del ángulo del viento.",
      q: "¿Qué interpretación técnica es la más probable?",
      o: ["Un fallo aleatorio del anemómetro de reserva, que debe sustituirse", "Una lectura correcta, porque el mástil siempre tiene más viento", "Una diferencia que indica un error sistemático, posiblemente por la estructura o el campo de flujo cerca de la antena; el sistema debe tenerlo en cuenta o el sensor debe reubicarse", "Un error del girocompás que afecta al viento"],
      e: "Una diferencia constante e independiente del ángulo apunta a un error sistemático de montaje o de flujo local, no a un fallo aleatorio. La estructura o la antena alteran el campo de viento. La solución es corregir el sensor o reubicarlo, porque un feed-forward con ese error sobreestima siempre la fuerza."
    },
    pt: {
      caso: "Um navio Classe 2 tem um anemômetro no mastro, perto de uma antena de radar de alta potência. As leituras de vento são estáveis, mas sempre dão 4 nós a mais que o anemômetro de reserva instalado em outra posição, independentemente do ângulo do vento.",
      q: "Qual interpretação técnica é a mais provável?",
      o: ["Uma falha aleatória do anemômetro de reserva, que deve ser substituído", "Uma leitura correta, porque o mastro sempre tem mais vento", "Uma diferença que indica erro sistemático, possivelmente pela estrutura ou pelo campo de fluxo perto da antena; o sistema deve considerá-lo ou o sensor deve ser realocado", "Um erro do girocompasso que afeta o vento"],
      e: "Uma diferença constante e independente do ângulo aponta para um erro sistemático de montagem ou de fluxo local, não para uma falha aleatória. A estrutura ou a antena alteram o campo de vento. A solução é corrigir o sensor ou realocá-lo, porque um feed-forward com esse erro superestima sempre a força."
    }
  },
  {
    m: 5, a: 0,
    es: {
      caso: "Un buque en Clase 2 usa un sensor de corriente de perfil acústico (ADCP) para el feed-forward de corriente. Durante la operación, el ADCP mide la corriente en la capa superior, pero la fuerza que actúa sobre el casco depende de la corriente promediada en el calado.",
      q: "¿Qué limitación del sensor debe considerar el DPO?",
      o: ["Que la lectura de la capa superior puede no representar la corriente que actúa sobre el casco, especialmente si hay corriente cizallada con la profundidad", "Que el ADCP no sirve con corriente", "Que la corriente solo afecta al rumbo", "Que el ADCP debe apagarse en Auto DP"],
      e: "Una corriente que varía con la profundidad (cizalladura) hace que la capa superior no represente la fuerza sobre el casco. El ADCP es útil, pero su lectura debe interpretarse considerando la distribución vertical de la corriente y el calado del buque."
    },
    pt: {
      caso: "Um navio em Classe 2 usa um sensor de corrente de perfil acústico (ADCP) para o feed-forward de corrente. Durante a operação, o ADCP mede a corrente na camada superior, mas a força que atua sobre o casco depende da corrente média na faixa do calado.",
      q: "Que limitação do sensor o DPO deve considerar?",
      o: ["Que a leitura da camada superior pode não representar a corrente que atua sobre o casco, especialmente se houver corrente cisalhada com a profundidade", "Que o ADCP não funciona com corrente", "Que a corrente afeta só o rumo", "Que o ADCP deve ser desligado em Auto DP"],
      e: "Uma corrente que varia com a profundidade (cisalhamento) faz com que a camada superior não represente a força sobre o casco. O ADCP é útil, mas sua leitura deve ser interpretada considerando a distribuição vertical da corrente e o calado do navio."
    }
  },
  {
    m: 5, a: 2,
    es: {
      caso: "En una operación con un buque Clase 2, el sistema de referencia de viento es correcto, pero el DPO detecta que el controlador tarda en reaccionar a las ráfagas de 35 nudos que llegan en menos de cinco segundos. El feed-forward está ajustado para cambios lentos.",
      q: "¿Qué debe revisarse en la configuración del sistema de viento?",
      o: ["Solo el valor medio del viento, porque las ráfagas son irrelevantes para la posición", "Que el sensor de viento esté a menos de 5 metros del mástil", "La dinámica del feed-forward y su ajuste frente a ráfagas: el tiempo de respuesta debe ser compatible con la variación real del viento", "Que el controlador deba apagar el feed-forward durante las ráfagas"],
      e: "Un feed-forward ajustado para cambios lentos no responde a ráfagas rápidas. Las ráfagas generan fuerzas que cambian en segundos, y el sistema debe anticiparlas con una dinámica compatible. Apagar el feed-forward o ignorar las ráfagas empeora el control."
    },
    pt: {
      caso: "Em uma operação com um navio Classe 2, o sistema de referência de vento está correto, mas o DPO percebe que o controlador demora a reagir a rajadas de 35 nós que chegam em menos de cinco segundos. O feed-forward está ajustado para mudanças lentas.",
      q: "O que deve ser revisado na configuração do sistema de vento?",
      o: ["Somente o valor médio do vento, porque as rajadas são irrelevantes para a posição", "Que o sensor de vento esteja a menos de 5 metros do mastro", "A dinâmica do feed-forward e seu ajuste diante de rajadas: o tempo de resposta deve ser compatível com a variação real do vento", "Que o controlador deva desligar o feed-forward durante as rajadas"],
      e: "Um feed-forward ajustado para mudanças lentas não responde a rajadas rápidas. As rajadas geram forças que mudam em segundos, e o sistema deve antecipá-las com uma dinâmica compatível. Desligar o feed-forward ou ignorar as rajadas piora o controle."
    }
  },
  {
    m: 5, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un girocompás y una referencia de rumbo magnético. Durante una operación en una zona con anomalía magnética local, las dos fuentes de rumbo dan valores que difieren en 6 grados. El controlador usa la del girocompás.",
      q: "¿Qué debe concluir el DPO sobre la fuente de rumbo?",
      o: ["Que el magnético siempre es más correcto que el girocompás", "Que el rumbo debe verificarse con una fuente independiente, porque la diferencia sugiere un error en una de ellas, y el girocompás no es necesariamente la fuente correcta", "Que la diferencia es normal y no requiere acción", "Que el controlador debe usar el promedio de ambas en todos los casos"],
      e: "Dos fuentes de rumbo que difieren sin explicación indican un error en al menos una. El girocompás no es infalible, y el magnético puede estar afectado por una anomalía local. La verificación con una fuente independiente permite decidir cuál es fiable antes de confiar en el controlador."
    },
    pt: {
      caso: "Um navio Classe 2 tem um girocompasso e uma referência de rumo magnético. Durante uma operação em área com anomalia magnética local, as duas fontes de rumo dão valores que diferem em 6 graus. O controlador usa o do girocompasso.",
      q: "O que o DPO deve concluir sobre a fonte de rumo?",
      o: ["Que o magnético é sempre mais correto que o girocompasso", "Que o rumo deve ser verificado com uma fonte independente, porque a diferença sugere erro em uma delas, e o girocompasso não é necessariamente a fonte correta", "Que a diferença é normal e não exige ação", "Que o controlador deve usar a média das duas em todos os casos"],
      e: "Duas fontes de rumo que diferem sem explicação indicam erro em pelo menos uma. O girocompasso não é infalível, e o magnético pode estar afetado por uma anomalia local. A verificação com uma fonte independente permite decidir qual é confiável antes de confiar no controlador."
    }
  },
  {
    m: 5, a: 2,
    es: {
      caso: "Un buque de apoyo en Clase 2 realiza una operación con una grúa de gran capacidad. Al elevar la carga, el sistema de compensación de movimiento de la grúa intenta anticiparse con la aceleración del buque, pero el MRU de la grúa y el del puente tienen sus ejes de referencia con una diferencia de 3 grados en cabeceo.",
      q: "¿Qué efecto tiene esta diferencia sobre la operación?",
      o: ["Ninguno, son sensores distintos y no se cruzan", "Solo afecta a la grúa, no al DP del buque", "Un error de alineación que se transmite a la compensación de movimiento y puede inducir movimientos del buque al intentar corregir la carga", "Solo afecta al rumbo"],
      e: "Dos sensores de movimiento mal alineados entre sí introducen una diferencia que el sistema interpreta como movimiento real. Al intentar compensarla, el buque se mueve. La alineación de los MRU debe verificarse para que la compensación y el DP trabajen con la misma referencia."
    },
    pt: {
      caso: "Um navio de apoio em Classe 2 realiza uma operação com um guindaste de grande capacidade. Ao içar a carga, o sistema de compensação de movimento do guindaste tenta antecipar com a aceleração do navio, mas o MRU do guindaste e o da ponte têm seus eixos de referência com diferença de 3 graus em arfagem.",
      q: "Que efeito essa diferença tem sobre a operação?",
      o: ["Nenhum, são sensores diferentes e não se cruzam", "Afeta só o guindaste, não o DP do navio", "Um erro de alinhamento que se transmite à compensação de movimento e pode induzir movimentos do navio ao tentar corrigir a carga", "Afeta só o rumo"],
      e: "Dois sensores de movimento desalinhados entre si introduzem uma diferença que o sistema interpreta como movimento real. Ao tentar compensá-la, o navio se move. O alinhamento dos MRU deve ser verificado para que a compensação e o DP trabalhem com a mesma referência."
    }
  },
  {
    m: 5, a: 0,
    es: {
      caso: "Un buque Clase 2 tiene una estación meteorológica en el puente. El DPO nota que la presión barométrica baja de forma brusca, pero el sistema de viento no ha cambiado. El pronóstico recibido por radio indica un frente en 90 minutos.",
      q: "¿Qué uso técnico debe darse a esta información en la operación?",
      o: ["Usarla como alerta para revisar el plan y el margen antes de que cambien las condiciones, sin esperar a la alarma de viento", "Ignorarla, porque la presión no influye en el DP", "Usarla solo como registro histórico", "Usarla para cambiar el rumbo del buque"],
      e: "Una caída brusca de presión anticipa un cambio de viento. Esperar a que el sensor de viento alarme deja poco tiempo para reaccionar. La información debe incorporarse al plan: revisar el margen y los criterios de suspensión antes de que el cambio llegue."
    },
    pt: {
      caso: "Um navio Classe 2 tem uma estação meteorológica na ponte. O DPO percebe que a pressão barométrica cai de forma brusca, mas o sistema de vento não mudou. A previsão recebida por rádio indica uma frente em 90 minutos.",
      q: "Que uso técnico deve ser dado a essa informação na operação?",
      o: ["Usá-la como alerta para revisar o plano e a margem antes de as condições mudarem, sem esperar o alarme de vento", "Ignorá-la, porque a pressão não influencia o DP", "Usá-la somente como registro histórico", "Usá-la para mudar o rumo do navio"],
      e: "Uma queda brusca de pressão antecipa uma mudança de vento. Esperar que o sensor de vento dispare deixa pouco tempo para reagir. A informação deve entrar no plano: revisar a margem e os critérios de suspensão antes que a mudança chegue."
    }
  },
  {
    m: 5, a: 3,
    es: {
      caso: "Un buque Clase 2 usa un sensor de corriente de bajo coste para el feed-forward. Tras una semana en operación, el sensor marca de forma sistemática una corriente de 0,5 nudos aunque el buque esté fondeado sin corriente medible en otras referencias.",
      q: "¿Qué debe concluir el DPO y qué acción tomar?",
      o: ["Que el sensor es fiable porque da una lectura estable", "Que la corriente real es siempre 0,5 nudos en esa zona, por lo que debe incorporarse al plan", "Que el fondeo cambia la corriente que mide el sensor", "Un error de offset o de calibración del sensor: verificar el cero del sensor y no usarlo para el feed-forward hasta corregirlo"],
      e: "Una lectura constante de corriente con el buque fondeado, cuando otras referencias no la confirman, es un error de offset. Un feed-forward con ese error compensa una fuerza que no existe. El sensor debe calibrarse a cero y verificarse antes de volver a usarse."
    },
    pt: {
      caso: "Um navio Classe 2 usa um sensor de corrente de baixo custo para o feed-forward. Após uma semana em operação, o sensor marca de forma sistemática uma corrente de 0,5 nó, mesmo com o navio fundeado e sem corrente mensurável nas outras referências.",
      q: "O que o DPO deve concluir e que ação tomar?",
      o: ["Que o sensor é confiável porque dá uma leitura estável", "Que a corrente real é sempre 0,5 nó naquela área, por isso deve entrar no plano", "Que o fundeio muda a corrente que o sensor mede", "Um erro de offset ou de calibração do sensor: verificar o zero do sensor e não usá-lo no feed-forward até corrigi-lo"],
      e: "Uma leitura constante de corrente com o navio fundeado, quando outras referências não a confirmam, é um erro de offset. Um feed-forward com esse erro compensa uma força que não existe. O sensor deve ser calibrado no zero e verificado antes de voltar a ser usado."
    }
  },
  {
    m: 6, a: 2,
    es: {
      caso: "Un buque Clase 2 opera con dos generadores de 2 MW cada uno. La carga de DP es de 1,2 MW y la de la grúa de 1,6 MW. El plan supone que la grúa se usará solo con los dos generadores en marcha. Durante la elevación, un generador dispara y el otro queda con una carga total de 2,8 MW.",
      q: "¿Qué margen de diseño ha fallado y qué debió verificar el plan?",
      o: ["Ninguno: 2,8 MW es menos de la suma de los dos generadores", "Que la carga de la grúa debe conectarse a la barra de emergencia", "Que el generador restante debía soportar la carga de todo el sistema con margen, y el plan debió comprobar la carga sin uno de los dos generadores", "Que la grúa debió apagarse durante el DP"],
      e: "La condición de la clase no es solo tener dos generadores, sino que uno solo pueda sostener la carga necesaria. Con 2,8 MW y un generador de 2 MW, el sistema está muy por encima de su capacidad. El análisis debió verificar la carga con un generador fuera de servicio, no con los dos en marcha."
    },
    pt: {
      caso: "Um navio Classe 2 opera com dois geradores de 2 MW cada um. A carga de DP é de 1,2 MW e a do guindaste de 1,6 MW. O plano supõe que o guindaste será usado somente com os dois geradores em operação. Durante o içamento, um gerador dispara e o outro fica com carga total de 2,8 MW.",
      q: "Qual margem de projeto falhou e o que o plano deveria ter verificado?",
      o: ["Nenhuma: 2,8 MW é menos que a soma dos dois geradores", "Que a carga do guindaste deve ser ligada à barra de emergência", "Que o gerador restante devia suportar a carga de todo o sistema com margem, e o plano devia verificar a carga com um dos dois geradores fora de serviço", "Que o guindaste devia ter sido desligado durante o DP"],
      e: "A condição da classe não é só ter dois geradores, mas que um só consiga sustentar a carga necessária. Com 2,8 MW e um gerador de 2 MW, o sistema está muito acima de sua capacidade. A análise devia verificar a carga com um gerador fora de serviço, não com os dois em operação."
    }
  },
  {
    m: 6, a: 0,
    es: {
      caso: "En un buque Clase 2, el sistema de gestión de potencia limita automáticamente la carga de los propulsores cuando la frecuencia de la red baja más de 0,5 Hz. Durante una arrancada de un compresor de gran potencia, la frecuencia cae 0,8 Hz y el propulsor de popa se reduce al 40 % de su empuje.",
      q: "¿Qué consecuencia técnica tiene esta limitación sobre la operación?",
      o: ["La capacidad de empuje disponible en ese momento es menor de la que se calculó, así que el análisis debe considerar la limitación de frecuencia y el arranque de consumidores", "Ninguna, porque la frecuencia se recupera sola en segundos", "Que el propulsor debe apagarse siempre que arranque un compresor", "Que la limitación solo afecta a la eficiencia"],
      e: "La reducción automática de empuje por frecuencia es una pérdida real de capacidad. Mientras dure, el buque tiene menos fuerza disponible que la calculada. El análisis debe incluir el efecto de los arranques de consumidores sobre la frecuencia, porque pueden reducir la capacidad justo cuando se necesita."
    },
    pt: {
      caso: "Em um navio Classe 2, o sistema de gestão de potência limita automaticamente a carga dos propulsores quando a frequência da rede cai mais de 0,5 Hz. Durante a partida de um compressor de alta potência, a frequência cai 0,8 Hz e o propulsor de popa é reduzido a 40 % do seu empuxo.",
      q: "Que consequência técnica essa limitação tem sobre a operação?",
      o: ["A capacidade de empuxo disponível naquele momento é menor que a calculada, então a análise deve considerar a limitação por frequência e a partida de consumidores", "Nenhuma, porque a frequência se recupera sozinha em segundos", "Que o propulsor deve ser desligado sempre que um compressor partir", "Que a limitação afeta só a eficiência"],
      e: "A redução automática de empuxo por frequência é uma perda real de capacidade. Enquanto durar, o navio tem menos força disponível do que a calculada. A análise deve incluir o efeito das partidas de consumidores sobre a frequência, porque elas podem reduzir a capacidade justamente quando ela é necessária."
    }
  },
  {
    m: 6, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene dos barras con disyuntor de acoplamiento. El DPO quiere cerrar el acoplamiento para repartir la carga de un propulsor de gran potencia entre las dos barras, pero las dos barras tienen generadores con diferente frecuencia de regulación y ángulo de fase distinto.",
      q: "¿Qué riesgo implica cerrar el acoplamiento en estas condiciones?",
      o: ["Ninguno: el acoplamiento siempre reparte la carga", "Que el generador de mayor potencia se apagará", "Que el propulsor girará en sentido contrario", "Que, con diferencias de frecuencia y fase, el cierre genera corrientes de circulación y transitorios que pueden disparar protecciones y dejar sin energía a las dos barras"],
      e: "Cerrar un acoplamiento entre barras con diferencia de frecuencia o de fase produce corrientes de circulación y transitorios importantes. Esos transitorios pueden disparar protecciones y provocar un apagón total, justo lo que la división de energía pretende evitar. El acoplamiento debe hacerse con sincronización verificada."
    },
    pt: {
      caso: "Um navio Classe 2 tem duas barras com disjuntor de acoplamento. O DPO quer fechar o acoplamento para repartir a carga de um propulsor de alta potência entre as duas barras, mas as duas barras têm geradores com frequência de regulação diferente e ângulo de fase distinto.",
      q: "Que risco o fechamento do acoplamento nessas condições implica?",
      o: ["Nenhum: o acoplamento sempre reparte a carga", "Que o gerador de maior potência será desligado", "Que o propulsor girará no sentido contrário", "Que, com diferenças de frequência e fase, o fechamento gera correntes de circulação e transitórios que podem disparar proteções e deixar as duas barras sem energia"],
      e: "Fechar um acoplamento entre barras com diferença de frequência ou de fase produz correntes de circulação e transitórios importantes. Esses transitórios podem disparar proteções e causar um apagão total, justamente o que a divisão de energia busca evitar. O acoplamento deve ser feito com sincronização verificada."
    }
  },
  {
    m: 6, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un sistema de propulsión con variadores de frecuencia en los propulsores principales. Un variador genera armónicos que afectan a la lectura de los sensores de velocidad de un generador, y el sistema de gestión de potencia recibe una medida de carga distorsionada.",
      q: "¿Qué efecto tiene esta interferencia sobre el control DP?",
      o: ["Ninguno: los armónicos no afectan a las medidas de los sensores", "La gestión de potencia puede actuar con datos erróneos: se reparte o limita la carga a partir de medidas distorsionadas, y el control de la red puede comportarse de forma inestable", "Solo afecta a la iluminación del puente", "Que el generador se detiene automáticamente siempre"],
      e: "Los armónicos pueden distorsionar las medidas que usa la gestión de potencia. Si el sistema reparte o limita carga con datos erróneos, la red puede comportarse de forma inestable, y el DP depende de esa red. La compatibilidad electromagnética de los equipos es parte del análisis de la clase."
    },
    pt: {
      caso: "Um navio Classe 2 tem um sistema de propulsão com conversores de frequência nos propulsores principais. Um conversor gera harmônicos que afetam a leitura dos sensores de velocidade de um gerador, e o sistema de gestão de potência recebe uma medida de carga distorcida.",
      q: "Que efeito essa interferência tem sobre o controle DP?",
      o: ["Nenhum: os harmônicos não afetam as medidas dos sensores", "A gestão de potência pode agir com dados errados: reparte ou limita a carga a partir de medidas distorcidas, e o controle da rede pode se comportar de forma instável", "Afeta só a iluminação da ponte", "Que o gerador para automaticamente sempre"],
      e: "Os harmônicos podem distorcer as medidas usadas pela gestão de potência. Se o sistema reparte ou limita carga com dados errados, a rede pode se comportar de forma instável, e o DP depende dessa rede. A compatibilidade eletromagnética dos equipamentos faz parte da análise da classe."
    }
  },
  {
    m: 6, a: 2,
    es: {
      caso: "Un buque Clase 2 tiene una barra de emergencia alimentada por un generador de emergencia que arranca automáticamente ante un apagón. El generador arranca en 12 segundos. Durante una maniobra de posicionamiento, el apagón principal dura 9 segundos, y el controlador DP necesita 5 segundos para recuperar la referencia tras el corte.",
      q: "¿Qué debe concluir el DPO sobre la capacidad de recuperación del sistema?",
      o: ["Que el generador de emergencia es suficiente porque arranca siempre, sin importar el tiempo de corte", "Que el sistema no tiene riesgo porque el corte es corto", "Que el sistema puede no recuperar la posición durante el corte: el tiempo de cobertura de la red y el de recuperación del controlador deben analizarse juntos, no por separado", "Que el controlador no necesita recuperar nada tras un apagón"],
      e: "El análisis de un apagón exige sumar tiempos: corte, arranque del generador de emergencia y recuperación del controlador. Un corte de 9 segundos sin energía en propulsores, seguido de 5 segundos de recuperación, puede generar una deriva. Tratarlos por separado oculta el riesgo real."
    },
    pt: {
      caso: "Um navio Classe 2 tem uma barra de emergência alimentada por um gerador de emergência que parte automaticamente diante de um apagão. O gerador parte em 12 segundos. Durante uma manobra de posicionamento, o apagão principal dura 9 segundos, e o controlador DP precisa de 5 segundos para recuperar a referência após o corte.",
      q: "O que o DPO deve concluir sobre a capacidade de recuperação do sistema?",
      o: ["Que o gerador de emergência é suficiente porque sempre parte, independentemente do tempo de corte", "Que o sistema não tem risco porque o corte é curto", "Que o sistema pode não recuperar a posição durante o corte: o tempo de cobertura da rede e o de recuperação do controlador devem ser analisados juntos, não separadamente", "Que o controlador não precisa recuperar nada após um apagão"],
      e: "A análise de um apagão exige somar tempos: corte, partida do gerador de emergência e recuperação do controlador. Um corte de 9 segundos sem energia nos propulsores, seguido de 5 segundos de recuperação, pode gerar deriva. Tratá-los separadamente esconde o risco real."
    }
  },
  {
    m: 6, a: 0,
    es: {
      caso: "En un buque Clase 2, el DPO decide compartir la carga de un propulsor de proa entre dos generadores con reparto por droop (estatismo). Los generadores tienen potencias nominales distintas: 3 MW y 1,5 MW, pero el reparto está configurado al 50 %.",
      q: "¿Qué consecuencia tiene esta configuración?",
      o: ["Que el generador de 1,5 MW queda sobrecargado mientras el de 3 MW trabaja por debajo de su capacidad, reduciendo el margen real de la red", "Ninguna, el reparto 50/50 es siempre óptimo", "Que el propulsor gira más despacio", "Que el sistema debe usar solo el generador de 3 MW"],
      e: "Un reparto igual con potencias distintas sobrecarga al generador pequeño. Con el de 1,5 MW a su límite y el de 3 MW por debajo de su capacidad, la red tiene menos margen de lo que aparenta. El reparto debe ser proporcional a la potencia nominal de cada generador."
    },
    pt: {
      caso: "Em um navio Classe 2, o DPO decide repartir a carga de um propulsor de proa entre dois geradores com repartição por droop (estatismo). Os geradores têm potências nominais diferentes: 3 MW e 1,5 MW, mas a repartição está configurada em 50 %.",
      q: "Que consequência essa configuração tem?",
      o: ["O gerador de 1,5 MW fica sobrecarregado enquanto o de 3 MW trabalha abaixo da capacidade, reduzindo a margem real da rede", "Nenhuma, a repartição 50/50 é sempre ótima", "Que o propulsor gira mais devagar", "Que o sistema deve usar somente o gerador de 3 MW"],
      e: "Uma repartição igual com potências diferentes sobrecarrega o gerador pequeno. Com o de 1,5 MW no limite e o de 3 MW abaixo de sua capacidade, a rede tem menos margem do que aparenta. A repartição deve ser proporcional à potência nominal de cada gerador."
    }
  },
  {
    m: 6, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un sistema de gestión de potencia que, al detectar una caída de frecuencia, desconecta un enfriador de los propulsores para reducir la carga. Durante una operación de larga duración en calor intenso, el propulsor de popa sobrecalienta y se activa su protección por temperatura, reduciendo su empuje.",
      q: "¿Qué relación de prioridades falló en el diseño?",
      o: ["Ninguna, el enfriador es un consumidor secundario", "Que el propulsor debía tener enfriamiento independiente de la red principal, y que la desconexión del enfriador dependía de la frecuencia sin considerar la temperatura del equipo", "Que el propulsor debía apagarse ante cualquier caída de frecuencia", "Que el enfriador no debía tener protección"],
      e: "Un consumidor de apariencia secundaria, como el enfriador, sostiene directamente la capacidad de un propulsor. La prioridad de desconexión debe considerar esa dependencia y, si es posible, separar el enfriamiento de la red de carga. Con calor intenso, la desconexión transforma una caída de frecuencia en pérdida de empuje."
    },
    pt: {
      caso: "Um navio Classe 2 tem um sistema de gestão de potência que, ao detectar queda de frequência, desliga um resfriador dos propulsores para reduzir a carga. Durante uma operação longa com calor intenso, o propulsor de popa superaquece e sua proteção por temperatura é acionada, reduzindo o empuxo.",
      q: "Que relação de prioridades falhou no projeto?",
      o: ["Nenhuma, o resfriador é um consumidor secundário", "Que o propulsor devia ter resfriamento independente da rede principal, e que a desconexão do resfriador dependia da frequência sem considerar a temperatura do equipamento", "Que o propulsor devia ser desligado diante de qualquer queda de frequência", "Que o resfriador não devia ter proteção"],
      e: "Um consumidor de aparência secundária, como o resfriador, sustenta diretamente a capacidade de um propulsor. A prioridade de desconexão deve considerar essa dependência e, se possível, separar o resfriamento da rede de carga. Com calor intenso, a desconexão transforma uma queda de frequência em perda de empuxo."
    }
  },
  {
    m: 7, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un plan de operación para una grúa de 80 toneladas. El capability plot se calculó con el buque en calado de 6 metros y sin carga en cubierta. El trabajo consiste en elevar la carga de 80 toneladas desde una posición a 20 metros de la línea central del buque, lo que desplaza el centro de gravedad del conjunto.",
      q: "¿Qué debe revisar el DPO antes de autorizar la elevación?",
      o: ["Solo el viento, porque la carga no afecta a la respuesta del buque", "El efecto del desplazamiento de masa y de momento: la carga cambia la distribución de fuerzas y momentos, y el plot debe reflejarlo", "Que la grúa tenga certificado", "Que el buque tenga calado de 6 metros, sin más revisión"],
      e: "Una carga de 80 toneladas a 20 metros del eje cambia el momento sobre el buque, y esa variación afecta a la respuesta a viento y corriente. El capability plot debe recalcularse con la condición de carga real, porque el análisis original no la contempla."
    },
    pt: {
      caso: "Um navio Classe 2 tem um plano de operação para um guindaste de 80 toneladas. O capability plot foi calculado com o navio em calado de 6 metros e sem carga no convés. O trabalho consiste em içar a carga de 80 toneladas de uma posição a 20 metros da linha central do navio, o que desloca o centro de gravidade do conjunto.",
      q: "O que o DPO deve revisar antes de autorizar o içamento?",
      o: ["Somente o vento, porque a carga não afeta a resposta do navio", "O efeito do deslocamento de massa e de momento: a carga muda a distribuição de forças e momentos, e o plot deve refleti-la", "Que o guindaste tenha certificado", "Que o navio esteja com calado de 6 metros, sem mais revisão"],
      e: "Uma carga de 80 toneladas a 20 metros do eixo muda o momento sobre o navio, e essa variação afeta a resposta a vento e corrente. O capability plot deve ser recalculado com a condição de carga real, porque a análise original não a contempla."
    }
  },
  {
    m: 7, a: 2,
    es: {
      caso: "Un buque Clase 2 opera en una zona con corriente de 2 nudos de través. El capability plot muestra un margen del 12 % en la dirección de la corriente. El DPO decide que, como el margen es superior al 10 % que aparece en el manual de operación, la operación puede continuar.",
      q: "¿Qué error de razonamiento comete el DPO?",
      o: ["Ninguno: el 10 % es el umbral mínimo de cualquier operación", "Que debió usar el margen en la dirección de la falla, no en la del análisis, y que el 10 % del manual no es un criterio universal sino el aplicable a esa operación", "Que el manual debe ignorarse siempre", "Que la corriente de través no debe considerarse"],
      e: "Un margen aparentemente suficiente puede serlo solo en una dirección. El criterio relevante es el margen tras la falla de peor caso, en la dirección que importe para la operación, y el umbral del manual depende de la operación y del plan. Comparar un número con un umbral sin verificar qué mide ese número es un error frecuente."
    },
    pt: {
      caso: "Um navio Classe 2 opera numa área com corrente de 2 nós pelo través. O capability plot mostra margem de 12 % na direção da corrente. O DPO decide que, como a margem é superior aos 10 % indicados no manual de operação, a operação pode continuar.",
      q: "Que erro de raciocínio o DPO comete?",
      o: ["Nenhum: 10 % é o limite mínimo de qualquer operação", "Que devia usar a margem na direção da falha, não na da análise, e que os 10 % do manual não são um critério universal, mas o aplicável àquela operação", "Que o manual deve ser sempre ignorado", "Que a corrente pelo través não deve ser considerada"],
      e: "Uma margem aparentemente suficiente pode ser suficiente só numa direção. O critério relevante é a margem após a falha de pior caso, na direção que importa para a operação, e o limite do manual depende da operação e do plano. Comparar um número com um limite sem verificar o que ele mede é um erro frequente."
    }
  },
  {
    m: 7, a: 0,
    es: {
      caso: "Un buque Clase 2 realiza una operación de mantenimiento submarino. El plan de contingencia prevé la salida segura en 45 minutos ante un deterioro de condiciones. Durante la operación, el DPO observa que la velocidad de la corriente aumenta a un ritmo que, según el pronóstico, alcanzará el límite en 30 minutos.",
      q: "¿Qué decisión es la técnicamente correcta?",
      o: ["Iniciar la salida segura de inmediato, porque el tiempo de salida (45 minutos) supera el tiempo disponible (30 minutos)", "Continuar la operación hasta que la corriente alcance el límite y salir entonces", "Completar la tarea en 15 minutos, porque es más rápido que la salida", "Esperar al siguiente pronóstico antes de decidir"],
      e: "El plan de contingencia solo sirve si el tiempo de salida es menor que el tiempo disponible. Aquí el tiempo de salida (45 min) supera la ventana (30 min), así que la salida debe iniciarse ya. Esperar o continuar hasta el límite deja sin margen la maniobra de salida."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação de manutenção submarina. O plano de contingência prevê a saída segura em 45 minutos diante de uma piora das condições. Durante a operação, o DPO observa que a velocidade da corrente aumenta num ritmo que, segundo a previsão, atingirá o limite em 30 minutos.",
      q: "Qual decisão é tecnicamente correta?",
      o: ["Iniciar a saída segura imediatamente, porque o tempo de saída (45 minutos) supera o tempo disponível (30 minutos)", "Continuar a operação até a corrente atingir o limite e sair então", "Concluir a tarefa em 15 minutos, porque é mais rápido que a saída", "Aguardar a próxima previsão antes de decidir"],
      e: "O plano de contingência só funciona se o tempo de saída for menor que o tempo disponível. Aqui o tempo de saída (45 min) supera a janela (30 min), então a saída deve começar já. Esperar ou continuar até o limite deixa a manobra de saída sem margem."
    }
  },
  {
    m: 7, a: 3,
    es: {
      caso: "Un buque Clase 2 con capability plot de condición normal al 30 % de margen y de falla de peor caso al 8 % opera en Auto DP. Por la mañana, el cliente cambia la tarea a una que requiere mantener el buque con un ángulo de proa distinto, un 40 % más expuesto al viento dominante.",
      q: "¿Qué debe hacer el DPO antes de aceptar el cambio de tarea?",
      o: ["Aceptar el cambio, porque el margen normal sigue siendo del 30 %", "Aceptar el cambio y pedir al cliente que firme la exposición", "Aceptar el cambio y reducir la carga de la tarea para compensar", "Revisar el capability plot para la nueva orientación y la condición de falla, porque el margen tras la falla ya era bajo y la exposición lo empeora"],
      e: "El margen normal no decide la operación; lo decide el margen tras la falla de peor caso, que ya era del 8 %. Un cambio de orientación con más exposición al viento puede llevarlo por debajo del mínimo. Antes de aceptar, el DPO debe recalcular el plot para esa orientación y esa falla."
    },
    pt: {
      caso: "Um navio Classe 2 com capability plot de condição normal com 30 % de margem e de falha de pior caso com 8 % opera em Auto DP. Pela manhã, o cliente muda a tarefa para uma que exige manter o navio com um ângulo de proa diferente, 40 % mais exposto ao vento dominante.",
      q: "O que o DPO deve fazer antes de aceitar a mudança de tarefa?",
      o: ["Aceitar a mudança, porque a margem normal continua em 30 %", "Aceitar a mudança e pedir ao cliente que assine a exposição", "Aceitar a mudança e reduzir a carga da tarefa para compensar", "Revisar o capability plot para a nova orientação e a condição de falha, porque a margem após a falha já era baixa e a exposição a piora"],
      e: "A margem normal não decide a operação; quem decide é a margem após a falha de pior caso, que já era de 8 %. Uma mudança de orientação com mais exposição ao vento pode levá-la abaixo do mínimo. Antes de aceitar, o DPO deve recalcular o plot para essa orientação e essa falha."
    }
  },
  {
    m: 7, a: 0,
    es: {
      caso: "Un buque Clase 2 ha completado una operación con éxito. El DPO revisa el registro y observa que durante veinte minutos la posición estuvo fuera del criterio de excursión de 2 metros, pero el sistema no generó alarma porque el criterio de alarma estaba fijado en 4 metros.",
      q: "¿Qué debe concluir y hacer el DPO?",
      o: ["Que la operación fue conforme con el plan, porque no hubo alarma; y que debe revisarse si el criterio de alarma es coherente con el criterio de operación", "Que la operación no fue conforme; el criterio de alarma es irrelevante", "Que el registro debe borrarse para no generar dudas", "Que el criterio de excursión debe ampliarse a 4 metros para que coincida con la alarma"],
      e: "El criterio de alarma y el criterio de operación deben ser coherentes. Una alarma fijada más allá del criterio de operación permite estar fuera de condición sin aviso. La operación no era conforme en esos veinte minutos, y el criterio de alarma debe corregirse. Ampliar el criterio de excursión para que coincida con la alarma es cambiar el objetivo para ajustarlo al sistema."
    },
    pt: {
      caso: "Um navio Classe 2 concluiu uma operação com sucesso. O DPO revisa o registro e observa que, durante vinte minutos, a posição esteve fora do critério de excursão de 2 metros, mas o sistema não gerou alarme porque o critério de alarme estava fixado em 4 metros.",
      q: "O que o DPO deve concluir e fazer?",
      o: ["Que a operação foi conforme ao plano porque não houve alarme; e que deve ser revisado se o critério de alarme é coerente com o critério de operação", "Que a operação não foi conforme; o critério de alarme é irrelevante", "Que o registro deve ser apagado para não gerar dúvidas", "Que o critério de excursão deve ser ampliado para 4 metros para coincidir com o alarme"],
      e: "O critério de alarme e o critério de operação devem ser coerentes. Um alarme fixado além do critério de operação permite ficar fora da condição sem aviso. A operação não era conforme naqueles vinte minutos, e o critério de alarme deve ser corrigido. Ampliar o critério de excursão para coincidir com o alarme é mudar o objetivo para se ajustar ao sistema."
    }
  },
  {
    m: 1, a: 2,
    es: {
      caso: "Un buque Clase 2 en Auto DP sufre la pérdida simultánea de su GNSS 1 y de su controlador DP principal por un corte de alimentación de un cuadro. El controlador de reserva toma el control, pero el GNSS 2 tiene una solución que va perdiendo precisión, y la hidroacústica no está operativa.",
      q: "¿Qué debe evaluar el DPO de inmediato?",
      o: ["Que la operación puede continuar porque el controlador de reserva ya tiene el control", "Que el sistema no necesita nada, porque la redundancia de controlador lo cubre", "Que la configuración restante (un controlador y una referencia degradada) ya no cumple la clase, y que debe decidirse la suspensión o la transición a una configuración segura", "Que la hidroacústica debe reactivarse aunque sea inoperativa"],
      e: "El fallo combinado deja una configuración que no cumple la clase: un controlador y una referencia con precisión decreciente. Que el controlador de reserva tome el control no basta, porque la referencia degradada y la falta de hidroacústica reducen la redundancia real. La decisión de suspender o de pasar a una configuración segura debe tomarse con la configuración real."
    },
    pt: {
      caso: "Um navio Classe 2 em Auto DP sofre a perda simultânea do seu GNSS 1 e do controlador DP principal por um corte de alimentação de um quadro. O controlador de reserva assume o controle, mas o GNSS 2 tem uma solução que vai perdendo precisão, e a hidroacústica não está operacional.",
      q: "O que o DPO deve avaliar imediatamente?",
      o: ["Que a operação pode continuar porque o controlador de reserva já tem o controle", "Que o sistema não precisa de nada, porque a redundância do controlador cobre tudo", "Que a configuração restante (um controlador e uma referência degradada) já não atende à classe, e que deve ser decidida a suspensão ou a transição para uma configuração segura", "Que a hidroacústica deve ser reativada mesmo inoperante"],
      e: "A falha combinada deixa uma configuração que não atende à classe: um controlador e uma referência com precisão decrescente. Que o controlador de reserva assuma o controle não basta, porque a referência degradada e a falta de hidroacústica reduzem a redundância real. A decisão de suspender ou de passar para uma configuração segura deve ser tomada com a configuração real."
    }
  },
  {
    m: 1, a: 1,
    es: {
      caso: "Un buque en Clase 2 tiene un plan de operación firmado para un trabajo de tres días. El DPO de guardia nota que el pronóstico se actualizó con un frente más intenso para el segundo día, pero el plan no se revisó y el cliente no fue informado del cambio.",
      q: "¿Qué obligación de gestión y de procedimiento se incumple?",
      o: ["Ninguna, el plan firmado vale para toda la operación", "Revisar el plan ante un cambio significativo de condiciones y comunicarlo al cliente y al capitán, con las decisiones de suspensión actualizadas", "Solo informar al cliente al terminar el trabajo", "Cambiar el pronóstico para que coincida con el plan"],
      e: "Un plan firmado para condiciones previstas debe revisarse cuando esas condiciones cambian. La responsabilidad es del capitán y del personal DP, y el cliente debe conocer el riesgo actualizado. Mantener el plan original ante un frente más intenso es una desviación del sistema de gestión."
    },
    pt: {
      caso: "Um navio em Classe 2 tem um plano de operação assinado para um trabalho de três dias. O DPO de serviço percebe que a previsão foi atualizada com uma frente mais intensa para o segundo dia, mas o plano não foi revisado e o cliente não foi informado da mudança.",
      q: "Qual obrigação de gestão e de procedimento é descumprida?",
      o: ["Nenhuma, o plano assinado vale para toda a operação", "Revisar o plano diante de uma mudança significativa de condições e comunicá-la ao cliente e ao comandante, com as decisões de suspensão atualizadas", "Informar o cliente somente ao final do trabalho", "Mudar a previsão para que coincida com o plano"],
      e: "Um plano assinado para condições previstas deve ser revisto quando essas condições mudam. A responsabilidade é do comandante e do pessoal DP, e o cliente deve conhecer o risco atualizado. Manter o plano original diante de uma frente mais intensa é um desvio do sistema de gestão."
    }
  },
  {
    m: 1, a: 3,
    es: {
      caso: "Un DPO con poca experiencia en Clase 3 recibe la orden de operar con la barra de compartimento A parcialmente inundada, por un daño en la sala de máquinas durante la navegación. El capitán le pide que mantenga la posición 'como sea', con los propulsores disponibles.",
      q: "¿Qué debe hacer el DPO antes de aceptar esa orden?",
      o: ["Aceptar, porque la orden del capitán prevalece sobre cualquier análisis técnico", "Mantener la posición sin análisis, porque el DP es una herramienta de emergencia", "Pasar a joystick y mantener la posición con el operador", "Informar que la configuración tras el daño no cumple la Clase 3 y solicitar un análisis de consecuencias con la capacidad real antes de decidir"],
      e: "La Clase 3 exige mantener la posición tras la pérdida de un compartimento, pero aquí el daño ya ha ocurrido y la configuración real puede no cumplir la clase. El DPO debe informar de esa limitación y pedir un análisis con la capacidad real. Aceptar una orden sin análisis convierte una emergencia en una decisión sin base técnica."
    },
    pt: {
      caso: "Um DPO com pouca experiência em Classe 3 recebe a ordem de operar com a barra do compartimento A parcialmente inundada, por um dano na casa de máquinas durante a navegação. O comandante pede que ele mantenha a posição 'do jeito que for', com os propulsores disponíveis.",
      q: "O que o DPO deve fazer antes de aceitar essa ordem?",
      o: ["Aceitar, porque a ordem do comandante prevalece sobre qualquer análise técnica", "Manter a posição sem análise, porque o DP é uma ferramenta de emergência", "Passar para joystick e manter a posição com o operador", "Informar que a configuração após o dano não atende à Classe 3 e solicitar uma análise de consequências com a capacidade real antes de decidir"],
      e: "A Classe 3 exige manter a posição após a perda de um compartimento, mas aqui o dano já ocorreu e a configuração real pode não atender à classe. O DPO deve informar essa limitação e pedir uma análise com a capacidade real. Aceitar uma ordem sem análise transforma uma emergência em uma decisão sem base técnica."
    }
  },
  {
    m: 1, a: 0,
    es: {
      caso: "Un buque Clase 2 tiene un controlador DP con dos fuentes de alimentación en paralelo. El fabricante especifica que cada fuente debe poder soportar la carga total. El buque tiene una fuente que, tras mantenimiento, trabaja al 70 % de su capacidad nominal con la carga total del controlador.",
      q: "¿Qué debe concluir el DPO sobre la redundancia de la alimentación?",
      o: ["Que la fuente restante no puede asumir la carga total con margen si la otra falla, así que la redundancia de alimentación no se cumple en la configuración actual si la fuente tiene esa degradación", "Que la redundancia se cumple porque hay dos fuentes", "Que la fuente al 70 % es correcta siempre", "Que el controlador debe funcionar con una sola fuente sin problema"],
      e: "La redundancia de alimentación exige que cada fuente sostenga la carga total. Si la fuente restante ya trabaja al 70 % de su capacidad nominal con la carga total, la reserva es limitada, y una degradación adicional puede dejar el controlador sin alimentación. El DPO debe verificar la capacidad real y no solo contar fuentes."
    },
    pt: {
      caso: "Um navio Classe 2 tem um controlador DP com duas fontes de alimentação em paralelo. O fabricante especifica que cada fonte deve suportar a carga total. O navio tem uma fonte que, após manutenção, trabalha a 70 % da sua capacidade nominal com a carga total do controlador.",
      q: "O que o DPO deve concluir sobre a redundância da alimentação?",
      o: ["Que a fonte restante não pode assumir a carga total com margem se a outra falhar, então a redundância da alimentação não está atendida na configuração atual, se a fonte tem essa degradação", "Que a redundância está atendida porque há duas fontes", "Que a fonte a 70 % está sempre correta", "Que o controlador deve funcionar com uma só fonte sem problema"],
      e: "A redundância de alimentação exige que cada fonte sustente a carga total. Se a fonte restante já trabalha a 70 % da sua capacidade nominal com a carga total, a reserva é limitada, e uma degradação adicional pode deixar o controlador sem alimentação. O DPO deve verificar a capacidade real e não apenas contar fontes."
    }
  },
  {
    m: 5, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un sistema de viento con dos sensores que comparten el mismo cable de señal y el mismo convertidor analógico-digital. El convertidor tiene un error de linealidad que aumenta con la temperatura de la cabina de control, que sube durante la operación por el uso de climatización al mínimo.",
      q: "¿Qué tipo de error introduce esto y por qué no lo detecta la comparación entre los dos sensores?",
      o: ["Un error aleatorio, que se detecta siempre al comparar dos sensores", "Un error común que depende de la temperatura: ambos sensores se afectan igual, así que su coincidencia no prueba exactitud", "Un error de los sensores, que no afecta a la lectura digital", "Un error sin efecto, porque la temperatura no influye en la electrónica"],
      e: "Dos sensores que comparten el convertidor comparten su error. Si el error depende de la temperatura, ambos se desplazan igual al subir la temperatura de la cabina, y su coincidencia no prueba exactitud. La redundancia de sensores debe incluir independencia de la cadena de medida, no solo del sensor."
    },
    pt: {
      caso: "Um navio Classe 2 tem um sistema de vento com dois sensores que compartilham o mesmo cabo de sinal e o mesmo conversor analógico-digital. O conversor tem um erro de linearidade que aumenta com a temperatura da cabine de controle, que sobe durante a operação pelo uso do ar-condicionado no mínimo.",
      q: "Que tipo de erro isso introduz e por que a comparação entre os dois sensores não o detecta?",
      o: ["Um erro aleatório, que sempre se detecta ao comparar dois sensores", "Um erro comum que depende da temperatura: os dois sensores são afetados igualmente, então a coincidência deles não prova exatidão", "Um erro dos sensores, que não afeta a leitura digital", "Um erro sem efeito, porque a temperatura não influencia a eletrônica"],
      e: "Dois sensores que compartilham o conversor compartilham seu erro. Se o erro depende da temperatura, ambos se deslocam igual ao subir a temperatura da cabine, e a coincidência deles não prova exatidão. A redundância de sensores deve incluir independência da cadeia de medição, não só do sensor."
    }
  },
  {
    m: 5, a: 3,
    es: {
      caso: "En un buque Clase 2, el anemómetro de la ala de babor y el de la ala de estribor se usan como redundancia. Durante una operación, un ala del puente queda parcialmente tapada por una estructura de la grúa, y el sensor de esa ala da lecturas de viento menores que el de la ala opuesta en un 35 % con viento de través.",
      q: "¿Qué debe hacer el DPO con los dos sensores?",
      o: ["Promediar ambos y continuar sin más", "Usar siempre el de menor valor, por seguridad", "Usar siempre el de mayor valor, por seguridad", "Evaluar la causa del apantallamiento y no usar el sensor afectado por la estructura mientras dure la obstrucción, verificando que el sensor restante cumple el análisis"],
      e: "Una estructura que tapa un sensor altera sus lecturas de forma sistemática para ciertos ángulos. El sensor afectado no es fiable en esa condición. La acción correcta es excluirlo mientras dure la obstrucción y verificar que el sensor restante sigue cumpliendo el análisis, porque ya no hay redundancia completa."
    },
    pt: {
      caso: "Em um navio Classe 2, o anemômetro da asa de bombordo e o da asa de boreste são usados como redundância. Durante uma operação, uma asa da ponte fica parcialmente tapada por uma estrutura do guindaste, e o sensor dessa asa dá leituras de vento 35 % menores que as do lado oposto, com vento pelo través.",
      q: "O que o DPO deve fazer com os dois sensores?",
      o: ["Fazer a média dos dois e continuar sem mais", "Usar sempre o de menor valor, por segurança", "Usar sempre o de maior valor, por segurança", "Avaliar a causa do sombreamento e não usar o sensor afetado pela estrutura enquanto durar a obstrução, verificando se o sensor restante atende à análise"],
      e: "Uma estrutura que tapa um sensor altera suas leituras de forma sistemática para certos ângulos. O sensor afetado não é confiável nessa condição. A ação correta é excluí-lo enquanto durar a obstrução e verificar se o sensor restante ainda atende à análise, porque a redundância completa já não existe."
    }
  },
  {
    m: 5, a: 0,
    es: {
      caso: "Un buque Clase 2 usa un sistema de referencia por radar para la posición y un girocompás para el rumbo. Durante una maniobra en un puerto con muchos edificios altos, el radar detecta reflexiones múltiples que producen un rumbo aparente de la referencia de posición que no coincide con el girocompás.",
      q: "¿Qué fuente de error es la más probable y cómo debe tratarse el conflicto?",
      o: ["Reflexiones múltiples del radar que afectan a la estimación de posición y de rumbo; contrastar con GNSS o hidroacústica y no usar la lectura del radar en esa zona hasta resolverlo", "Un fallo del girocompás que debe apagarse", "Un efecto normal de la alta velocidad de la maniobra", "Un error que solo afecta al puerto y no a la operación"],
      e: "Las reflexiones múltiples en zonas urbanas o portuarias producen falsos objetivos y errores en la posición. Si la referencia de radar genera un rumbo aparente inconsistente, no debe usarse en esa zona hasta resolver el conflicto, y debe contrastarse con otra fuente. Descartar el girocompás sin evidencia sería un error."
    },
    pt: {
      caso: "Um navio Classe 2 usa um sistema de referência por radar para a posição e um girocompasso para o rumo. Durante uma manobra em porto com muitos edifícios altos, o radar detecta reflexões múltiplas que produzem um rumo aparente da referência de posição que não coincide com o do girocompasso.",
      q: "Qual fonte de erro é a mais provável e como o conflito deve ser tratado?",
      o: ["Reflexões múltiplas do radar que afetam a estimativa de posição e de rumo; contrastar com GNSS ou hidroacústica e não usar a leitura do radar naquela área até resolver", "Uma falha do girocompasso que deve ser desligado", "Um efeito normal da alta velocidade da manobra", "Um erro que afeta só o porto e não a operação"],
      e: "As reflexões múltiplas em áreas urbanas ou portuárias produzem falsos alvos e erros de posição. Se a referência de radar gera um rumo aparente inconsistente, não deve ser usada naquela área até resolver o conflito, e deve ser contrastada com outra fonte. Descartar o girocompasso sem evidência seria um erro."
    }
  },
  {
    m: 5, a: 2,
    es: {
      caso: "Un buque Clase 2 opera con un sensor de presión de agua para detectar la profundidad bajo la quilla durante una maniobra de acercamiento. El sensor muestra una profundidad de 9 metros, pero la carta indica 14. El DPO no sabe si el error es del sensor o de la carta.",
      q: "¿Qué debe hacer el DPO antes de usar esa lectura en la maniobra?",
      o: ["Usar la carta, porque siempre es más fiable que un sensor", "Usar el sensor, porque la carta puede estar desactualizada y la lectura del sensor es la de la realidad", "Ignorar la diferencia, porque la profundidad no influye en el DP", "Contrastar la lectura con otra fuente (sonda, referencia de la marea) y no usarla hasta confirmarla, porque una diferencia de 5 metros puede implicar un riesgo de varada"],
      e: "Una discrepancia de 5 metros entre un sensor y la carta no puede resolverse suponiendo que uno tiene razón. Hay que contrastar con otra fuente, como la sonda o la referencia de marea. Mientras tanto, la lectura no debe usarse como base para la maniobra. Un error de profundidad en la aproximación puede tener consecuencias graves."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um sensor de pressão de água para detectar a profundidade sob a quilha durante uma manobra de aproximação. O sensor mostra uma profundidade de 9 metros, mas a carta indica 14. O DPO não sabe se o erro é do sensor ou da carta.",
      q: "O que o DPO deve fazer antes de usar essa leitura na manobra?",
      o: ["Usar a carta, porque sempre é mais confiável que um sensor", "Usar o sensor, porque a carta pode estar desatualizada e a leitura do sensor é a realidade", "Ignorar a diferença, porque a profundidade não influencia o DP", "Contrastar a leitura com outra fonte (sonda, referência da maré) e não usá-la até confirmá-la, porque uma diferença de 5 metros pode implicar risco de encalhe"],
      e: "Uma discrepância de 5 metros entre um sensor e a carta não pode ser resolvida supondo que um deles tem razão. É preciso contrastar com outra fonte, como a sonda ou a referência da maré. Enquanto isso, a leitura não deve servir de base para a manobra. Um erro de profundidade na aproximação pode ter consequências graves."
    }
  },
  {
    m: 6, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene dos generadores en paralelo, uno de ellos con el regulador de tensión en modo manual por un ajuste de mantenimiento. Al variar la carga reactiva de un equipo, la tensión del generador en manual sube 8 % y el otro generador absorbe reactiva en sentido contrario.",
      q: "¿Qué efecto tiene esta situación sobre la red de DP?",
      o: ["Ninguno, la tensión solo afecta a la iluminación", "Una circulación de potencia reactiva entre generadores que sobrecarga a uno y puede llevar a una inestabilidad o a la protección del sistema", "Una mejora de la eficiencia, porque el generador produce más energía", "Que el regulador manual se pone solo en automático"],
      e: "Dos generadores en paralelo con reguladores de tensión desacoplados generan circulación de reactiva. Si uno está en manual y sube su tensión, el otro absorbe la reactiva y se sobrecarga. Eso reduce el margen de la red y puede disparar protecciones, lo que afecta directamente a la capacidad DP."
    },
    pt: {
      caso: "Um navio Classe 2 tem dois geradores em paralelo, um deles com o regulador de tensão em modo manual por um ajuste de manutenção. Ao variar a carga reativa de um equipamento, a tensão do gerador em manual sobe 8 %, e o outro gerador absorve reativo no sentido contrário.",
      q: "Que efeito essa situação tem sobre a rede do DP?",
      o: ["Nenhum, a tensão afeta só a iluminação", "Uma circulação de potência reativa entre geradores que sobrecarrega um deles e pode levar a instabilidade ou à proteção do sistema", "Uma melhoria da eficiência, porque o gerador produz mais energia", "Que o regulador manual passa sozinho para automático"],
      e: "Dois geradores em paralelo com reguladores de tensão desacoplados geram circulação de reativo. Se um está em manual e sobe sua tensão, o outro absorve o reativo e se sobrecarrega. Isso reduz a margem da rede e pode disparar proteções, o que afeta diretamente a capacidade do DP."
    }
  },
  {
    m: 6, a: 3,
    es: {
      caso: "Un buque Clase 2 con dos barras acopladas tiene un disyuntor de acoplamiento que se cierra automáticamente tras una falla en la barra 1, para alimentar a la barra 1 desde la 2. Sin embargo, la falla en la barra 1 persiste, y el cierre automático vuelve a conectar la falla a la barra 2.",
      q: "¿Qué falla de la lógica de protección se identifica?",
      o: ["Ninguna, el cierre automático es el comportamiento correcto", "Que el disyuntor debió cerrarse manualmente en lugar de automáticamente", "Que la barra 2 debió apagarse", "Que el cierre automático ante una falla persistente reconecta el defecto: la lógica debe impedir el cierre si la falla no se ha aislado"],
      e: "Un cierre automático de acoplamiento que no verifica la falla puede transferirla a la barra sana. La lógica de protección debe confirmar que la falla está aislada antes de cerrar cualquier acoplamiento, porque cerrar sobre una falla persistente anula la división de energía."
    },
    pt: {
      caso: "Um navio Classe 2 com duas barras acopladas tem um disjuntor de acoplamento que fecha automaticamente após uma falha na barra 1, para alimentar a barra 1 a partir da 2. No entanto, a falha na barra 1 persiste, e o fechamento automático volta a conectar o defeito à barra 2.",
      q: "Qual falha da lógica de proteção é identificada?",
      o: ["Nenhuma, o fechamento automático é o comportamento correto", "Que o disjuntor devia ter sido fechado manualmente em vez de automaticamente", "Que a barra 2 devia ter sido desligada", "Que o fechamento automático diante de uma falha persistente reconecta o defeito: a lógica deve impedir o fechamento se a falha não foi isolada"],
      e: "Um fechamento automático de acoplamento que não verifica a falha pode transferi-la para a barra sadia. A lógica de proteção deve confirmar que a falha está isolada antes de fechar qualquer acoplamento, porque fechar sobre uma falha persistente anula a divisão de energia."
    }
  },
  {
    m: 6, a: 0,
    es: {
      caso: "Un buque Clase 2 realiza una operación de grúa con un generador de 2,5 MW en paralelo con otro de 2,5 MW. Al elevar la carga, el consumo total llega al 85 % de la capacidad de un solo generador. El DPO considera que, como la capacidad combinada es 5 MW, la operación cumple el criterio de un generador fuera de servicio.",
      q: "¿Qué error hay en este razonamiento?",
      o: ["Que el criterio exige que la carga quepa en un solo generador, y aquí el consumo de 85 % de su capacidad deja poco margen para absorber transitorios", "Que la capacidad combinada no puede usarse nunca", "Que el consumo debió medirse en amperios", "Ningún error, el criterio se cumple"],
      e: "El análisis de un generador fuera de servicio exige que la carga restante quepa en el generador que queda, con margen para transitorios. Con el consumo al 85 % de un solo generador, el margen es insuficiente frente a picos de arranque. La capacidad combinada no demuestra el criterio."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação de guindaste com um gerador de 2,5 MW em paralelo com outro de 2,5 MW. Ao içar a carga, o consumo total chega a 85 % da capacidade de um só gerador. O DPO considera que, como a capacidade combinada é de 5 MW, a operação atende ao critério de um gerador fora de serviço.",
      q: "Que erro há nesse raciocínio?",
      o: ["Que o critério exige que a carga caiba em um só gerador, e aqui o consumo de 85 % da sua capacidade deixa pouca margem para absorver transitórios", "Que a capacidade combinada nunca pode ser usada", "Que o consumo devia ser medido em amperes", "Nenhum erro, o critério é atendido"],
      e: "A análise de um gerador fora de serviço exige que a carga restante caiba no gerador que sobra, com margem para transitórios. Com o consumo a 85 % de um só gerador, a margem é insuficiente diante de picos de partida. A capacidade combinada não demonstra o critério."
    }
  },
  {
    m: 7, a: 2,
    es: {
      caso: "Un buque Clase 2 se prepara para una operación en una zona de corriente variable. El plan usa un capability plot para la corriente media. El DPO revisa los datos del último mes y encuentra que la corriente media es correcta, pero que los picos de 1,5 veces la media ocurren cada pocas horas y duran lo suficiente para afectar a la operación.",
      q: "¿Qué análisis es insuficiente y qué debe hacerse?",
      o: ["El análisis de la media es suficiente, porque los picos se compensan en el promedio", "El análisis de la media no es suficiente; hay que incluir los picos y su duración en el análisis de condición, porque la condición que importa es la más desfavorable durante la operación", "Solo hay que analizar el pico, nunca la media", "Ninguno: la operación puede hacerse sin análisis porque la media es correcta"],
      e: "Un análisis con la corriente media no representa la condición crítica si los picos son frecuentes y duran lo suficiente. La operación se juzga por su condición más desfavorable, no por el promedio. Los picos de 1,5 veces la media deben incorporarse al análisis de condición y a los criterios de suspensión."
    },
    pt: {
      caso: "Um navio Classe 2 se prepara para uma operação em área de corrente variável. O plano usa um capability plot para a corrente média. O DPO revisa os dados do último mês e encontra que a corrente média está correta, mas que os picos de 1,5 vez a média ocorrem a cada poucas horas e duram o suficiente para afetar a operação.",
      q: "Qual análise é insuficiente e o que deve ser feito?",
      o: ["A análise da média é suficiente, porque os picos se compensam na média", "A análise da média não é suficiente; é preciso incluir os picos e sua duração na análise de condição, porque a condição que importa é a mais desfavorável durante a operação", "Só é preciso analisar o pico, nunca a média", "Nenhum: a operação pode ser feita sem análise porque a média está correta"],
      e: "Uma análise com a corrente média não representa a condição crítica se os picos são frequentes e duram o suficiente. A operação é julgada pela condição mais desfavorável, não pela média. Os picos de 1,5 vez a média devem entrar na análise de condição e nos critérios de suspensão."
    }
  },
  {
    m: 7, a: 1,
    es: {
      caso: "Un buque Clase 2 opera con un capability plot que incluye la falla de peor caso del propulsor de popa. El DPO observa que, en la práctica, la falla de peor caso del buque es la pérdida simultánea de un propulsor y de una referencia, porque ambos comparten el mismo cuadro de alimentación.",
      q: "¿Qué debe hacer el DPO con el capability plot?",
      o: ["Mantenerlo tal como está, porque la falla de un propulsor ya está incluida", "Revisar el análisis de falla para incluir la pérdida combinada que comparten el cuadro, porque la falla de peor caso es la que el sistema realmente puede sufrir", "Eliminar la referencia del análisis para simplificarlo", "Ignorar el cuadro, porque no está en el plot"],
      e: "La falla de peor caso debe representar el fallo más desfavorable que puede ocurrir. Si dos elementos comparten un cuadro, su pérdida combinada es un escenario real que el plot debe contemplar. Un análisis que solo considera fallos individuales subestima el riesgo."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um capability plot que inclui a falha de pior caso do propulsor de popa. O DPO observa que, na prática, a falha de pior caso do navio é a perda simultânea de um propulsor e de uma referência, porque ambos compartilham o mesmo quadro de alimentação.",
      q: "O que o DPO deve fazer com o capability plot?",
      o: ["Mantê-lo como está, porque a falha de um propulsor já está incluída", "Revisar a análise de falha para incluir a perda combinada que compartilham no quadro, porque a falha de pior caso é a que o sistema realmente pode sofrer", "Retirar a referência da análise para simplificá-la", "Ignorar o quadro, porque não está no plot"],
      e: "A falha de pior caso deve representar o defeito mais desfavorável que pode ocorrer. Se dois elementos compartilham um quadro, sua perda combinada é um cenário real que o plot deve contemplar. Uma análise que considera só falhas individuais subestima o risco."
    }
  },
  {
    m: 7, a: 3,
    es: {
      caso: "Un buque en Clase 2 realiza una operación que exige 24 horas de trabajo continuo. El plan de la operación asume que la vigilancia de cada hora y el relevo de guardia se mantienen. A las 14 horas, la tripulación de guardia se ha reducido por una baja, y el DPO de relevo tiene que cubrir dos guardias seguidas.",
      q: "¿Qué debe concluir el DPO sobre la operación?",
      o: ["Que la operación continúa sin cambios, porque el plan no contempla la falta de personal", "Que el personal reducido no afecta a la vigilancia, porque las alarmas la reemplazan", "Que la carga de guardia es un factor que cambia la capacidad de cumplir el plan: debe evaluarse y, si no se puede mantener la vigilancia, la operación se suspende o se replantea", "Que el DPO debe reducir la vigilancia a la mitad para cubrir el turno"],
      e: "El plan de operación supone que la vigilancia se mantiene. Si el personal no puede cubrirla, la operación ya no cumple el plan aprobado, aunque el equipo funcione. La fatiga y la carga de guardia son factores de riesgo que deben evaluarse como parte de las condiciones de operación."
    },
    pt: {
      caso: "Um navio em Classe 2 realiza uma operação que exige 24 horas de trabalho contínuo. O plano da operação supõe que a vigilância de cada hora e a troca de turno se mantêm. Às 14 horas, a equipe de serviço foi reduzida por um afastamento, e o DPO que faz a troca precisa cobrir dois turnos seguidos.",
      q: "O que o DPO deve concluir sobre a operação?",
      o: ["Que a operação continua sem mudanças, porque o plano não prevê falta de pessoal", "Que o pessoal reduzido não afeta a vigilância, porque os alarmes a substituem", "Que a carga de serviço é um fator que muda a capacidade de cumprir o plano: deve ser avaliada e, se a vigilância não puder ser mantida, a operação é suspensa ou replanejada", "Que o DPO deve reduzir a vigilância pela metade para cobrir o turno"],
      e: "O plano de operação supõe que a vigilância é mantida. Se o pessoal não consegue cobri-la, a operação já não cumpre o plano aprovado, mesmo com o equipamento funcionando. A fadiga e a carga de serviço são fatores de risco que devem ser avaliados como parte das condições de operação."
    }
  },
  {
    m: 7, a: 0,
    es: {
      caso: "Un buque Clase 2 con capability plot de condición normal aceptable entra en una zona donde el pronóstico indica una combinación de viento de 25 nudos y corriente de 1,8 nudos en el mismo sentido. El plot se calculó para viento y corriente en direcciones opuestas.",
      q: "¿Qué debe concluir el DPO?",
      o: ["Que el plot no sirve: la condición real (viento y corriente en el mismo sentido) no está representada, y el análisis debe repetirse para esa combinación", "Que el plot sirve porque el viento y la corriente son independientes", "Que la combinación se compensa y el resultado es menor carga", "Que solo importa el viento, no la corriente"],
      e: "El capability plot solo es válido para las combinaciones de viento y corriente con las que se calculó. Cambiar el sentido relativo de viento y corriente cambia la fuerza resultante sobre el buque. El análisis debe repetirse para la combinación real, no suponer que el plot sigue sirviendo."
    },
    pt: {
      caso: "Um navio Classe 2 com capability plot de condição normal aceitável entra numa área onde a previsão indica uma combinação de vento de 25 nós e corrente de 1,8 nó no mesmo sentido. O plot foi calculado para vento e corrente em direções opostas.",
      q: "O que o DPO deve concluir?",
      o: ["Que o plot não serve: a condição real (vento e corrente no mesmo sentido) não está representada, e a análise deve ser repetida para essa combinação", "Que o plot serve porque o vento e a corrente são independentes", "Que a combinação se compensa e o resultado é menor carga", "Que só importa o vento, não a corrente"],
      e: "O capability plot só vale para as combinações de vento e corrente com que foi calculado. Mudar o sentido relativo entre vento e corrente muda a força resultante sobre o navio. A análise deve ser repetida para a combinação real, não presumindo que o plot continua servindo."
    }
  },
  {
    m: 7, a: 2,
    es: {
      caso: "En una operación en Clase 2, el DPO nota que el capability plot se usa en pantalla con la condición de falla de peor caso calculada para un calado de 5 metros, pero el buque opera a 6,2 metros porque ha tomado combustible.",
      q: "¿Qué medida de control se incumple?",
      o: ["Ninguna, el calado influye poco en el DP", "La verificación de que el capability plot corresponde a la condición real del buque, incluido el calado, antes de cada operación", "Que el combustible debe cargarse solo al final de la operación", "Que el plot debe calcularse en amperes"],
      e: "El calado cambia el desplazamiento, la respuesta del buque y el área expuesta. Un plot calculado para otro calado no representa la condición real. Antes de cada operación debe verificarse que los datos de entrada del modelo (calado, carga, distribución) coinciden con el buque en ese momento."
    },
    pt: {
      caso: "Em uma operação em Classe 2, o DPO percebe que o capability plot está sendo usado na tela com a condição de falha de pior caso calculada para um calado de 5 metros, mas o navio opera com 6,2 metros porque recebeu combustível.",
      q: "Que medida de controle não está sendo cumprida?",
      o: ["Nenhuma, o calado influencia pouco o DP", "A verificação de que o capability plot corresponde à condição real do navio, incluindo o calado, antes de cada operação", "Que o combustível deve ser carregado somente no fim da operação", "Que o plot deve ser calculado em amperes"],
      e: "O calado muda o deslocamento, a resposta do navio e a área exposta. Um plot calculado para outro calado não representa a condição real. Antes de cada operação deve-se verificar se os dados de entrada do modelo (calado, carga, distribuição) coincidem com o navio naquele momento."
    }
  },
  {
    m: 7, a: 1,
    es: {
      caso: "Un buque Clase 2 usa un capability plot de dos años de antigüedad. Desde entonces se instaló una nueva grúa en cubierta, el buque pasó por reparación de la popa y se cambiaron dos propulsores por unidades de distinta potencia.",
      q: "¿Qué debe concluir el DPO sobre el plot?",
      o: ["Que el plot sigue válido si la eslora no cambió", "Que el plot debe actualizarse, porque la configuración física y de propulsión cambió y el análisis original no la representa", "Que solo hay que actualizar el plot si el capitán lo pide", "Que el plot es válido porque los propulsores son del mismo tipo"],
      e: "Una grúa nueva, una reparación de popa y propulsores de distinta potencia alteran la masa, la distribución de fuerzas y la capacidad. El capability plot debe reflejar la configuración actual. Basarse en un análisis de hace dos años sin revisión contradice el sistema de gestión."
    },
    pt: {
      caso: "Um navio Classe 2 usa um capability plot de dois anos atrás. Desde então, foi instalado um novo guindaste no convés, o navio passou por reparo da popa e dois propulsores foram trocados por unidades de outra potência.",
      q: "O que o DPO deve concluir sobre o plot?",
      o: ["Que o plot continua válido se o comprimento não mudou", "Que o plot deve ser atualizado, porque a configuração física e de propulsão mudou e a análise original não a representa", "Que só é preciso atualizar o plot se o comandante pedir", "Que o plot é válido porque os propulsores são do mesmo tipo"],
      e: "Um guindaste novo, um reparo na popa e propulsores de potência diferente alteram a massa, a distribuição de forças e a capacidade. O capability plot deve refletir a configuração atual. Basear-se numa análise de dois anos atrás, sem revisão, contradiz o sistema de gestão."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "Un buque Clase 2 tiene dos GNSS con antenas en el mismo mástil, separadas 40 centímetros. Durante una maniobra, el DPO observa que las dos posiciones GNSS mantienen una diferencia de 0,6 metros que no aparece en otras operaciones, y que coincide con el rumbo del buque.",
      q: "¿Qué debe considerar el DPO?",
      o: ["Un efecto de la geometría de las antenas y de la orientación del buque, probablemente por interferencia o multitrayectoria, que debe investigarse antes de confiar en la combinación de las dos referencias", "Que la diferencia es normal y no requiere acción", "Que una de las dos antenas debe retirarse sin más", "Que los GNSS no deben usarse en el mismo mástil nunca"],
      e: "Dos antenas muy juntas y en el mismo mástil pueden interferirse o recibir reflexiones del propio mástil. Una diferencia que depende del rumbo sugiere un efecto de geometría o multitrayectoria. Debe investigarse la causa antes de combinar las dos referencias, porque la coherencia no está garantizada."
    },
    pt: {
      caso: "Um navio Classe 2 tem dois GNSS com antenas no mesmo mastro, separadas por 40 centímetros. Durante uma manobra, o DPO observa que as duas posições GNSS mantêm uma diferença de 0,6 metro que não aparece em outras operações, e que coincide com o rumo do navio.",
      q: "O que o DPO deve considerar?",
      o: ["Um efeito da geometria das antenas e da orientação do navio, provavelmente por interferência ou multicaminho, que deve ser investigado antes de confiar na combinação das duas referências", "Que a diferença é normal e não exige ação", "Que uma das duas antenas deve ser retirada sem mais", "Que os GNSS nunca devem ser usados no mesmo mastro"],
      e: "Duas antenas muito próximas no mesmo mastro podem se interferir ou receber reflexões do próprio mastro. Uma diferença que depende do rumo sugere efeito de geometria ou multicaminho. A causa deve ser investigada antes de combinar as duas referências, porque a coerência não está garantida."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "Un buque Clase 2 usa una referencia de cable tenso con un sensor de ángulo y un sensor de tensión. Durante la operación, el sensor de tensión da una lectura estable, pero el sensor de ángulo muestra un valor que cambia de forma sincronizada con el balance del buque.",
      q: "¿Qué debe concluir el DPO sobre el sensor de ángulo?",
      o: ["Que la lectura es correcta, porque el ángulo del cable debe cambiar con el balance", "Que el sensor de ángulo debe apagarse y la referencia quedar solo con la tensión", "Que el sensor de ángulo está montado en la estructura del buque y mide el movimiento del casco, no el ángulo real del cable: debe corregirse con el MRU o el montaje debe revisarse", "Que el error es de la tensión, que debe recalibrarse"],
      e: "Un sensor de ángulo que se mueve con el balance del buque mide el movimiento del casco y no el ángulo real del cable. La medida debe corregirse con la referencia de movimiento (MRU) o revisarse el montaje. Usarla sin corregir introduce un error sistemático en la posición."
    },
    pt: {
      caso: "Um navio Classe 2 usa uma referência de cabo tenso com um sensor de ângulo e um sensor de tensão. Durante a operação, o sensor de tensão dá uma leitura estável, mas o sensor de ângulo mostra um valor que muda de forma sincronizada com o balanço do navio.",
      q: "O que o DPO deve concluir sobre o sensor de ângulo?",
      o: ["Que a leitura está correta, porque o ângulo do cabo deve mudar com o balanço", "Que o sensor de ângulo deve ser desligado e a referência ficar só com a tensão", "Que o sensor de ângulo está montado na estrutura do navio e mede o movimento do casco, não o ângulo real do cabo: deve ser corrigido com o MRU ou a montagem deve ser revisada", "Que o erro é da tensão, que deve ser recalibrada"],
      e: "Um sensor de ângulo que se move com o balanço do navio mede o movimento do casco, e não o ângulo real do cabo. A medida deve ser corrigida com a referência de movimento (MRU) ou a montagem deve ser revista. Usá-la sem correção introduz um erro sistemático na posição."
    }
  },
  {
    m: 4, a: 2,
    es: {
      caso: "Un buque Clase 2 opera con una referencia de radar y un GNSS. El radar tiene un reflector pasivo montado en una plataforma, y durante una operación la plataforma se desplaza 1,5 metros por una corriente en el lecho que el DPO no conocía.",
      q: "¿Qué tipo de error se introduce y cómo debe gestionarse la referencia?",
      o: ["Un error del radar que se corrige con más potencia", "Un error de la referencia que solo afecta si el buque se mueve", "Un error de la referencia relativa al objeto: si el objeto de referencia se mueve, la posición calculada se desplaza; hay que validar que el punto de referencia es fijo y, si no lo es, descartarlo", "Un error inexistente, porque la plataforma está fija"],
      e: "Una referencia relativa a un objeto que se mueve traslada su error a la posición del buque. Un reflector en una plataforma que se desplaza no es un punto fijo. El DPO debe validar que la referencia es fija o descartarla cuando su movimiento no esté controlado."
    },
    pt: {
      caso: "Um navio Classe 2 opera com uma referência de radar e um GNSS. O radar tem um refletor passivo montado numa plataforma, e durante uma operação a plataforma se desloca 1,5 metro por uma corrente no leito que o DPO não conhecia.",
      q: "Que tipo de erro é introduzido e como a referência deve ser gerida?",
      o: ["Um erro do radar que se corrige com mais potência", "Um erro da referência que só afeta se o navio se mover", "Um erro da referência relativa ao objeto: se o objeto de referência se move, a posição calculada se desloca; é preciso validar que o ponto de referência é fixo e, se não for, descartá-lo", "Um erro inexistente, porque a plataforma está fixa"],
      e: "Uma referência relativa a um objeto que se move transfere o erro dele para a posição do navio. Um refletor numa plataforma que se desloca não é um ponto fixo. O DPO deve validar que a referência é fixa ou descartá-la quando o movimento não estiver controlado."
    }
  },
  {
    m: 1, a: 2,
    es: {
      caso: "En un buque Clase 2, el DPO recibe un nuevo sistema de referencia de posición que se instala en paralelo con los existentes. Antes de usarlo en operación, el técnico lo configura y lo deja en modo de prueba. El DPO lo incluye en el cálculo de la posición con un peso igual a los demás.",
      q: "¿Qué debe exigirse antes de incorporar la referencia al cálculo en operación?",
      o: ["Nada, basta con que esté instalado y encendido", "Que tenga certificado del fabricante, aunque no se haya probado en el buque", "Que la referencia haya superado pruebas de coherencia y de transferencia en el buque, y que su incorporación se registre y se refleje en el análisis", "Que se use solo en el puerto, para no afectar a la operación"],
      e: "Una referencia nueva no aporta redundancia hasta que se demuestra que es coherente con las demás y que su incorporación no altera la posición. Las pruebas en el buque y el registro de la decisión son parte del control de cambios, y el análisis de consecuencias debe actualizarse."
    },
    pt: {
      caso: "Em um navio Classe 2, o DPO recebe um novo sistema de referência de posição que é instalado em paralelo com os existentes. Antes de usá-lo em operação, o técnico o configura e o deixa em modo de teste. O DPO o inclui no cálculo da posição com peso igual ao dos demais.",
      q: "O que deve ser exigido antes de incorporar a referência ao cálculo em operação?",
      o: ["Nada, basta que esteja instalado e ligado", "Que tenha certificado do fabricante, mesmo que não tenha sido testado no navio", "Que a referência tenha passado em testes de coerência e de transferência no navio, e que sua incorporação seja registrada e refletida na análise", "Que seja usada somente no porto, para não afetar a operação"],
      e: "Uma referência nova não traz redundância até que se demonstre que é coerente com as demais e que sua incorporação não altera a posição. Os testes no navio e o registro da decisão fazem parte do controle de mudanças, e a análise de consequências deve ser atualizada."
    }
  },
  {
    m: 1, a: 0,
    es: {
      caso: "Un buque Clase 2 realiza una operación de largo plazo. A mitad del trabajo, el DPO detecta que el registro DP de las últimas doce horas no refleja tres cambios de modo de los propulsores ni dos desselecciones de referencia, aunque el sistema los tiene en su historial.",
      q: "¿Qué problema de gestión se identifica y qué debe hacerse?",
      o: ["Que el registro manual no coincide con el historial del sistema: debe conciliarse, corregirse con la información real y revisarse la causa de la omisión", "Que el historial del sistema es el que debe borrarse", "Que los cambios de modo no deben registrarse durante la operación", "Que el registro solo es necesario al final del trabajo"],
      e: "Un registro que no coincide con el historial del sistema impide reconstruir la operación y analizar la redundancia en cada momento. La conciliación entre el registro y el historial es parte de la gestión. Borrar el historial o no registrar los cambios elimina la trazabilidad."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação de longo prazo. No meio do trabalho, o DPO percebe que o registro DP das últimas doze horas não reflete três mudanças de modo dos propulsores nem duas desseleções de referência, embora o sistema as tenha no histórico.",
      q: "Qual problema de gestão é identificado e o que deve ser feito?",
      o: ["Que o registro manual não coincide com o histórico do sistema: deve ser conciliado, corrigido com a informação real e a causa da omissão revisada", "Que o histórico do sistema é o que deve ser apagado", "Que as mudanças de modo não devem ser registradas durante a operação", "Que o registro só é necessário ao final do trabalho"],
      e: "Um registro que não coincide com o histórico do sistema impede reconstruir a operação e analisar a redundância em cada momento. A conciliação entre o registro e o histórico faz parte da gestão. Apagar o histórico ou não registrar as mudanças elimina a rastreabilidade."
    }
  },
  {
    m: 1, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un plan de contingencia que exige un tiempo de respuesta de 10 minutos para desconectarse. Durante un simulacro, el tiempo real es de 22 minutos porque el procedimiento requiere confirmar cada paso por radio y hay un solo operador disponible.",
      q: "¿Qué debe concluir el DPO sobre el plan?",
      o: ["Que el simulacro es irrelevante porque el buque no ha desconectado nunca", "Que el plan es válido porque los 22 minutos son aceptables si la condición lo permite", "Que el plan debe ajustarse a 10 minutos, reduciendo la confirmación", "Que el plan no cumple: su tiempo real excede el exigido, así que debe revisarse el procedimiento y la dotación, o limitar las condiciones de operación"],
      e: "Un plan de contingencia solo es válido si el tiempo real de respuesta cabe en el tiempo exigido. Un simulacro que da 22 minutos frente a 10 minutos exigidos revela un defecto de procedimiento o de dotación. Reducir la confirmación para cumplir el tiempo sería inseguro."
    },
    pt: {
      caso: "Um navio Classe 2 tem um plano de contingência que exige um tempo de resposta de 10 minutos para se desconectar. Durante um simulado, o tempo real é de 22 minutos porque o procedimento exige confirmar cada passo por rádio e há apenas um operador disponível.",
      q: "O que o DPO deve concluir sobre o plano?",
      o: ["Que o simulado é irrelevante porque o navio nunca se desconectou", "Que o plano é válido porque os 22 minutos são aceitáveis se a condição permitir", "Que o plano deve ser ajustado para 10 minutos, reduzindo a confirmação", "Que o plano não atende: o tempo real excede o exigido, então o procedimento e a equipe devem ser revisados, ou as condições de operação limitadas"],
      e: "Um plano de contingência só é válido se o tempo real de resposta cabe no tempo exigido. Um simulado que dá 22 minutos frente a 10 minutos exigidos revela um defeito de procedimento ou de equipe. Reduzir a confirmação para cumprir o tempo seria inseguro."
    }
  },
  {
    m: 1, a: 1,
    es: {
      caso: "Antes de una operación crítica, el capitán pregunta al DPO si el buque 'cumple la Clase 2'. El DPO responde que sí, porque el buque tiene dos computadores DP, tres referencias y dos generadores. No ha revisado el FMEA ni el registro de pruebas de los últimos doce meses.",
      q: "¿Qué debe responder un DPO competente?",
      o: ["Que sí, porque el número de equipos define la clase", "Que la clase no puede confirmarse solo contando equipos: debe verificarse con el FMEA vigente, las pruebas recientes y la configuración real antes de afirmarlo", "Que la clase es la que indica el certificado, sin más", "Que no es posible saber la clase hasta terminar la operación"],
      e: "Afirmar que el buque cumple una clase por contar equipos es un error técnico grave. La clase se demuestra con el FMEA, las pruebas de fallo y la configuración real. Un DPO competente responde con esa verificación, no con un recuento."
    },
    pt: {
      caso: "Antes de uma operação crítica, o comandante pergunta ao DPO se o navio 'atende à Classe 2'. O DPO responde que sim, porque o navio tem dois computadores DP, três referências e dois geradores. Ele não revisou a FMEA nem o registro de testes dos últimos doze meses.",
      q: "O que um DPO competente deve responder?",
      o: ["Que sim, porque o número de equipamentos define a classe", "Que a classe não pode ser confirmada apenas contando equipamentos: deve ser verificada com a FMEA vigente, os testes recentes e a configuração real antes de afirmar", "Que a classe é a que indica o certificado, sem mais", "Que não é possível saber a classe até terminar a operação"],
      e: "Afirmar que o navio atende a uma classe contando equipamentos é um erro técnico grave. A classe se demonstra com a FMEA, os testes de falha e a configuração real. Um DPO competente responde com essa verificação, não com uma contagem."
    }
  },
  {
    m: 1, a: 2,
    es: {
      caso: "Un buque Clase 2 con capability plot en condición normal y de falla de peor caso aceptables inicia una operación. Durante el trabajo, el DPO recibe un aviso de que el propulsor de proa tiene una vibración anómala que podría requerir una parada de emergencia en cualquier momento.",
      q: "¿Qué debe hacer el DPO?",
      o: ["Continuar, porque el plot es aceptable y la vibración no es una falla", "Ocultar el aviso para no alarmar a la tripulación", "Evaluar el efecto de la posible parada del propulsor sobre el plot de falla, reevaluar la operación y decidir la suspensión si la configuración resultante no cumple", "Esperar a que el propulsor falle para tomar una decisión"],
      e: "Una posible parada de un propulsor es un cambio en la configuración que el plot de falla debía cubrir. Si el propulsor falla, la configuración ya no es la analizada. El DPO debe evaluar esa situación con antelación y decidir sobre la operación antes de que ocurra, no después."
    },
    pt: {
      caso: "Um navio Classe 2 com capability plot de condição normal e de falha de pior caso aceitáveis inicia uma operação. Durante o trabalho, o DPO recebe um aviso de que o propulsor de proa tem vibração anômala que poderia exigir uma parada de emergência a qualquer momento.",
      q: "O que o DPO deve fazer?",
      o: ["Continuar, porque o plot é aceitável e a vibração não é uma falha", "Ocultar o aviso para não alarmar a tripulação", "Avaliar o efeito de uma possível parada do propulsor sobre o plot de falha, reavaliar a operação e decidir a suspensão se a configuração resultante não atender", "Esperar o propulsor falhar para tomar uma decisão"],
      e: "Uma possível parada de um propulsor é uma mudança de configuração que o plot de falha deveria cobrir. Se o propulsor falhar, a configuração já não é a analisada. O DPO deve avaliar essa situação com antecedência e decidir sobre a operação antes que ocorra, não depois."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "Un buque Clase 2 usa dos computadores DP con un enlace de comunicación entre ellos para sincronizar los datos. El enlace se apoya en un único conversor de medios de fibra a cobre. Durante una operación, el conversor se sobrecalienta y los computadores siguen operando, pero dejan de sincronizarse, y ambos calculan la posición con datos distintos.",
      q: "¿Qué falla de diseño permite esta situación?",
      o: ["Ninguna: cada computador opera de forma autónoma y eso es correcto", "Que el conversor debió ser de fibra en todo el recorrido", "Que el enlace de sincronización es un punto único de fallo común, y que la pérdida de coherencia entre computadores no está detectada por el sistema", "Que la sincronización no es necesaria en Clase 2"],
      e: "Dos computadores que dejan de sincronizarse pueden calcular posiciones distintas sin que el sistema lo advierta. Un conversor único en el enlace es un punto de fallo común. El diseño debe vigilar la coherencia entre computadores y eliminar ese punto único."
    },
    pt: {
      caso: "Um navio Classe 2 usa dois computadores DP com um enlace de comunicação entre eles para sincronizar os dados. O enlace depende de um único conversor de meio de fibra para cobre. Durante uma operação, o conversor superaquece e os computadores continuam operando, mas deixam de sincronizar, e ambos calculam a posição com dados diferentes.",
      q: "Qual falha de projeto permite essa situação?",
      o: ["Nenhuma: cada computador opera de forma autônoma e isso é correto", "Que o conversor devia ser de fibra em todo o percurso", "Que o enlace de sincronização é um ponto único de falha comum, e a perda de coerência entre os computadores não é detectada pelo sistema", "Que a sincronização não é necessária na Classe 2"],
      e: "Dois computadores que deixam de sincronizar podem calcular posições diferentes sem que o sistema avise. Um conversor único no enlace é um ponto de falha comum. O projeto deve monitorar a coerência entre computadores e eliminar esse ponto único."
    }
  },
  {
    m: 2, a: 1,
    es: {
      caso: "En un buque Clase 2, el sistema de alarmas del controlador se configuró para avisar solo cuando dos o más sensores de la misma función se desvían simultáneamente. Un sensor de rumbo se desvía de forma gradual durante cuatro horas, mientras los demás permanecen estables.",
      q: "¿Qué limitación del diseño de alarmas explica que no se avisara?",
      o: ["Ninguna: la alarma funcionó como estaba diseñada", "Que la alarma exige desviación simultánea de dos sensores, así que un sensor que deriva solo y lentamente no genera aviso; el diseño de alarmas debe cubrir desviaciones individuales graduales", "Que el sensor de rumbo debió desactivarse", "Que el rumbo no es una variable de DP"],
      e: "La lógica de alarmas que solo actúa ante desviaciones simultáneas no detecta un sensor que deriva por sí solo. La deriva gradual es un tipo de fallo frecuente y puede comprometer el control durante horas. El diseño de alarmas debe cubrir desviaciones individuales lentas."
    },
    pt: {
      caso: "Em um navio Classe 2, o sistema de alarmes do controlador foi configurado para avisar somente quando dois ou mais sensores da mesma função se desviam simultaneamente. Um sensor de rumo se desvia de forma gradual durante quatro horas, enquanto os demais permanecem estáveis.",
      q: "Qual limitação do projeto de alarmes explica que não houve aviso?",
      o: ["Nenhuma: o alarme funcionou como foi projetado", "Que o alarme exige desvio simultâneo de dois sensores, então um sensor que deriva sozinho e lentamente não gera aviso; o projeto de alarmes deve cobrir desvios individuais graduais", "Que o sensor de rumo devia ter sido desativado", "Que o rumo não é uma variável do DP"],
      e: "A lógica de alarmes que só atua diante de desvios simultâneos não detecta um sensor que deriva sozinho. A deriva gradual é um tipo de falha frequente e pode comprometer o controle por horas. O projeto de alarmes deve cobrir desvios individuais lentos."
    }
  },
  {
    m: 2, a: 0,
    es: {
      caso: "Un buque Clase 2 usa un controlador de posición con dos bucles de control: uno rápido para los propulsores y uno lento para los cambios de referencia. Durante un cambio de referencia en condiciones de viento fuerte, el bucle lento y el rápido entran en oscilación, con movimientos cíclicos del buque.",
      q: "¿Qué debe revisar el DPO en la configuración del controlador?",
      o: ["La separación de frecuencias y ganancias de los bucles, para que no interactúen de forma inestable, y los límites de los cambios de referencia", "Que el viento fuerte debe prohibirse durante cualquier cambio", "Que el bucle rápido debe apagarse", "Que el controlador no necesita límites en los cambios de referencia"],
      e: "Dos bucles de control mal separados pueden oscilar entre sí, sobre todo bajo cargas fuertes. La estabilidad del sistema depende de la separación de dinámicas y de los límites de los cambios. Un cambio de referencia sin límites puede excitar esa oscilación."
    },
    pt: {
      caso: "Um navio Classe 2 usa um controlador de posição com dois laços de controle: um rápido para os propulsores e um lento para as mudanças de referência. Durante uma mudança de referência em vento forte, o laço lento e o rápido entram em oscilação, com movimentos cíclicos do navio.",
      q: "O que o DPO deve revisar na configuração do controlador?",
      o: ["A separação de frequências e ganhos dos laços, para que não interajam de forma instável, e os limites das mudanças de referência", "Que o vento forte deve ser proibido durante qualquer mudança", "Que o laço rápido deve ser desligado", "Que o controlador não precisa de limites nas mudanças de referência"],
      e: "Dois laços de controle mal separados podem oscilar entre si, sobretudo sob cargas fortes. A estabilidade do sistema depende da separação de dinâmicas e dos limites das mudanças. Uma mudança de referência sem limites pode excitar essa oscilação."
    }
  },
  {
    m: 2, a: 2,
    es: {
      caso: "Un buque Clase 2 realiza una transferencia de control entre estaciones. El sistema de la estación de reserva está en modo espera, pero su lista de referencias activas es distinta a la de la estación de control porque una de ellas se desseleccionó en la estación activa hace una hora.",
      q: "¿Qué riesgo introduce esta diferencia en la transferencia?",
      o: ["Ninguno, la estación de reserva corrige la diferencia sola", "Que la transferencia es más rápida", "Que la estación de reserva asume el control con una configuración distinta a la que el operador creía tener, y puede provocar un salto de posición", "Que la deselección solo afecta a la pantalla"],
      e: "Una transferencia entre estaciones con listas de referencias distintas hace que la estación entrante opere con una configuración que el operador no esperaba. El cambio de referencias provoca un salto de la posición calculada. Las listas deben igualarse antes de transferir."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma transferência de controle entre estações. O sistema da estação de reserva está em modo de espera, mas sua lista de referências ativas é diferente da estação de controle, porque uma delas foi desselecionada na estação ativa há uma hora.",
      q: "Que risco essa diferença introduz na transferência?",
      o: ["Nenhum, a estação de reserva corrige a diferença sozinha", "Que a transferência é mais rápida", "Que a estação de reserva assume o controle com uma configuração diferente da que o operador acreditava ter, e pode provocar um salto de posição", "Que a deseleção afeta só a tela"],
      e: "Uma transferência entre estações com listas de referências diferentes faz a estação que entra operar com uma configuração que o operador não esperava. A mudança de referências provoca um salto da posição calculada. As listas devem ser igualadas antes de transferir."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "En un buque Clase 2, el sistema de control de propulsores recibe las órdenes de dos controladores redundantes a través de un bus compartido. Un fallo en el bus produce mensajes repetidos de un controlador que el módulo de propulsión acepta como órdenes nuevas, y el propulsor cambia de paso de forma errática.",
      q: "¿Qué falla de diseño se identifica?",
      o: ["Que el propulsor debe tener paso fijo", "Que el bus no debe usarse con dos controladores", "Que la falta de validación de mensajes repetidos o fuera de secuencia permite que un fallo de comunicación se convierta en orden de control", "Que el propulsor no debe recibir órdenes por bus"],
      e: "Un módulo que acepta cualquier mensaje como orden nueva trata los repetidos como si fueran cambios reales. La validación de secuencia y de identidad de los mensajes evita que un fallo de comunicación se transforme en una orden de control. Es un fallo de diseño del protocolo, no del propulsor."
    },
    pt: {
      caso: "Em um navio Classe 2, o sistema de controle dos propulsores recebe as ordens de dois controladores redundantes por um barramento compartilhado. Uma falha no barramento produz mensagens repetidas de um controlador que o módulo de propulsão aceita como novas ordens, e o propulsor muda de passo de forma errática.",
      q: "Qual falha de projeto é identificada?",
      o: ["Que o propulsor deve ter passo fixo", "Que o barramento não deve ser usado com dois controladores", "Que a falta de validação de mensagens repetidas ou fora de sequência permite que uma falha de comunicação vire uma ordem de controle", "Que o propulsor não deve receber ordens por barramento"],
      e: "Um módulo que aceita qualquer mensagem como nova ordem trata as repetidas como mudanças reais. A validação de sequência e de identidade das mensagens impede que uma falha de comunicação se transforme em ordem de controle. É uma falha de projeto do protocolo, não do propulsor."
    }
  },
  {
    m: 3, a: 0,
    es: {
      caso: "Un DPO de guardia en Clase 2 observa que la posición del buque se desplaza lentamente hacia barlovento durante una operación de larga duración, sin alarma. El sistema muestra el empuje dentro de su rango normal. El DPO lo atribuye a una corriente que no aparece en el registro meteorológico.",
      q: "¿Qué debe hacer el DPO para confirmar o descartar la hipótesis?",
      o: ["Contrastar la deriva con la corriente medida, las referencias individuales y el empuje por propulsor, y no asumir una causa sin comprobarla", "Aceptar la explicación y no hacer nada más", "Cambiar a joystick hasta que cese la deriva", "Ignorar la deriva porque el empuje está en rango"],
      e: "Atribuir una deriva a una corriente no registrada sin comprobarlo es una suposición peligrosa. La comprobación con los datos disponibles (corriente, referencias individuales, reparto de empuje) permite distinguir si el origen es ambiental o de un sensor. Una deriva lenta con empuje normal puede ser un error de referencia."
    },
    pt: {
      caso: "Um DPO de serviço em Classe 2 observa que a posição do navio se desloca lentamente a barlavento durante uma operação longa, sem alarme. O sistema mostra o empuxo dentro da faixa normal. O DPO atribui isso a uma corrente que não aparece no registro meteorológico.",
      q: "O que o DPO deve fazer para confirmar ou descartar a hipótese?",
      o: ["Confrontar a deriva com a corrente medida, as referências individuais e o empuxo por propulsor, sem assumir uma causa sem verificá-la", "Aceitar a explicação e não fazer mais nada", "Passar para joystick até a deriva cessar", "Ignorar a deriva porque o empuxo está na faixa"],
      e: "Atribuir uma deriva a uma corrente não registrada sem verificar é uma suposição perigosa. A checagem com os dados disponíveis (corrente, referências individuais, repartição de empuxo) permite distinguir se a origem é ambiental ou de um sensor. Uma deriva lenta com empuxo normal pode ser erro de referência."
    }
  },
  {
    m: 3, a: 2,
    es: {
      caso: "Durante la preparación de una operación, el DPO descubre que el manual de operación de su buque es de la versión anterior del sistema de control, mientras que el sistema instalado fue actualizado hace seis meses con un nuevo filtro de referencias que cambia el comportamiento ante fallos.",
      q: "¿Qué riesgo implica usar el manual desactualizado?",
      o: ["Ninguno, el manual describe el comportamiento básico del sistema", "Que el manual es más seguro porque es más antiguo", "Que las instrucciones de respuesta ante fallos no reflejan el comportamiento actual del sistema, y el DPO puede actuar con expectativas incorrectas", "Que el filtro nuevo debe retirarse para usar el manual"],
      e: "Un manual desactualizado describe un comportamiento que ya no es el real. Si el filtro cambió cómo responde el sistema ante fallos, las instrucciones pueden llevar a una respuesta equivocada. El manual, las instrucciones a bordo y el sistema instalado deben estar alineados."
    },
    pt: {
      caso: "Durante a preparação de uma operação, o DPO descobre que o manual de operação do seu navio é da versão anterior do sistema de controle, enquanto o sistema instalado foi atualizado há seis meses com um novo filtro de referências que muda o comportamento diante de falhas.",
      q: "Que risco o uso do manual desatualizado implica?",
      o: ["Nenhum, o manual descreve o comportamento básico do sistema", "Que o manual é mais seguro porque é mais antigo", "Que as instruções de resposta a falhas não refletem o comportamento atual do sistema, e o DPO pode agir com expectativas incorretas", "Que o filtro novo deve ser retirado para usar o manual"],
      e: "Um manual desatualizado descreve um comportamento que já não é o real. Se o filtro mudou a resposta do sistema a falhas, as instruções podem levar a uma reação errada. O manual, as instruções a bordo e o sistema instalado devem estar alinhados."
    }
  },
  {
    m: 3, a: 1,
    es: {
      caso: "Antes de iniciar una operación en Clase 2, el DPO realiza la prueba de referencias y observa que dos sistemas de referencia coinciden perfectamente, pero el tercero tiene una diferencia de 0,4 metros que se mantiene constante. El DPO decide no hacer nada porque 0,4 metros está dentro de la tolerancia del manual.",
      q: "¿Qué debe considerar el DPO antes de aceptar esa decisión?",
      o: ["Que la tolerancia del manual se aplica a la precisión de cada referencia, y una diferencia constante puede indicar un error de calibración o de montaje que debe investigarse antes de la operación", "Que la diferencia no importa si los otros dos coinciden", "Que el tercer sistema debe desconectarse sin más", "Que la prueba de referencias no se necesita si el manual la tolera"],
      e: "Una diferencia constante dentro de tolerancia puede esconder un error de calibración o de montaje que se sumará a otros errores. El criterio de tolerancia se aplica a la precisión, no es una excusa para omitir la investigación de una discrepancia sistemática."
    },
    pt: {
      caso: "Antes de iniciar uma operação em Classe 2, o DPO realiza o teste de referências e observa que dois sistemas de referência coincidem perfeitamente, mas o terceiro tem diferença de 0,4 metro que se mantém constante. O DPO decide não fazer nada porque 0,4 metro está dentro da tolerância do manual.",
      q: "O que o DPO deve considerar antes de aceitar essa decisão?",
      o: ["Que a tolerância do manual se aplica à precisão de cada referência, e uma diferença constante pode indicar erro de calibração ou de montagem que deve ser investigado antes da operação", "Que a diferença não importa se os outros dois coincidem", "Que o terceiro sistema deve ser desconectado sem mais", "Que o teste de referências não é necessário se o manual o tolera"],
      e: "Uma diferença constante dentro da tolerância pode esconder um erro de calibração ou de montagem que somará com outros erros. O critério de tolerância se aplica à precisão e não é desculpa para deixar de investigar uma discrepância sistemática."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "Un buque Clase 2 opera con tres referencias de posición. Durante una maniobra, el GNSS muestra una posición que se aparta 2 metros de las otras dos, que coinciden entre sí. El DPO sospecha un salto de la solución GNSS por un cambio de satélites, pero el sistema filtra la referencia durante 30 segundos antes de descartarla.",
      q: "¿Qué debe concluir el DPO sobre el comportamiento del sistema?",
      o: ["Que el sistema actuó correctamente, porque el filtro protege siempre contra cualquier salto", "Que el filtro debe eliminarse para evitar retardos", "Que la referencia debía descartarse de inmediato, y que los 30 segundos de filtrado con un salto real pueden mover el buque antes de que el sistema responda", "Que los 30 segundos son el tiempo normal de estabilización de cualquier referencia"],
      e: "Un filtro que tarda en descartar una referencia discrepante puede dejar que el controlador reaccione a un salto falso durante segundos. Durante ese tiempo, el buque se mueve. El tiempo de detección de discrepancias debe ser compatible con la dinámica del buque y con la tolerancia de la operación."
    },
    pt: {
      caso: "Um navio Classe 2 opera com três referências de posição. Durante uma manobra, o GNSS mostra uma posição que se afasta 2 metros das outras duas, que coincidem entre si. O DPO suspeita de um salto da solução GNSS por troca de satélites, mas o sistema filtra a referência por 30 segundos antes de descartá-la.",
      q: "O que o DPO deve concluir sobre o comportamento do sistema?",
      o: ["Que o sistema agiu corretamente, porque o filtro protege sempre contra qualquer salto", "Que o filtro deve ser eliminado para evitar atrasos", "Que a referência devia ser descartada de imediato, e os 30 segundos de filtragem com um salto real podem mover o navio antes de o sistema reagir", "Que os 30 segundos são o tempo normal de estabilização de qualquer referência"],
      e: "Um filtro que demora a descartar uma referência discrepante pode deixar o controlador reagir a um salto falso por segundos. Nesse tempo, o navio se move. O tempo de detecção de discrepâncias deve ser compatível com a dinâmica do navio e com a tolerância da operação."
    }
  },
  {
    m: 5, a: 0,
    es: {
      caso: "Un buque Clase 2 realiza una operación con un anemómetro de ultrasonidos. Tras una lluvia intensa, el sensor da lecturas de viento con un patrón de ruido que aumenta de forma gradual durante la hora siguiente, aunque el viento real es estable.",
      q: "¿Qué causa es la más probable y qué debe hacerse?",
      o: ["Gotas de agua o hielo en los transductores que alteran la medida: secar o limpiar el sensor, contrastar con el de reserva y evaluar su estado", "Un aumento real del viento que no se refleja en el pronóstico", "Un error del girocompás que afecta al anemómetro", "Un efecto normal de la lluvia que no requiere acción"],
      e: "Los anemómetros ultrasónicos son sensibles a la humedad y a la contaminación de sus transductores. Un ruido que crece tras la lluvia apunta a agua o suciedad en los sensores. La acción es inspeccionar el sensor, contrastarlo con el de reserva y evaluar si sigue siendo fiable para el feed-forward."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação com um anemômetro ultrassônico. Após uma chuva forte, o sensor dá leituras de vento com um padrão de ruído que aumenta de forma gradual durante a hora seguinte, embora o vento real seja estável.",
      q: "Qual é a causa mais provável e o que deve ser feito?",
      o: ["Gotas de água ou gelo nos transdutores que alteram a medida: secar ou limpar o sensor, contrastar com o de reserva e avaliar seu estado", "Um aumento real do vento que não aparece na previsão", "Um erro do girocompasso que afeta o anemômetro", "Um efeito normal da chuva que não exige ação"],
      e: "Os anemômetros ultrassônicos são sensíveis à umidade e à contaminação dos transdutores. Um ruído que cresce após a chuva aponta para água ou sujeira nos sensores. A ação é inspecionar o sensor, contrastá-lo com o de reserva e avaliar se ainda é confiável para o feed-forward."
    }
  },
  {
    m: 6, a: 2,
    es: {
      caso: "Un buque Clase 2 tiene un sistema de frenado regenerativo en el propulsor de popa, que devuelve energía a la red cuando el propulsor desacelera. Durante una maniobra de cambio de dirección del empuje, la energía devuelta sube la tensión de la barra 1 por encima del límite, y el sistema de protección desconecta el propulsor.",
      q: "¿Qué debe revisarse en el diseño de la red?",
      o: ["Que el propulsor debe funcionar sin regeneración en DP", "Que el buque debe evitar cambios de dirección del empuje", "Que la absorción de la energía regenerada y los límites de tensión deben dimensionarse para el peor caso de cambio de empuje, no solo para el régimen normal", "Que la barra 1 debe apagarse durante las maniobras"],
      e: "La energía regenerada sube la tensión de la red. Si la red no puede absorberla, la protección desconecta el propulsor en el momento en que más se necesita. El dimensionamiento debe considerar el peor caso de cambio de empuje, no solo el funcionamiento normal."
    },
    pt: {
      caso: "Um navio Classe 2 tem um sistema de frenagem regenerativa no propulsor de popa, que devolve energia à rede quando o propulsor desacelera. Durante uma manobra de inversão do empuxo, a energia devolvida eleva a tensão da barra 1 acima do limite, e o sistema de proteção desliga o propulsor.",
      q: "O que deve ser revisado no projeto da rede?",
      o: ["Que o propulsor deve operar sem regeneração em DP", "Que o navio deve evitar mudanças de direção do empuxo", "Que a absorção da energia regenerada e os limites de tensão devem ser dimensionados para o pior caso de inversão de empuxo, não só para o regime normal", "Que a barra 1 deve ser desligada durante as manobras"],
      e: "A energia regenerada eleva a tensão da rede. Se a rede não consegue absorvê-la, a proteção desliga o propulsor justamente no momento em que mais é necessário. O dimensionamento deve considerar o pior caso de inversão de empuxo, não só o funcionamento normal."
    }
  },
  {
    m: 6, a: 0,
    es: {
      caso: "Un buque Clase 2 usa dos generadores con sistemas de excitación independientes. Durante un fallo del regulador de uno de ellos, el generador afectado mantiene la tensión, pero su potencia reactiva oscila de forma cíclica, y el otro generador sigue la oscilación sin amortiguarla.",
      q: "¿Qué fenómeno se produce y cómo debe tratarse?",
      o: ["Una oscilación de potencia reactiva entre generadores en paralelo: se trata aislando el regulador averiado y verificando la estabilidad de la red antes de reanudar", "Un fenómeno normal que no requiere acción", "Una mejora de la eficiencia del reparto", "Un efecto de la frecuencia que debe corregirse subiendo las revoluciones"],
      e: "Dos generadores en paralelo pueden entrar en oscilación de reactiva cuando un regulador falla. La estabilidad depende de los reguladores y de la red. El procedimiento correcto es aislar el regulador averiado y verificar la estabilidad antes de volver a operar en DP."
    },
    pt: {
      caso: "Um navio Classe 2 usa dois geradores com sistemas de excitação independentes. Durante uma falha do regulador de um deles, o gerador afetado mantém a tensão, mas sua potência reativa oscila de forma cíclica, e o outro gerador segue a oscilação sem amortecê-la.",
      q: "Que fenômeno ocorre e como deve ser tratado?",
      o: ["Uma oscilação de potência reativa entre geradores em paralelo: é tratada isolando o regulador com defeito e verificando a estabilidade da rede antes de retomar", "Um fenômeno normal que não exige ação", "Uma melhoria da eficiência da repartição", "Um efeito da frequência que deve ser corrigido aumentando as rotações"],
      e: "Dois geradores em paralelo podem entrar em oscilação de reativo quando um regulador falha. A estabilidade depende dos reguladores e da rede. O procedimento correto é isolar o regulador com defeito e verificar a estabilidade antes de voltar a operar em DP."
    }
  },
  {
    m: 7, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un capability plot que incluye la corriente en tres direcciones: proa, través y popa. En una operación nueva, la corriente llega en diagonal, a 45 grados entre proa y través de babor. El DPO interpola entre las direcciones del plot para estimar el margen.",
      q: "¿Qué debe concluir el DPO sobre la interpolación?",
      o: ["Que la interpolación es siempre válida, porque el margen varía de forma lineal con el ángulo", "Que la interpolación no tiene utilidad, porque el margen no depende de la dirección", "Que debe usarse la dirección de corriente más favorable para simplificar la operación", "Que la interpolación lineal puede no ser válida: el margen depende de la combinación de fuerzas y momentos, y un valor intermedio debe calcularse o verificarse en el modelo"],
      e: "La capacidad del buque no varía linealmente con el ángulo de la corriente: depende de la combinación de fuerzas laterales, longitudinales y momentos, y de la disposición de los propulsores. Interpolar entre tres direcciones puede subestimar o sobreestimar el margen real. Debe calcularse o verificarse directamente en el modelo."
    },
    pt: {
      caso: "Um navio Classe 2 tem um capability plot que inclui a corrente em três direções: proa, través e popa. Em uma operação nova, a corrente chega em diagonal, a 45 graus entre a proa e o través de bombordo. O DPO interpola entre as direções do plot para estimar a margem.",
      q: "O que o DPO deve concluir sobre a interpolação?",
      o: ["Que a interpolação é sempre válida, porque a margem varia de forma linear com o ângulo", "Que a interpolação não tem utilidade, porque a margem não depende da direção", "Que deve ser usada a direção de corrente mais favorável para simplificar a operação", "Que a interpolação linear pode não ser válida: a margem depende da combinação de forças e momentos, e um valor intermediário deve ser calculado ou verificado no modelo"],
      e: "A capacidade do navio não varia linearmente com o ângulo da corrente: depende da combinação de forças laterais, longitudinais e momentos, e da disposição dos propulsores. Interpolar entre três direções pode subestimar ou superestimar a margem real. Deve ser calculada ou verificada diretamente no modelo."
    }
  },
  {
    m: 7, a: 0,
    es: {
      caso: "Un buque Clase 2 opera con un plan de suspensión basado en el viento: se suspende la operación cuando el viento supera 30 nudos. Durante el trabajo, el viento se mantiene en 22 nudos, pero el oleaje se ha duplicado y el buque se mueve de forma que el consumo de los propulsores es el 95 % de su capacidad.",
      q: "¿Qué limitación tiene el plan de suspensión?",
      o: ["Que solo considera el viento, y la condición real depende también del oleaje, cuyo efecto puede reducir el margen aunque el viento esté dentro del criterio", "Que el viento de 30 nudos es un criterio excesivo", "Que el oleaje no afecta al buque en DP", "Que el consumo de los propulsores no debe mirarse"],
      e: "Un criterio de suspensión que solo considera el viento omite otras variables. El oleaje aumenta el movimiento del buque y la potencia requerida, de modo que el margen puede agotarse con viento dentro de criterio. El plan debe considerar la condición combinada, incluida la potencia que se está usando."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um plano de suspensão baseado no vento: a operação é suspensa quando o vento supera 30 nós. Durante o trabalho, o vento se mantém em 22 nós, mas a ondulação dobrou e o navio se move de forma que o consumo dos propulsores está em 95 % da capacidade.",
      q: "Qual limitação tem o plano de suspensão?",
      o: ["Que considera só o vento, e a condição real depende também da ondulação, cujo efeito pode reduzir a margem mesmo com o vento dentro do critério", "Que o vento de 30 nós é um critério excessivo", "Que a ondulação não afeta o navio em DP", "Que o consumo dos propulsores não deve ser observado"],
      e: "Um critério de suspensão que considera só o vento omite outras variáveis. A ondulação aumenta o movimento do navio e a potência requerida, então a margem pode se esgotar com vento dentro do critério. O plano deve considerar a condição combinada, incluindo a potência que está sendo usada."
    }
  },
  {
    m: 7, a: 2,
    es: {
      caso: "Un buque Clase 2 cumple su análisis de capacidad para la operación actual. El cliente propone añadir una segunda grúa de 40 toneladas a 15 metros de la línea central, en el mismo costado, para un trabajo simultáneo. El DPO responde que la operación puede seguir, porque el buque ya cumple el análisis con la primera grúa.",
      q: "¿Qué error hay en la respuesta del DPO?",
      o: ["Ninguno: el análisis se cumple y basta", "Que la segunda grúa no puede instalarse nunca en un buque DP", "Que la segunda grúa cambia la distribución de masas y momentos, así que el análisis debe repetirse con la nueva configuración, no suponer que sigue válido", "Que el análisis solo se hace una vez por contrato"],
      e: "Añadir una carga en el mismo costado modifica el momento y la distribución de masas. El análisis actual corresponde a otra configuración, así que no puede darse por válido. El DPO debe repetirlo para la nueva condición antes de autorizar el trabajo."
    },
    pt: {
      caso: "Um navio Classe 2 cumpre sua análise de capacidade para a operação atual. O cliente propõe acrescentar um segundo guindaste de 40 toneladas a 15 metros da linha central, no mesmo bordo, para um trabalho simultâneo. O DPO responde que a operação pode seguir, porque o navio já cumpre a análise com o primeiro guindaste.",
      q: "Que erro há na resposta do DPO?",
      o: ["Nenhum: a análise é cumprida e basta", "Que o segundo guindaste nunca pode ser instalado em um navio DP", "Que o segundo guindaste muda a distribuição de massas e momentos, então a análise deve ser repetida com a nova configuração, não presumida como válida", "Que a análise só é feita uma vez por contrato"],
      e: "Acrescentar uma carga no mesmo bordo modifica o momento e a distribuição de massas. A análise atual corresponde a outra configuração, então não pode ser considerada válida. O DPO deve repeti-la para a nova condição antes de autorizar o trabalho."
    }
  },
  {
    m: 6, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene un generador de emergencia con capacidad de 500 kW. El sistema de emergencia alimenta la sala de control DP, los sensores de referencia y un ventilador. El plan dice que, en apagón, la sala de control tiene energía garantizada. Durante una prueba, el ventilador arranca a plena carga y consume 380 kW durante el arranque.",
      q: "¿Qué efecto tiene el arranque del ventilador sobre la energía de emergencia?",
      o: ["Ninguno, 380 kW es menos de 500 kW en todo momento", "Que la energía de emergencia debe ser de 1 MW para cualquier consumidor", "Que el arranque y los consumos de la sala de control, los sensores y el ventilador pueden superar la capacidad en el pico, y el plan debe sumarlos con el arranque, no por separado", "Que el ventilador debe quitarse de la barra de emergencia"],
      e: "Un análisis de energía de emergencia debe sumar todos los consumidores conectados, con sus picos de arranque, no evaluar cada uno por separado. El pico del ventilador, sumado al consumo de la sala de control y los sensores, puede superar la capacidad. La garantía del plan depende de ese cálculo conjunto."
    },
    pt: {
      caso: "Um navio Classe 2 tem um gerador de emergência com capacidade de 500 kW. O sistema de emergência alimenta a sala de controle DP, os sensores de referência e um ventilador. O plano diz que, em apagão, a sala de controle tem energia garantida. Durante um teste, o ventilador parte com carga máxima e consome 380 kW durante a partida.",
      q: "Que efeito a partida do ventilador tem sobre a energia de emergência?",
      o: ["Nenhum, 380 kW é menos que 500 kW em todo momento", "Que a energia de emergência deve ser de 1 MW para qualquer consumidor", "Que a partida e os consumos da sala de controle, dos sensores e do ventilador podem superar a capacidade no pico, e o plano deve somá-los com a partida, não separadamente", "Que o ventilador deve ser retirado da barra de emergência"],
      e: "Uma análise de energia de emergência deve somar todos os consumidores ligados, com seus picos de partida, e não avaliar cada um separadamente. O pico do ventilador, somado ao consumo da sala de controle e dos sensores, pode superar a capacidade. A garantia do plano depende desse cálculo conjunto."
    }
  },
  {
    m: 6, a: 3,
    es: {
      caso: "Un buque Clase 2 realiza una operación con dos generadores de 3 MW cada uno, en paralelo. El DPO quiere añadir un tercer generador de 3 MW para tener más margen. Al sincronizarlo, la frecuencia del nuevo generador es 0,2 Hz superior a la de la red, y el acoplamiento se hace sin comprobar la secuencia de sincronización.",
      q: "¿Qué riesgo se ha generado con la sincronización?",
      o: ["Ninguno, la diferencia de 0,2 Hz es normal", "Que el tercer generador reduce el margen automáticamente", "Que el generador se reparte la carga sin problema porque tiene la misma potencia", "Que la conexión sin sincronización verificada puede producir un transitorio de par y de corriente que dispare protecciones o dañe el generador"],
      e: "Conectar un generador en paralelo sin sincronizar frecuencia, tensión y fase produce corrientes y pares transitorios elevados. Eso puede disparar protecciones o dañar el equipo, y en la peor condición puede provocar un apagón. La secuencia de sincronización debe verificarse antes de cualquier acoplamiento."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação com dois geradores de 3 MW cada um, em paralelo. O DPO quer acrescentar um terceiro gerador de 3 MW para ter mais margem. Ao sincronizá-lo, a frequência do novo gerador está 0,2 Hz acima da rede, e o acoplamento é feito sem verificar a sequência de sincronização.",
      q: "Que risco foi gerado com a sincronização?",
      o: ["Nenhum, a diferença de 0,2 Hz é normal", "Que o terceiro gerador reduz a margem automaticamente", "Que o gerador reparte a carga sem problema porque tem a mesma potência", "Que a conexão sem sincronização verificada pode produzir um transitório de torque e de corrente que dispare proteções ou danifique o gerador"],
      e: "Conectar um gerador em paralelo sem sincronizar frequência, tensão e fase produz correntes e torques transitórios elevados. Isso pode disparar proteções ou danificar o equipamento, e no pior caso causar um apagão. A sequência de sincronização deve ser verificada antes de qualquer acoplamento."
    }
  },
  {
    m: 4, a: 1,
    es: {
      caso: "Un buque Clase 2 opera con un sistema de referencia por microondas y un GNSS. Durante la operación, el sistema de microondas pierde la referencia del reflector durante un minuto por una lluvia intensa. Al recuperarla, la lectura de posición vuelve con un salto de 1 metro respecto a la posición del GNSS.",
      q: "¿Qué debe hacer el sistema y qué debe hacer el DPO?",
      o: ["Aceptar el salto de la microondas como la posición correcta, porque es la que volvió a estar disponible", "Que el sistema reinicialice la referencia sin validarla frente a las demás, y que el DPO la contraste antes de reincorporarla, porque el salto indica un error de la referencia", "Que el GNSS debe apagarse para seguir el microondas", "Que el salto es normal y no requiere acción"],
      e: "Una referencia que se reincorpora con un salto respecto a las demás no debe entrar en el cálculo sin validación. La reincorporación debe comprobar la coherencia con el resto de referencias, y el DPO debe confirmarla antes de usarla. Un salto de 1 metro en una referencia recuperada indica un error que hay que resolver."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um sistema de referência por micro-ondas e um GNSS. Durante a operação, o sistema de micro-ondas perde a referência do refletor por um minuto por causa de uma chuva intensa. Ao recuperá-la, a leitura de posição volta com um salto de 1 metro em relação à posição do GNSS.",
      q: "O que o sistema deve fazer e o que o DPO deve fazer?",
      o: ["Aceitar o salto da micro-onda como a posição correta, porque é a que voltou a estar disponível", "Que o sistema reinicie a referência sem validá-la frente às demais, e que o DPO a confronte antes de reincorporá-la, porque o salto indica um erro da referência", "Que o GNSS deve ser desligado para seguir a micro-onda", "Que o salto é normal e não exige ação"],
      e: "Uma referência que volta com um salto em relação às demais não deve entrar no cálculo sem validação. A reincorporação deve verificar a coerência com as outras referências, e o DPO deve confirmá-la antes de usar. Um salto de 1 metro numa referência recuperada indica um erro a resolver."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "Un buque Clase 2 tiene un GNSS con antena de corrección RTK de radio. Durante una maniobra en zona de montañas, la señal de radio de corrección se bloquea intermitentemente. El receptor pasa a solución 'flotante' y luego vuelve a 'fija' de forma repetida.",
      q: "¿Qué debe considerar el DPO sobre esta referencia?",
      o: ["Que las transiciones entre solución flotante y fija producen saltos de posición: la referencia no debe usarse sin validación durante esas transiciones, y debe evaluarse la configuración sin ella", "Que la solución flotante es más precisa que la fija", "Que el cambio de solución no afecta a la posición", "Que la referencia debe usarse solo cuando está fija, sin más análisis"],
      e: "Una solución que alterna entre flotante y fija introduce saltos de posición, porque cada tipo de solución tiene una precisión distinta. La referencia no es fiable durante las transiciones. El DPO debe excluirla o validarla y reevaluar la configuración sin ella mientras dure el problema de corrección."
    },
    pt: {
      caso: "Um navio Classe 2 tem um GNSS com antena de correção RTK por rádio. Durante uma manobra em área montanhosa, o sinal de rádio de correção é bloqueado de forma intermitente. O receptor passa para solução 'flutuante' e depois volta a 'fixa' de forma repetida.",
      q: "O que o DPO deve considerar sobre essa referência?",
      o: ["Que as transições entre solução flutuante e fixa produzem saltos de posição: a referência não deve ser usada sem validação durante essas transições, e a configuração sem ela deve ser avaliada", "Que a solução flutuante é mais precisa que a fixa", "Que a mudança de solução não afeta a posição", "Que a referência deve ser usada somente quando está fixa, sem mais análise"],
      e: "Uma solução que alterna entre flutuante e fixa introduz saltos de posição, porque cada tipo de solução tem uma precisão diferente. A referência não é confiável durante as transições. O DPO deve excluí-la ou validá-la e reavaliar a configuração sem ela enquanto durar o problema de correção."
    }
  },
  {
    m: 5, a: 2,
    es: {
      caso: "Un buque Clase 2 usa un sensor de rumbo de fibra óptica y un girocompás convencional. Durante una operación en latitudes altas, el girocompás presenta una lectura de rumbo que difiere 1,5 grados del sensor de fibra, y el sistema selecciona la fuente con mejor valor de calidad, que es la de fibra.",
      q: "¿Qué limitación tiene la selección por calidad?",
      o: ["Ninguna: la calidad siempre refleja la exactitud del rumbo", "Que el girocompás siempre debe ser la referencia principal, sin excepciones", "Que la calidad indica la estabilidad interna del sensor, pero no garantiza exactitud frente a un error sistemático: la discrepancia debe investigarse con una tercera fuente", "Que el rumbo no influye en el control DP"],
      e: "Un sensor puede dar una lectura estable y de alta calidad interna y, aun así, estar desviado por un error sistemático. La selección por calidad no reemplaza la comparación con una fuente independiente. Una discrepancia de grados en el rumbo introduce un error de posición que debe investigarse."
    },
    pt: {
      caso: "Um navio Classe 2 usa um sensor de rumo de fibra óptica e um girocompasso convencional. Durante uma operação em latitudes altas, o girocompasso apresenta uma leitura de rumo que difere 1,5 grau do sensor de fibra, e o sistema seleciona a fonte com melhor valor de qualidade, que é a de fibra.",
      q: "Qual limitação tem a seleção por qualidade?",
      o: ["Nenhuma: a qualidade sempre reflete a exatidão do rumo", "Que o girocompasso deve ser sempre a referência principal, sem exceções", "Que a qualidade indica a estabilidade interna do sensor, mas não garante exatidão diante de um erro sistemático: a discrepância deve ser investigada com uma terceira fonte", "Que o rumo não influencia o controle DP"],
      e: "Um sensor pode dar uma leitura estável e de alta qualidade interna e, mesmo assim, estar desviado por um erro sistemático. A seleção por qualidade não substitui a comparação com uma fonte independente. Uma discrepância de graus no rumo introduz um erro de posição que deve ser investigado."
    }
  }
];
