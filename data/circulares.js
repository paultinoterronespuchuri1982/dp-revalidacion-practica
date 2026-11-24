// Preguntas difíciles basadas en el texto de la circular IMO MSC.1/Circ.1580
// (Directrices para buques y unidades con sistemas DP, 16 de junio de 2017).
// Las referencias (sección X.Y) corresponden a la numeración de la circular tal como aparece en la versión consultada.
// Verifica siempre el número de sección contra el documento oficial vigente.

export const CIRCULARES = [
  {
    m: 4, a: 1, ref: "Sección 2.2.1 / 3.4.3.2",
    es: { q: "Según la circular, ¿cuántos sistemas de referencia de posición exige como mínimo la Clase 1?", o: ["Uno", "Dos", "Tres", "Ninguno, basta con el GNSS"], e: "La Clase 1 no exige redundancia de energía ni del control DP, pero sí al menos dos sistemas de referencia de posición (sección 3.4.3.2)." },
    pt: { q: "Segundo a circular, quantos sistemas de referência de posição a Classe 1 exige, no mínimo?", o: ["Um", "Dois", "Três", "Nenhum, basta o GNSS"], e: "A Classe 1 não exige redundância de energia nem do controle DP, mas exige ao menos dois sistemas de referência de posição (seção 3.4.3.2)." },
  },
  {
    m: 2, a: 1, ref: "Sección 2.2.2 / 3.4.2.2",
    es: { q: "¿Cuántos sistemas informáticos de control DP exige la Clase 2?", o: ["Uno, con respaldo manual", "Al menos dos", "Al menos tres", "No se exige un número mínimo"], e: "La Clase 2 exige al menos dos sistemas informáticos de control DP (sección 3.4.2.2), para que un fallo de uno no deje el buque sin control." },
    pt: { q: "Quantos sistemas computacionais de controle DP a Classe 2 exige?", o: ["Um, com reserva manual", "Pelo menos dois", "Pelo menos três", "Não há número mínimo exigido"], e: "A Classe 2 exige pelo menos dois sistemas computacionais de controle DP (seção 3.4.2.2), para que a falha de um deles não deixe o navio sem controle." },
  },
  {
    m: 4, a: 2, ref: "Sección 2.2.2 / 3.4.3.3",
    es: { q: "¿Cuántos sistemas de referencia de posición exige la Clase 2?", o: ["Uno", "Dos", "Tres", "Cuatro"], e: "La Clase 2 exige al menos tres sistemas de referencia de posición (sección 3.4.3.3). Con dos, una falla no permitiría saber cuál de ellos tiene razón." },
    pt: { q: "Quantos sistemas de referência de posição a Classe 2 exige?", o: ["Um", "Dois", "Três", "Quatro"], e: "A Classe 2 exige ao menos três sistemas de referência de posição (seção 3.4.3.3). Com apenas dois, uma falha não permitiria saber qual deles está certo." },
  },
  {
    m: 6, a: 0, ref: "Sección 2.2.2 / 3.2.3",
    es: { q: "¿Qué exige la circular a la distribución eléctrica en la Clase 2?", o: ["Que la energía esté dividida en dos o más sistemas, con disyuntores de acoplamiento que los separen automáticamente ante fallas", "Que haya un único generador de emergencia", "Que todos los propulsores compartan el mismo cuadro", "Que la energía sea siempre de una sola barra"], e: "La división de la energía en dos o más sistemas, con disyuntores de acoplamiento que se abren automáticamente ante una falla, evita que una avería se propague a toda la red (sección 3.2.3)." },
    pt: { q: "O que a circular exige da distribuição elétrica na Classe 2?", o: ["Que a energia esteja dividida em dois ou mais sistemas, com disjuntores de acoplamento que os separem automaticamente diante de falhas", "Que exista um único gerador de emergência", "Que todos os propulsores compartilhem o mesmo quadro", "Que a energia seja sempre de uma única barra"], e: "Dividir a energia em dois ou mais sistemas, com disjuntores de acoplamento que se abrem automaticamente diante de uma falha, impede que um defeito se propague para toda a rede (seção 3.2.3)." },
  },
  {
    m: 2, a: 2, ref: "Sección 2.2.2",
    es: { q: "Según la circular, ¿qué se puede aceptar en la Clase 2 respecto a los componentes estáticos comunes?", o: ["Que no se analicen nunca", "Que no tengan ninguna protección", "Que se acepten si están adecuadamente protegidos", "Que se sustituyan por componentes activos"], e: "La Clase 2 no exige eliminar los componentes estáticos comunes, sino protegerlos adecuadamente. Lo que no puede haber es pérdida de posición ante una falla única de un componente activo." },
    pt: { q: "Segundo a circular, o que pode ser aceito na Classe 2 em relação aos componentes estáticos comuns?", o: ["Que não sejam analisados nunca", "Que não tenham nenhuma proteção", "Que sejam aceitos se estiverem adequadamente protegidos", "Que sejam substituídos por componentes ativos"], e: "A Classe 2 não exige eliminar os componentes estáticos comuns, e sim protegê-los adequadamente. O que não pode haver é perda de posição diante de uma falha única de um componente ativo." },
  },
  {
    m: 2, a: 3, ref: "Sección 2.2.3 / 3.1.3.2",
    es: { q: "¿Qué separación física exige la Clase 3 para la redundancia completa?", o: ["A-0", "A-15", "A-30", "A-60"], e: "La Clase 3 exige redundancia completa con separación física A-60 (sección 3.1.3.2). La clase de fuego A-60 es la de mayor resistencia de las que menciona la norma para este fin." },
    pt: { q: "Que separação física a Classe 3 exige para a redundância completa?", o: ["A-0", "A-15", "A-30", "A-60"], e: "A Classe 3 exige redundância completa com separação física A-60 (seção 3.1.3.2), a classe de resistência ao fogo mais alta mencionada para esse fim." },
  },
  {
    m: 2, a: 1, ref: "Sección 2.2.3 / 3.4.2.3 y 3.4.2.6",
    es: { q: "En la Clase 3, ¿dónde debe estar el sistema DP de respaldo?", o: ["En el mismo local que el sistema principal, para facilitar el mantenimiento", "En un local separado A-60", "En el puente, junto al operador", "No es obligatorio un sistema de respaldo"], e: "El sistema de respaldo debe estar en un local separado A-60, para que un incendio en el local principal no lo afecte (secciones 3.4.2.3 y 3.4.2.6)." },
    pt: { q: "Na Classe 3, onde deve estar o sistema DP de reserva?", o: ["No mesmo local que o sistema principal, para facilitar a manutenção", "Em um local separado A-60", "Na ponte, junto ao operador", "Um sistema de reserva não é obrigatório"], e: "O sistema de reserva deve estar em um local separado A-60, para que um incêndio no local principal não o afete (seções 3.4.2.3 e 3.4.2.6)." },
  },
  {
    m: 2, a: 0, ref: "Sección 2.2.3 / 3.5.1 y 3.5.3",
    es: { q: "En la Clase 3, los cables y tuberías redundantes deben:", o: ["No compartir los mismos compartimentos", "Compartir la misma bandeja para ahorrar espacio", "Ir por la cubierta principal", "Ser del mismo fabricante"], e: "Si los cables o tuberías redundantes pasan por el mismo compartimento, un incendio o una inundación en ese compartimento puede cortar ambos (secciones 3.5.1 y 3.5.3)." },
    pt: { q: "Na Classe 3, os cabos e tubulações redundantes devem:", o: ["Não compartilhar os mesmos compartimentos", "Compartilhar a mesma bandeja para economizar espaço", "Passar pelo convés principal", "Ser do mesmo fabricante"], e: "Se cabos ou tubulações redundantes passam pelo mesmo compartimento, um incêndio ou um alagamento nesse compartimento pode cortar os dois (seções 3.5.1 e 3.5.3)." },
  },
  {
    m: 4, a: 2, ref: "Sección 2.2.3 / 3.4.4.4",
    es: { q: "En la Clase 3, al menos un sensor de cada tipo debe estar conectado directamente a:", o: ["El sistema principal únicamente", "La consola del operador", "El sistema de respaldo", "Ninguno, los sensores se comparten"], e: "Para que el sistema de respaldo funcione de forma independiente, debe tener al menos un sensor de cada tipo conectado directamente (sección 3.4.4.4)." },
    pt: { q: "Na Classe 3, pelo menos um sensor de cada tipo deve estar conectado diretamente a:", o: ["Somente ao sistema principal", "Ao console do operador", "Ao sistema de reserva", "Nenhum, os sensores são compartilhados"], e: "Para que o sistema de reserva funcione de forma independente, ele deve ter pelo menos um sensor de cada tipo conectado diretamente (seção 3.4.4.4)." },
  },
  {
    m: 7, a: 0, ref: "Sección 2.7 y 2.4",
    es: { q: "Según la circular, el análisis de falla debe demostrar que la operación resiste la falla de peor caso (WCF):", o: ["En cualquier momento, sin violar los criterios de excursión", "Solo cuando el buque está en puerto", "Solo si el operador está en el puente", "Únicamente con viento inferior a 10 nudos"], e: "La falla de peor caso (WCF) puede ocurrir en cualquier momento de la operación. La operación debe mantenerse dentro de los criterios de excursión, sin importar cuándo ocurra (secciones 2.7 y 2.4)." },
    pt: { q: "Segundo a circular, a análise de falha deve demonstrar que a operação resiste à falha de pior caso (WCF):", o: ["A qualquer momento, sem violar os critérios de excursão", "Somente quando o navio está no porto", "Somente se o operador estiver na ponte", "Somente com vento inferior a 10 nós"], e: "A falha de pior caso (WCF) pode ocorrer a qualquer momento da operação. A operação deve permanecer dentro dos critérios de excursão, independentemente do momento em que ocorra (seções 2.7 e 2.4)." },
  },
  {
    m: 7, a: 3, ref: "Sección 4.5",
    es: { q: "¿Qué diagramas de capacidad exige la circular elaborar?", o: ["Solo uno, para la condición normal", "Solo uno, para la condición de peor falla", "Ninguno, basta con la experiencia del operador", "Para la condición normal y tras la falla de peor caso"], e: "La circular exige diagramas de capacidad (capability plots) para la condición normal y para la condición posterior a la falla de peor caso (sección 4.5)." },
    pt: { q: "Quais diagramas de capacidade a circular exige?", o: ["Somente um, para a condição normal", "Somente um, para a condição de pior falha", "Nenhum, basta a experiência do operador", "Para a condição normal e após a falha de pior caso"], e: "A circular exige diagramas de capacidade (capability plots) para a condição normal e para a condição após a falha de pior caso (seção 4.5)." },
  },
  {
    m: 7, a: 1, ref: "Sección 4.3",
    es: { q: "¿Cuándo deben suspenderse las operaciones de Clase 2 o 3?", o: ["Siempre que haya más de cinco nudos de viento", "Si el entorno impide mantener la posición ante una falla simple, considerando el tiempo necesario para terminar con seguridad", "Solo cuando el buque está en reposo", "Nunca, la clase lo garantiza"], e: "Si el entorno impide mantener la posición ante una falla simple, la operación debe suspenderse, teniendo en cuenta el tiempo necesario para terminar con seguridad (sección 4.3). La clase no garantiza la operación en cualquier ambiente." },
    pt: { q: "Quando as operações de Classe 2 ou 3 devem ser suspensas?", o: ["Sempre que houver mais de cinco nós de vento", "Se o ambiente impedir manter a posição diante de uma falha simples, considerando o tempo necessário para terminar com segurança", "Somente quando o navio está parado", "Nunca, a classe garante a operação"], e: "Se o ambiente impedir manter a posição diante de uma falha simples, a operação deve ser suspensa, levando em conta o tempo necessário para terminar com segurança (seção 4.3). A classe não garante a operação em qualquer ambiente." },
  },
  {
    m: 7, a: 0, ref: "Sección 4.6",
    es: { q: "El manual de operaciones DP debe incluir, entre otros:", o: ["Listas de verificación, procedimiento de recuperación tras apagón, lista de componentes críticos, modos de operación, ASOG y diagramas de capacidad", "Solo el catálogo de repuestos", "Únicamente los contratos con el cliente", "Solo las fotos del equipo"], e: "El manual de operaciones DP reúne lo necesario para operar y recuperarse: listas de verificación, recuperación tras apagón, componentes críticos, modos, ASOG y capability plots (sección 4.6)." },
    pt: { q: "O manual de operações DP deve incluir, entre outros:", o: ["Listas de verificação, procedimento de recuperação após apagão, lista de componentes críticos, modos de operação, ASOG e diagramas de capacidade", "Somente o catálogo de peças", "Somente os contratos com o cliente", "Somente fotos do equipamento"], e: "O manual de operações DP reúne o necessário para operar e se recuperar: listas de verificação, recuperação após apagão, componentes críticos, modos, ASOG e capability plots (seção 4.6)." },
  },
  {
    m: 2, a: 2, ref: "Sección 5.1.2",
    es: { q: "Para las clases 2 y 3, el análisis FMEA debe:", o: ["Ser opcional si el buque tiene buen historial", "Hacerse una sola vez y no actualizarse", "Demostrar que ninguna falla simple causa pérdida, confirmarse con pruebas y mantenerse actualizado a bordo", "Limitarse a los sensores"], e: "El FMEA es obligatorio para las clases 2 y 3. Debe demostrar que ninguna falla simple causa pérdida de posición o rumbo, confirmarse con pruebas (FMEA proving trials) y mantenerse actualizado a bordo (sección 5.1.2)." },
    pt: { q: "Para as classes 2 e 3, a análise FMEA deve:", o: ["Ser opcional se o navio tiver bom histórico", "Ser feita uma única vez e não ser atualizada", "Demonstrar que nenhuma falha simples causa perda, ser confirmada com testes e manter-se atualizada a bordo", "Limitar-se aos sensores"], e: "A FMEA é obrigatória para as classes 2 e 3. Deve demonstrar que nenhuma falha simples causa perda de posição ou de proa, ser confirmada com testes (FMEA proving trials) e manter-se atualizada a bordo (seção 5.1.2)." },
  },
  {
    m: 7, a: 1, ref: "Sección 5.1.1",
    es: { q: "La inspección anual de un DPVAD debe realizarse:", o: ["Cada doce meses exactos, sin margen", "Dentro de tres meses antes o después del aniversario del documento", "Solo cuando el buque entra en astillero", "Cada cinco años"], e: "La inspección anual puede hacerse dentro de una ventana de tres meses antes o después del aniversario del DPVAD (sección 5.1.1). La inspección periódica, en cambio, tiene un máximo de cinco años." },
    pt: { q: "A inspeção anual do DPVAD deve ser feita:", o: ["A cada doze meses exatos, sem margem", "Dentro de três meses antes ou depois do aniversário do documento", "Somente quando o navio entra em estaleiro", "A cada cinco anos"], e: "A inspeção anual pode ser feita em uma janela de três meses antes ou depois do aniversário do DPVAD (seção 5.1.1). Já a inspeção periódica tem prazo máximo de cinco anos." },
  },
  {
    m: 7, a: 3, ref: "Sección 5.2.6",
    es: { q: "¿Qué hace que el DPVAD deje de ser válido antes de su vencimiento?", o: ["Un cambio de tripulación", "Un cambio de puerto habitual", "Una nueva revisión de la FMEA sin cambios", "Un cambio de bandera o un cambio significativo no autorizado"], e: "El DPVAD deja de ser válido ante cambios significativos no autorizados o un cambio de bandera (sección 5.2.6). Por eso cualquier modificación importante debe autorizarse antes de hacerse." },
    pt: { q: "O que faz o DPVAD deixar de ser válido antes do vencimento?", o: ["Uma troca de tripulação", "Uma mudança de porto habitual", "Uma nova revisão da FMEA sem mudanças", "Uma troca de bandeira ou uma mudança significativa não autorizada"], e: "O DPVAD deixa de ser válido diante de mudanças significativas não autorizadas ou de troca de bandeira (seção 5.2.6). Por isso qualquer modificação importante deve ser autorizada antes de ser feita." },
  },
  {
    m: 1, a: 0, ref: "Sección 6",
    es: { q: "Según la circular, la formación y experiencia del personal DP deben cumplir con:", o: ["El Convenio STCW y la circular MSC/Circ.738", "Solo la normativa del puerto de bandera", "Ninguna norma, es decisión de la empresa", "Únicamente el manual del fabricante"], e: "La formación y la experiencia del personal DP deben cumplir con el Convenio STCW y con la circular MSC/Circ.738 (sección 6)." },
    pt: { q: "Segundo a circular, a formação e a experiência do pessoal DP devem atender a:", o: ["À Convenção STCW e à circular MSC/Circ.738", "Somente à regulamentação do porto de bandeira", "Nenhuma norma, é decisão da empresa", "Somente ao manual do fabricante"], e: "A formação e a experiência do pessoal DP devem atender à Convenção STCW e à circular MSC/Circ.738 (seção 6)." },
  },
  {
    m: 2, a: 2, ref: "Sección 2.2.2 / 3.2.3 y 3.4.2.4",
    es: { q: "En la Clase 2, el análisis de consecuencias debe:", o: ["Hacerse solo al entregar el buque", "Hacerse una vez al año", "Ser continuo durante la operación", "No ser necesario si hay dos generadores"], e: "En la Clase 2 el análisis de consecuencias es continuo durante la operación (sección 3.4.2.4). Dos generadores no bastan: la configuración real cambia con cada decisión del operador." },
    pt: { q: "Na Classe 2, a análise de consequências deve:", o: ["Ser feita somente na entrega do navio", "Ser feita uma vez por ano", "Ser contínua durante a operação", "Não ser necessária se houver dois geradores"], e: "Na Classe 2 a análise de consequências é contínua durante a operação (seção 3.4.2.4). Dois geradores não bastam: a configuração real muda a cada decisão do operador." },
  },
  {
    m: 4, a: 3, ref: "Sección 4.1",
    es: { q: "Antes de cada operación, la circular exige comprobar el sistema con:", o: ["La memoria del operador anterior", "Solo una inspección visual del puente", "Ningún control, porque el sistema se autocomprueba", "Listas de verificación por ubicación y herramientas como el ASOG"], e: "La verificación previa usa listas de verificación por ubicación y herramientas como el ASOG (sección 4.1). Confiar solo en la memoria o en el autochequeo del sistema no cumple con la verificación requerida." },
    pt: { q: "Antes de cada operação, a circular exige verificar o sistema com:", o: ["A memória do operador anterior", "Somente uma inspeção visual da ponte", "Nenhum controle, porque o sistema se autotesta", "Listas de verificação por local e ferramentas como o ASOG"], e: "A verificação prévia usa listas de verificação por local e ferramentas como o ASOG (seção 4.1). Confiar somente na memória ou no autoteste do sistema não atende à verificação exigida." },
  },
  {
    m: 3, a: 1, ref: "Sección 4.2",
    es: { q: "La vigilancia del sistema DP durante la operación debe hacerse:", o: ["Solo cuando algo falla", "A intervalos regulares, con una lista de vigilancia", "Solo al cambio de turno", "Solo si el cliente lo pide"], e: "La vigilancia consiste en revisar el sistema a intervalos regulares con una lista de vigilancia (sección 4.2). Esperar a que algo falle deja el riesgo sin detectar." },
    pt: { q: "A vigilância do sistema DP durante a operação deve ser feita:", o: ["Somente quando algo falha", "Em intervalos regulares, com uma lista de vigilância", "Somente na troca de turno", "Somente se o cliente pedir"], e: "A vigilância consiste em revisar o sistema em intervalos regulares com uma lista de vigilância (seção 4.2). Esperar que algo falhe deixa o risco sem detecção." },
  },
];
