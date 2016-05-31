var ms;

$( "#inner" ).append( "<p class='sf-center-text'><strong>DÉJÀ VU</strong></p> "+ 
					  "<p class='sf-center-text'>Você já viu uma pessoa pela primeira vez e pensou que a conhecesse de algum lugar? Ao conversar com alguém, percebeu que já havia falado exatamente as mesmas palavras? Isso é o Déjà vu.</p>" +
					  "<p class='sf-center-text'>A expressão francesa, que significa “já visto”, é usada para indicar um fenômeno que acontece no cérebro da maior parte da população mundial. O termo foi aplicado pela primeira vez por Emile Boirac (1851-1917), um estudioso interessado em fenômenos psicológicos. Déjà vu é quando nós vemos ou sentimos algo pela primeira vez e temos a sensação de já ter visto ou experimentado aquela sensação anteriormente.</p>" +
					  "<p class='sf-center-text'>Diversas teorias errôneas, como inatenção, vidas passadas ou visões sobrenaturais, surgiram para explicar o fenômeno. Já a hipótese de que verdadeiramente já seu viveu aquela cena antes é inválida, uma vez que essas ocorrências nunca poderiam recriar a situação com exatidão, devido à falta de sentimento associada a cada acontecimento na vida das pessoas.</p>" +
					  "<p class='sf-center-text'>Déjà vu também não é uma visão do futuro, uma vez que o fenômeno ocorre somente em momentos exatos, e jamais em situações anteriores.</p>" +
					  "<p class='sf-center-text'>Na verdade, a sensação é causada por um estado do cérebro, por fatores neuroquímicos. Os especialistas afirmam que o déjà vu é uma experiência baseada na memória e que os centros de memória do cérebro são os responsáveis pelo fenômeno. Os déjà vus acontecem principalmente nas pessoas de 15 a 25 anos.</p>" +
					  "<p class='sf-center-text'>http://brasilescola.uol.com.br/curiosidades/deja-vu.htm</p>"
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
		result = (979 / result) * 60;
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
					  "<p class='sf-center-text'>4. Meditar Caminhando: Um antigo método especialmente útil para quem tem dificuldade em manter-se imóvel ou em se concentrar enquanto medita.</p> " +
					  "<p class='sf-center-text'>https://www.portaleducacao.com.br/psicologia/artigos/67608/a-meditacao-no-combate-ao-estresse</p>");
		}
		if(sessionStorage.getItem("type") == "medium"){
			mediumModal();
			$( "#inner" ).empty();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>Por que você não deveria se preocupar por sua casa estar sempre bagunçada</strong></p> "+ 
					  "<p class='sf-center-text'>Vivemos num mundo previsível. Quase tudo está cuidadosamente processado e sistematizado. A sociedade se esforça para manter a ordem em absolutamente tudo.</p>" +
					  "<p class='sf-center-text'>Mas isso não passa de ilusão.</p>" +
					  "<p class='sf-center-text'><strong>Nos ensinaram uma noção superficial de simetria.</strong></p>" +
					  "<p class='sf-center-text'>Na verdade, a vida é, por natureza, imprevisível e caótica, ainda que tenhamos a sensação de que tudo vai ser melhor se assumirmos o controle. Mas é justamente o contrário. Por exemplo, você acha que precisa comprar uma calça a mais para ter a quantidade suficiente ’para sempre’. Você vai e compra. E só depois se dá conta de que as coisas não cabem mais no armário. E então seu guarda-roupas está condenado ao caos. Portanto, ao criar ’ordem’ em um lugar, você acaba criando desordem em outro. Decida jogar fora tudo o que não precisa. Aparentemente você arrumou a casa, mas o mundo, graças a seu ato, ficou mais sujo. É isto que nos diz a respeito o físico Adam Frank:</p>" +
					  "<p class='sf-center-text'><i>É uma lei da Física. A dura verdade da vida é que o universo é em si um caos. Como você poderia deixar em ordem as coisas na sua casa se isso contradiz a natureza do universo? </i></p>" +
					  "<p class='sf-center-text'>De fato, não importa o quanto tentemos manter nossa vida em ordem e a limpeza da casa, isso não dará em nada. Sempre haverá desordem em ambos.</p>" +
					  "<p class='sf-center-text'><strong>O que fazer? Dizer ’sim’ à natureza caótica deste mundo. Aceitá-la.</strong></p> " +
					  "<p class='sf-center-text'>As pessoas que mantêm a casa desordenada são sempre estigmatizadas. São vistas pelos outros como indivíduos apáticos, que levam uma vida ’equivocada’. Mas isso simplesmente não é verdade! As pessoas desorganizadas são melhores que outras. Ainda que seja só porque não permitem que as falsas ilusões de ordem lhes ditem um roteiro. Jim Morrison, cantor do The Doors, falou muito bem sobre isso:</p>" +
					  "<p class='sf-center-text'><i>Meu interesse é a rebelião, a desordem, o caos. Acho que este é o caminho da liberdade.</i></p>" +
					  "<p class='sf-center-text'>Isto não significa que você tenha de mergulhar no caos cada aspecto da sua vida. A organização e a ordem às vezes são muito importantes e úteis. Mas você não tem nenhum direito a julgar quem vive em desordem. Acredite, a importância da ordem é fortemente supervalorizada.</p>" +
					  "<p class='sf-center-text'><strong>As pessoas cujos lares estão permanentemente desordenados não são preguiçosas. São criativas e ousadas.</strong></p> " +
					  "<p class='sf-center-text'>O senso comum nos diz que a limpeza é a chave para eficiência e produtividade, mas não é bem assim. Eric Abrahamson e David Freedman, autores do best-seller científico A Perfect Mess: The Hidden Benefits of Disorder (Uma bagunça perfeita: os benefícios ocultos da desordem), dizem:</p> "+
					  "<p class='sf-center-text'><i>A desordem não necessariamente é um sinal de que não há um sistema. É como uma mesa onde está tudo amontoado; podemos trabalhar com mais eficiência do que numa mesa limpa. Quando a mesa de alguém está uma bagunça não significa que trabalhe mal. Quer dizer que ela trabalha tão bem que não tem tempo para arrumar.</i></p>" +
					  "<p class='sf-center-text'>Em outras palavras, o desastre pode ser na realidade um sinal de eficiência, em vez de descuido. A doutora em Filosofia da Universidade de Minnesota, Kathleen Vohs, desenvolveu uma pesquisa e comprovou que as pessoas propensas a jogar as coisas em qualquer lugar e acumular lixo são na verdade mais criativas que as demais. Como parte desta investigação, Vohs realizou uma experiência curiosa. Dividiu 48 voluntários em dois grupos e pediu que encontrassem formas criativas de usar uma bolinha de ping-pong. A metade dos participantes foi colocada em um quarto limpo e arrumado, e a outra metade, num lugar sujo. No fim, todos os grupos chegaram ao mesmo número de ideias, mas de acordo com uma avaliação independente de outros estudantes, os do segundo grupo tiveram ideias mais inovadoras e criativas. Vohs conclui:</p>" +
					  "<p class='sf-center-text'><i>Todos queremos ser mais criativos, sentir a inspiração mais forte. Meu conselho: se você se sente estancado e sem saber o que fazer, vá para um quarto sujo. Isto permitirá que você vá mais além da percepção habitual e produza novas ideias mais rapidamente. A ordem é resultado de nossa tendência à segurança; já o caos é resultado de nossa vontade de repensar o mundo de maneira criativa.</i></p>" +
					  "<p class='sf-center-text'>A desordem, é claro, durante muito tempo tem sido estreitamente relacionado com o gênio criativo. A desorganização e o descuido são criticados pela sociedade, mas era nessas condições em que viviam boa parte das grandes mentes da História: Albert Einstein, Alan Turing, Roald Dahl. Inclusive, J.K. Rowling (autora de Harry Potter) não consegue limpar seu apartamento. Todo eles alcançaram o sucesso, apesar de que suas vidas estavam cheias de caos. De maneira geral, se seus pais deixavam você de castigo por não limpar o quarto, eles estavam errados. A sociedade ignora os benefícios escondidos no caos.</p>" +
					  "<p class='sf-center-text'><strong>Para ignorar as regras e viver em seu desastre criativo, você precisa ter coragem.</strong></p>" +
					  "<p class='sf-center-text'>Albert Einstein disse uma vez : " +
					  "<p class='sf-center-text'><i>'Se a desordem no escritório significa desordem na minha cabeça, então o que significará uma mesa vazia?'</i></p>" +
					  "<p class='sf-center-text'> As pessoas criativas enxergam o panorama completo de suas próprias vidas, não se fixam em detalhes específicos. Nadam a favor da corrente em vez de irem contra ela. Elas se adaptam facilmente à mudanças. Sabem que o tempo é um recurso escasso demais para ser gasto em coisas entediantes como a limpeza. A simplicidade e a beleza da vida são mais importantes do que o sucesso visível e a disciplina. A paixão é melhor que o tédio. A vida é um presente bagunçado, imprevisível e maravilhoso. Aproveite a viagem!</p>" +
					  "<p class='sf-center-text'>http://incrivel.club/inspiracao-psicologia/por-que-voce-nao-deveria-se-preocupar-por-sua-casa-estar-sempre-baguncada-7155/</p>"
					  );
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
					  "<p class='sf-center-text'>Por fim, ainda há uma medida importante a ser tomada e que diz respeito ao caráter político de nossa vida em sociedade. Um cidadão consciente e ambientalmente educado reúne a argumentação e as condições necessárias para, além das melhores escolhas em seu consumo particular, imprimir equivalente seletividade em suas opções relacionadas à representatividade legislativa e executiva. Sobre sua capacidade de articulação em sociedade para a cobrança sobre políticas ambientais consistentes e ações das autoridades que elege, como investimentos em mobilidade urbana de qualidade, regulamentações e fiscalização de emissões, desmatamento de florestas, preservação da biodiversidade, fomento a pesquisas, enfim, uma atitude que contribua para a construção de condições mais equilibradas e dignas ao convívio das espécies entre si e com o meio que habitam. </p>" +
					  "<p class='sf-center-text'>http://www.ecycle.com.br/component/content/article/35/1294-aquecimento-global-o-perigo-se-tornou-real.html</p>"
			);
		}
	}
	
})

