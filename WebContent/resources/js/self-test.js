var ms;

$( "#inner" ).append( "<p class='sf-center-text'><strong>DÉJÀ VU</strong></p> "+ 
					  "<p class='sf-center-text'>Você já viu uma pessoa pela primeira vez e pensou que a conhecesse de algum lugar? Ao conversar com alguém, percebeu que já havia falado exatamente as mesmas palavras? Isso é o Déjà vu.</p>" +
					  "<p class='sf-center-text'>A expressão francesa, que significa “já visto”, é usada para indicar um fenômeno que acontece no cérebro da maior parte da população mundial. O termo foi aplicado pela primeira vez por Emile Boirac (1851-1917), um estudioso interessado em fenômenos psicológicos. Déjà vu é quando nós vemos ou sentimos algo pela primeira vez e temos a sensação de já ter visto ou experimentado aquela sensação anteriormente.</p>" +
					  "<p class='sf-center-text'>Diversas teorias errôneas, como inatenção, vidas passadas ou visões sobrenaturais, surgiram para explicar o fenômeno. Já a hipótese de que verdadeiramente já seu viveu aquela cena antes é inválida, uma vez que essas ocorrências nunca poderiam recriar a situação com exatidão, devido à falta de sentimento associada a cada acontecimento na vida das pessoas.</p>" +
					  "<p class='sf-center-text'>Déjà vu também não é uma visão do futuro, uma vez que o fenômeno ocorre somente em momentos exatos, e jamais em situações anteriores.</p>" +
					  "<p class='sf-center-text'>Na verdade, a sensação é causada por um estado do cérebro, por fatores neuroquímicos. Os especialistas afirmam que o déjà vu é uma experiência baseada na memória e que os centros de memória do cérebro são os responsáveis pelo fenômeno. Os déjà vus acontecem principalmente nas pessoas de 15 a 25 anos.</p>" 
			 );

function init(){
	var date = new Date();
	ms = date.getTime();
	$("#btn-init").addClass("disabled");
}

function finish(){
	var date = new Date();
	
	if(sessionStorage.getItem("type") == "easy"){
		var result = ((date.getTime() - ms) / 1000);
		result = (540 / result) * 60;
		result = parseInt(result);
		$("#sfmodaleasy").modal();
		$("#sflabeleasy").text("Você tem a média de " + result + " palavras por minuto (ppm), anote este valor, caso queira.");
	}
	if(sessionStorage.getItem("type") == "medium"){
		var result = ((date.getTime() - ms) / 1000);
		result = (825 / result) * 60;
		result = parseInt(result);
		$("#sfmodalmedium").modal();
		$("#sflabelmedium").text("Você tem a média de " + result + " palavras por minuto (ppm), anote este valor, caso queira.");
	}
	if(sessionStorage.getItem("type") == "hard"){
		var result = ((date.getTime() - ms) / 1000);
		result = (1827 / result) * 60;
		result = parseInt(result);
		$("#sfmodalhard").modal();
		$("#sflabelhard").text("Você tem a média de " + result + " palavras por minuto (ppm), anote este valor, caso queira.");
	} else {
		var result = ((date.getTime() - ms) / 1000);
		result = (261 / result) * 60;
		result = parseInt(result);
		$("#sfmodal").modal();
		$("#sflabel").text("Você tem a média de " + result + " palavras por minuto (ppm), anote este valor, caso queira.");
	}
	
	$("#btn-init").removeClass("disabled");
}

function easyModal(){
	$("#easymodal").modal();
}

function mediumModal(){
	$("#mediummodal").modal();
}

function hardModal(){
	$("#hardmodal").modal();
}

