// Traducción al portugués de las 100 preguntas de práctica.
// Clave = enunciado en español (así no depende del orden). Si falta una clave, se muestra el español.
export const PREGUNTAS_PT = {
  "¿Qué clase de equipo DP no tiene redundancia y puede perder la posición con un solo fallo?": {
    q: "Qual classe de equipamento DP não tem redundância e pode perder a posição com uma única falha?",
    o: ["Classe 1", "Classe 2", "Classe 3", "Classe 0"],
    e: "A Classe 1 não tem redundância. Se um componente falhar, o sistema pode perder a posição, por isso é a classe mais básica e a que oferece menos proteção.",
  },
  "¿Qué caracteriza a un sistema de Clase 2?": {
    q: "O que caracteriza um sistema de Classe 2?",
    o: ["Um único gerador", "Redundância em componentes ativos, de modo que uma falha única não causa perda de posição", "Proteção contra incêndio em qualquer compartimento", "Não exige análise FMEA"],
    e: "A Classe 2 exige redundância nos componentes ativos (geradores, propulsores, controladores). Uma falha única em um deles não deve causar perda de posição, embora possa exigir uma ação do operador.",
  },
  "¿Qué añade la Clase 3 respecto a la Clase 2?": {
    q: "O que a Classe 3 acrescenta em relação à Classe 2?",
    o: ["Um sensor de vento adicional", "Capacidade de manter a posição após a perda total de um compartimento por incêndio ou alagamento", "Somente modo joystick", "Substitui a análise FMEA"],
    e: "A Classe 3 cobre também a perda total de um compartimento (incêndio ou alagamento). Por isso exige separação física dos sistemas redundantes entre compartimentos diferentes.",
  },
  "¿Qué directriz IMO sirve de referencia para buques con sistemas DP?": {
    q: "Qual diretriz da IMO serve de referência para navios com sistemas DP?",
    o: ["MARPOL Anexo VI", "MSC.1/Circ.1580", "Somente SOLAS Capítulo II-2", "STCW Código A-I"],
    e: "A circular MSC.1/Circ.1580 reúne as diretrizes da IMO para navios com sistemas de posicionamento dinâmico. MARPOL, SOLAS e STCW tratam de outros temas (poluição, proteção contra incêndio e formação). Confirme sempre a versão vigente.",
  },
  "¿Qué significa que un sistema DP sea tolerante a un fallo único?": {
    q: "O que significa que um sistema DP seja tolerante a uma falha única?",
    o: ["Que o sistema nunca falha", "Que uma única falha não deve causar perda de posição", "Que há dois operadores", "Que a análise FMEA não é necessária"],
    e: "Um sistema tolerante a falha única continua mantendo a posição quando um componente falha. O projeto não garante que nada falhe, mas sim que uma única falha não derrube a operação.",
  },
  "¿Quién aprueba el plan de operación DP?": {
    q: "Quem aprova o plano de operação DP?",
    o: ["O cozinheiro", "O comandante e o pessoal DP, conforme o sistema de gestão do armador", "Somente o cliente", "Ninguém"],
    e: "O plano é aprovado pelo comandante e pelo pessoal DP responsável, seguindo o sistema de gestão do armador. Assim fica claro quem responde pela decisão.",
  },
  "¿Qué es la capacidad de posición de un buque?": {
    q: "O que é a capacidade de posição de um navio?",
    o: ["Sua massa", "Sua capacidade de manter posição e proa sob condições ambientais dadas", "Sua velocidade máxima", "O tempo de carga das baterias"],
    e: "A capacidade de posição indica até onde o navio resiste a vento, corrente e ondas mantendo posição e proa. É o conceito representado no capability plot.",
  },
  "¿Qué modo mantiene posición y rumbo automáticamente?": {
    q: "Qual modo mantém posição e proa automaticamente?",
    o: ["Joystick", "Auto DP", "Manual de máquinas", "Reboque"],
    e: "No Auto DP o sistema calcula o empuje necessário para manter a posição e a proa de referência. No joystick, em contrapartida, o operador controla o movimento manualmente.",
  },
  "En DP, ¿qué se entiende por pérdida de posición?": {
    q: "No DP, o que se entende por perda de posição?",
    o: ["Mudança de proa sem controle", "Afastamento da posição de referência além dos limites aceitáveis", "Falha de rádio", "Desligamento de geradores"],
    e: "Fala-se em perda de posição quando o navio se afasta da posição-alvo além dos limites de operação definidos. Uma mudança de proa ou uma falha de rádio não são, por si só, uma perda de posição.",
  },
  "¿Qué documento registra las operaciones DP del día?": {
    q: "Qual documento registra as operações DP do dia?",
    o: ["Registro DP / diário de operações", "Manifesto de carga", "Certificado de bandeira", "Planta do convés"],
    e: "O registro DP documenta a operação, as mudanças de modo, os alarmes e os incidentes. É a prova documental de como a operação foi conduzida.",
  },
  "¿Cuál es el objetivo de las pruebas de sistema antes de operar?": {
    q: "Qual é o objetivo dos testes do sistema antes de operar?",
    o: ["Economizar combustível", "Verificar se os sistemas funcionam conforme o projeto e os procedimentos", "Cumprir um horário", "Substituir a manutenção"],
    e: "Os testes verificam que o sistema responde como foi projetado, antes de depender dele em uma operação real. Não substituem a manutenção; complementam-na.",
  },
  "¿Para qué sirven los trials de DP?": {
    q: "Para que servem os trials de DP?",
    o: ["Verificar a capacidade e a resposta do sistema com testes controlados", "Medir a temperatura da água", "Pintar o casco", "Nenhuma das anteriores"],
    e: "Os trials são testes controlados que avaliam a capacidade e a resposta do sistema DP, por exemplo diante de falhas simuladas, para confirmar que ele se comporta como esperado.",
  },
  "¿Qué debe hacer el DPO en un cambio de guardia?": {
    q: "O que o DPO deve fazer na troca de turno?",
    o: ["Nada", "Fazer uma passagem documentada e verificar o estado do sistema", "Desligar o sistema", "Mudar a proa"],
    e: "A troca de turno deve ser documentada e verificada: quem assume precisa conhecer o estado dos sistemas, as referências ativas e qualquer ocorrência pendente.",
  },
  "¿Qué sistema da la posición absoluta por satélite?": {
    q: "Qual sistema fornece a posição absoluta por satélite?",
    o: ["GNSS / GPS", "Sonda de profundidade", "Anemômetro", "Termômetro"],
    e: "O GNSS (GPS e similares) fornece a posição absoluta em relação à Terra. É uma das referências mais usadas no DP, embora dependa da qualidade do sinal de satélite.",
  },
  "Las referencias hidroacústicas miden:": {
    q: "As referências hidroacústicas medem:",
    o: ["Distância e ângulo até um transponder submerso", "Vento", "Corrente na superfície", "Peso do navio"],
    e: "As referências hidroacústicas trabalham com transponders submersos e medem a distância e o ângulo até eles. A precisão depende das condições acústicas da água.",
  },
  "Un sistema de microondas (radar) mide:": {
    q: "Um sistema de microondas (radar) mede:",
    o: ["Distância e ângulo até um alvo fixo", "Temperatura", "Salinidade", "Consumo de combustível"],
    e: "As referências de microondas emitem um sinal que se reflete em um alvo fixo (uma estrutura ou um refletor) e calculam a distância e o ângulo.",
  },
  "Un sensor de cable tenso mide:": {
    q: "Um sensor de cabo tensionado mede:",
    o: ["Tensão e ângulo do cabo em relação ao ponto fixo", "Profundidade", "Vento", "Velocidade da corrente"],
    e: "As referências de cabo tensionado medem a tensão do cabo e seu ângulo em relação ao ponto fixo. Assim se conhece a posição relativa do navio.",
  },
  "Las referencias ópticas (láser) requieren:": {
    q: "As referências ópticas (laser) exigem:",
    o: ["Linha de visada desobstruída até os refletores", "Sinal de satélite", "Água salgada", "Conexão com a internet"],
    e: "Os sistemas laser precisam ver diretamente os refletores. Névoa, chuva ou uma obstrução podem degradar ou interromper a leitura.",
  },
  "¿Qué es una referencia de posición absoluta?": {
    q: "O que é uma referência de posição absoluta?",
    o: ["A que fornece a posição em relação a um ponto fixo da Terra", "A que mede somente a distância entre navios", "Uma referência de proa", "Um alarme"],
    e: "Uma referência absoluta situa o navio em relação à Terra, como o GNSS. As relativas, por outro lado, medem em relação a outro objeto que pode se mover.",
  },
  "Si el GNSS pierde precisión, ¿qué acción es adecuada?": {
    q: "Se o GNSS perder precisão, qual ação é adequada?",
    o: ["Continuar sem verificar", "Verificar o sinal e usar outras referências", "Desativar todos os sensores", "Trocar para joystick sem motivo"],
    e: "Diante de uma degradação do GNSS é preciso verificar a qualidade do sinal e confrontar com outras referências. Seguir sem checar pode levar a uma posição errada.",
  },
  "¿Por qué se usan varias referencias de posición?": {
    q: "Por que se usam várias referências de posição?",
    o: ["Para economizar cabo", "Para comparar e detectar leituras erradas", "Porque a norma obriga a usar apenas uma", "Para cobrir o custo"],
    e: "Com várias referências o sistema pode comparar e detectar uma leitura incorreta. Uma referência isolada não permite saber se está errada.",
  },
  "El filtrado de sensores en DP sirve para:": {
    q: "A filtragem de sensores no DP serve para:",
    o: ["Eliminar ruído e estimar a posição com mais estabilidade", "Mudar a cor da tela", "Medir a profundidade", "Guardar dados em papel"],
    e: "A filtragem elimina o ruído das medições (oscilações do sensor, movimento do navio) e fornece uma estimativa mais estável da posição, que é a que o controlador usa.",
  },
  "La deselección de una referencia debe:": {
    q: "A desseleção de uma referência deve:",
    o: ["Ser feita sem registro", "Ser registrada e justificada", "Ser escondida do comandante", "Ser feita somente em emergências"],
    e: "Qualquer mudança nas referências deve ficar registrada e justificada. Assim é possível reconstruir o que aconteceu e por que o sistema funcionou com umas referências ou outras.",
  },
  "¿Qué mide un anemómetro en DP?": {
    q: "O que mede um anemômetro no DP?",
    o: ["Velocidade e direção do vento", "Proa do navio", "Altura da onda", "Salinidade"],
    e: "O anemômetro mede a velocidade e a direção do vento. Com esses dados o sistema calcula a força que o vento exerce sobre o navio e a compensa.",
  },
  "El girocompás puede dar un rumbo erróneo si:": {
    q: "O giroscópio pode indicar uma proa errada se:",
    o: ["Estiver bem calibrado", "Houver erro de sensor ou de alinhamento", "For sempre exato", "Não houver corrente"],
    e: "Um erro de sensor ou de alinhamento falseia a proa. Por isso ela é confrontada com outra fonte quando algo não bate.",
  },
  "¿Qué corrige el sensor de referencia vertical (MRU) en la posición?": {
    q: "O que o sensor de referência vertical (MRU) corrige na posição?",
    o: ["O movimento do navio por balanço e arfagem", "A temperatura do motor", "A carga dos propulsores", "O consumo de combustível"],
    e: "O MRU mede balanço, arfagem e cabeceio. Com esses dados o sistema corrige a posição das referências montadas no navio, pois elas se movem com ele.",
  },
  "Un sensor de tensión de cable fuera de rango indica:": {
    q: "Um sensor de tensão de cabo fora da faixa indica:",
    o: ["Possível falha ou dano que deve ser investigado", "Bom funcionamento", "Fim da operação", "Que é preciso mudar a proa"],
    e: "Uma leitura fora da faixa pode significar falha do sensor ou dano no cabo. Ela deve ser investigada antes de voltar a confiar na referência.",
  },
  "¿Qué es una prueba de referencias antes de operar?": {
    q: "O que é um teste das referências antes de operar?",
    o: ["Comparar leituras entre referências para confirmar coerência", "Medir a altura da antena de rádio", "Testar a buzina", "Medir a dureza do casco"],
    e: "Antes de operar verifica-se que as referências fornecem leituras coerentes entre si. Se não forem, algo está mal calibrado ou com defeito e deve ser resolvido antes da operação.",
  },
  "¿Qué es un modo de fallo en un FMEA?": {
    q: "O que é um modo de falha em uma FMEA?",
    o: ["Uma forma em que um componente pode falhar", "Um tipo de propulsor", "Um modo de navegação", "Um requisito da tripulação"],
    e: "Um modo de falha é a maneira concreta como um componente ou função pode deixar de funcionar. A FMEA os lista um a um para avaliar seu efeito.",
  },
  "El FMEA debe identificar:": {
    q: "A FMEA deve identificar:",
    o: ["Os efeitos das falhas sobre a posição do navio", "Cores de pintura", "Horas de descanso", "Preço das peças de reposição"],
    e: "A FMEA analisa o que acontece com a posição do navio quando cada componente falha. É a base para demonstrar que o projeto atende à classe.",
  },
  "¿Qué significa redundancia en DP?": {
    q: "O que significa redundância no DP?",
    o: ["Repetir a mesma tarefa", "Dispor de reserva funcional para manter a operação se um componente falhar", "Ter sensores sem uso", "Usar um único sistema"],
    e: "Redundância é ter reserva funcional: se um componente falha, outro pode assumir sua função sem perder a posição. Um sensor sem uso não oferece redundância real.",
  },
  "La separación física de sistemas redundantes busca:": {
    q: "A separação física de sistemas redundantes busca:",
    o: ["Economizar espaço", "Evitar que um único evento afete todos os sistemas", "Facilitar a pintura", "Reduzir o peso"],
    e: "Se os sistemas redundantes estiverem juntos, um incêndio ou um alagamento pode deixá-los todos fora de serviço. A separação impede que um único evento derrube toda a redundância.",
  },
  "¿Qué es un fallo común (common mode failure)?": {
    q: "O que é uma falha de causa comum (common mode failure)?",
    o: ["Uma falha que afeta vários sistemas ao mesmo tempo pela mesma causa", "Uma falha de rotina", "Uma falha de um único sensor", "Um erro de cálculo"],
    e: "Uma falha de causa comum tem uma única origem que afeta vários sistemas redundantes ao mesmo tempo, como uma alimentação compartilhada ou um software com o mesmo erro. A redundância não a cobre.",
  },
  "Un fallo de software que afecta a los dos controladores redundantes es un ejemplo de:": {
    q: "Uma falha de software que afeta os dois controladores redundantes é um exemplo de:",
    o: ["Falha de causa comum", "Falha única independente", "Falha somente mecânica", "Falha de sensor isolado"],
    e: "Como os dois controladores executam o mesmo software, um mesmo erro os afeta juntos. Isso é uma falha de causa comum, e por isso a FMEA a analisa à parte.",
  },
  "¿Por qué se prueban los fallos simulados?": {
    q: "Por que se testam as falhas simuladas?",
    o: ["Para verificar que o sistema responde como foi projetado", "Para gastar combustível", "Por tradição", "Para entreter a tripulação"],
    e: "Simular falhas permite comprovar na prática que o sistema detecta a falha e reage como previsto. Uma FMEA apenas no papel não basta se o comportamento nunca foi testado.",
  },
  "En un sistema de Clase 2, un fallo en un generador debería:": {
    q: "Em um sistema de Classe 2, uma falha em um gerador deveria:",
    o: ["Causar perda de posição", "Não causar perda de posição se a redundância estiver bem projetada", "Desligar o navio", "Obrigar a reboque"],
    e: "Na Classe 2, uma falha única em um componente ativo, como um gerador, não deve causar perda de posição se a redundância estiver bem projetada e separada.",
  },
  "La confirmación de un fallo por el operador es importante porque:": {
    q: "A confirmação de uma falha pelo operador é importante porque:",
    o: ["Permite decidir a ação correta", "É uma formalidade sem valor", "Substitui a manutenção", "Desativa os alarmes"],
    e: "Antes de agir é preciso confirmar o que falhou. Agir com base em um diagnóstico errado pode piorar a situação.",
  },
  "¿Qué documento describe la respuesta del sistema ante fallos?": {
    q: "Qual documento descreve a resposta do sistema diante de falhas?",
    o: ["A análise FMEA", "O manifesto", "A planta da ponte", "O contrato de afretamento"],
    e: "A FMEA reúne os modos de falha, seus efeitos e as respostas previstas. É o documento que mostra como o sistema se comporta diante de cada falha.",
  },
  "Un fallo activo se diferencia de uno pasivo porque:": {
    q: "Uma falha ativa se diferencia de uma passiva porque:",
    o: ["A ativa é um componente que atua; a passiva é estática (por exemplo, uma válvula fechada)", "São iguais", "A ativa é sempre mais grave", "A passiva não existe"],
    e: "Um componente ativo participa da função (um propulsor, um gerador). Um componente passivo não atua, como uma válvula que fica fechada, e pode passar despercebido.",
  },
  "La pérdida de un compartimento en Clase 3 implica:": {
    q: "A perda de um compartimento na Classe 3 implica:",
    o: ["Que o navio deve continuar mantendo a posição com os sistemas restantes", "Que o navio deve sempre abandonar a operação", "Que não há risco", "Que se passa para rumo livre"],
    e: "A Classe 3 exige que, após a perda de um compartimento inteiro, o navio continue mantendo a posição com os sistemas que ficaram fora dele.",
  },
  "¿Qué es el reparto de carga (load sharing) entre generadores?": {
    q: "O que é o compartilhamento de carga (load sharing) entre geradores?",
    o: ["Divisão da carga elétrica entre geradores em paralelo", "Divisão de turnos", "Distribuição de mantimentos", "Divisão de contas"],
    e: "Quando vários geradores funcionam em paralelo, dividem a carga elétrica. Uma divisão desigual pode sobrecarregar um deles.",
  },
  "Si un generador sale de la barra con carga alta, ¿qué puede pasar?": {
    q: "Se um gerador sai da barra com carga alta, o que pode acontecer?",
    o: ["A carga passa para os restantes e pode haver sobrecarga", "Nada, sempre é seguro", "O navio afunda", "Ativa o joystick automaticamente"],
    e: "Ao sair um gerador, sua carga é distribuída entre os que restam. Se não houver margem, esses geradores podem se sobrecarregar e disparar suas proteções, o que pode levar a um apagão.",
  },
  "Un UPS en DP sirve para:": {
    q: "Um UPS no DP serve para:",
    o: ["Manter a alimentação dos sistemas críticos durante uma transição ou perda de energia", "Propulsionar o navio", "Aquecer a água", "Medir a profundidade"],
    e: "O UPS mantém a alimentação dos sistemas críticos (controladores, referências, sensores) durante uma interrupção ou transferência, para que o sistema não se desligue no pior momento.",
  },
  "¿Qué es el procedimiento de recuperación tras un blackout?": {
    q: "O que é o procedimento de recuperação após um apagão (blackout)?",
    o: ["Restabelecer a energia seguindo uma ordem definida", "Limpar o convés", "Recarregar as baterias do rádio", "Trocar a tripulação"],
    e: "Após um apagão a energia é restabelecida seguindo uma sequência definida, para evitar sobrecargas e falhas em cascata. Improvisar nesse momento aumenta o risco.",
  },
  "Una interrupción de potencia en los propulsores puede producir:": {
    q: "Uma interrupção de potência nos propulsores pode produzir:",
    o: ["Perda de empuxo e possível deriva", "Mais empuxo", "Melhor controle de proa", "Nada"],
    e: "Sem potência não há empuxo, e o navio fica à mercê do vento e da corrente. Por isso a alimentação dos propulsores é crítica.",
  },
  "¿Para qué se usan los interruptores de acoplamiento de barras (bus-tie)?": {
    q: "Para que servem os disjuntores de acoplamento de barras (bus-tie)?",
    o: ["Para isolar seções e limitar o efeito de uma falha", "Para aumentar a carga", "Para mudar a tensão", "Para medir a proa"],
    e: "Os bus-tie permitem isolar seções da rede elétrica. Assim, uma falha em uma seção não se propaga para toda a instalação.",
  },
  "Un fallo en la distribución de potencia puede causar:": {
    q: "Uma falha na distribuição de potência pode causar:",
    o: ["Perda de vários propulsores se não houver separação adequada", "Melhora da redundância", "Nenhuma consequência", "Aumento do consumo de água"],
    e: "Se todos os propulsores dependem da mesma distribuição sem separação, uma única falha pode deixá-los sem energia ao mesmo tempo. A separação faz parte da redundância.",
  },
  "En gestión de potencia, la reserva significa:": {
    q: "Na gestão de potência, a reserva significa:",
    o: ["Margem disponível para absorver picos de carga", "Potência guardada nos tanques", "Potência da iluminação", "Nenhuma"],
    e: "A reserva é a capacidade livre na geração em serviço. Serve para absorver picos de demanda, como uma manobra de propulsão intensa.",
  },
  "¿Qué sistema alerta cuando la carga se acerca al límite?": {
    q: "Qual sistema alerta quando a carga se aproxima do limite?",
    o: ["O sistema de alarme e gestão de potência", "O giroscópio", "A sonda", "O rádio VHF"],
    e: "O sistema de gestão de potência monitora a carga e emite alarmes quando ela se aproxima do limite, para que o operador tome providências antes de haver um desligamento.",
  },
  "Un fallo en las baterías de emergencia implica:": {
    q: "Uma falha nas baterias de emergência implica:",
    o: ["Menos respaldo diante da perda da energia principal", "Mais respaldo", "Nenhuma consequência", "Mais empuxo"],
    e: "As baterias de emergência dão tempo enquanto a energia principal é restabelecida. Se falham, a margem de tempo se reduz drasticamente.",
  },
  "¿Qué puede provocar la desconexión (trip) de un generador?": {
    q: "O que pode provocar o desligamento (trip) de um gerador?",
    o: ["Proteções por sobrecarga, sobretemperatura ou falha", "Aumento da pressão atmosférica", "Chegada de outro navio", "Mudança de proa"],
    e: "As proteções desligam o gerador diante de condições anormais: sobrecarga, temperatura excessiva ou uma falha interna. Assim a máquina é protegida, mas a potência disponível diminui.",
  },
  "¿Qué se verifica antes de transferir carga entre barras?": {
    q: "O que se verifica antes de transferir carga entre barras?",
    o: ["Sincronização e condições de chaveamento", "Desligar tudo", "Mudar a proa", "Nada"],
    e: "Antes de conectar duas barras é preciso confirmar que estão sincronizadas (tensão, frequência e fase). Conectá-las dessincronizadas pode danificar os equipamentos.",
  },
  "Un propulsor de túnel proporciona:": {
    q: "Um propulsor de túnel fornece:",
    o: ["Empuxo transversal (lateral)", "Empuxo vertical exclusivamente", "Somente elevação", "Nenhum"],
    e: "O propulsor de túnel é um canal transversal no casco que gera empuxo lateral. É muito útil para controlar a posição em baixa velocidade.",
  },
  "En Auto-heading, el sistema controla:": {
    q: "No Auto-heading, o sistema controla:",
    o: ["A proa do navio", "A velocidade do vento", "O nível de combustível", "A água de lastro"],
    e: "No Auto-heading o sistema mantém automaticamente a proa de referência, sem necesidade de intervenção constante do timoneiro.",
  },
  "El thrust allocation reparte:": {
    q: "A alocação de empuxo (thrust allocation) distribui:",
    o: ["A força e o momento necessários entre os propulsores disponíveis", "A carga entre os tripulantes", "Os turnos", "O combustível nos tanques"],
    e: "A alocação de empuxo decide quanto empuxo cada propulsor fornece para alcançar a força e o momento pedidos pelo controlador, levando em conta quais estão disponíveis.",
  },
  "Una pérdida de propulsor (thruster loss) implica:": {
    q: "A perda de um propulsor (thruster loss) implica:",
    o: ["Menor capacidade de empuxo e possível mudança de configuração", "Mais empuxo", "Passagem para reboque sem motivo", "Nenhuma ação"],
    e: "Ao perder um propulsor, a capacidade de empuxo cai e pode ser necessário reconfigurar a alocação de empuxo ou reduzir a margem de operação.",
  },
  "¿Por qué es importante la zona de exclusión de los propulsores?": {
    q: "Por que é importante a zona de exclusão dos propulsores?",
    o: ["Para evitar danos a pessoas, equipamentos ou navios próximos pelo jato", "Para melhorar a pintura", "Para economizar cabo", "Não é importante"],
    e: "O jato de um propulsor pode danificar pessoas, equipamentos ou estruturas próximas, e também pode afetar a manobra de outros navios. Por isso a zona é delimitada e respeitada.",
  },
  "El setpoint en DP es:": {
    q: "O setpoint no DP é:",
    o: ["A posição e a proa-alvo que o sistema tenta manter", "A potência do gerador", "O número de tripulantes", "A profundidade"],
    e: "O setpoint é o valor-alvo (posição e proa) que o controlador tenta manter. Todo o sistema trabalha para reduzir a diferença entre a posição real e esse alvo.",
  },
  "Cuando se pierden las referencias, el sistema puede usar la estimación (dead reckoning) para:": {
    q: "Quando as referências se perdem, o sistema pode usar a estimativa (dead reckoning) para:",
    o: ["Estimar a posição quando não há referências", "Mudar a cor da ponte", "Medir o vento", "Não tem função"],
    e: "Quando não há referências válidas, o sistema pode estimar a posição a partir da velocidade e da proa. É uma solução temporária, que perde precisão com o tempo.",
  },
  "Si un propulsor pierde la señal de control, la acción inmediata es:": {
    q: "Se um propulsor perder o sinal de controle, a ação imediata é:",
    o: ["Avaliar a situação, manter o controle possível e seguir o procedimento", "Mudar a proa sem pensar", "Desligar todo o sistema", "Ignorar"],
    e: "Primeiro se avalia a situação e se mantém o controle possível. Agir sem avaliar pode agravar a perda. O procedimento indica os passos a seguir.",
  },
  "La deriva sin control es un riesgo principalmente cuando:": {
    q: "A deriva sem controle é um risco principalmente quando:",
    o: ["Não há empuxo suficiente contra vento ou corrente", "O navio está fundeado", "Há pouca carga", "Há sol"],
    e: "Quando o empuxo disponível não basta para contrariar vento e corrente, o navio se desloca. Por isso o capability plot e a reserva de empuxo são fundamentais no planejamento.",
  },
  "El movimiento del buque se reduce con:": {
    q: "O movimento do navio se reduz com:",
    o: ["Controle de posição e amortecimento", "Aumento de velocidade sem controle", "Mudanças bruscas de proa", "Desligamento dos sensores"],
    e: "Um bom controle de posição amortece os movimentos do navio. Aumentar a velocidade ou mudar de proa bruscamente introduz mais movimento, não menos.",
  },
  "¿Qué ventaja tiene un propulsor azimutal?": {
    q: "Qual é a vantagem de um propulsor azimutal?",
    o: ["Maior flexibilidade de direção do empuxo", "Não precisa de energia", "Menor custo de manutenção sempre", "É invisível aos sensores"],
    e: "O propulsor azimutal pode girar e direcionar seu empuxo em qualquer sentido. Isso dá muita flexibilidade à alocação de empuxo, embora nem sempre reduza o custo de manutenção.",
  },
  "La reconfiguración de propulsores tras un fallo busca:": {
    q: "A reconfiguração dos propulsores após uma falha busca:",
    o: ["Manter a melhor capacidade de posição com os propulsores disponíveis", "Parar o navio sempre", "Aumentar o ruído", "Eliminar o controle"],
    e: "Após uma falha, o sistema redistribui o empuxo entre os equipamentos que restam para preservar a maior capacidade de posição possível.",
  },
  "En un capability plot, el margen es:": {
    q: "Em um capability plot, a margem é:",
    o: ["A diferença entre a carga ambiental máxima e a capacidade do navio", "O peso da carga", "O número de viagens", "A largura do cais"],
    e: "A margem é o que sobra entre a capacidade do navio e a carga ambiental da operação. Quanto maior a margem, mais segura é a manutenção da posição.",
  },
  "Un capability plot muestra normalmente:": {
    q: "Um capability plot normalmente mostra:",
    o: ["Uma zona de operação em função de vento, corrente e ondas", "A lista de pessoal", "O preço do combustível", "A temperatura do mar"],
    e: "O capability plot representa a zona em que o navio consegue manter a posição diante de combinações de vento, corrente e ondas.",
  },
  "Si las condiciones ambientales superan la capacidad del buque:": {
    q: "Se as condições ambientais superarem a capacidade do navio:",
    o: ["Pode ocorrer perda de posição", "O navio melhora sua posição", "O sistema se atualiza sozinho", "Não acontece nada"],
    e: "Quando o ambiente supera a capacidade do navio, não há empuxo suficiente e a posição pode ser perdida. Por isso se planeja com margem antes de operar.",
  },
  "La planificación de una operación DP incluye:": {
    q: "O planejamento de uma operação DP inclui:",
    o: ["Análise do ambiente, da capacidade e um plano de contingência", "Somente o cardápio", "Decoração da ponte", "Nenhum"],
    e: "Um bom planejamento avalia o ambiente, a capacidade do navio e as ações previstas caso algo falhe. Sem contingência, o operador improvisa no pior momento.",
  },
  "Los datos de viento y corriente se usan para:": {
    q: "Os dados de vento e corrente são usados para:",
    o: ["Avaliar a carga ambiental sobre o navio", "Calcular salários", "Medir o ruído", "Medir a profundidade"],
    e: "Com vento e corrente se estima a carga que o ambiente exerce sobre o navio. Essa carga é comparada com a capacidade de empuxo.",
  },
  "Un plan de contingencia en DP debe:": {
    q: "Um plano de contingência no DP deve:",
    o: ["Definir ações diante de perdas de referência, de energia ou de propulsão", "Ser decorado e não escrito", "Ser substituído pela intuição", "Ignorar os riscos"],
    e: "O plano de contingência define o que fazer diante das falhas mais prováveis (referências, energia, propulsores). Deve estar escrito e disponível, não apenas na memória do operador.",
  },
  "En un blackout, el DPO debe:": {
    q: "Em um apagão (blackout), o DPO deve:",
    o: ["Seguir o procedimento de recuperação e comunicar a ponte", "Mudar a proa sem avisar", "Desligar as comunicações", "Descansar"],
    e: "O DPO segue o procedimento de recuperação e comunica a situação à ponte. Manter a comunicação é essencial para que todos saibam o que está sendo feito.",
  },
  "Un near miss debe:": {
    q: "Um quase-acidente (near miss) deve:",
    o: ["Ser registrado e analisado para prevenir incidentes futuros", "Ser escondido", "Ser ignorado", "Ser apagado do registro"],
    e: "Um quase-acidente é um sinal de alerta. Registrá-lo e analisá-lo é a forma de corrigir a causa antes que ela provoque um incidente real.",
  },
  "La comunicación en emergencia debe ser:": {
    q: "A comunicação em emergência deve ser:",
    o: ["Clara, breve e registrada", "Lenta e ambígua", "Somente por sinais", "Opcional"],
    e: "Em uma emergência a informação precisa ser clara e breve, e ficar registrada. Ordens ambíguas ou não registradas geram erros.",
  },
  "Ante una pérdida de referencia con mal tiempo, lo primero es:": {
    q: "Diante de uma perda de referência com mau tempo, o primeiro passo é:",
    o: ["Manter a segurança e avaliar a deriva", "Acelerar", "Trocar para joystick sem avaliar", "Desligar os propulsores"],
    e: "A prioridade é a segurança das pessoas e do navio. Antes de qualquer ação é preciso avaliar quanto e para onde o navio está derivando.",
  },
  "Las lecciones aprendidas de incidentes sirven para:": {
    q: "As lições aprendidas com incidentes servem para:",
    o: ["Melhorar procedimentos, treinamento e projeto", "Cumprir papelada sem efeito", "Culpar uma pessoa", "Nada"],
    e: "As lições aprendidas visam melhorar o sistema (procedimentos, treinamento, projeto) para que o erro não se repita. Não servem para procurar culpados.",
  },
  "En un incidente DP, ¿qué se investiga primero?": {
    q: "Em um incidente DP, o que se investiga primeiro?",
    o: ["As causas raiz da falha", "A marca do calçado", "A cor do casco", "A quantidade de café"],
    e: "As causas raiz explicam por que a falha ocorreu. Se apenas o sintoma for corrigido, o problema volta a aparecer.",
  },
  "Un simulacro de emergencia sirve para:": {
    q: "Um simulado de emergência serve para:",
    o: ["Praticar a resposta diante de falhas", "Ocupar o tempo", "Gastar combustível", "Substituir a manutenção"],
    e: "Os simulados treinam a resposta diante de falhas, para que a equipe reaja bem quando elas acontecerem de verdade. Não substituem a manutenção.",
  },
  "¿Qué debe hacerse con el registro de un incidente?": {
    q: "O que deve ser feito com o registro de um incidente?",
    o: ["Completá-lo e mantê-lo conforme a norma do armador", "Destruí-lo", "Entregá-lo sem controle", "Deixá-lo sem data"],
    e: "O registro de incidentes deve ser completo e mantido conforme a norma do armador. É evidência para a investigação e para a melhoria.",
  },
  "La lista de verificación DP sirve para:": {
    q: "A lista de verificação DP serve para:",
    o: ["Confirmar o estado dos sistemas antes e durante a operação", "Decorar a ponte", "Calcular preços", "Nenhuma"],
    e: "A lista de verificação (checklist) confirma que os sistemas e as referências estão no estado previsto antes e durante a operação. Reduz esquecimentos em momentos de pressão.",
  },
  "El DPO debe conocer el sistema de gestión porque:": {
    q: "O DPO deve conhecer o sistema de gestão porque:",
    o: ["Define responsabilidades e procedimentos da operação", "Substitui o treinamento", "É opcional", "É só do escritório"],
    e: "O sistema de gestão do armador define quem decide o quê e como se opera. Conhecê-lo faz parte de operar com segurança e de acordo com as normas.",
  },
  "Las comunicaciones en operación DP deben:": {
    q: "As comunicações em operação DP devem:",
    o: ["Ser claras, com repetição das ordens importantes", "Ser em um idioma inventado", "Ser evitadas", "Ser feitas somente por e-mail"],
    e: "Repetir as ordens importantes ajuda a confirmar que foram entendidas corretamente. Em uma manobra de posicionamento, um mal-entendido pode ser grave.",
  },
  "La documentación del cambio de guardia sirve para:": {
    q: "A documentação da troca de turno serve para:",
    o: ["Garantir a continuidade da informação operacional", "Evitar a revisão", "Registrar horários de refeição", "Nada"],
    e: "O documento da troca de turno transmite o estado atual, as ocorrências e as pendências. Assim quem assume não começa às cegas.",
  },
  "Un procedimiento escrito es importante porque:": {
    q: "Um procedimento escrito é importante porque:",
    o: ["Reduz erros e facilita o treinamento e a auditoria", "É decorativo", "Só o porto exige", "Não serve para nada"],
    e: "Um procedimento escrito padroniza a forma de trabalhar, reduz erros, serve para treinar a equipe e permite auditar se ele é cumprido.",
  },
  "¿Por qué el sistema necesita medir el viento antes de que el buque se desplace?": {
    q: "Por que o sistema precisa medir o vento antes que o navio se desloque?",
    o: ["Para calcular a força do vento e compensá-la de forma antecipada", "Para registrar a temperatura", "Para ligar o aquecimento", "Não é necessário"],
    e: "Com a força do vento medida, o controlador pode aplicar empuxo antes que o navio se mova (compensação antecipada, ou feed-forward). Assim a posição se degrada menos.",
  },
  "¿Qué información ambiental se usa con más frecuencia para calcular la carga sobre el buque?": {
    q: "Qual informação ambiental é usada com mais frequência para calcular a carga sobre o navio?",
    o: ["Vento, corrente e ondas", "Somente a temperatura", "Somente a salinidade", "Somente a pressão do ar na ponte"],
    e: "Vento, corrente e ondas são as principais cargas ambientais que o DP estima e compensa. Outros dados podem ser úteis, mas não são a carga principal.",
  },
  "¿Qué sensor mide la velocidad del agua respecto al casco?": {
    q: "Qual sensor mede a velocidade da água em relação ao casco?",
    o: ["Sensor de corrente (correntômetro)", "Giroscópio", "Termômetro", "Anemômetro"],
    e: "O sensor de corrente mede a velocidade da água em relação ao casco. O DP a usa como força ambiental que precisa ser contrabalançada.",
  },
  "¿Por qué se verifica la calibración de los sensores ambientales?": {
    q: "Por que se verifica a calibração dos sensores ambientais?",
    o: ["Porque um valor errado de vento ou corrente gera uma compensação errada", "Por costume, sem efeito", "Somente para inspeções no porto", "Para economizar energia"],
    e: "Se o sensor fornece um valor falso, o controlador compensará uma força que não existe, ou não compensará a real. Por isso a calibração é uma tarefa de verificação.",
  },
  "Un sensor auxiliar que da una lectura imposible debe:": {
    q: "Um sensor auxiliar que apresenta uma leitura impossível deve:",
    o: ["Ser investigado e não ser usado até ser verificado", "Ser usado mesmo assim", "Ter o alarme ignorado", "Ser apagado do registro"],
    e: "Uma leitura impossível indica falha do sensor ou da sua conexão. Até ser verificado, não se deve confiar nele, e o fato deve ficar registrado.",
  },
  "¿Qué significa DP en el contexto de este examen?": {
    q: "O que significa DP no contexto deste exame?",
    o: ["Dynamic Positioning (posicionamento dinâmico)", "Deep Port", "Diesel Propulsion", "Dual Pilot"],
    e: "DP é a sigla de Dynamic Positioning: o sistema que mantém a posição e a proa do navio por meio dos seus propulsores, sem âncoras.",
  },
  "¿Qué determina la clase de un sistema DP?": {
    q: "O que determina a classe de um sistema DP?",
    o: ["O nível de redundância e de proteção contra falhas no projeto", "A cor do navio", "A idade da tripulação", "O tipo de carga"],
    e: "A classe (1, 2 ou 3) depende de quanta redundância o sistema tem e de ele conseguir suportar uma falha única ou a perda de um compartimento.",
  },
  "¿Qué elemento del sistema DP recibe las referencias y comandos y calcula el empuje requerido?": {
    q: "Qual elemento do sistema DP recebe as referências e comandos e calcula o empuxo necessário?",
    o: ["O controlador DP", "O giroscópio", "O propulsor", "O gerador auxiliar"],
    e: "O controlador DP processa posição, proa, vento e as demais entradas, e calcula a força e o momento que devem ser aplicados. O propulsor apenas executa essa ordem.",
  },
  "¿Qué función principal tiene la consola del operador DP?": {
    q: "Qual é a função principal do console do operador DP?",
    o: ["Mostrar o estado do sistema e permitir ao operador controlar e supervisionar", "Gerar energia", "Armazenar combustível", "Medir a profundidade"],
    e: "O console mostra o estado do sistema, os alarmes e as referências, e permite ao operador controlar e supervisionar a operação.",
  },
  "Al pasar de Auto DP a joystick, el operador debe:": {
    q: "Ao passar do Auto DP para o joystick, o operador deve:",
    o: ["Confirmar o modo e quem controla o movimento antes da mudança", "Mudar sem avisar", "Desligar o gerador", "Não fazer nada"],
    e: "Mudar de modo é uma decisão deliberada: no joystick o operador assume o controle de posição e proa, então deve confirmar e comunicar à equipe.",
  },
  "Antes de cambiar la referencia activa, el operador debe comprobar:": {
    q: "Antes de trocar a referência ativa, o operador deve verificar:",
    o: ["Que a nova referência é coerente com as demais", "Nada", "Que o navio esteja fundeado", "Que haja outro navio por perto"],
    e: "Antes de trocar a referência ativa é preciso verificar que a nova fornece leituras coerentes com as demais. Assim não se introduz um erro na troca.",
  },
  "¿Qué referencia depende de la profundidad y de las condiciones acústicas del agua?": {
    q: "Qual referência depende da profundidade e das condições acústicas da água?",
    o: ["Hidroacústica", "Giroscópio", "Anemômetro", "Sensor de tensão"],
    e: "As referências hidroacústicas trabalham com transponders sob a água. Sua precisão depende da acústica da água, que muda com a profundidade e a temperatura.",
  },
  "¿Qué es la degradación de una referencia?": {
    q: "O que é a degradação de uma referência?",
    o: ["Perda gradual de qualidade ou precisão que pode não ser detectada de imediato", "Desligamento total", "Melhora da precisão", "Mudança de proa"],
    e: "A degradação é uma perda gradual de qualidade. É perigosa porque pode não disparar alarme algum até que a posição já tenha se afastado.",
  },
  "¿Qué hace el sistema de gestión de potencia cuando se pierde un generador?": {
    q: "O que faz o sistema de gestão de potência quando um gerador é perdido?",
    o: ["Redistribui a carga entre os que restam e alerta se houver risco de sobrecarga", "Desliga os propulsores", "Muda a proa", "Não faz nada"],
    e: "O sistema redistribui a carga entre os geradores em serviço e alerta se a margem cair demais, para evitar um desligamento em cascata.",
  },
  "¿Qué significa un arranque automático de reserva (standby start)?": {
    q: "O que significa a partida automática de reserva (standby start)?",
    o: ["Que um gerador de reserva parte sozinho se um dos em serviço falhar", "Que um gerador se desliga no mar", "Que um propulsor para", "Que um UPS se desliga"],
    e: "A partida automática de reserva coloca em funcionamento um gerador de reserva quando um dos em serviço falha, para recuperar a capacidade sem esperar a ação do operador.",
  },
  "¿Qué debe incluir el análisis de consecuencias DP (DP consequence analysis)?": {
    q: "O que deve incluir a análise de consequências DP (DP consequence analysis)?",
    o: ["O que acontece com a posição se um componente falhar, nas condições previstas", "O inventário de mantimentos", "O horário das guardas", "Somente o preço do serviço"],
    e: "A análise de consequências estuda o que acontece com a posição se um componente falhar nas condições da operação. É a base do planejamento DP.",
  },
  "En la revalidación, ¿qué se revisa de los incidentes conocidos?": {
    q: "Na revalidação, o que se revisa dos incidentes conhecidos?",
    o: ["Suas causas e as lições aprendidas para não repeti-los", "Somente a data do incidente", "Quem tem a culpa", "Nada"],
    e: "O curso de revalidação busca atualizar o DPO sobre incidentes conhecidos e suas lições aprendidas. O importante é a causa e a prevenção, não a culpa.",
  },
};
