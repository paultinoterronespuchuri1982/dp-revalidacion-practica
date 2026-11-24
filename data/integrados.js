// 30 casos prácticos integrados a partir de los temas de los materiales de revalidación
// (cuestionario DP en Word y guía DP REVALIDATION en PDF): alertas ASOG, ponderación de referencias,
// multitrayectoria y sombreado en GNSS, bus-tie y disparo preferencial, propulsor que falla a plena potencia,
// prueba de deriva, centro de rotación, ruedas de viento y FMEA proving trials.
// Son casos redactados para practicar. No copian las preguntas de los materiales; la respuesta correcta
// la razona el DPO a partir de los principios de la clase y de la operación.
// Campos: m = módulo NI; a = índice correcto (0 = A).

export const INTEGRADOS = [
  {
    m: 1, a: 2,
    es: {
      caso: "Un buque en Clase 2 opera a 120 metros de una plataforma con el DPO en Auto DP. Se pierde la lectura de un MRU y el sistema lo marca como degradado. El buque tiene tres MRU instalados y el capability plot muestra margen suficiente con dos.",
      q: "¿Cuál es la respuesta correcta del DPO según la lógica de alertas del ASOG?",
      o: ["Continuar sin cambios, porque el buque tiene margen con dos MRU", "Pasar la operación a alerta roja y abandonar la zona de 500 metros de inmediato", "Notificar al capitán y evaluar si la pérdida reduce la redundancia por debajo de la configuración del análisis; si es así, pasar a alerta amarilla y preparar la terminación", "Desconectar el MRU restante para evitar lecturas erróneas"],
      e: "La pérdida de un MRU no implica por sí sola abandonar la operación, pero sí reduce la redundancia de un sensor que el sistema usa para corregir la posición. El DPO debe comprobar si la configuración restante sigue cumpliendo la clase y el análisis. Si no, pasa a amarilla y prepara la terminación. Es una decisión a comunicar al capitán, no una desconexión a ciegas."
    },
    pt: {
      caso: "Um navio em Classe 2 opera a 120 metros de uma plataforma com o DPO em Auto DP. Perde-se a leitura de um MRU e o sistema o marca como degradado. O navio tem três MRU instalados, e o capability plot mostra margem suficiente com dois.",
      q: "Qual é a resposta correta do DPO segundo a lógica de alertas do ASOG?",
      o: ["Continuar sem mudanças, porque o navio tem margem com dois MRU", "Passar a operação para alerta vermelho e deixar a zona de 500 metros imediatamente", "Notificar o comandante e avaliar se a perda reduz a redundância abaixo da configuração da análise; se sim, passar para alerta amarelo e preparar o encerramento", "Desligar o MRU restante para evitar leituras erradas"],
      e: "A perda de um MRU não implica por si só abandonar a operação, mas reduz a redundância de um sensor que o sistema usa para corrigir a posição. O DPO deve verificar se a configuração restante ainda atende à classe e à análise. Se não atender, passa para amarelo e prepara o encerramento. É uma decisão a comunicar ao comandante, não uma desconexão às cegas."
    }
  },
  {
    m: 4, a: 1,
    es: {
      caso: "Un buque Clase 2 usa tres referencias: dos DGNSS y un sistema de microondas. Durante una maniobra, una grúa de la plataforma bloquea parcialmente la vista de una antena DGNSS hacia el cielo. El HDOP sube y la solución del DGNSS se degrada.",
      q: "¿Qué fenómeno describe mejor lo que está ocurriendo?",
      o: ["Interferencia de radio de baja frecuencia sobre el receptor", "Sombreado de la antena: la obstrucción reduce los satélites visibles, empeora la geometría (HDOP) y degrada la solución", "Una reflexión de la señal en la nube, que aumenta la precisión", "Un error de reloj del satélite, que se corrige automáticamente"],
      e: "El sombreado ocurre cuando estructuras como grúas, mástiles o chimeneas impiden ver los satélites. Con menos satélites la geometría empeora y el HDOP sube, lo que reduce la precisión. El DPO debe ponderar esa referencia a la baja, verificar la configuración restante y considerar la posición de la antena."
    },
    pt: {
      caso: "Um navio em Classe 2 usa três referências: dois DGNSS e um sistema de micro-ondas. Durante uma manobra, um guindaste da plataforma bloqueia parcialmente a visão de uma antena DGNSS para o céu. O HDOP sobe e a solução do DGNSS se degrada.",
      q: "Qual fenômeno descreve melhor o que está ocorrendo?",
      o: ["Interferência de rádio de baixa frequência sobre o receptor", "Sombreamento da antena: a obstrução reduz os satélites visíveis, piora a geometria (HDOP) e degrada a solução", "Uma reflexão do sinal na nuvem, que aumenta a precisão", "Um erro de relógio do satélite, que se corrige automaticamente"],
      e: "O sombreamento ocorre quando estruturas como guindastes, mastros ou chaminés impedem a visão dos satélites. Com menos satélites a geometria piora e o HDOP sobe, reduzindo a precisão. O DPO deve reduzir o peso dessa referência, verificar a configuração restante e considerar a posição da antena."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "Un DGNSS muestra una posición con buena geometría (HDOP bajo) y un número alto de satélites, pero la solución se desplaza 1,8 metros respecto a la referencia hidroacústica en una dirección que cambia con la proa del buque, cerca de estructuras metálicas grandes.",
      q: "¿Cuál es la causa más probable y qué debe considerar el DPO antes de ponderar la referencia?",
      o: ["Un buen HDOP garantiza que la solución es exacta, así que la hidroacústica es la errónea", "Un error del reloj del receptor, que no depende de la proa", "Falta de satélites, que se corrige añadiendo más satélites al cálculo", "Multitrayectoria: las señales reflejadas en las estructuras metálicas añaden error que depende de la orientación; un HDOP bajo no lo detecta"],
      e: "Un HDOP bajo mide la geometría de los satélites, no la pureza de la señal. La multitrayectoria, causada por reflexiones en estructuras metálicas, puede desplazar la solución aunque la geometría sea buena, y depende de la orientación del buque. El DPO debe contrastar con otra referencia de principio distinto antes de confiar en la combinación."
    },
    pt: {
      caso: "Um DGNSS mostra uma posição com boa geometria (HDOP baixo) e grande número de satélites, mas a solução se desloca 1,8 metro em relação à referência hidroacústica numa direção que muda com a proa do navio, perto de grandes estruturas metálicas.",
      q: "Qual é a causa mais provável e o que o DPO deve considerar antes de ponderar a referência?",
      o: ["Um bom HDOP garante que a solução é exata, então a hidroacústica é a errada", "Um erro do relógio do receptor, que não depende da proa", "Falta de satélites, que se corrige adicionando mais satélites ao cálculo", "Multicaminho: os sinais refletidos nas estruturas metálicas somam erro que depende da orientação; um HDOP baixo não o detecta"],
      e: "Um HDOP baixo mede a geometria dos satélites, não a pureza do sinal. O multicaminho, causado por reflexões em estruturas metálicas, pode deslocar a solução mesmo com boa geometria, e depende da orientação do navio. O DPO deve confrontar com outra referência de princípio diferente antes de confiar na combinação."
    }
  },
  {
    m: 2, a: 0,
    es: {
      caso: "Un buque Clase 2 tiene el sistema de gestión de potencia configurado con el acoplamiento de barras cerrado para repartir carga durante una operación de larga duración. Una falla de tierra en una barra provoca un cierre de protección que arrastra a la otra barra.",
      q: "¿Qué configuración de barras debía usarse en una Clase 2, y por qué?",
      o: ["El acoplamiento abierto por defecto, salvo que el FMEA justifique otra configuración, para que una falla en una barra quede aislada", "El acoplamiento siempre cerrado, porque reparte mejor la carga", "El acoplamiento cerrado solo en puerto, y abierto en operación DP", "Da igual, porque la protección actúa igual en ambos casos"],
      e: "En Clase 2 la configuración habitual es con el acoplamiento abierto, salvo que el FMEA demuestre que la configuración cerrada no compromete el aislamiento de fallos. Con el acoplamiento cerrado, una falla en una barra puede propagarse a la otra. La configuración debe estar justificada en el análisis y verificada."
    },
    pt: {
      caso: "Um navio em Classe 2 tem o sistema de gestão de potência configurado com o acoplamento de barras fechado para repartir carga durante uma operação longa. Uma falha de terra em uma barra provoca um fechamento de proteção que arrasta a outra barra.",
      q: "Qual configuração de barras devia ser usada em uma Classe 2, e por quê?",
      o: ["Acoplamento aberto por padrão, salvo se a FMEA justificar outra configuração, para que uma falha em uma barra fique isolada", "Acoplamento sempre fechado, porque reparte melhor a carga", "Acoplamento fechado somente no porto, e aberto em operação DP", "Tanto faz, porque a proteção atua igual nos dois casos"],
      e: "Na Classe 2 a configuração habitual é com o acoplamento aberto, salvo se a FMEA demonstrar que a configuração fechada não compromete o isolamento de falhas. Com o acoplamento fechado, uma falha em uma barra pode se propagar para a outra. A configuração deve estar justificada na análise e verificada."
    }
  },
  {
    m: 6, a: 2,
    es: {
      caso: "Durante una operación en Clase 2, la demanda de los propulsores sube y supera el porcentaje de la capacidad en línea. El sistema de gestión de potencia desconecta el aire acondicionado de la sala de control y de los camarotes, pero el DPO observa que el disparo se produce antes de llegar al umbral configurado.",
      q: "¿Qué debe revisar el DPO?",
      o: ["Nada, el disparo preferencial es correcto siempre", "Que el aire acondicionado debió apagarse manualmente antes de la operación", "Que el umbral de disparo y la prioridad de cargas coinciden con lo configurado y con el análisis; un disparo anticipado indica que la configuración real no es la de diseño", "Que los propulsores deben limitarse para evitar el disparo"],
      e: "El disparo preferencial de cargas no esenciales es una protección del sistema. Si ocurre antes del umbral configurado, la configuración real o el cálculo de carga no coinciden con el diseño. El DPO debe revisar los parámetros, la capacidad en línea y el análisis, porque un disparo anticipado oculta un problema de capacidad."
    },
    pt: {
      caso: "Durante uma operação em Classe 2, a demanda dos propulsores sobe e ultrapassa o percentual da capacidade em linha. O sistema de gestão de potência desliga o ar-condicionado da sala de controle e dos camarotes, mas o DPO observa que o disparo ocorre antes de chegar ao limite configurado.",
      q: "O que o DPO deve verificar?",
      o: ["Nada, o disparo preferencial é sempre correto", "Que o ar-condicionado devia ter sido desligado manualmente antes da operação", "Que o limite de disparo e a prioridade das cargas coincidem com o configurado e com a análise; um disparo antecipado indica que a configuração real não é a de projeto", "Que os propulsores devem ser limitados para evitar o disparo"],
      e: "O disparo preferencial de cargas não essenciais é uma proteção do sistema. Se ocorre antes do limite configurado, a configuração real ou o cálculo de carga não coincidem com o projeto. O DPO deve verificar os parâmetros, a capacidade em linha e a análise, porque um disparo antecipado esconde um problema de capacidade."
    }
  },
  {
    m: 5, a: 1,
    es: {
      caso: "Un buque Clase 2 con dos anemómetros nota que, al cambiar el viento de 180 a 300 grados, el sensor de proa tarda en registrar el cambio, porque una estructura del mástil lo protege parcialmente. El sistema sigue usando ese sensor para el feed-forward.",
      q: "¿Qué debe hacer el DPO?",
      o: ["Mantener el sensor porque es el de proa y no hay alarma", "Evaluar el sombreado del sensor, deseleccionarlo mientras dure la distorsión y verificar que el sensor restante cumple el análisis de viento", "Promediar ambos sensores siempre, sin excepción", "Pasar a joystick para no depender del feed-forward"],
      e: "Un sensor sombreado por una estructura da lecturas retrasadas o distorsionadas, lo que empeora el feed-forward. La acción es deseleccionarlo mientras dure la distorsión y verificar que el sensor restante permite cumplir el análisis. Promediar un sensor distorsionado con uno correcto degrada la señal, y pasar a joystick no resuelve la pérdida de datos."
    },
    pt: {
      caso: "Um navio em Classe 2 com dois anemômetros percebe que, ao mudar o vento de 180 para 300 graus, o sensor de proa demora a registrar a mudança, porque uma estrutura do mastro o protege parcialmente. O sistema continua usando esse sensor para o feed-forward.",
      q: "O que o DPO deve fazer?",
      o: ["Manter o sensor porque é o de proa e não há alarme", "Avaliar o sombreamento do sensor, desselecioná-lo enquanto durar a distorção e verificar se o sensor restante atende à análise de vento", "Fazer a média dos dois sensores sempre, sem exceção", "Passar para joystick para não depender do feed-forward"],
      e: "Um sensor sombreado por uma estrutura dá leituras atrasadas ou distorcidas, o que piora o feed-forward. A ação é desselecioná-lo enquanto durar a distorção e verificar se o sensor restante permite atender à análise. Fazer a média de um sensor distorcido com um correto degrada o sinal, e passar para joystick não resolve a perda de dados."
    }
  },
  {
    m: 3, a: 0,
    es: {
      caso: "Antes de aproximarse a una plataforma, el DPO realiza una prueba de deriva (drift-off). Durante la prueba, el buque tarda más de lo previsto en alejarse y el empuje requerido para mantener el rumbo es el 90 % de la capacidad. La prueba se da por aprobada porque el buque 'se movió en la dirección correcta'.",
      q: "¿Qué debe concluir el DPO de la prueba?",
      o: ["Que la prueba no es concluyente: el empuje requerido indica que la condición ambiental deja poca reserva para una pérdida de empuje cerca de la instalación", "Que la prueba es válida porque el buque se movió en la dirección correcta", "Que el 90 % de empuje es el normal en cualquier operación", "Que la prueba solo sirve para medir la corriente"],
      e: "La prueba de deriva evalúa la orientación favorable ante pérdida de empuje y cuánto empuje contrario se necesita. Un empuje del 90 % para mantener rumbo indica que, si fallara la energía o el empuje, el buque tendría muy poca reserva. Que el movimiento sea en la dirección correcta no basta: el resultado debe analizarse con el margen."
    },
    pt: {
      caso: "Antes de se aproximar de uma plataforma, o DPO realiza um teste de deriva (drift-off). Durante o teste, o navio leva mais tempo que o previsto para se afastar e o empuxo necessário para manter o rumo é de 90 % da capacidade. O teste é dado como aprovado porque o navio 'se moveu na direção certa'.",
      q: "O que o DPO deve concluir do teste?",
      o: ["Que o teste não é conclusivo: o empuxo exigido indica que a condição ambiental deixa pouca reserva para uma perda de empuxo perto da instalação", "Que o teste é válido porque o navio se moveu na direção correta", "Que 90 % de empuxo é normal em qualquer operação", "Que o teste serve só para medir a corrente"],
      e: "O teste de deriva avalia a orientação favorável diante de uma perda de empuxo e quanto empuxo contrário é necessário. Um empuxo de 90 % para manter o rumo indica que, se a energia ou o empuxo falhassem, o navio teria pouca reserva. Ter se movido na direção certa não basta: o resultado deve ser analisado com a margem."
    }
  },
  {
    m: 3, a: 2,
    es: {
      caso: "En una operación de Clase 2, el DPO observa que el buque gira sobre un punto distinto al esperado cuando se aplica un cambio de rumbo, y que el movimiento lateral en la maniobra es mayor de lo que el modelo predice.",
      q: "¿Qué debe revisar el DPO en la configuración?",
      o: ["Solo la potencia de los generadores, porque la rotación depende de la energía", "Solo la velocidad de la corriente medida", "El centro de rotación (COR) introducido en el modelo, porque un COR incorrecto altera la asignación de empuje y el comportamiento del buque", "Que el buque debe navegar a mayor velocidad para estabilizarse"],
      e: "El centro de rotación determina cómo responde el buque a un momento de giro. Si el COR del modelo no coincide con el real, el sistema reparte mal el empuje y el buque se mueve de forma distinta a la predicha. Debe verificarse el COR, sobre todo tras cambios de carga o de calado."
    },
    pt: {
      caso: "Em uma operação de Classe 2, o DPO observa que o navio gira em torno de um ponto diferente do esperado quando se aplica uma mudança de rumo, e que o movimento lateral na manobra é maior do que o modelo prevê.",
      q: "O que o DPO deve revisar na configuração?",
      o: ["Somente a potência dos geradores, porque a rotação depende da energia", "Somente a velocidade da corrente medida", "O centro de rotação (COR) introduzido no modelo, porque um COR incorreto altera a alocação de empuxo e o comportamento do navio", "Que o navio deve navegar mais rápido para se estabilizar"],
      e: "O centro de rotação determina como o navio responde a um momento de giro. Se o COR do modelo não coincide com o real, o sistema distribui mal o empuxo e o navio se move diferente do previsto. O COR deve ser verificado, sobretudo após mudanças de carga ou de calado."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "En un buque Clase 2, el sistema pondera las tres referencias según su calidad. Una referencia de DGNSS con HDOP de 2,1 y 9 satélites recibe un peso del 40 %, mientras que la de radar, con HDOP similar, recibe el 15 % porque su tiempo de latencia de corrección es mayor. El DPO comprueba que la ponderación se hace con la latencia.",
      q: "¿Qué variable debe incluirse además del HDOP para que la ponderación sea correcta?",
      o: ["La edad y latencia de la corrección diferencial y el número de satélites seguidos, porque la calidad de una referencia depende de todos estos factores", "Solo el número de satélites", "Solo la temperatura del receptor", "Solo la intensidad de la señal de radio, sin más"],
      e: "La ponderación de una referencia de posición combina varios indicadores de calidad: el HDOP, el número de satélites, la edad o latencia de la corrección diferencial, y otros como la multitrayectoria. Basarla en un solo factor puede sobrevalorar una referencia que parece buena pero tiene una corrección antigua."
    },
    pt: {
      caso: "Em um navio Classe 2, o sistema pondera as três referências pela qualidade. Uma referência DGNSS com HDOP de 2,1 e 9 satélites recebe peso de 40 %, enquanto a de radar, com HDOP parecido, recebe 15 % porque sua latência de correção é maior. O DPO confere que a ponderação considera a latência.",
      q: "Que variável deve ser incluída além do HDOP para que a ponderação seja correta?",
      o: ["A idade e a latência da correção diferencial e o número de satélites rastreados, porque a qualidade de uma referência depende de todos esses fatores", "Somente o número de satélites", "Somente a temperatura do receptor", "Somente a intensidade do sinal de rádio, sem mais"],
      e: "A ponderação de uma referência combina vários indicadores de qualidade: o HDOP, o número de satélites, a idade ou latência da correção diferencial, e outros como o multicaminho. Basear-se em um fator só pode superestimar uma referência que parece boa mas tem correção antiga."
    }
  },
  {
    m: 2, a: 3,
    es: {
      caso: "Un buque Clase 2 tiene un anillo de barras cerrado (closed ring) para mejorar la disponibilidad de energía. Durante una falla en un tramo del anillo, el sistema aísla el tramo en menos de 100 milisegundos y el resto del anillo sigue alimentando los propulsores sin pérdida de posición.",
      q: "¿Qué condición debe cumplirse para que el anillo cerrado mantenga la redundancia en la práctica?",
      o: ["Que el anillo esté siempre cerrado, sin protecciones selectivas", "Que todos los generadores estén en marcha, sin importar la carga", "Que el anillo sea de cobre y no de aluminio", "Que el aislamiento de la falla sea selectivo y rápido, y que la capacidad restante con el tramo aislado cubra la carga de DP sin pérdida de posición"],
      e: "Un anillo cerrado mejora la disponibilidad solo si la protección aísla la falla de forma selectiva y rápida. Además, la capacidad restante debe sostener la carga de DP con el tramo aislado. Sin esas dos condiciones, un anillo cerrado puede propagar la falla como una barra única."
    },
    pt: {
      caso: "Um navio Classe 2 tem um anel de barras fechado (closed ring) para melhorar a disponibilidade de energia. Durante uma falha em um trecho do anel, o sistema isola esse trecho em menos de 100 milissegundos e o restante do anel continua alimentando os propulsores sem perda de posição.",
      q: "Qual condição deve ser cumprida para que o anel fechado mantenha a redundância na prática?",
      o: ["Que o anel esteja sempre fechado, sem proteções seletivas", "Que todos os geradores estejam em operação, independentemente da carga", "Que o anel seja de cobre e não de alumínio", "Que o isolamento da falha seja seletivo e rápido, e que a capacidade restante, com o trecho isolado, cubra a carga do DP sem perda de posição"],
      e: "Um anel fechado melhora a disponibilidade somente se a proteção isola a falha de forma seletiva e rápida. Além disso, a capacidade restante deve sustentar a carga do DP com o trecho isolado. Sem essas duas condições, um anel fechado pode propagar a falha como uma barra única."
    }
  },
  {
    m: 5, a: 2,
    es: {
      caso: "Un buque Clase 2 opera con un sensor de corriente DP calculado como la fuerza residual que el modelo no explica. Durante una maniobra, el sensor de corriente marca 1,2 nudos, mientras que la corriente medida con un perfilador acústico en el calado es de 0,6 nudos. El DPO considera que el sensor de corriente es erróneo.",
      q: "¿Qué debe considerar el DPO antes de descartar el sensor?",
      o: ["Que la corriente DP es una estimación de fuerza residual, no una medida directa, y que errores del modelo (empuje, viento, respuesta del casco) se traducen en corriente aparente", "Que el perfilador siempre tiene razón porque mide directamente", "Que la corriente DP no tiene relación con la posición", "Que el sensor debe apagarse porque la corriente es siempre cero en la superficie"],
      e: "La corriente DP es una estimación: el sistema la deduce de la fuerza que no explica el modelo. Si el modelo tiene errores de empuje, de viento o de respuesta del casco, esos errores aparecen como corriente. Antes de descartar el sensor, el DPO debe revisar el modelo, el viento y el empuje, y no asumir que el perfilador tiene siempre la razón."
    },
    pt: {
      caso: "Um navio Classe 2 opera com uma corrente DP calculada como a força residual que o modelo não explica. Durante uma manobra, o sensor de corrente marca 1,2 nó, enquanto a corrente medida com um perfilador acústico na faixa do calado é de 0,6 nó. O DPO considera que o sensor de corrente está errado.",
      q: "O que o DPO deve considerar antes de descartar o sensor?",
      o: ["Que a corrente DP é uma estimativa de força residual, não uma medida direta, e que erros do modelo (empuxo, vento, resposta do casco) aparecem como corrente aparente", "Que o perfilador sempre tem razão porque mede diretamente", "Que a corrente DP não tem relação com a posição", "Que o sensor deve ser desligado porque a corrente é sempre zero na superfície"],
      e: "A corrente DP é uma estimativa: o sistema a deduz da força que o modelo não explica. Se o modelo tem erros de empuxo, de vento ou de resposta do casco, esses erros aparecem como corrente. Antes de descartar o sensor, o DPO deve revisar o modelo, o vento e o empuxo, e não presumir que o perfilador tem sempre razão."
    }
  },
  {
    m: 6, a: 3,
    es: {
      caso: "En un buque Clase 2 con tres generadores, el DPO cuenta con 'reserva de generación' porque hay un generador más en línea de lo necesario. Sin embargo, el generador adicional está en modo espera caliente y no sincronizado, y su arranque requiere 90 segundos.",
      q: "¿Cuál es la reserva de potencia que realmente cuenta para la respuesta inmediata?",
      o: ["Toda la capacidad de los tres generadores, porque están instalados", "La capacidad del generador en espera, porque se puede arrancar en cualquier momento", "La reserva de la red en paralelo, siempre, aunque el generador esté fuera de servicio", "La capacidad en línea que está disponible sin arrancar nada; el generador en espera no cuenta hasta que esté sincronizado y en carga"],
      e: "La reserva de generación inmediata (spinning reserve) es la capacidad que puede asumir carga sin arrancar equipos. Un generador en espera que tarda 90 segundos no cuenta para una respuesta inmediata. El DPO debe calcular la reserva con lo que está en línea y sincronizado, no con lo instalado."
    },
    pt: {
      caso: "Em um navio Classe 2 com três geradores, o DPO conta com 'reserva de geração' porque há um gerador a mais em linha do que o necessário. No entanto, o gerador adicional está em espera aquecida e não sincronizado, e sua partida exige 90 segundos.",
      q: "Qual é a reserva de potência que realmente conta para a resposta imediata?",
      o: ["Toda a capacidade dos três geradores, porque estão instalados", "A capacidade do gerador em espera, porque pode ser partido a qualquer momento", "A reserva da rede em paralelo, sempre, mesmo com o gerador fora de serviço", "A capacidade em linha disponível sem partir nada; o gerador em espera não conta até estar sincronizado e em carga"],
      e: "A reserva de geração imediata (spinning reserve) é a capacidade que pode assumir carga sem partir equipamentos. Um gerador em espera que leva 90 segundos não conta para uma resposta imediata. O DPO deve calcular a reserva com o que está em linha e sincronizado, não com o que está instalado."
    }
  },
  {
    m: 1, a: 3,
    es: {
      caso: "Un buque Clase 2 con DP inicia la operación sin haber completado la prueba de FMEA en la configuración actual, porque el sistema fue modificado recientemente y se programó la prueba para la semana siguiente. El capitán pide empezar porque el cliente tiene prisa.",
      q: "¿Qué debe responder el DPO?",
      o: ["Que la operación puede empezar, porque la prueba es solo una formalidad", "Que empiece con dos generadores y sin propulsor de proa, para ahorrar", "Que se acepta el riesgo si el cliente lo firma", "Que la operación no debe empezar en Clase 2 hasta completar las pruebas que demuestran la tolerancia a fallos de la configuración modificada"],
      e: "Las pruebas de FMEA demuestran que la configuración tolera fallos según el diseño. Tras una modificación, la configuración actual no está demostrada, y eso impide operar en Clase 2. Una firma del cliente o una configuración reducida no sustituyen esa prueba."
    },
    pt: {
      caso: "Um navio Classe 2 com DP inicia a operação sem ter concluído o teste de FMEA na configuração atual, porque o sistema foi modificado recentemente e o teste foi marcado para a semana seguinte. O comandante pede para começar porque o cliente tem pressa.",
      q: "O que o DPO deve responder?",
      o: ["Que a operação pode começar, porque o teste é apenas uma formalidade", "Que comece com dois geradores e sem o propulsor de proa, para economizar", "Que o risco é aceito se o cliente assinar", "Que a operação não deve começar em Classe 2 antes de concluir os testes que demonstram a tolerância a falhas da configuração modificada"],
      e: "Os testes de FMEA demonstram que a configuração tolera falhas conforme o projeto. Após uma modificação, a configuração atual não está demonstrada, e isso impede operar em Classe 2. Uma assinatura do cliente ou uma configuração reduzida não substituem esse teste."
    }
  },
  {
    m: 2, a: 1,
    es: {
      caso: "Un buque Clase 2 usa un sistema de referencia de cable tenso en aguas de 300 metros. El DPO observa que el ángulo del cable aumenta mucho y que las lecturas pierden exactitud, porque el cable forma un ángulo grande respecto a la vertical.",
      q: "¿Por qué pierde exactitud la referencia y qué decisión debe tomar?",
      o: ["Porque el cable es demasiado corto para la profundidad; la solución es aumentar la tensión sin más", "Porque el ángulo grande del cable, con la profundidad, reduce la exactitud y aumenta las cargas mecánicas; debe ponderarse a la baja o excluirse y verificar la configuración", "Porque el cable no puede medir ángulos en agua salada", "Porque la referencia cable tenso solo funciona en aguas poco profundas, así que la pérdida es normal"],
      e: "En aguas profundas el cable forma ángulos grandes, lo que reduce la exactitud de la lectura y aumenta las cargas. La referencia debe ponderarse a la baja o excluirse, y el DPO debe verificar la configuración restante. Esta limitación es conocida, y la respuesta correcta es gestionarla, no tratarla como normal."
    },
    pt: {
      caso: "Um navio Classe 2 usa um sistema de referência de cabo tenso em lâmina d'água de 300 metros. O DPO observa que o ângulo do cabo aumenta muito e que as leituras perdem exatidão, porque o cabo forma um ângulo grande em relação à vertical.",
      q: "Por que a referência perde exatidão e que decisão o DPO deve tomar?",
      o: ["Porque o cabo é curto demais para a profundidade; a solução é aumentar a tensão sem mais", "Porque o ângulo grande do cabo, com a profundidade, reduz a exatidão e aumenta as cargas mecânicas; deve ter o peso reduzido ou ser excluída, e a configuração verificada", "Porque o cabo não consegue medir ângulos em água salgada", "Porque a referência por cabo tenso só funciona em águas rasas, então a perda é normal"],
      e: "Em águas profundas o cabo forma ângulos grandes, o que reduz a exatidão da leitura e aumenta as cargas. A referência deve ter o peso reduzido ou ser excluída, e o DPO deve verificar a configuração restante. Essa limitação é conhecida, e a resposta correta é gerenciá-la, não tratá-la como normal."
    }
  },
  {
    m: 4, a: 2,
    es: {
      caso: "Un buque Clase 2 usa un sistema de microondas (radar) como referencia, a una distancia de 900 metros de un reflector fijo montado en una plataforma. El sistema lo usa en modo posición. Durante una lluvia intensa, la lectura del reflector se degrada y el DPO sospecha que la distancia ya no permite una lectura fiable.",
      q: "¿Qué debe hacer el DPO con esta referencia?",
      o: ["Mantenerla en modo posición, porque el radar siempre mide bien", "Desconectar el reflector y no usar la referencia nunca más", "Verificar el rango recomendado por la guía de referencias para el uso de microondas en modo posición, y pasar la referencia a modo monitor si la distancia y la lluvia lo exigen", "Aumentar la potencia del radar para compensar la lluvia"],
      e: "Las referencias de microondas tienen un rango de uso recomendado para usarse como entrada de posición; por encima de ese rango, o con lluvia fuerte, deben usarse en modo monitor. El DPO debe verificar esa condición con la guía de referencias, no suponer que el radar siempre mide bien."
    },
    pt: {
      caso: "Um navio Classe 2 usa um sistema de micro-ondas (radar) como referência, a 900 metros de um refletor fixo montado em uma plataforma. O sistema o usa em modo posição. Durante uma chuva forte, a leitura do refletor se degrada e o DPO suspeita que a distância já não permite uma leitura confiável.",
      q: "O que o DPO deve fazer com essa referência?",
      o: ["Mantê-la em modo posição, porque o radar sempre mede bem", "Desconectar o refletor e não usar a referência nunca mais", "Verificar a faixa recomendada pelo guia de referências para o uso de micro-ondas em modo posição, e passar a referência para modo monitor se a distância e a chuva exigirem", "Aumentar a potência do radar para compensar a chuva"],
      e: "As referências de micro-ondas têm uma faixa de uso recomendada para entrar como posição; acima dessa faixa, ou com chuva forte, devem ser usadas em modo monitor. O DPO deve verificar essa condição com o guia de referências, sem presumir que o radar sempre mede bem."
    }
  },
  {
    m: 5, a: 0,
    es: {
      caso: "Un buque Clase 2 cuenta con dos sensores de referencia vertical (MRU). Uno está alineado en el puente y el otro en el centro de gravedad. Tras una reparación, el MRU del centro de gravedad se reinstala con un desplazamiento de 15 centímetros en el eje longitudinal, sin actualizar la configuración de montaje.",
      q: "¿Qué efecto tiene esto sobre la compensación?",
      o: ["Un error de compensación que se transmite al cálculo de la posición de las referencias relativas al MRU; hay que actualizar la configuración de montaje", "Ningún efecto, porque los MRU se compensan solos", "Un efecto solo en el rumbo", "Un efecto solo cuando el buque está fondeado"],
      e: "Un MRU instalado en otro lugar que el configurado introduce un error de compensación en las referencias relativas. El sistema calcula la posición de cada referencia respecto al MRU, y si la configuración no coincide con el montaje real, la posición se desplaza. La configuración debe actualizarse tras cualquier reinstalación."
    },
    pt: {
      caso: "Um navio Classe 2 conta com dois sensores de referência vertical (MRU). Um está alinhado na ponte e o outro no centro de gravidade. Após um reparo, o MRU do centro de gravidade é reinstalado com um deslocamento de 15 centímetros no eixo longitudinal, sem atualizar a configuração de montagem.",
      q: "Que efeito isso tem sobre a compensação?",
      o: ["Um erro de compensação que se transmite ao cálculo da posição das referências relativas ao MRU; a configuração de montagem deve ser atualizada", "Nenhum efeito, porque os MRU se compensam sozinhos", "Um efeito somente no rumo", "Um efeito somente quando o navio está fundeado"],
      e: "Um MRU instalado em outro lugar que o configurado introduz um erro de compensação nas referências relativas. O sistema calcula a posição de cada referência em relação ao MRU, e se a configuração não coincide com a montagem real, a posição se desloca. A configuração deve ser atualizada após qualquer reinstalação."
    }
  },
  {
    m: 7, a: 3,
    es: {
      caso: "Un buque Clase 2 realiza una operación cerca de una plataforma con viento de 20 nudos. El capability plot muestra un margen del 8 % tras la falla de peor caso. El cliente pide retirar un sensor de viento del análisis porque 'en la práctica ese sensor siempre da lecturas bajas'.",
      q: "¿Qué debe responder el DPO?",
      o: ["Que el sensor puede retirarse del análisis, porque las lecturas bajas son un error sistemático que no importa", "Que el análisis debe ajustarse a 8 % para aceptar la operación", "Que la retirada del sensor cambia la configuración y el análisis, así que debe repetirse; un sensor con error sistemático debe corregirse o sustituirse, no eliminarse del análisis sin revisión", "Que el sensor debe mantenerse, pero ignorarse en la decisión de suspensión"],
      e: "Eliminar un sensor del análisis cambia la configuración de análisis y puede modificar el margen. Un sensor con error sistemático debe corregirse, recalibrarse o sustituirse, y el análisis debe repetirse con la configuración resultante. Ajustar el análisis para aceptar la operación invierte el orden correcto."
    },
    pt: {
      caso: "Um navio Classe 2 realiza uma operação perto de uma plataforma com vento de 20 nós. O capability plot mostra margem de 8 % após a falha de pior caso. O cliente pede para retirar um sensor de vento da análise porque 'na prática esse sensor sempre dá leituras baixas'.",
      q: "O que o DPO deve responder?",
      o: ["Que o sensor pode ser retirado da análise, porque as leituras baixas são um erro sistemático que não importa", "Que a análise deve ser ajustada até 8 % para aceitar a operação", "Que a retirada do sensor muda a configuração e a análise, então deve ser repetida; um sensor com erro sistemático deve ser corrigido ou substituído, não eliminado da análise sem revisão", "Que o sensor deve ser mantido, mas ignorado na decisão de suspensão"],
      e: "Eliminar um sensor da análise muda a configuração e pode alterar a margem. Um sensor com erro sistemático deve ser corrigido, recalibrado ou substituído, e a análise deve ser repetida com a configuração resultante. Ajustar a análise para aceitar a operação inverte a ordem correta."
    }
  },
  {
    m: 7, a: 0,
    es: {
      caso: "Un buque Clase 2 está en la zona de 500 metros de una plataforma. El ASOG establece que, con la pérdida de una referencia, se pasa a alerta amarilla. Se pierde una referencia y el DPO sigue operando en verde porque 'las otras dos coinciden'. Diez minutos después, se pierde otra y el sistema queda con una referencia.",
      q: "¿Qué error de gestión de alertas se ha cometido?",
      o: ["No pasar a amarillo al perder la primera referencia, lo que dejó el sistema sin el paso de alerta previsto por el ASOG; la coincidencia de las otras dos no sustituye la decisión", "Ninguno: la coincidencia de referencias es el criterio correcto", "Que la alerta amarilla debe activarse solo con la pérdida simultánea de tres", "Que el ASOG no debe usarse durante la operación"],
      e: "El ASOG define las alertas como una regla de gestión: la pérdida de una referencia activa la alerta amarilla, independientemente de que las demás coincidan. Operar en verde tras perder una referencia salta un paso de decisión, y la segunda pérdida deja el sistema con una sola referencia, una configuración que no cumple el análisis."
    },
    pt: {
      caso: "Um navio Classe 2 está na zona de 500 metros de uma plataforma. O ASOG estabelece que, com a perda de uma referência, passa-se para alerta amarelo. Perde-se uma referência e o DPO continua operando em verde porque 'as outras duas coincidem'. Dez minutos depois, perde-se outra e o sistema fica com uma referência.",
      q: "Que erro de gestão de alertas foi cometido?",
      o: ["Não passar para amarelo ao perder a primeira referência, o que deixou o sistema sem o passo de alerta previsto pelo ASOG; a coincidência das outras duas não substitui a decisão", "Nenhum: a coincidência de referências é o critério correto", "Que o alerta amarelo só deve ser ativado com a perda simultânea de três", "Que o ASOG não deve ser usado durante a operação"],
      e: "O ASOG define os alertas como regra de gestão: a perda de uma referência ativa o alerta amarelo, independentemente de as outras coincidirem. Operar em verde após perder uma referência pula um passo de decisão, e a segunda perda deixa o sistema com uma única referência, uma configuração que não atende à análise."
    }
  },
  {
    m: 7, a: 2,
    es: {
      caso: "Durante una operación de Clase 2, un propulsor de popa falla a plena potencia en sentido de avance. El DPO intenta compensar con el propulsor de proa y el timón, y mantiene el control en Auto DP sin pulsar la parada de emergencia del propulsor averiado, porque espera que el sistema lo corrija.",
      q: "¿Cuál es la respuesta correcta ante un propulsor que falla a plena potencia?",
      o: ["Esperar a que el sistema lo corrija, porque la compensación con otros propulsores basta", "Pasar a modo manual y reducir el empuje de todos los propulsores sin identificar el averiado", "Llamar al capitán y solo después decidir si parar el propulsor", "Identificar el propulsor averiado (por la demanda real frente a la consigna y la respuesta del buque) y parar de emergencia ese propulsor, sin esperar a que el sistema lo corrija"],
      e: "Un propulsor que falla a plena potencia no se corrige solo: los demás propulsores solo compensan a costa de empuje y capacidad. La acción correcta es identificar el propulsor averiado por la diferencia entre demanda y respuesta, y parar de emergencia ese propulsor. Cambiar de modo o esperar no resuelve la falla."
    },
    pt: {
      caso: "Durante uma operação em Classe 2, um propulsor de popa falha em potência máxima no sentido avante. O DPO tenta compensar com o propulsor de proa e o leme, e mantém o controle em Auto DP sem acionar a parada de emergência do propulsor com defeito, porque espera que o sistema corrija.",
      q: "Qual é a resposta correta diante de um propulsor que falha em potência máxima?",
      o: ["Esperar que o sistema corrija, porque a compensação com outros propulsores basta", "Passar para o modo manual e reduzir o empuxo de todos os propulsores sem identificar o defeituoso", "Chamar o comandante e só depois decidir se para o propulsor", "Identificar o propulsor defeituoso (pela demanda real frente à consigna e à resposta do navio) e parar de emergência esse propulsor, sem esperar que o sistema corrija"],
      e: "Um propulsor que falha em potência máxima não se corrige sozinho: os demais só compensam às custas de empuxo e de capacidade. A ação correta é identificar o propulsor com defeito pela diferença entre demanda e resposta, e pará-lo de emergência. Trocar de modo ou esperar não resolve a falha."
    }
  },
  {
    m: 6, a: 1,
    es: {
      caso: "Un buque Clase 2 tiene dos generadores en paralelo con reparto de carga por estatismo (droop). Al subir la demanda de un propulsor, el reparto se desequilibra: un generador sube a 95 % y el otro queda en 45 %. La protección de sobrecarga del primero se activa a 100 %, y el DPO observa que el sistema no reparte la carga correctamente.",
      q: "¿Qué debe revisar el DPO?",
      o: ["Que los generadores deben funcionar siempre en modo isócrono sin paralelo", "Los ajustes de droop y de regulación de carga, para que los generadores compartan carga en proporción a su capacidad", "Que el propulsor debe funcionar a menos revoluciones", "Que el generador de 95 % debe apagarse para que el otro suba"],
      e: "Con reparto por estatismo, la carga se comparte según los ajustes de droop. Un reparto tan desequilibrado indica un ajuste incorrecto o una diferencia de capacidad no tenida en cuenta. Mientras no se corrija, el generador más cargado puede disparar su protección y dejar la red con menos margen."
    },
    pt: {
      caso: "Um navio Classe 2 tem dois geradores em paralelo com repartição de carga por estatismo (droop). Ao subir a demanda de um propulsor, a repartição se desequilibra: um gerador sobe a 95 % e o outro fica em 45 %. A proteção de sobrecarga do primeiro é acionada em 100 %, e o DPO observa que o sistema não reparte a carga corretamente.",
      q: "O que o DPO deve revisar?",
      o: ["Que os geradores devem operar sempre em modo isócrono sem paralelo", "Os ajustes de droop e de regulação de carga, para que os geradores compartilhem carga proporcionalmente à sua capacidade", "Que o propulsor deve operar com menos rotações", "Que o gerador a 95 % deve ser desligado para que o outro suba"],
      e: "Com repartição por estatismo, a carga é compartilhada conforme os ajustes de droop. Uma repartição tão desequilibrada indica ajuste incorreto ou uma diferença de capacidade não considerada. Enquanto não for corrigida, o gerador mais carregado pode disparar a proteção e deixar a rede com menos margem."
    }
  },
  {
    m: 4, a: 3,
    es: {
      caso: "Un buque Clase 2 usa una referencia hidroacústica con transpondedores en modo respondedor (responder). Durante una operación, el DPO observa que el respondedor deja de responder a la interrogación cuando el buque se acerca a la zona de la hélice de un propulsor en marcha.",
      q: "¿Qué puede explicar la pérdida de respuesta y qué debe hacerse?",
      o: ["Un fallo del transpondedor en todas las condiciones, que debe sustituirse sin más", "El modo respondedor no funciona en buques con propulsores de paso variable", "Un error del software del DPO, que se corrige reiniciando el sistema", "Interferencia acústica del propulsor en marcha sobre la señal del transpondedor: evaluar la geometría, la potencia del propulsor y la posición del transpondedor, y no depender de esa referencia en esas condiciones"],
      e: "El ruido de cavitación y la geometría de la hélice pueden interferir con las señales acústicas. La pérdida de respuesta en una condición concreta indica una limitación del principio, no necesariamente un fallo del equipo. El DPO debe evaluar esa condición, ajustar la operación o la potencia, y no depender de la referencia mientras persista."
    },
    pt: {
      caso: "Um navio Classe 2 usa uma referência hidroacústica com transponders em modo respondedor (responder). Durante uma operação, o DPO observa que o respondedor deixa de responder à interrogação quando o navio se aproxima da área da hélice de um propulsor em funcionamento.",
      q: "O que pode explicar a perda de resposta e o que deve ser feito?",
      o: ["Uma falha do transponder em todas as condições, que deve ser substituído sem mais", "O modo respondedor não funciona em navios com propulsores de passo variável", "Um erro do software do DPO, que se corrige reiniciando o sistema", "Interferência acústica do propulsor em funcionamento sobre o sinal do transponder: avaliar a geometria, a potência do propulsor e a posição do transponder, e não depender dessa referência naquelas condições"],
      e: "O ruído de cavitação e a geometria da hélice podem interferir nos sinais acústicos. A perda de resposta em uma condição específica indica uma limitação do princípio, não necessariamente uma falha do equipamento. O DPO deve avaliar essa condição, ajustar a operação ou a potência, e não depender da referência enquanto o problema persistir."
    }
  },
  {
    m: 6, a: 0,
    es: {
      caso: "Un buque Clase 2 con DP tiene tres generadores. Durante una operación, el DPO cuenta con 'un generador de reserva' y, para ahorrar combustible, lo deja en parada. Un fallo de un generador en línea obliga a arrancar el de reserva, que tarda 60 segundos en sincronizarse.",
      q: "¿Qué debe concluir el DPO sobre la gestión de la reserva?",
      o: ["Que la reserva no es inmediata si el generador está parado: el análisis de consecuencias debe considerar el tiempo de arranque y sincronización, y la reserva en línea debe cubrir la pérdida sin pérdida de posición", "Que la reserva siempre cuenta, esté parada o no", "Que el ahorro de combustible justifica cualquier reducción de reserva", "Que los 60 segundos son irrelevantes para la posición"],
      e: "Un generador parado no aporta reserva inmediata: su arranque y sincronización tardan tiempo, durante el cual el sistema puede perder posición. La reserva que cuenta para la clase es la que está en línea o puede asumir carga sin pérdida. Ahorrar combustible no puede reducir esa reserva sin revisar el análisis."
    },
    pt: {
      caso: "Um navio Classe 2 com DP tem três geradores. Durante uma operação, o DPO conta com 'um gerador de reserva' e, para economizar combustível, o deixa parado. Uma falha de um gerador em linha obriga a partir o de reserva, que leva 60 segundos para sincronizar.",
      q: "O que o DPO deve concluir sobre a gestão da reserva?",
      o: ["Que a reserva não é imediata se o gerador está parado: a análise de consequências deve considerar o tempo de partida e sincronização, e a reserva em linha deve cobrir a perda sem perda de posição", "Que a reserva sempre conta, esteja parada ou não", "Que a economia de combustível justifica qualquer redução de reserva", "Que os 60 segundos são irrelevantes para a posição"],
      e: "Um gerador parado não fornece reserva imediata: a partida e a sincronização levam tempo, durante o qual o sistema pode perder posição. A reserva que conta para a classe é a que está em linha ou pode assumir carga sem perda. Economizar combustível não pode reduzir essa reserva sem revisar a análise."
    }
  },
  {
    m: 2, a: 2,
    es: {
      caso: "En un buque Clase 2, el DPO recibe una alarma de 'pérdida de comunicación con la estación 2'. La estación 1 sigue operando y el DPO decide continuar, porque 'la estación 1 tiene el control y está bien'. Diez minutos después, la estación 1 pierde alimentación de su red de control, y ninguna estación tiene control.",
      q: "¿Qué falla de diseño y de gestión se identifica?",
      o: ["Que la estación 2 debió apagarse para no generar alarmas", "Que la estación 1 debía tener menos alarmas", "Que la pérdida de la estación de reserva redujo la redundancia de control, y el DPO no reevaluó la configuración; ambas estaciones compartían una alimentación de control común", "Que la estación 2 no era necesaria en Clase 2"],
      e: "Perder la comunicación con la estación de reserva reduce la redundancia de control, y eso debe reevaluarse con el análisis. El DPO asumió que la estación activa era suficiente sin comprobarlo. Además, si las dos estaciones compartían alimentación, el fallo común dejó al sistema sin control. Ambos problemas son de diseño y de gestión."
    },
    pt: {
      caso: "Em um navio Classe 2, o DPO recebe um alarme de 'perda de comunicação com a estação 2'. A estação 1 continua operando e o DPO decide prosseguir, porque 'a estação 1 está no controle e está bem'. Dez minutos depois, a estação 1 perde alimentação de sua rede de controle, e nenhuma estação tem controle.",
      q: "Qual falha de projeto e de gestão é identificada?",
      o: ["Que a estação 2 devia ter sido desligada para não gerar alarmes", "Que a estação 1 devia ter menos alarmes", "Que a perda da estação de reserva reduziu a redundância de controle, e o DPO não reavaliou a configuração; as duas estações compartilhavam uma alimentação de controle comum", "Que a estação 2 não era necessária na Classe 2"],
      e: "Perder a comunicação com a estação de reserva reduz a redundância de controle, e isso deve ser reavaliado com a análise. O DPO presumiu que a estação ativa bastava sem verificar. Além disso, se as duas estações compartilhavam alimentação, a falha comum deixou o sistema sem controle. Os dois problemas são de projeto e de gestão."
    }
  },
  {
    m: 4, a: 0,
    es: {
      caso: "Un buque Clase 2 opera con un DGNSS en una zona de ionosfera activa. La solución se degrada de forma intermitente, con saltos de posición de 1 a 2 metros que duran unos segundos. El DPO quiere mantener el DGNSS en la ponderación porque 'siempre se recupera'.",
      q: "¿Qué debe decidir el DPO?",
      o: ["Reducir el peso del DGNSS durante la degradación, verificar la calidad de la corrección y la configuración restante, y no mantener la ponderación alta solo porque se recupera", "Mantener la ponderación porque la degradación es breve", "Desactivar todas las referencias de satélite de forma permanente", "Dejar que el controlador decida sin intervención, porque el sistema filtra los saltos"],
      e: "Saltos intermitentes de un DGNSS en ionosfera activa son una degradación real, aunque sea breve. Mantener un peso alto porque se recupera permite que el controlador reaccione a los saltos. El DPO debe reducir el peso, verificar la corrección y la configuración restante, y no confiar en la recuperación automática."
    },
    pt: {
      caso: "Um navio Classe 2 opera com um DGNSS em área de ionosfera ativa. A solução se degrada de forma intermitente, com saltos de posição de 1 a 2 metros que duram alguns segundos. O DPO quer manter o DGNSS na ponderação porque 'sempre se recupera'.",
      q: "O que o DPO deve decidir?",
      o: ["Reduzir o peso do DGNSS durante a degradação, verificar a qualidade da correção e a configuração restante, e não manter o peso alto só porque se recupera", "Manter a ponderação porque a degradação é breve", "Desativar todas as referências de satélite de forma permanente", "Deixar o controlador decidir sem intervenção, porque o sistema filtra os saltos"],
      e: "Saltos intermitentes de um DGNSS em ionosfera ativa são uma degradação real, mesmo que breve. Manter um peso alto porque se recupera permite que o controlador reaja aos saltos. O DPO deve reduzir o peso, verificar a correção e a configuração restante, e não confiar na recuperação automática."
    }
  },
  {
    m: 5, a: 3,
    es: {
      caso: "Un buque Clase 2 usa un anemómetro de copas en el mástil. En una tormenta, el sensor empieza a dar lecturas con oscilaciones periódicas de gran amplitud, que coinciden con la frecuencia de giro de las copas, y el DPO sospecha un problema de rodamiento.",
      q: "¿Qué debe hacer el DPO con el sensor?",
      o: ["Usarlo sin cambios, porque las oscilaciones se filtran automáticamente", "Usar la lectura media del sensor en lugar de la instantánea, sin investigar", "Ignorar las oscilaciones, porque en tormenta el viento es irregular", "Tratar la lectura como no fiable, comprobar el estado del sensor (rodamiento, mecanismo) y deseleccionarlo o usar el de reserva mientras se corrige"],
      e: "Oscilaciones periódicas que coinciden con la rotación de las copas indican un problema mecánico, no un viento irregular. El filtrado no elimina un fallo mecánico, y promediar una lectura defectuosa no la corrige. El DPO debe tratar el sensor como no fiable, deseleccionarlo o usar el de reserva, y verificar la configuración."
    },
    pt: {
      caso: "Um navio Classe 2 usa um anemômetro de conchas no mastro. Em uma tempestade, o sensor começa a dar leituras com oscilações periódicas de grande amplitude, que coincidem com a frequência de giro das conchas, e o DPO suspeita de um problema de rolamento.",
      q: "O que o DPO deve fazer com o sensor?",
      o: ["Usá-lo sem mudanças, porque as oscilações são filtradas automaticamente", "Usar a leitura média do sensor em vez da instantânea, sem investigar", "Ignorar as oscilações, porque em tempestade o vento é irregular", "Tratar a leitura como não confiável, verificar o estado do sensor (rolamento, mecanismo) e desselecioná-lo ou usar o de reserva enquanto é corrigido"],
      e: "Oscilações periódicas que coincidem com a rotação das conchas indicam um problema mecânico, não um vento irregular. A filtragem não elimina uma falha mecânica, e fazer a média de uma leitura defeituosa não a corrige. O DPO deve tratar o sensor como não confiável, desselecioná-lo ou usar o de reserva, e verificar a configuração."
    }
  },
  {
    m: 3, a: 1,
    es: {
      caso: "Antes de iniciar la operación, el DPO revisa la lista de verificación de referencias. Todas aparecen como 'OK', pero el registro de la última prueba de referencias tiene más de un mes, y el buque ha cambiado de calado y de posición de antenas desde entonces.",
      q: "¿Qué debe hacer el DPO antes de iniciar la operación?",
      o: ["Iniciar, porque la lista indica OK", "Repetir la prueba de referencias con la configuración actual y contrastar las lecturas antes de iniciar, porque las pruebas anteriores no representan la configuración real", "Cambiar la fecha del registro para que coincida con la prueba", "Usar solo la referencia que estaba más cerca de la plataforma"],
      e: "Una lista de referencias que marca 'OK' con una prueba antigua no representa la configuración real, porque el calado y las antenas han cambiado. Repetir la prueba con la configuración actual es la única forma de confirmar la coherencia. Cambiar la fecha del registro falsifica la documentación."
    },
    pt: {
      caso: "Antes de iniciar a operação, o DPO revisa a lista de verificação de referências. Todas aparecem como 'OK', mas o registro do último teste de referências tem mais de um mês, e o navio mudou de calado e de posição das antenas desde então.",
      q: "O que o DPO deve fazer antes de iniciar a operação?",
      o: ["Iniciar, porque a lista indica OK", "Repetir o teste de referências com a configuração atual e conferir as leituras antes de iniciar, porque os testes anteriores não representam a configuração real", "Mudar a data do registro para que coincida com o teste", "Usar somente a referência que estava mais perto da plataforma"],
      e: "Uma lista de referências que marca 'OK' com um teste antigo não representa a configuração real, porque o calado e as antenas mudaram. Repetir o teste com a configuração atual é a única forma de confirmar a coerência. Mudar a data do registro falsifica a documentação."
    }
  }
];