$(document).ready(function()
{
	if(sessionStorage.getItem("type") != undefined && sessionStorage.getItem("type") != null){
		if(sessionStorage.getItem("type") == "easy"){
			easyModal();
			$( "#inner" ).empty();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>A meditação no combate ao estresse</strong></p> "+ 
					  "<p class='sf-center-text'>O estresse vem causando inúmeros danos na vida e no cotidiano das pessoas. Tais danos são muitas vezes considerados irreversíveis tanto na saúde física, como na saúde mental do indivíduo.</p>" +
					  "<p class='sf-center-text'>O fato é que o estresse não atinge apenas pessoas adultas e assoberbadas de responsabilidades, mas vem agregando crianças e adolescentes de todas as idades à esse grupo. Mas o que é o estresse afinal? </p>" +
					  "<p class='sf-center-text'>O estresse é na verdade uma espécie de reação do organismo desencadeado em decorrência de diversos fatores psicológicos, físicos, mentais e hormonais; diante de uma “necessidade” urgente. Essa reação pode ter características negativas ou positivas.</p>" +
					  "<p class='sf-center-text'>O estresse só é considerado positivo quando o corpo produz o hormônio adrenalina no intuito de proporcionar vigor, ânimo, energia, etc. para que o indivíduo se torne mais ativo e produtivo.</p>" +
					  "<p class='sf-center-text'>No entanto, a proporção negativa é mais desastrosa quando não controlado, provocando diversos sintomas e enfermidades como: tensão muscular, dores de cabeça, dores de estômago ou gastrite, pressão alta, herpes, taquicardia, problemas dermatológicos, aftas, retração das gengivas, resfriados, tonturas, infecções, etc.</p>" +
					  "<p class='sf-center-text'>Podemos reconhecer os sintomas do estresse de forma simples, basta apenas observar os sinais que nosso corpo emite como, por exemplo: queda de produtividade, confusão mental, apatia, dificuldade de concentração, sensação de desgaste ao acordar, autoestima baixa, dificuldade com a memória, depressão e irritabilidade sem explicação ou motivo aparente, entre outros.</p>" +
					  "<p class='sf-center-text'>Em decorrência disso, as pessoas de um modo geral têm procurado métodos e mecanismos de tentar frear e/ou controlar o estresse e seus efeitos nocivos; a meditação é um desses mecanismos que tem sido utilizado por diversas pessoas e nas mais variadas situações e lugares. Diferente do que se sabe a meditação não pode ser praticada somente em meio à natureza ou em uma sala devidamente equipada para tal.</p>" +
					  "<p class='sf-center-text'>De acordo com o Dr. Daniel Goleman, Ph.D. nessa arte e escritor do livro A arte da meditação.</p> " +
					  "<p class='sf-center-text'>A arte da meditação é o método mais antigo para tranquilizar a mente e relaxar o corpo. A meditação é, em essência, o treinamento sistemático da atenção. Ela tem como objetivo desenvolver a capacidade de concentração e enriquecer nossa percepção.</p> " +
					  "<p class='sf-center-text'>O hábito de meditar ajuda ao seu praticante a oportunidade de tranquilizar a mente e também de relaxar o corpo, aliviando as dores físicas, bem como fortalecendo o sistema imunológico.</p> " +
					  "<p class='sf-center-text'>Apesar de um uma vida moderna e a agitada, de acordo com o Dr. Daniel Goleman, hoje em dia é possível meditar de diferentes maneiras, como por exemplo:</p> " +
					  "<p class='sf-center-text'>1. Meditar Respirando: Uma das mais simples e divulgadas técnicas de meditação, encontrada em quase todas as antigas tradições espirituais.</p> " +
					  "<p class='sf-center-text'>2. Meditar Relaxando o Corpo: Um instrumento poderoso para promover o relaxamento, soltando e suavizando os músculos.</p> " +
					  "<p class='sf-center-text'>3. Meditar Concentrando: Uma técnica que enriquece a percepção, fazendo descobrir os mecanismos e processos de nossa mente.</p> " +
					  "<p class='sf-center-text'>4. Meditar Caminhando: Um antigo método especialmente útil para quem tem dificuldade em manter-se imóvel ou em se concentrar enquanto medita.</p> ");
		}
		if(sessionStorage.getItem("type") == "medium"){
			mediumModal();
			$( "#inner" ).empty();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>A aranha mais nerd</strong></p> "+ 
					  "<p class='sf-center-text'>Salticidae é uma família de aranhas muito inteligentes (para alguém com o cérebro daquele tamanho). São caçadoras ativas, quase nunca tecem teia, preferem caçar ativamente as presas.</p>" +
					  "<p class='sf-center-text'>Por conta disso, dependem muito da visão, daí os olhos enormes, e acabam adotando comportamentos bem ricos. Agora, se elas já são predadores bastante inteligentes, como seria uma aranha que caça esses predadores (uma aranha araneofágica)? Conheça as aranhas Portia, e por que elas são chamadas de gatos de oito olhos</p>" +
					  "<p class='sf-center-text'>Portia é um gênero de aranhas saltadoras (também são Salticidae) com cerca de 20 espécies conhecidas, que são especialistas em caçar outras aranhas, especialmente membras da mesma família. Ocorrem na África, Ásia e Oceania, para meu desapontamento. Para poderem caçar, adotam uma série de táticas bastante complexas, sendo capazes de classificar o tipo de presa e responder de acordo, o que as coloca entre os invertebrados mais inteligentes.</p>" +
					  "<p class='sf-center-text'>Para atacar outras Salticidae, as estratégias das Portia são únicas. Algumas Portia podem fazer teias, e manter os insetos pegos para atrair outras saltadoras. Outras partem ativamente para a caça, quando sua camuflagem vem a calhar: se a Salticidae que está caçando a vê, a Portia congela seus movimentos, e encolhe seus palpos e patas, se camuflando de detrito para uma vítima que depende da visão, podendo até simular movimentos causados pelo vento. O que não se comparar com as táticas que adotam em situações mais delicadas. </p>" +
					  "<p class='sf-center-text'><strong>Atacando em território inimigo</strong></p> " +
					  "<p class='sf-center-text'>Um dia de caça típico da Portia fimbriata, simpática espécie acima, serve de exemplo do que elas são capazes de fazer. Uma das presas que esta espécie ataca é a aranha de teia Argiope appensa, que pode ser muito maior do que ela. Mesmo sem nunca ter visto uma aranha Argiope a P. fimbriata sabe o que fazer quando encontra sua teia. Ela pisa com cuidado em um dos fios, e começa a fazer uma série de vibrações diferentes – a maioria das aranhas de teia são quase cegas, e o sentido que mais usam é o tato – em intervalos até encontrar a vibração que atrai a dona da teia para seu ataque (algumas espécies podem fazer isso por dias). Se ela reage, a Portia continua com aquele estímulo. Caso contrário, volta a variar seus sinais, até receber resposta novamente. A P. fimbriata australiana pode inclusive imitar movimentos da fêmea da espécie na teia, para atrair o macho.</p>" +
					  "<p class='sf-center-text'>Por vezes, ela pode resolver subir pela teia para atacar sua dona. Mas só quando houver vento ou outra condição que vibre a teia e mascare seu movimento ninja caminhar pelos fios, para que ela não se torne a presa. Nem sempre a Argiope é pega desprevenida, ela pode chacoalhar a teia com força se perceber a Portia, ou mesmo atacá-la. Nestes casos a P. fimbriata pode partir para um ataque muito mais hollywoodiano. Ela caminha ao redor da teia, muitas vezes perdendo contato visual com a presa e fazendo contornos que podem levar mais de uma hora, para se posicionar exatamente acima da vítima e descer por um fio para o grande ataque. Sim, a Portia pode julgar que este ataque é mais eficaz, planejar toda uma rota, e seguir em um comportamento longo e complexo para completar seu objetivo.</p>" +
					  "<p class='sf-center-text'>Na região de Los Baños, ela encontra e caça aranhas cuspideiras da espécie Scytodes pallidus. As Scytodes também são araneofágicas, e secretam um misto de teia e veneno pelas quelíceras que é lançado sobre as presas (daí o nome cuspideira), grudando-as. Assim, para caçar esta cuspideira especializada em aranhas saltadoras, a P. labiata precisa de uma tática especial. As P. labiata desta região se aproximam de teias de Scytodes e provocam vibrações, mas não fazem o ataque direto. Elas normalmente fazem a volta e tomam o caminho mais longo para atacar a cuspideira por trás, e evitar a extremidade que lança a cola. Portia da mesma espécie mas de outra região, não fazem isso e são mais facilmente mortas pela Scytodes. E seu repertório pode ser ainda mais diverso: se a Scytodes dona da teia for uma fêmea carregando uma bolsa de ovos com a boca, o que diminui muito as chances de ela cuspir teia, a P. labiata de Los Baños adota o comportamento mais curto de atacar diretamente.</p> "+
					  "<p class='sf-center-text'>Tomada de decisão, classificação de presas, acuidade visual e leitura para diferenciar um inseto preso na teia da aranha, e para diferenciar uma fêmea carregando ovos ou não… acabo de eleger as Portia como saltadoras mais nerds, escolher meu gênero predileto de Salticidae.</p>");
		}
		if(sessionStorage.getItem("type") == "hard"){
			hardModal();
			$( "#inner" ).empty();
			$( "#inner" ).append("<p class='sf-center-text'><strong>Aquecimento global: causas, consequências e combate</strong></p> "+ 
					 "<p class='sf-center-text'>O mundo está se tornando mais quente. Mas esse é um processo natural da Terra ou decorre da ação humana? Há muita discussão em torno do assunto, mas é sempre bom esclarecer o que é o efeito estufa, processo que o vídeo acima, produzido na parceria entre a Agência Espacial Brasileira e o Instituto Nacional de Pesquisas Espaciais, conceitualmente introduz e onde a influência humana efetivamente ocorre.</p>" +
					  "<p class='sf-center-text'>Como observado, é um processo que ocorre quando a radiação infravermelha na superfície terrestre, que por sua vez tem origem na luz do sol, é absorvida por gases presentes na atmosfera, principalmente o vapor de água (H2O) e o dióxido de carbono (CO2), mas outros gases como o metano (CH4), o óxido nitroso (N2O) a família dos CFCs (CFxCly) se apresentam como fortes captadores de radiação infravermelha e potencializadores do efeito estufa. Esse conjunto de gases é, portanto, chamado de Gases de Efeito Estufa ou GEE.</p>" +
					  "<p class='sf-center-text'>O efeito estufa em si é um processo fundamental para a vida na Terra já que faz com que o planeta se mantenha aquecido, mas o aumento significativo das emissões de gases do efeito estufa associado a outras ações também promovidas pela atividade humana, como o desmatamento de florestas por exemplo, têm sido determinantes, acredita-se, no desequilíbrio do balanço de energia do sistema terra atmosfera ocasionando maior retenção de energia e o aumento do efeito estufa, com o aquecimento da baixa atmosfera e aumento da temperatura média do planeta e possíveis distorções ambientais. O aquecimento global se tornou um dos maiores problemas da Terra, com efeitos que podem ser catastróficos.</p>" +
					  "<p class='sf-center-text'><strong>Estudos e previsões</strong></p> " +
					  "<p class='sf-center-text'>Se a ação humana não é a única, seu impacto é inegável. A discussão sobre a determinância ou não da ação antrópica (do homem) sobre as mudanças climáticas, mesmo que a sólida maioria da classe científica reconheça sua gravidade, parece ingênua. É fato evidente que a ação antrópica impõe danos graves ao seu próprio habitat e as consequências negativas reiteradamente se comprovam nos mais variados aspectos, seja na alarmante redução da biodiversidade, exploração desmedida de recursos naturais e sobremaneira na geração de poluentes a níveis inaceitáveis para um sociedade que se diz civilizada.</p>" +
					  "<p class='sf-center-text'>Dados comprovam que, inegavelmente, o planeta está mais quente, década após década. No entanto, não existem pesquisas definitivas sobre os reais danos no longo prazo estabelecidos pela relação entre aquecimento global e aumento de emissões, que na verdade, podemos interpretar como poluentes lançados deliberadamente no ar. Por outro lado, estudos já relacionam a ocorrência de partículas poluentes no ar, dentre outros problemas, ao desenvolvimento de autismo em crianças, inflamação dos vasos sanguíneos e até a problemas durante a gestação.</p>" +
					  "<p class='sf-center-text'>Em se tratando dos reflexos do aquecimento global sobre o planeta, cientistas da Universidade de Bristol, no Reino Unido, publicaram estudo na revista Nature que estima um aumento no nível do mar poderia se dar na ordem de 90 centímetros até o ano de 2100, por conta do derretimento de geleiras e da expansão das águas do oceano causados pelo aumento do calor. O aumento do nível do mar acarretaria em desaparecimento de ilhas e até países inteiros, além de prejuízos para cidades litorâneas, causados pelo desaparecimento de áreas mais baixas.</p>" +
					  "<p class='sf-center-text'>Outro estudo sugere que as mudanças climáticas podem aumentar o número de erupções vulcânicas. Ao analisarem o ultimo milhão de anos, pesquisadores conseguiram estabelecer uma relação direta entre mudanças climáticas e o consequente derretimento de geleiras, com o aumento de atividades vulcânicas. Isso pelo fato de que, com o aumento da quantidade de água nos oceanos causado pelo derretimento, a pressão sobre o solo oceânico aumenta, fazendo com que as chances de erupções aumentem.</p>" +
					  "<p class='sf-center-text'>Uma pesquisa, liderada por Nigel Arnell, diretor Instituto Walker da Universidade de Reading, demonstra que ao estabelecer políticas que garantam o aumento de temperatura em 2ºC até 2100, os impactos ambientais seriam reduzidos em até 65%. Atualmente, a previsão é que, até o fim do século, o mundo estará 4º C mais quente.</p>" +
					  "<p class='sf-center-text'>A gravidade da situação pode ser aferida no flagrante engajamento das corporações em relação ao tema. Em relatório encomendado pelo Fórum Econômico Mundial, intitulado Global Risks 2013, o efeito estufa já é reconhecido como o terceiro maior risco global por conta dos grandes fenômenos climáticos de 2012 como o furacão Sandy e as enchentes na China. A indústria seguradora é um bom exemplo disso, acompanha com apreensão a crescente sucessão de desastres naturais que impactam, direta e imprevisivelmente, o risco de suas operações.</p>" +
					  "<p class='sf-center-text'><strong>Onde está o problema e o que fazer a respeito</strong></p>" +
					  "<p class='sf-center-text'>A conscientização e a mudança de atitude são o mais importante quando o assunto é aquecimento global. Para contribuir com a diminuição de emissão de gases do efeito estufa, em primeiro lugar é preciso saber onde estão esses gases.</p>" +
					  "<p class='sf-center-text'>O dióxido de carbono é encontrado principalmente na queima de combustíveis fósseis como a gasolina, diesel e carvão. Para evitar esse tipo de poluição, a redução do uso deliberado do automóvel parece ser um bom caminho, a despeito das políticas industrial, econômica e urbana em nosso país caminharem em sentido exatamente oposto. Bicicletas são boas opções para deslocamentos de curta distância e nas longas, caronas e transporte público de qualidade, sobretudo trens e metrô, que utilizam fontes renováveis de energia, as melhores alternativas. A sermos capazes de nos mantermos como um país cuja matriz energética se baseie fundamentalmente em energia renovável, nosso caso hidrelétrica, estímulos ao barateamento da tecnologia de veículos elétricos e à migração do parque automotivo para veículos híbridos ou elétricos seria mudança importante.</p>" +
					  "<p class='sf-center-text'>O uso maciço de fertilizantes nitrogenados na agricultura é também um forte amplificador do efeito estufa, uma vez que além de exigirem grandes quantidades de energia em sua produção, quando aplicados ao solo desprendem nitrogênio na atmosfera. O gás, combinado ao oxigênio dá origem ao óxido nitroso (N2O), um poderoso GEE, cujo potencial de retenção de calor na atmosfera é de ordem 300 vezes superior à do dióxido de carbono (CO2). Neste caso as alternativas para redução de danos ainda são limitadas. Tecnologia desenvolvida pela Embrapa, a fixação biológica de nitrogênio é um emprego interessante e atualmente aplicada na produção de soja, embora sua abrangência ainda se revele limitada. Ocorre que as tecnologias para absorção deste nutriente, o nitrogênio, ainda não incorrem em escala suficiente para a redução material dos danos causados pelo processo atual, restando como alternativa básica a eficiência na aplicação dos adubos, ou seja, a menor quantidade possível para obtenção dos melhores resultados agrícolas esperados. O cenário de crescimento da população mundial e a condição de nosso país como uma das maiores fronteiras agrícolas no planeta agrava o quadro e recomenda emergência no surgimento de novas técnicas de produção.</p>" + 
					  "<p class='sf-center-text'>Já o metano, GEE cerca de 20 vezes mais potente que o dióxido de carbono na retenção de calor na atmosfera, a ela chega de diversas formas, dentre as quais via: emanação através de vulcões de lama e falhas geológicas, decomposição de resíduos orgânicos, fontes naturais (ex: pântanos), na extração de combustível mineral (a exemplo do gás de folhelho via fraturamento hidráulico extraído do folhelho negro), fermentação entérica de animais (herbívoros, carnívoros e onívoros), bactérias e aquecimento ou combustão de biomassa anaeróbica. Em alguns desses casos somos capazes de reduzir essas emissões através de práticas de consumo mais sustentáveis. Com relação à decomposição de resíduos orgânicos, a biodigestão e a compostagem são consideradas tecnologias mitigadoras por reduzirem as emissões GEE por tonelada de resíduo tratado, a primeira com a vantagem de gerar energia como subproduto e a seguinte na geração de fertilizante. A adoção progressiva de fontes de energia renováveis e menos poluentes, como eólica e solar em substituição às fontes fósseis e a redução no consumo de carne animal perfariam um conjunto de iniciativas capazes de reduzir materialmente os danos associados às emissões de metano originadas no consumo. </p> " +
					  "<p class='sf-center-text'>Embora o consumo de CFCs (clorofluorcarbonetos) tenha sido regularmentarmente eliminado no país, ainda estão em operação equipamentos de refrigeração e ar condicionado que operam à base desses gases nocivos. Alternativamente aos CFCs, sob o argumento de serem 50% menos destrutivos à camada de ozônio, surgiram os HCFCs (hidroclorofluorcarbonos), solução também para a indústria, já que a cadeia de produção para elaborá-lo era similar à dos CFCs. Por outro lado a nova solução, baseada nos gases chamados fluorados, representa grande contribuição para o aquecimento global por se tratar de poluente milhares de vezes mais prejudicial do que o dióxido de carbono, o que levou a União Européia a pressionar por seu banimento em favor de alternativas naturais não sintéticas, como a amônia ou o próprio dióxido de carbono, que têm altas propriedades de resfriamento quando usados para este fim. No Brasil encontra-se em curso o Programa Brasileiro de Eliminação de HCFCs com objetivo de cumprir um cronograma para a eliminação destes gases e que estabelece o congelamento dos níveis de produção e importações em 2013, sua redução em 10% até 2015, e o banimento total em 2040. </p>" +
					  "<p class='sf-center-text'>Por fim, ainda há uma medida importante a ser tomada e que diz respeito ao caráter político de nossa vida em sociedade. Um cidadão consciente e ambientalmente educado reúne a argumentação e as condições necessárias para, além das melhores escolhas em seu consumo particular, imprimir equivalente seletividade em suas opções relacionadas à representatividade legislativa e executiva. Sobre sua capacidade de articulação em sociedade para a cobrança sobre políticas ambientais consistentes e ações das autoridades que elege, como investimentos em mobilidade urbana de qualidade, regulamentações e fiscalização de emissões, desmatamento de florestas, preservação da biodiversidade, fomento a pesquisas, enfim, uma atitude que contribua para a construção de condições mais equilibradas e dignas ao convívio das espécies entre si e com o meio que habitam. </p>" 
			);
		}
	}
	
})

