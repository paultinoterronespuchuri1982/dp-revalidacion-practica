// 20 casos prácticos de nivel difícil, basados en tipos de incidente documentados por
// IMCA, el DP Committee (Learning from Incidents), North P&I y la conferencia DP IMCA 2025.
// Los escenarios están simplificados: son ilustrativos, no relatos de incidentes concretos.
// Cada caso exige combinar varios datos (configuración, carga, tiempos, criterios). Las opciones incorrectas
// son plausibles y se distinguen solo por razonamiento técnico.
// Campos: m = módulo NI; a = índice correcto; fuente = tipo de incidente en el que se basa.

export const CASOS = [
  {
    m: 2, a: 1, fuente: "Cambio de control entre estaciones (North P&I, Control Change Over)",
    es: {
      caso: "Estás en la consola 1 con el buque en Auto DP, posición fija y proa 045. La consola 2 tiene la proa consigna en 050 y la referencia GNSS 2 deseleccionada. El cambio de control está programado tras el relevo, con viento 25 nudos por la aleta de babor y la referencia hidroacústica en mantenimiento.",
      q: "¿Cuál es la secuencia correcta para transferir el control sin provocar un movimiento no deseado?",
      o: ["Transferir y corregir la proa después, porque el sistema compensa en pocos segundos", "Igualar proa consigna, referencias seleccionadas y modo en ambas consolas, verificar la coherencia de las lecturas y confirmar la transferencia", "Pasar a joystick en la consola 1 y transferir cuando el viento baje", "Transferir solo la posición, dejando la proa en la consola 1 hasta terminar la guardia"],
      e: "Una transferencia con proa consigna distinta (045 frente a 050) hace que el controlador de la consola 2 gire el buque al tomar el mando. Hay que igualar consignas, comprobar que las referencias seleccionadas dan lecturas coherentes entre sí y confirmar la transferencia en voz alta. Con la hidroacústica en mantenimiento y viento de 25 nudos, cualquier descuido se nota de inmediato.",
    },
    pt: {
      caso: "Você está no console 1 com o navio em Auto DP, posição fixa e proa 045. O console 2 tem a proa de referência em 050 e a referência GNSS 2 desselecionada. A transferência de controle está prevista após a troca de turno, com vento de 25 nós pelo través de bombordo e a referência hidroacústica em manutenção.",
      q: "Qual é a sequência correta para transferir o controle sem provocar um movimento indesejado?",
      o: ["Transferir e corrigir a proa depois, porque o sistema compensa em poucos segundos", "Igualar proa de referência, referências selecionadas e modo nos dois consoles, verificar a coerência das leituras e confirmar a transferência", "Passar para joystick no console 1 e transferir quando o vento cair", "Transferir somente a posição, deixando a proa no console 1 até o fim do turno"],
      e: "Uma transferência com proa de referência diferente (045 contra 050) faz o controlador do console 2 girar o navio ao assumir. É preciso igualar as referências, confirmar que as referências selecionadas dão leituras coerentes entre si e confirmar a transferência em voz alta. Com a hidroacústica em manutenção e vento de 25 nós, qualquer descuido aparece de imediato.",
    },
  },
  {
    m: 6, a: 2, fuente: "Falha de barramento con apagón parcial (conferencia DP IMCA 2025)",
    es: {
      caso: "Clase 2, dos barras acopladas con disyuntor de acoplamiento cerrado. Cada barra alimenta un propulsor principal y la mitad de los consumos hoteleros. La carga de la barra 2 está al 88 % con la grúa elevando. Falla la barra 1 y su disyuntor de acoplamiento no abre; la barra 2 sostiene el propulsor de popa pero el de proa pierde alimentación.",
      q: "¿Cuál es la causa técnica más probable de que el buque derive con solo un propulsor perdido?",
      o: ["El fallo de la barra 1 eliminó la mitad de la generación, así que la barra 2 no tiene potencia para ningún propulsor", "El disyuntor de acoplamiento no abrió: la barra sana quedó conectada a la defectuosa, y la protección no aisló la falla, por lo que la pérdida de un propulsor no se contuvo", "La grúa se detuvo y la carga desplazó el buque", "El propulsor de popa consume más que el de proa y se apagó primero"],
      e: "La división de energía exige que la falla quede aislada: el disyuntor de acoplamiento debe abrir y separar las barras. Si no abre, la barra sana queda arrastrada por la defectuosa y el resultado es la pérdida de un equipo que debería haber seguido activo. Además, con la barra 2 al 88 % no había margen para absorber la carga que el fallo redistribuyó.",
    },
    pt: {
      caso: "Classe 2, duas barras acopladas com disjuntor de acoplamento fechado. Cada barra alimenta um propulsor principal e metade dos consumos de hotel. A carga da barra 2 está em 88 % com o guindaste içando. Falha a barra 1 e seu disjuntor de acoplamento não abre; a barra 2 mantém o propulsor de popa, mas o de proa perde alimentação.",
      q: "Qual é a causa técnica mais provável de o navio derivar com a perda de apenas um propulsor?",
      o: ["A falha da barra 1 eliminou metade da geração, então a barra 2 não tem potência para nenhum propulsor", "O disjuntor de acoplamento não abriu: a barra sadia ficou conectada à defeituosa, a proteção não isolou a falha e a perda de um equipamento não foi contida", "O guindaste parou e a carga deslocou o navio", "O propulsor de popa consome mais que o de proa e desligou primeiro"],
      e: "A divisão de energia exige que a falha fique isolada: o disjuntor de acoplamento deve abrir e separar as barras. Se não abre, a barra sadia é arrastada pela defeituosa e o resultado é a perda de um equipamento que deveria continuar ativo. Além disso, com a barra 2 em 88 % não havia margem para absorver a carga que a falha redistribuiu.",
    },
  },
  {
    m: 4, a: 0, fuente: "Degradación de GNSS por multitrayectoria (IMCA, lecciones sobre referencias)",
    es: {
      caso: "Buque Clase 2 en Auto DP con tres referencias: GNSS 1 y GNSS 2 en Auto DP, y hidroacústica como tercera. Durante una hora, el GNSS 1 muestra un desplazamiento lento de 1,5 metros hacia el norte que el filtro no elimina. El GNSS 2 y la hidroacústica coinciden con la posición del controlador. El DPO sigue la lectura del GNSS 1 en la pantalla de referencias.",
      q: "¿Qué indica el comportamiento y qué debe hacerse?",
      o: ["Un error de referencia lento y coherente con otras fuentes; deseleccionar el GNSS 1 por comparación, registrar la decisión y verificar el filtro", "Es un movimiento normal del buque y no requiere acción", "El GNSS 2 es el que está fallando, así que hay que deseleccionarlo", "Hay que cambiar a joystick porque la posición no es fiable"],
      e: "Un error lento que el filtro no elimina y que discrepa de las otras dos fuentes es el patrón típico de una referencia degradada (por ejemplo, multitrayectoria). La comparación entre referencias permite identificar cuál se aparta. Hay que deseleccionarla, registrarlo y verificar por qué el filtro no lo corrigió. Seguir confiando en ella mueve el buque hacia una posición falsa.",
    },
    pt: {
      caso: "Navio Classe 2 em Auto DP com três referências: GNSS 1 e GNSS 2 em Auto DP, e hidroacústica como terceira. Durante uma hora, o GNSS 1 mostra um deslocamento lento de 1,5 metro para o norte que o filtro não elimina. O GNSS 2 e a hidroacústica coincidem com a posição do controlador. O DPO segue a leitura do GNSS 1 na tela de referências.",
      q: "O que o comportamento indica e o que deve ser feito?",
      o: ["Um erro de referência lento e discordante das outras fontes; desselecionar o GNSS 1 por comparação, registrar a decisão e verificar o filtro", "É um movimento normal do navio e não exige ação", "O GNSS 2 é o que está falhando, então deve ser desselecionado", "É preciso passar para joystick porque a posição não é confiável"],
      e: "Um erro lento que o filtro não elimina e que discorda das outras duas fontes é o padrão típico de uma referência degradada (por exemplo, por multicaminho). A comparação entre referências permite identificar qual se afasta. É preciso desselecioná-la, registrar o fato e verificar por que o filtro não a corrigiu. Continuar confiando nela move o navio para uma posição falsa.",
    },
  },
  {
    m: 5, a: 3, fuente: "Sensor de viento y ajuste de feed-forward (DP Committee LFI 2025-1)",
    es: {
      caso: "Clase 2 con dos anemómetros. Durante un cambio de frente, el anemómetro 1 indica viento de 40 nudos desde 270 y el anemómetro 2 indica 22 nudos desde 265. El controlador usa el anemómetro 1 para el feed-forward de viento. El buque comienza a apartarse a babor mientras el sistema aumenta empuje a estribor.",
      q: "¿Cuál es la causa más probable del desplazamiento y qué debe comprobarse primero?",
      o: ["Fallo del girocompás: comprobar la alineación del rumbo y nada más", "El viento real subió de forma sostenida: aumentar la potencia manualmente sin más comprobaciones", "El filtro de corriente está mal ajustado: cambiar la corriente estimada", "El feed-forward de viento sobrecompensa por una lectura del anemómetro 1 inconsistente con el 2: contrastar ambos sensores y deseleccionar el dudoso antes de confiar en el feed-forward"],
      e: "El feed-forward usa la lectura de viento para anticipar el empuje. Si el anemómetro 1 da 40 nudos y el 2 da 22, el controlador sobreestima la fuerza y empuja de más. El desplazamiento a babor con empuje a estribor es el síntoma. La comprobación correcta es contrastar ambos sensores (no solo el girocompás), deseleccionar el que da lecturas incoherentes y revisar el ajuste del feed-forward antes de confiar en él.",
    },
    pt: {
      caso: "Classe 2 com dois anemômetros. Durante uma mudança de frente, o anemômetro 1 indica vento de 40 nós de 270 e o anemômetro 2 indica 22 nós de 265. O controlador usa o anemômetro 1 para o feed-forward de vento. O navio começa a se afastar para bombordo enquanto o sistema aumenta o empuxo para boreste.",
      q: "Qual é a causa mais provável do deslocamento e o que deve ser verificado primeiro?",
      o: ["Falha do girocompasso: verificar o alinhamento do rumo e nada mais", "O vento real subiu de forma sustentada: aumentar a potência manualmente sem mais verificações", "O filtro de corrente está mal ajustado: alterar a corrente estimada", "O feed-forward de vento superestima o empuxo por causa de uma leitura do anemômetro 1 incoerente com a do 2: comparar os dois sensores e desselecionar o duvidoso antes de confiar no feed-forward"],
      e: "O feed-forward usa a leitura de vento para antecipar o empuxo. Se o anemômetro 1 dá 40 nós e o 2 dá 22, o controlador superestima a força e empurra demais. O afastamento para bombordo com empuxo para boreste é o sintoma. A verificação correta é comparar os dois sensores (não só o girocompasso), desselecionar o que dá leituras incoerentes e revisar o ajuste do feed-forward antes de confiar nele.",
    },
  },
  {
    m: 2, a: 2, fuente: "Fallo común por alimentación compartida (DP Committee LFI 2025-1)",
    es: {
      caso: "Dos computadores DP de la Clase 2 están en paralelo. Ambos reciben alimentación de control desde el mismo cuadro, que tiene un interruptor de control común. Durante un mantenimiento, un técnico apaga el interruptor para cambiar una lámpara y no lo vuelve a encender hasta quince minutos después. Durante ese tiempo el buque está en Auto DP.",
      q: "¿Qué falla de diseño o de procedimiento explica la pérdida de control, y cuál es la lección técnica?",
      o: ["Que el técnico actuó mal: la lección es prohibir el mantenimiento con el buque en DP", "Que la alimentación de control es una única fuente: los dos computadores comparten un punto de fallo común, así que la redundancia no existía para este modo de fallo", "Que el software de los computadores falló por un error de sincronización", "Que los computadores estaban en modo espera y no pudieron asumir el control"],
      e: "Los dos computadores eran redundantes en el papel, pero compartían un punto de fallo común en la alimentación de control. Un único interruptor los apagó a la vez. La lección es que la redundancia se demuestra frente a fallos comunes, no solo multiplicando equipos, y que el FMEA debe analizar la alimentación compartida. Culpar únicamente al técnico oculta el problema de diseño.",
    },
    pt: {
      caso: "Dois computadores DP da Classe 2 estão em paralelo. Ambos recebem alimentação de controle do mesmo quadro, que tem um disjuntor de controle comum. Durante uma manutenção, um técnico desliga o disjuntor para trocar uma lâmpada e só o religa quinze minutos depois. Nesse tempo, o navio está em Auto DP.",
      q: "Qual falha de projeto ou de procedimento explica a perda de controle, e qual é a lição técnica?",
      o: ["O técnico agiu errado: a lição é proibir manutenção com o navio em DP", "A alimentação de controle é uma fonte única: os dois computadores compartilham um ponto de falha comum, então a redundância não existia para esse modo de falha", "O software dos computadores falhou por um erro de sincronização", "Os computadores estavam em modo espera e não conseguiram assumir o controle"],
      e: "Os dois computadores eram redundantes no papel, mas compartilhavam um ponto de falha comum na alimentação de controle. Um único disjuntor os desligou ao mesmo tempo. A lição é que a redundância se demonstra diante de falhas comuns, não apenas multiplicando equipamentos, e que a FMEA deve analisar a alimentação compartilhada. Culpar só o técnico oculta o problema de projeto.",
    },
  },
  {
    m: 3, a: 1, fuente: "Pérdida de posición por error de entrada de datos (IMCA, factores humanos)",
    es: {
      caso: "Antes de una operación de amarre, el DPO introduce la profundidad y el calado para el modelo del buque. Introduce el calado en metros como si fuera en pies. El capability plot calculado con ese dato muestra un margen del 30 %, pero el margen real era del 6 %. Durante el trabajo entra un frente con viento de 35 nudos.",
      q: "¿Qué debió detectar el proceso de verificación previa y por qué el margen mostrado no debía confiarse?",
      o: ["Nada: el capability plot se calcula solo con el viento y no depende del calado", "El error de unidades en el calado: la verificación previa debe contrastar los datos de entrada del modelo y el capability plot debe recalcularse con datos verificados", "Que el buque debía estar en joystick para que el margen fuera válido", "Que 30 % es un valor imposible y el sistema debió apagarse"],
      e: "El capability plot depende de los datos de entrada, incluido el calado. Un error de unidades (metros tomados como pies) cambia el modelo y da un margen falsamente alto. La verificación previa debe contrastar esos datos con los documentos del buque antes de confiar en el plot. Un margen aparentemente bueno puede ser la señal de error, no la prueba de seguridad.",
    },
    pt: {
      caso: "Antes de uma operação de amarração, o DPO introduz a profundidade e o calado no modelo do navio. Ele digita o calado em metros como se fosse em pés. O capability plot calculado com esse dado mostra margem de 30 %, mas a margem real era de 6 %. Durante o trabalho, entra uma frente com vento de 35 nós.",
      q: "O que a verificação prévia deveria ter detectado e por que a margem mostrada não devia ser confiada?",
      o: ["Nada: o capability plot é calculado só com o vento e não depende do calado", "O erro de unidade no calado: a verificação prévia deve conferir os dados de entrada do modelo e o capability plot deve ser recalculado com dados verificados", "Que o navio devia estar em joystick para que a margem fosse válida", "Que 30 % é um valor impossível e o sistema deveria ter sido desligado"],
      e: "O capability plot depende dos dados de entrada, incluindo o calado. Um erro de unidade (metros tratados como pés) altera o modelo e dá uma margem falsamente alta. A verificação prévia deve conferir esses dados com os documentos do navio antes de confiar no plot. Uma margem aparentemente boa pode ser sinal de erro, não prova de segurança.",
    },
  },
  {
    m: 7, a: 0, fuente: "Limitación de potencia y capacidad disponible (IMCA, análisis de capacidad)",
    es: {
      caso: "El capability plot de la operación se calculó con los cuatro propulsores disponibles. Durante el trabajo, el propulsor de proa se pone en modo limitado al 60 % porque el sistema de gestión de potencia restringe la carga de la barra. El viento es de 30 nudos desde la aleta de estribor, cerca del límite de la operación con los cuatro propulsores.",
      q: "¿Qué conclusión debe sacar el DPO?",
      o: ["La capacidad real es menor que la del plot: hay que reevaluar la operación con la capacidad disponible o suspenderla si el viento sube", "El plot sigue valiendo porque el propulsor de proa sigue funcionando", "La limitación no afecta, porque solo reduce el consumo", "Hay que apagar el sistema de gestión de potencia para recuperar la capacidad"],
      e: "El plot se calculó con capacidad total, pero la capacidad real ya es menor. Un propulsor limitado al 60 % reduce el empuje disponible en la dirección que ese propulsor aporta. Con el viento cerca del límite, la operación ya no tiene margen. Debe reevaluarse con la capacidad real y suspenderse si el viento sube, en vez de asumir el plot original.",
    },
    pt: {
      caso: "O capability plot da operação foi calculado com os quatro propulsores disponíveis. Durante o trabalho, o propulsor de proa entra em modo limitado a 60 % porque o sistema de gestão de potência restringe a carga da barra. O vento é de 30 nós pela alheta de boreste, perto do limite da operação com os quatro propulsores.",
      q: "Que conclusão o DPO deve tirar?",
      o: ["A capacidade real é menor que a do plot: é preciso reavaliar a operação com a capacidade disponível ou suspendê-la se o vento subir", "O plot continua valendo porque o propulsor de proa segue funcionando", "A limitação não afeta, porque só reduz o consumo", "É preciso desligar o sistema de gestão de potência para recuperar a capacidade"],
      e: "O plot foi calculado com capacidade total, mas a capacidade real já é menor. Um propulsor limitado a 60 % reduz o empuxo disponível na direção que ele contribui. Com o vento perto do limite, a operação já não tem margem. Deve ser reavaliada com a capacidade real e suspensa se o vento subir, em vez de se presumir o plot original.",
    },
  },
  {
    m: 6, a: 3, fuente: "Sobrecarga por carga dinámica del generador (conferencia DP IMCA 2025)",
    es: {
      caso: "Dos generadores en paralelo alimentan la red DP. Al arrancar el propulsor de proa, la potencia de la red sube de golpe y el generador 1 dispara su protección de sobrecorriente. El generador 2 queda con el 97 % de carga durante seis segundos antes de que el sistema reduzca el empuje de proa.",
      q: "¿Qué margen de diseño y qué procedimiento son los que fallan en este caso?",
      o: ["Ninguno: el disparo es normal y el sistema funcionó como debía", "El generador 1 estaba averiado, por lo que el caso se explica solo por el fallo del equipo", "El propulsor de proa debió arrancar con el buque fuera de DP", "El margen de potencia en paralelo no contemplaba el pico de arranque del propulsor, y el procedimiento de arranque no escalonaba la carga"],
      e: "En red compartida, el pico de arranque de un propulsor debe quedar dentro del margen de potencia de los generadores en paralelo. Aquí el margen no cubría el pico, así que el generador 1 se protegió y el 2 quedó casi al límite. La lección es de diseño (margen de potencia) y de procedimiento (escalonar arranques). Un disparo de protección no es un fallo que deba tratarse como normal.",
    },
    pt: {
      caso: "Dois geradores em paralelo alimentam a rede DP. Ao partir o propulsor de proa, a potência da rede sobe de repente e o gerador 1 dispara sua proteção de sobrecorrente. O gerador 2 fica com 97 % de carga por seis segundos antes de o sistema reduzir o empuxo de proa.",
      q: "Qual margem de projeto e qual procedimento falharam neste caso?",
      o: ["Nenhum: o disparo é normal e o sistema funcionou como devia", "O gerador 1 estava com defeito, então o caso se explica só pela falha do equipamento", "O propulsor de proa devia ter sido partido com o navio fora de DP", "A margem de potência em paralelo não previa o pico de partida do propulsor, e o procedimento de partida não escalonava a carga"],
      e: "Em rede compartilhada, o pico de partida de um propulsor deve ficar dentro da margem de potência dos geradores em paralelo. Aqui a margem não cobria o pico, então o gerador 1 se protegeu e o 2 ficou quase no limite. A lição é de projeto (margem de potência) e de procedimento (escalonar as partidas). Um disparo de proteção não deve ser tratado como algo normal.",
    },
  },
  {
    m: 1, a: 2, fuente: "Decisión de suspender la operación (IMCA, criterios de suspensión)",
    es: {
      caso: "El buque opera en Clase 2 con el capability plot en condición normal al 35 % de margen. Tras la falla de peor caso, el margen cae al 4 %. El pronóstico indica que el viento sube en 40 minutos hasta el límite de la operación. El cliente pide terminar la maniobra, que tarda 90 minutos.",
      q: "¿Qué decisión es la técnicamente correcta?",
      o: ["Terminar la maniobra porque el margen normal es alto", "Continuar y pedir al cliente que acepte el riesgo por escrito", "Suspender la maniobra de forma planificada antes de que el viento alcance el límite, porque tras la falla de peor caso el margen no es aceptable", "Pasar a joystick para terminar sin depender del sistema"],
      e: "El margen normal no garantiza la operación: lo que importa es el margen tras la falla de peor caso, que aquí es del 4 %. Con el viento acercándose al límite en 40 minutos y una maniobra de 90, la decisión correcta es suspender de forma planificada antes de que las condiciones empeoren. La aceptación del cliente no convierte la operación en conforme.",
    },
    pt: {
      caso: "O navio opera em Classe 2 com o capability plot em condição normal com margem de 35 %. Após a falha de pior caso, a margem cai para 4 %. A previsão indica que o vento sobe em 40 minutos até o limite da operação. O cliente pede que a manobra termine, e ela leva 90 minutos.",
      q: "Qual decisão é tecnicamente correta?",
      o: ["Terminar a manobra porque a margem normal é alta", "Continuar e pedir ao cliente que aceite o risco por escrito", "Suspender a manobra de forma planejada antes de o vento atingir o limite, porque após a falha de pior caso a margem não é aceitável", "Passar para joystick para terminar sem depender do sistema"],
      e: "A margem normal não garante a operação: o que importa é a margem após a falha de pior caso, que aqui é de 4 %. Com o vento se aproximando do limite em 40 minutos e uma manobra de 90, a decisão correta é suspender de forma planejada antes que as condições piorem. A aceitação do cliente não torna a operação conforme.",
    },
  },
  {
    m: 4, a: 1, fuente: "Transferencia de control con referencias de distinto principio (North P&I)",
    es: {
      caso: "El buque opera con dos GNSS y una hidroacústica. El GNSS 1 y el GNSS 2 reciben correcciones de la misma red diferencial, que sufre una degradación. Ambos dan lecturas coherentes entre sí, con un desplazamiento de 2 metros, mientras que la hidroacústica no discrepa. El sistema tiene alarma de tolerancia solo entre referencias del mismo tipo.",
      q: "¿Qué limitación del sistema de alarmas explica que la discrepancia no se detectara, y qué debe hacer el DPO?",
      o: ["Ninguna: las dos GNSS coherentes prueban que la posición es correcta", "La comparación solo cubre referencias del mismo tipo: dos fuentes que comparten la misma corrección pueden fallar juntas, por lo que hay que contrastar con la referencia de otro principio y revisar las correcciones", "El problema es el filtro: hay que desactivarlo", "La hidroacústica debió apagarse porque siempre tiene error"],
      e: "Dos GNSS que usan la misma corrección diferencial pueden desplazarse juntas: es un fallo común por causa compartida. La alarma, que solo compara referencias del mismo tipo, no lo detecta. La hidroacústica, de otro principio, sí sirve de contraste. El DPO debe comparar con referencias de principio distinto y revisar la fuente de correcciones antes de confiar en la posición.",
    },
    pt: {
      caso: "O navio opera com dois GNSS e uma hidroacústica. O GNSS 1 e o GNSS 2 recebem correções da mesma rede diferencial, que sofre degradação. Ambos dão leituras coerentes entre si, com um deslocamento de 2 metros, enquanto a hidroacústica não discorda. O sistema tem alarme de tolerância apenas entre referências do mesmo tipo.",
      q: "Qual limitação do sistema de alarmes explica que a discrepância não tenha sido detectada, e o que o DPO deve fazer?",
      o: ["Nenhuma: as duas GNSS coerentes provam que a posição está correta", "A comparação só cobre referências do mesmo tipo: duas fontes que compartilham a mesma correção podem falhar juntas, então é preciso contrastar com a referência de outro princípio e revisar as correções", "O problema é o filtro: é preciso desativá-lo", "A hidroacústica devia ser desligada porque sempre tem erro"],
      e: "Duas GNSS que usam a mesma correção diferencial podem se deslocar juntas: é uma falha comum por causa compartilhada. O alarme, que só compara referências do mesmo tipo, não a detecta. A hidroacústica, de outro princípio, serve de contraste. O DPO deve comparar com referências de princípio diferente e revisar a fonte de correções antes de confiar na posição.",
    },
  },
  {
    m: 5, a: 0, fuente: "Sensor de referencia vertical (MRU) y compensación (IMCA, lecciones sobre referencias)",
    es: {
      caso: "La referencia de posición por radar está montada en el mástil, a 28 metros sobre la línea de flotación. Con mar de través y balance de 6 grados, las lecturas oscilan cerca de 1 metro. El MRU asociado a esa referencia está fuera de servicio desde ayer y no se ha sustituido. El controlador trabaja con el filtro en su ajuste normal.",
      q: "¿Qué efecto tiene la falta del MRU sobre la posición que calcula el sistema?",
      o: ["Ninguno, el filtro compensa siempre el balance", "El radar mide la distancia a un punto que se mueve con el balance del mástil; sin el MRU la posición se corrige mal y las oscilaciones se transmiten al controlador", "El radar deja de funcionar a más de 20 metros de altura", "El MRU solo corrige la corriente, no el balance"],
      e: "Una referencia montada en un punto alto se mueve con el balance y el cabeceo del buque. El MRU mide ese movimiento y permite corregir la lectura hasta el origen del buque. Sin él, la posición calculada incorpora el movimiento del mástil, que el filtro normal no elimina del todo. El controlador reacciona a esas oscilaciones como si fueran desplazamientos reales.",
    },
    pt: {
      caso: "A referência de posição por radar está montada no mastro, a 28 metros acima da linha d'água. Com mar de través e balanço de 6 graus, as leituras oscilam perto de 1 metro. O MRU associado a essa referência está fora de serviço desde ontem e não foi substituído. O controlador trabalha com o filtro no ajuste normal.",
      q: "Qual efeito a falta do MRU tem sobre a posição calculada pelo sistema?",
      o: ["Nenhum, o filtro compensa sempre o balanço", "O radar mede a distância até um ponto que se move com o balanço do mastro; sem o MRU a posição é mal corrigida e as oscilações chegam ao controlador", "O radar deixa de funcionar acima de 20 metros de altura", "O MRU só corrige a corrente, não o balanço"],
      e: "Uma referência montada em um ponto alto se move com o balanço e a arfagem do navio. O MRU mede esse movimento e permite corrigir a leitura até a origem do navio. Sem ele, a posição calculada incorpora o movimento do mastro, que o filtro normal não elimina totalmente. O controlador reage a essas oscilações como se fossem deslocamentos reais.",
    },
  },
  {
    m: 7, a: 2, fuente: "Operación con sistema de referencias incompleto (IMCA, condiciones de operación)",
    es: {
      caso: "Clase 2 con tres referencias de posición. Una está en mantenimiento, así que quedan dos. El plan de la operación exige tres referencias, con una excepción aprobada para el trabajo de hoy. A media mañana, una de las dos restantes da una alarma intermitente de calidad de señal. El cliente pide continuar porque el trabajo está casi acabado.",
      q: "¿Qué debe concluir el DPO?",
      o: ["Continuar, porque la excepción aprobada cubre cualquier caso posterior", "Continuar mientras la alarma sea intermitente, porque la señal se recupera sola", "Reducir la carga del trabajo para que la pérdida de una referencia más no importe, sin cambiar nada del plan", "La excepción se basó en tres referencias operativas; con dos y una degradada, la configuración ya no cumple el plan: evaluar la suspensión o la transición a una configuración segura"],
      e: "La excepción aprobada presuponía dos referencias fiables. Ahora una alarma indica degradación, así que la configuración real ya no cumple el plan aprobado. Una señal intermitente no se resuelve sola en un sistema que depende de ella, y reducir la carga no cambia la exigencia de referencias. Lo correcto es evaluar la suspensión o pasar a una configuración segura, según el análisis de consecuencias.",
    },
    pt: {
      caso: "Classe 2 com três referências de posição. Uma está em manutenção, então restam duas. O plano da operação exige três referências, com uma exceção aprovada para o trabalho de hoje. No meio da manhã, uma das duas restantes dá um alarme intermitente de qualidade de sinal. O cliente pede para continuar porque o trabalho está quase concluído.",
      q: "O que o DPO deve concluir?",
      o: ["Continuar, porque a exceção aprovada cobre qualquer caso posterior", "Continuar enquanto o alarme for intermitente, porque o sinal se recupera sozinho", "Reduzir a carga do trabalho para que a perda de mais uma referência não importe, sem alterar o plano", "A exceção foi baseada em três referências operativas; com duas e uma degradada, a configuração já não atende ao plano: avaliar a suspensão ou a transição para uma configuração segura"],
      e: "A exceção aprovada pressupunha duas referências confiáveis. Agora um alarme indica degradação, então a configuração real já não atende ao plano aprovado. Um sinal intermitente não se resolve sozinho em um sistema que depende dele, e reduzir a carga não muda a exigência de referências. O correto é avaliar a suspensão ou passar para uma configuração segura, conforme a análise de consequências.",
    },
  },
  {
    m: 2, a: 3, fuente: "Confusión entre redundancia y respaldo en espera (DP Committee LFI 2025-1)",
    es: {
      caso: "En una Clase 2, el sistema de control DP 2 está en espera y su última prueba de transferencia es de hace ocho meses. Su lista de referencias tiene una referencia distinta a la del sistema 1. El DPO considera que el sistema 2 garantiza la redundancia. Durante una falla del sistema 1, el sistema 2 se activa, pero el buque se aparta cuatro metros antes de estabilizarse.",
      q: "¿Qué concepto y qué verificación quedaron sin cumplirse?",
      o: ["Que el sistema 2 debía estar en modo joystick, que no es redundante", "Que el sistema 2 debió apagarse para no interferir", "Que el sistema 1 tenía que ser de Clase 3", "Que un respaldo en espera no es redundancia verificada si no recibe las mismas entradas ni se ha probado su transferencia sin pérdida de posición"],
      e: "Un sistema en espera solo aporta redundancia real si asume el control sin pérdida. Aquí el sistema 2 no recibía las mismas referencias y su transferencia no se había probado recientemente, así que el salto de cuatro metros era previsible. La redundancia debe demostrarse mediante pruebas de transferencia y coherencia de entradas, no suponerse por tener un segundo equipo instalado.",
    },
    pt: {
      caso: "Em uma Classe 2, o sistema de controle DP 2 está em espera e seu último teste de transferência foi há oito meses. Sua lista de referências tem uma referência diferente da do sistema 1. O DPO considera que o sistema 2 garante a redundância. Durante uma falha do sistema 1, o sistema 2 é ativado, mas o navio se afasta quatro metros antes de estabilizar.",
      q: "Qual conceito e qual verificação não foram cumpridos?",
      o: ["O sistema 2 devia estar em modo joystick, que não é redundante", "O sistema 2 devia ter sido desligado para não interferir", "O sistema 1 tinha que ser de Classe 3", "Um reserva em espera não é redundância verificada se não recebe as mesmas entradas nem teve sua transferência testada sem perda de posição"],
      e: "Um sistema em espera só dá redundância real se assume o controle sem perda. Aqui o sistema 2 não recebia as mesmas referências e sua transferência não tinha sido testada recentemente, então o afastamento de quatro metros era previsível. A redundância deve ser demonstrada com testes de transferência e coerência das entradas, não presumida por ter um segundo equipamento instalado.",
    },
  },
  {
    m: 3, a: 0, fuente: "Vigilancia y lista de verificación (IMCA, factores humanos)",
    es: {
      caso: "Durante una operación de larga duración en Auto DP, la última revisión de vigilancia fue hace cuatro horas. La lista de vigilancia incluye comprobar cada hora las referencias, la tensión de cables y el estado de la alimentación. Las alarmas del sistema están activas y no han saltado. El DPO considera que la ausencia de alarmas significa que todo está bien.",
      q: "¿Qué problema de procedimiento se identifica?",
      o: ["Que la ausencia de alarmas no sustituye la vigilancia periódica: las condiciones que el sistema no alarma (como un sensor que deriva) solo se detectan con la comprobación programada", "Que la lista de vigilancia debió hacerse cada cuatro horas", "Que las alarmas deben desactivarse durante la operación", "Que la operación debió pasar a joystick para la vigilancia"],
      e: "Las alarmas avisan de fallos que el sistema ya detecta. Un sensor que deriva lentamente puede no activar ninguna alarma y, aun así, degradar la posición. La vigilancia programada cada hora está para esos casos. Suspenderla porque no hay alarmas es precisamente el error que la lista pretende evitar.",
    },
    pt: {
      caso: "Durante uma operação longa em Auto DP, a última revisão de vigilância foi há quatro horas. A lista de vigilância inclui verificar a cada hora as referências, a tensão dos cabos e o estado da alimentação. Os alarmes do sistema estão ativos e nenhum disparou. O DPO considera que a ausência de alarmes significa que tudo está bem.",
      q: "Qual problema de procedimento é identificado?",
      o: ["A ausência de alarmes não substitui a vigilância periódica: as condições que o sistema não alarma (como um sensor que deriva) só são detectadas com a verificação programada", "A lista de vigilância devia ter sido feita a cada quatro horas", "Os alarmes devem ser desativados durante a operação", "A operação devia passar para joystick para a vigilância"],
      e: "Os alarmes avisam de falhas que o sistema já detecta. Um sensor que deriva lentamente pode não disparar nenhum alarme e, ainda assim, degradar a posição. A vigilância programada a cada hora existe para esses casos. Suspendê-la porque não há alarmes é justamente o erro que a lista pretende evitar.",
    },
  },
  {
    m: 6, a: 1, fuente: "Limitación de la capacidad de energía en paralelo (conferencia DP IMCA 2025)",
    es: {
      caso: "Clase 2 con tres generadores, uno en mantenimiento. Los dos restantes trabajan al 85 %. El plan de la operación supone tres generadores disponibles. El cliente pide arrancar un cuarto consumidor de alta potencia para el trabajo, que consumirá el 25 % de la capacidad de un generador.",
      q: "¿Qué debe evaluar el DPO antes de aceptar el consumidor?",
      o: ["Nada: los consumidores se pueden añadir siempre que haya un generador en marcha", "Que el arranque del consumidor no supera la reserva de potencia en paralelo con un generador fuera de servicio, y que el plan de operación se revisa con la configuración real", "Que el consumidor debe conectarse a la barra de emergencia", "Que el generador en mantenimiento debe ponerse en marcha para cubrirlo"],
      e: "La reserva de potencia en paralelo debe permitir un fallo de generador sin pérdida de posición. Con dos generadores al 85 % y un consumidor que añade el 25 % de la capacidad de uno, la reserva queda por debajo de lo necesario. El plan de operación debe revisarse con la configuración real. Añadir un consumidor no es neutral para la redundancia de energía.",
    },
    pt: {
      caso: "Classe 2 com três geradores, um em manutenção. Os dois restantes trabalham a 85 %. O plano da operação supõe três geradores disponíveis. O cliente pede para partir um quarto consumidor de alta potência para o trabalho, que consumirá 25 % da capacidade de um gerador.",
      q: "O que o DPO deve avaliar antes de aceitar o consumidor?",
      o: ["Nada: os consumidores podem ser acrescentados sempre que houver um gerador em operação", "Que a partida do consumidor não ultrapassa a reserva de potência em paralelo com um gerador fora de serviço, e que o plano da operação é revisado com a configuração real", "Que o consumidor deve ser ligado à barra de emergência", "Que o gerador em manutenção deve ser colocado em operação para cobri-lo"],
      e: "A reserva de potência em paralelo deve permitir a falha de um gerador sem perda de posição. Com dois geradores a 85 % e um consumidor que acrescenta 25 % da capacidade de um, a reserva fica abaixo do necessário. O plano da operação deve ser revisado com a configuração real. Acrescentar um consumidor não é neutro para a redundância de energia.",
    },
  },
  {
    m: 4, a: 2, fuente: "Interferencia de radar y referencia por microondas (IMCA, lecciones sobre referencias)",
    es: {
      caso: "La referencia por microondas de la operación empieza a dar lecturas erráticas cuando otro buque activa su radar de navegación en banda cercana, a 2 millas. La lectura de posición oscila unos 3 metros durante veinte minutos y luego se estabiliza. Las otras dos referencias son GNSS y hidroacústica, y no discrepan.",
      q: "¿Qué explicación y qué acción son las correctas?",
      o: ["Un fallo permanente de la referencia: deseleccionarla para siempre sin investigar", "Un error del GNSS: deseleccionarlo y confiar en el microondas", "Un movimiento real del buque: no hay que hacer nada porque las referencias coinciden", "Interferencia externa temporal sobre la referencia de microondas: deseleccionarla mientras dura, registrarlo y evaluar el efecto en la configuración de referencias"],
      e: "Una interferencia de radar de otro buque puede degradar temporalmente la lectura de una referencia de microondas. El fallo no es permanente ni del GNSS: las otras referencias no discrepan, lo que apunta a una causa local a esa referencia. La acción adecuada es deseleccionarla mientras dura, registrar el episodio y evaluar si la configuración de referencias sigue cumpliendo el plan.",
    },
    pt: {
      caso: "A referência por micro-ondas da operação começa a dar leituras erráticas quando outro navio ativa seu radar de navegação em banda próxima, a 2 milhas. A leitura de posição oscila cerca de 3 metros durante vinte minutos e depois se estabiliza. As outras duas referências são GNSS e hidroacústica, e não discordam.",
      q: "Qual explicação e qual ação são as corretas?",
      o: ["Uma falha permanente da referência: desselecioná-la para sempre sem investigar", "Um erro do GNSS: desselecioná-lo e confiar na micro-ondas", "Um movimento real do navio: não é preciso fazer nada porque as referências coincidem", "Interferência externa temporária sobre a referência de micro-ondas: desselecioná-la enquanto dura, registrar o episódio e avaliar o efeito na configuração de referências"],
      e: "A interferência de radar de outro navio pode degradar temporariamente a leitura de uma referência de micro-ondas. A falha não é permanente nem do GNSS: as outras referências não discordam, o que aponta para uma causa local àquela referência. A ação adequada é desselecioná-la enquanto dura, registrar o episódio e avaliar se a configuração de referências ainda atende ao plano.",
    },
  },
  {
    m: 7, a: 1, fuente: "Diagramas de capacidad tras cambio de condiciones (IMCA, análisis de capacidad)",
    es: {
      caso: "El capability plot de la operación se hizo para corriente de 1 nudo desde proa. A mitad de la operación, el registro de corriente marca 2,2 nudos desde través de babor, un ángulo que el plot no cubre. El sistema sigue manteniendo la posición con empuje moderado. El DPO decide no repetir el análisis porque el buque sigue en posición.",
      q: "¿Qué debe concluir el DPO?",
      o: ["Que mantener la posición demuestra que el plot sigue valiendo", "Que el análisis ya no representa la condición real: debe repetirse para la corriente y el ángulo medidos, porque el buque en posición no prueba que tenga margen tras una falla", "Que el ángulo de través de babor no es relevante para el plot", "Que solo hay que informar al cliente y continuar"],
      e: "Mantener la posición con empuje moderado no prueba que el margen sea suficiente frente a una falla. El plot se hizo para otra condición (corriente de proa, 1 nudo), y la real es de 2,2 nudos desde el través, fuera de lo analizado. Hay que repetir el análisis con los valores medidos, porque la capacidad tras una falla puede ser muy distinta de la que se ve ahora.",
    },
    pt: {
      caso: "O capability plot da operação foi feito para corrente de 1 nó pela proa. No meio da operação, o registro de corrente marca 2,2 nós pelo través de bombordo, um ângulo que o plot não cobre. O sistema continua mantendo a posição com empuxo moderado. O DPO decide não refazer a análise porque o navio segue na posição.",
      q: "O que o DPO deve concluir?",
      o: ["Que manter a posição comprova que o plot continua valendo", "Que a análise já não representa a condição real: deve ser refeita para a corrente e o ângulo medidos, porque o navio na posição não prova que há margem após uma falha", "Que o ângulo pelo través de bombordo não é relevante para o plot", "Que basta informar o cliente e continuar"],
      e: "Manter a posição com empuxo moderado não prova que a margem seja suficiente diante de uma falha. O plot foi feito para outra condição (corrente pela proa, 1 nó), e a real é de 2,2 nós pelo través, fora do que foi analisado. A análise deve ser refeita com os valores medidos, porque a capacidade após uma falha pode ser muito diferente da que se vê agora.",
    },
  },
  {
    m: 1, a: 0, fuente: "Clasificación de equipos y cambio de configuración (IMCA, criterios de clase)",
    es: {
      caso: "Un armador quiere presentar un buque como Clase 2 para un contrato, pero su configuración tiene dos propulsores principales con una única barra de alimentación y sin disyuntor de acoplamiento. El armador argumenta que, como tiene dos computadores y dos GNSS, cumple la clase.",
      q: "¿Qué debe concluir un evaluador técnico?",
      o: ["La configuración no cumple la Clase 2: la redundancia de referencias y computadores no basta si la alimentación de los propulsores depende de una única barra sin separación", "Cumple, porque la clase depende solo del número de equipos", "Cumple si el contrato lo permite", "Es Clase 3 porque tiene dos propulsores"],
      e: "La clase no se determina por contar equipos. La Clase 2 exige que un fallo único no cause pérdida de posición, y aquí una falla en la única barra de alimentación afectaría a los dos propulsores. Dos computadores y dos GNSS no compensan una dependencia común en la energía. La clasificación debe analizar los modos de fallo comunes, no solo la cantidad de equipos.",
    },
    pt: {
      caso: "Um armador quer apresentar um navio como Classe 2 para um contrato, mas sua configuração tem dois propulsores principais com uma única barra de alimentação e sem disjuntor de acoplamento. O armador argumenta que, como tem dois computadores e dois GNSS, atende à classe.",
      q: "O que um avaliador técnico deve concluir?",
      o: ["A configuração não atende à Classe 2: a redundância de referências e computadores não basta se a alimentação dos propulsores depende de uma única barra sem separação", "Atende, porque a classe depende só do número de equipamentos", "Atende se o contrato permitir", "É Classe 3 porque tem dois propulsores"],
      e: "A classe não se determina pela contagem de equipamentos. A Classe 2 exige que uma falha única não cause perda de posição, e aqui uma falha na única barra de alimentação afetaria os dois propulsores. Dois computadores e dois GNSS não compensam uma dependência comum na energia. A classificação deve analisar os modos de falha comuns, não só a quantidade de equipamentos.",
    },
  },
  {
    m: 2, a: 2, fuente: "Fallo en cascada por bus de comunicación (DP Committee LFI 2025-1)",
    es: {
      caso: "Tres estaciones DP comparten un bus de red de anillo redundante. Un cable de fibra se daña en la sala de máquinas y el anillo se convierte en una línea. Una de las estaciones pierde comunicación con las referencias y pasa a estado de alarma, pero las otras dos siguen activas con datos de referencia completos.",
      q: "¿Qué debe revisarse para saber si la redundancia de comunicaciones realmente funcionó?",
      o: ["Solo la alarma de la estación que perdió comunicación, porque es la única afectada", "Nada: tres estaciones siempre aseguran la operación", "La separación física de los cables del anillo: si ambos caminos pasan por el mismo local, un solo daño corta la red y la redundancia no existía para ese suceso", "El color de los cables de fibra"],
      e: "Un anillo redundante protege frente a un corte solo si sus dos caminos están físicamente separados. Si ambos pasan por la misma sala de máquinas, un único daño local rompe los dos, y el anillo se comporta como una línea simple. Por eso la revisión debe centrarse en el recorrido físico de los caminos, no solo en la alarma de la estación afectada.",
    },
    pt: {
      caso: "Três estações DP compartilham um barramento de rede em anel redundante. Um cabo de fibra é danificado na casa de máquinas e o anel se torna uma linha. Uma das estações perde comunicação com as referências e passa ao estado de alarme, mas as outras duas continuam ativas com dados completos de referência.",
      q: "O que deve ser revisado para saber se a redundância de comunicação realmente funcionou?",
      o: ["Somente o alarme da estação que perdeu comunicação, porque é a única afetada", "Nada: três estações sempre garantem a operação", "A separação física dos cabos do anel: se os dois caminhos passam pelo mesmo local, um único dano corta a rede e a redundância não existia para esse evento", "A cor dos cabos de fibra"],
      e: "Um anel redundante protege contra um corte somente se seus dois caminhos estiverem fisicamente separados. Se ambos passam pela mesma casa de máquinas, um único dano local rompe os dois, e o anel se comporta como uma linha simples. Por isso a revisão deve focar no percurso físico dos caminhos, não só no alarme da estação afetada.",
    },
  },
  {
    m: 6, a: 3, fuente: "Gestión de potencia y prioridades de carga (conferencia DP IMCA 2025)",
    es: {
      caso: "En Clase 2 con dos generadores, el sistema de gestión de potencia desconecta automáticamente un consumidor no esencial para proteger la red durante una subida de carga. El consumidor desconectado era un compresor de aire de instrumentación. Minutos después, la presión de aire cae y una válvula de control del propulsor de proa pasa a posición de seguridad.",
      q: "¿Qué fallo de diseño de prioridades se identifica?",
      o: ["Ninguno: el compresor no es esencial, así que su desconexión era correcta", "Que el compresor debió conectarse a la barra de emergencia y nunca a la red DP", "Que los generadores debieron apagarse para evitar la subida de carga", "Que el compresor de instrumentación, aunque sea de consumo menor, sostiene un servicio de control del propulsor: su clasificación como no esencial no tenía en cuenta esa dependencia"],
      e: "Un consumidor puede parecer no esencial y, sin embargo, sostener una función de control indirectamente. Aquí el aire de instrumentación era necesario para mantener el propulsor de proa en control. La clasificación de prioridades debe analizar las dependencias reales, no solo la potencia consumida. Desconectarlo fue un corte que se transformó en pérdida de capacidad.",
    },
    pt: {
      caso: "Em Classe 2 com dois geradores, o sistema de gestão de potência desconecta automaticamente um consumidor não essencial para proteger a rede durante uma subida de carga. O consumidor desconectado era um compressor de ar de instrumentação. Minutos depois, a pressão de ar cai e uma válvula de controle do propulsor de proa vai para a posição de segurança.",
      q: "Qual falha de projeto de prioridades é identificada?",
      o: ["Nenhuma: o compressor não é essencial, então sua desconexão era correta", "O compressor devia ter sido ligado à barra de emergência e nunca à rede DP", "Os geradores deviam ter sido desligados para evitar a subida de carga", "O compressor de ar de instrumentação, embora de consumo baixo, sustenta um serviço de controle do propulsor: sua classificação como não essencial não considerou essa dependência"],
      e: "Um consumidor pode parecer não essencial e, ainda assim, sustentar indiretamente uma função de controle. Aqui o ar de instrumentação era necessário para manter o propulsor de proa sob controle. A classificação de prioridades deve analisar as dependências reais, não só a potência consumida. Desconectá-lo gerou uma perda de capacidade a partir de um corte aparentemente inofensivo.",
    },
  },
  {
    m: 7, a: 0, fuente: "Permisos de operación y cambios significativos (IMCA, documentación DP)",
    es: {
      caso: "Un buque con certificado DP vigente instala un nuevo propulsor de proa de mayor potencia durante una parada. La instalación se documenta en el libro de mantenimiento, pero no se actualizan el FMEA, los diagramas de capacidad ni se repiten los trials de DP. El buque vuelve a operar en Clase 2 al día siguiente.",
      q: "¿Qué situación describe mejor el estado del buque?",
      o: ["La configuración cambió de forma significativa y no está demostrada: el FMEA, los diagramas y los trials deben actualizarse antes de operar en DP", "El certificado sigue válido, porque la instalación está documentada en el libro de mantenimiento", "Solo deben actualizarse los diagramas, porque el FMEA no cambia con un propulsor", "Basta con informar a la sociedad de clasificación al final de la temporada"],
      e: "Un cambio significativo, como un propulsor de mayor potencia, altera la capacidad, la configuración de fallos y los diagramas. Documentarlo en el libro de mantenimiento no lo cubre. El FMEA, los diagramas de capacidad y los trials deben actualizarse y demostrarse antes de volver a operar en DP. Operar sin ello deja la configuración sin demostrar.",
    },
    pt: {
      caso: "Um navio com certificado DP válido instala um novo propulsor de proa de maior potência durante uma parada. A instalação é documentada no livro de manutenção, mas a FMEA, os diagramas de capacidade não são atualizados e os testes de DP não são repetidos. O navio volta a operar em Classe 2 no dia seguinte.",
      q: "Qual situação descreve melhor o estado do navio?",
      o: ["A configuração mudou de forma significativa e não está demonstrada: a FMEA, os diagramas e os testes devem ser atualizados antes de operar em DP", "O certificado continua válido, porque a instalação está documentada no livro de manutenção", "Só os diagramas devem ser atualizados, porque a FMEA não muda com um propulsor", "Basta informar a sociedade classificadora no fim da temporada"],
      e: "Uma mudança significativa, como um propulsor de maior potência, altera a capacidade, a configuração de falhas e os diagramas. Documentá-la no livro de manutenção não a cobre. A FMEA, os diagramas de capacidade e os testes devem ser atualizados e demonstrados antes de voltar a operar em DP. Operar sem isso deixa a configuração sem demonstração.",
    },
  },
];
