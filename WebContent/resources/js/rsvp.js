var textArea;
var userText;
var listUserText;
var interval;
var wpm;
var index = 0;
var listBtnClass = ["btn-info", "btn-primary", "btn-success", "btn-warning", "btn-danger"];
var isPause = false;

function back(){
	if(listUserText != null && listUserText != undefined){
	index = 0;
	$("#rsvpLabel").text(listUserText[index]);
	$('#change').removeClass('glyphicon-pause').addClass('glyphicon-play-circle');
	clearTimer();
	isPause = false;
	}
}

function play(){
	if(!isPause){
		//Valida se a lista não está vazia
		if(listUserText != null && listUserText != undefined && index < listUserText.length){
			$('#myModal').modal('hide');
			$('#change').removeClass('glyphicon-play-circle').addClass('glyphicon-pause');
			//recebe as palavras por minuto que o usuário selecionou
			var wordPer = getWordsPerMinute() ? getWordsPerMinute() : 250;
			//cálcula o tempo de palavras por minuto e transforma para segundos para passar as palavras por segundo.
			var time = 1000 * (1 / (wordPer / 60));
			//Seta do ínico o índice da lista para pegar a partir da primeira palavras
			index = index ? index : 0;
			defineInterval(time);
			isPause = true;
		}
	} else {
		pause();
	}
	
}

function pause(){
	if(interval != null && interval != undefined){
		clearInterval(interval);
		$('#change').removeClass('glyphicon-pause').addClass('glyphicon-play-circle');
		isPause = false;
	}
}

function clearTimer(){
	if(interval != null && interval != undefined){
		clearInterval(interval);
	}
}

function defineInterval(time){
	if(index < listUserText.length ){	
	interval = setInterval(function(){
	//Se a palavra possui um ponto final, aumenta o delay para ter uma pausa.
	
		if(listUserText[index].slice(-1) == "." && listUserText[index].slice(-1) != undefined){
			clearTimer();
			isPause = false;
			setTimeout(play, 400);
			//Se a palavra possui uma vírgula, aumenta o delay para ter uma pausa.
		} else if (listUserText[index].slice(-1) == "," && listUserText[index].slice(-1) != undefined){
			clearTimer();
			isPause = false;
			setTimeout(play, 200);
		} else if(listUserText[index].slice(-1) == "!" && listUserText[index].slice(-1) != undefined){
			clearTimer();
			isPause = false;
			setTimeout(play, 200);
		} else if(listUserText[index].slice(-1) == "?" && listUserText[index].slice(-1) != undefined){
			clearTimer();
			isPause = false;
			setTimeout(play, 200);	
		} else if(listUserText[index].slice(-1) == ")" && listUserText[index].slice(-1) != undefined){
			clearTimer();
			isPause = false;
			setTimeout(play, 200);	
		}
		$("#rsvpLabel").text(listUserText[index]);
		index++;
		if(listUserText.length == index){
			clearTimer();
			$('#change').removeClass('glyphicon-pause').addClass('glyphicon-play-circle');
			if(sessionStorage.getItem("type") != undefined && sessionStorage.getItem("type") != null){
				if(sessionStorage.getItem("type") == "easy"){
					easyModalFim();
				}
				if(sessionStorage.getItem("type") == "medium"){
					mediumModalFim();
				}
				if(sessionStorage.getItem("type") == "hard"){
					hardModalFim();
				} 
			}
		}
	
},time);
	}
}

function receiveText(){
	//listUserText = getUserText().replace("  ", " ");
	//listUserText = getUserText().replace(/\r\n|\r|\n/g," ");
	listUserText = getUserText().replace(/\r\n|\r|\n/g, " ").replace("  ", " ").replace("   ", " ").replace(";", "; ").replace(":", ": ").replace("", " ").replace(".",". ").split(" ");
	for(var i = 0; i < listUserText.length; i++){
	   var index = listUserText.indexOf("");
	if (index > -1) {
		listUserText.splice(index, 1);
	}
	}
	//listUserText = getUserText().replace("   ", " ").split(" ");
	$("#rsvpLabel").text(listUserText[0]);
}
	
function getUserText(){
	return userText;
}

function setUserText(textArea){
	userText = textArea;
	receiveText();
}

function loading(time){
	if(listUserText != null && listUserText != undefined){
	$("#myModal").modal();
	back();
	isPause = false;
	setTimeout(play, 2000);
	}
}

function setOption1(value){
	var activeClass = $('#selectedppm').attr('class');
	for(var i = 0; i <= listBtnClass.length; i++){
		if(activeClass.indexOf(listBtnClass[i]) != -1){
			activeClass = listBtnClass[i];
			break;
		}
	}	
	$("#selectedppm").removeClass(activeClass).addClass('btn-info');
	$("#selectedppm").text("250 palavras por minuto");
	wpm = value;
	loading(wpm);
}


function setOption2(value){
	var activeClass = $('#selectedppm').attr('class');
	for(var i = 0; i <= listBtnClass.length; i++){
		if(activeClass.indexOf(listBtnClass[i]) != -1){
			activeClass = listBtnClass[i];
			break;
		}
	}	
	$("#selectedppm").removeClass(activeClass).addClass('btn-primary');
	$("#selectedppm").text("400 palavras por minuto");
	wpm = value;
	loading(wpm);
}

function setOption3(value){
	var activeClass = $('#selectedppm').attr('class');
	for(var i = 0; i <= listBtnClass.length; i++){
		if(activeClass.indexOf(listBtnClass[i]) != -1){
			activeClass = listBtnClass[i];
			break;
		}
	}	
	$("#selectedppm").removeClass(activeClass).addClass('btn-success');
	$("#selectedppm").text("500 palavras por minuto");
	wpm = value;
	loading(wpm);
}

function setOption4(value){
	var activeClass = $('#selectedppm').attr('class');
	for(var i = 0; i <= listBtnClass.length; i++){
		if(activeClass.indexOf(listBtnClass[i]) != -1){
			activeClass = listBtnClass[i];
			break;
		}
	}	
	$("#selectedppm").removeClass(activeClass).addClass('btn-warning');
	$("#selectedppm").text("600 palavras por minuto");
	wpm = value;
	loading(wpm);
}

function setOption5(value){
	var activeClass = $('#selectedppm').attr('class');
	for(var i = 0; i <= listBtnClass.length; i++){
		if(activeClass.indexOf(listBtnClass[i]) != -1){
			activeClass = listBtnClass[i];
			break;
		}
	}	
	$("#selectedppm").removeClass(activeClass).addClass('btn-danger');
	$("#selectedppm").text("700 palavras por minuto");
	wpm = value;
	loading(wpm);
}

function getWordsPerMinute(){
	return wpm;
}

function callKnowMore() {
	$('#modalmore').modal();
}

function easyModal() {
	$('#rsvpeasymodal').modal();
}

function mediumModal() {
	$('#rsvpmediummodal').modal();
}

function hardModal() {
	$('#rsvphardmodal').modal();
}

function easyModalFim() {
	$('#rsvpeasymodalfim').modal();
}

function mediumModalFim() {
	$('#rsvpmediummodalfim').modal();
}

function hardModalFim() {
	$('#rsvphardmodalfim').modal();
}

function callRsvp(){
	if(sessionStorage.getItem("type") == "easy"){
		setOption1(250);
	} else if (sessionStorage.getItem("type") == "medium"){
		setOption2(400);
	} else if (sessionStorage.getItem("type") == "hard"){
		setOption2(600);
	}
}

function goToFim(){
	if(sessionStorage.getItem("type") == "easy"){
		 var listaRespostaTextoUm = [];
		 var listaRespostaTextoDois = [];
		 if($('#e1').prop('checked') == true){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#e2').prop('checked') == false){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#e3').prop('checked') == false){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#e4').prop('checked') == true){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#e5').prop('checked') == true){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#e6').prop('checked') == true){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#e7').prop('checked') == false){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#e8').prop('checked') == false){
			 listaRespostaTextoDois.push(1);
		 }
		 sessionStorage.setItem("listaRespostaTextoUm", listaRespostaTextoUm.length);
		 sessionStorage.setItem("listaRespostaTextoDois", listaRespostaTextoDois.length);
	} else if (sessionStorage.getItem("type") == "medium"){
		 var listaRespostaTextoUm = [];
		 var listaRespostaTextoDois = [];
		 if($('#m1').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#m2').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#m3').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#m4').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#m5').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#m6').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#m7').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#m8').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 sessionStorage.setItem("listaRespostaTextoUm", listaRespostaTextoUm.length);
		 sessionStorage.setItem("listaRespostaTextoDois", listaRespostaTextoDois.length);
	} else if (sessionStorage.getItem("type") == "hard"){
		 var listaRespostaTextoUm = [];
		 var listaRespostaTextoDois = [];
		 if($('#h1').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#h2').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#h3').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#h4').prop('checked')){
			 listaRespostaTextoUm.push(1);
		 }
		 if($('#h5').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#h6').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#h7').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 if($('#h8').prop('checked')){
			 listaRespostaTextoDois.push(1);
		 }
		 sessionStorage.setItem("listaRespostaTextoUm", listaRespostaTextoUm.length);
		 sessionStorage.setItem("listaRespostaTextoDois", listaRespostaTextoDois.length);
	}
}

//Quando carregr a tela, irá inserir os tooltips dos botões

window.onload = function(){
//	$('#btn1').tooltip({title: "Volta para a primeira palavra", trigger: "hover", placement: "bottom"});
//	$('#btn2').tooltip({title: "Inicia a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
//	$('#btn3').tooltip({title: "Para a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
	$('#selectedppm').tooltip({title: "Selecione a quantidade de palavras que passarão por minuto", trigger: "hover", placement: "top"}); 
}

$(document).ready(function()
		{
				$("#input-ta").prop("disabled", false);
			if(sessionStorage.getItem("type") != undefined && sessionStorage.getItem("type") != null){
				if(sessionStorage.getItem("type") == "easy"){
					$("#input-ta").prop("disabled", true);
					easyModal();
					setUserText(
"O aperto de mãos é um cumprimento, além de ser uma forma de firmar um acordo verbal, e é usado diariamente por milhares e milhares de pessoas, quase sem perceber, já que virou algo tão comum. Dependendo da cultura em que se encaixa, o aperto de mão simboliza um gesto social de confiança, afinidade, amizade, entre outras coisas. Aqui no Brasil, pode ser qualquer uma dessas coisas, mas é, principalmente, uma forma de firmar acordos verbais e de cumprimentar. "+
"Trata-se de algo bastante simples: duas pessoas estendem uma de suas mãos e seguram a mão do outro, movimentando o braço do aperto de mão para cima e para baixo. "+
"Mas você já parou pra pensar de onde surgiu esse gesto? "+
"Como começou? "+
"Existem divergências quanto a real origem do aperto de mão. Foram encontrados em templos egípcios, alguns hieróglifos que representavam a mão estendida de um deus, destinando o seu poder a um humano, ou então como uma forma de o humano receber as bênçãos dos deuses. "+
"Mas outras teorias divergem, afirmando que o aperto de mãos começou já nos primórdios. O aperto de mãos, para estes, era uma forma de demonstrar aos outros homo sapiens que não carregava armas, e desejava desenvolver, junto ao outro, um relacionamento pacífico. "+
"Segundo historiadores, essa versão é a mais aceita, já que isso remeteria inclusive ao fato de que mulheres normalmente não se cumprimentam apertando as mãos: somente os homens carregavam armas para lutar contra os predadores e contra outros homens que pudessem oferecer ameaças. "+
"Existe ainda outra história que remete a tempos um pouco mais recentes: a Idade Média. Neste período, antes dos duelos, cavaleiros se abraçavam como uma forma de mostrar que não possuíam nenhuma arma escondida, somente o que portavam em mãos. Isso, entretanto, deixava os competidores um tanto quanto vulneráveis, podendo o oponente aproveitar o ato para dar um golpe. Diante disso, o gesto foi substituído pelos apertos de mão. "+
"Aperto de mãos nos dias atuais: "+
"Existe uma data, assim como o Dia do Beijo e o Dia do Abraço, destinado ao aperto de mãos, que é comemorado no dia 21 de junho e simboliza a união da humanidade, assim como as formas de esta demonstrar seu afeto. O Dia Internacional do Aperto de Mão representa esse cumprimento tão usado nos dias atuais, relembrando às pessoas como o gesto é importante para as relações sociais. "+
"Como conhecer as pessoas pelo aperto de mão "+
"Há quem diga que podemos conhecer as pessoas através de seus apertos de mãos. "+
"Segundo a teoria, quem coloca a mão pelo lado superior, com a palma virada para baixo, pretende controlar o encontro, e quem se posiciona de forma inferior, demonstra que o outro pode ter o controle. "+
"O aperto de mão com duas mãos, fechando a mão do outro indivíduo entre as suas, representa carinho, objetivando aumentar o contato físico, mas também pode ser uma forma de retomar o controle da situação quando o outro tentar apertar a mão na posição superior. "+
"A melhor opção para quem não quer passar a impressão errada, é apertar a mão verticalmente, o que demonstra a igualdade e o respeito. Diante do gesto, mantenha também o contato visual, assim como a força do aperto semelhante a que a outra pessoa está usando. "
);
				}
				if(sessionStorage.getItem("type") == "medium"){
					$("#input-ta").prop("disabled", true);
					mediumModal();
					setUserText("Tradicionalmente, o que se convencionou chamar de sucesso é medido pelo fato de ter casa própria e carro. Mas isso já não é mais assim. A cada dia, aumenta o número de jovens que optam em não adquirir este tipo de bens. " +
"Diversos estudos especializados mostraram que cada vez menos pessoas da chamada 'geração Y' (que hoje têm cerca de 30 a 35 anos) compram casa. Sem falar no número ainda menor de interessados em adquirir um automóvel. Na realidade, eles não fazem quase nenhum tipo de gasto grande, sem contar os iPhones, é claro. " +
"Nos Estados Unidos, jovens de até 35 anos são conhecidos como ’a geração dos alugadores’. Por que isso acontece? Alguns sociólogos têm certeza de que os jovens de hoje estão mais atentos, sabendo que podem enfrentar crises financeiras e, por isso, temem fazer grandes financiamentos. " +
"Mas isso não é o principal. O fundamental é que a ’geração Y’ se diferencia da geração de seus pais quanto aos valores. São muito diferentes. " +
"Os jovens redefiniram sucesso. Antes, dizia-se que alguém de sucesso era aquele com casa própria e pelo menos um carro. Mas agora valoriza-se quem investe seu dinheiro em experiências, viagens e aventuras. " +
"Jovens vêm deixando conscientemente de comprar bens móveis e imóveis, preferindo recorrer ao aluguel. Hoje em dia, as pessoas preferem horários de trabalho mais flexíveis, independência econômica e geográfica ao que antes era tido como prosperidade e estabilidade. " +
"As coisas materiais estão deixando de despertar o interesse das pessoas. Para que ter um carro se você pode usar o transporte público, táxi, bicicleta ou Uber? Sobretudo nas grandes cidades, há alternativas ao uso do transporte motorizado próprio. " +
"Para que comprar uma casa em um lugar lindo para poder descansar, se você pode, através de plataformas como ’Airbnb’, encontrar um lugar em qualquer lugar do Planeta? Não é necessário sequer fazer um contrato formal de aluguel, nem comprar uma casa no país onde você deseja viver naquele momento. É o mesmo que acontece com os bens imóveis na cidade natal. Em primeiro lugar, a pessoa não sabe por quanto tempo mais irá morar no mesmo lugar em que vive atualmente. Em segundo lugar, para que se comprometer com um financiamento de 40 anos se, por um lado, isso significa viver o resto da vida como se estivesse pagando aluguel? No fim das contas, o mais provável é que a pessoa mude seu local de trabalho muitas vezes do decorrer dos anos, e quando se vive de aluguel, não há nada que impeça alguém de se mudar para um novo bairro, mais próximo do local de trabalho. A revista Forbes já disse que os jovens contemporâneos mudam de trabalho em média três vezes por ano. " +
"O próprio conceito de propriedade das coisas já não é mais a mesmo. " +
"O crítico James Gamblin, colunista da revista Atlantis explica o fenômeno da seguinte maneira: «Durante os últimos dez anos, psicólogos fizeram várias investigações que demonstram que, levando em conta a felicidade e a sensação de bem estar, é muito melhor gastar dinheiro adquirindo novas experiências do que comprando coisas. Isso é o que deixa as pessoas mais felizes " +
"Trecho extraído do artigo de Gamblin: " +
"Parece que as pessoas não querem ouvir histórias sobre onde você comprou uma casa, e sim ouvir o quão maravilhoso foi seu fim de semana. Até mesmo uma experiência ruim pode se transformar numa história fascinante. A interação social entre as pessoas desempenha um papel muito importante na hora de definir se elas serão felizes ou não. Logo, é preciso conversar com outras pessoas e ter muitos amigos. Obviamente, os outros irão gostar mais de ouvir sobre uma viagem maluca e inesperada, ou sobre como alguém morou em um país desconhecido, do que ouvir quantas casas alguém conseguiu comprar. " +
"E tem mais uma coisa. O que acontece é que as coisas que nós possuímos, especialmente se forem caras, nos obrigam a nos preocupar com elas. Basta comprar um carro para se assustar sempre que algum alarme é disparado na rua. Quando se compra uma casa e muitos eletrodomésticos para que o lar seja confortável, surge o medo de a casa ser invadida por ladrões. Isso sem falar que automóveis acabam ganhando arranhões, batidas, e os televisores caros teimam em funcionar perfeitamente durante apenas um ano. Por outro lado, experiências e aventuras vividas continuam para sempre onde estão. Ninguém pode tirá-las de você. " +
"Em sua maioria, nossos pais não tinham a chance de viajar tanto nem de ir a lugares tão distantes como nós temos hoje. Eles não tinham a possibilidade de se divertir como fazemos agora. Não tiveram tantas chances de abrir um negócio próprio, por isso investiram em bens móveis e imóveis, mas nós não precisamos seguir seus passos nesse sentido. Além disso, qualquer compra — que não seja uma casa ou apartamento — irá perder seu valor com o tempo. E se você der uma olhada no ritmo lento e na recessão do mercado imobiliário, tudo fica ainda mais óbvio. " +
"O importante é que as experiências não se desvalorizam e não podem ser roubadas.");
				}
				if(sessionStorage.getItem("type") == "hard"){
					$("#input-ta").prop("disabled", true);
					hardModal();
					setUserText(
"Imagine dois pontinhos. Agora, que você está acordado, eles vão ser só dois pontinhos mesmo. Mas no sono profundo é diferente. Se uma parte do cérebro imagina isso, outra área fica inspirada e cria um par de olhos. Mais outra pega e coloca esses olhos numa face. Se o rosto sair feio, a área mais burra da mente se assusta. E solta um comando mandando você correr. Começa o enredo de um sonho. Louco, mas a realidade não é muito mais sã. Pense em alguma coisa estúpida. 'Martelo', por exemplo. Não existe nenhum lugar na sua cabeça com a definição da palavra 'martelo'. Tudo o que há é um mosaico de referências: a dor no dedo depois de uma martelada infeliz, a imagem da caixa de ferramentas do seu avô... Elas só se juntam de vez em quando para formar uma ideia sólida, igual acontece com os tijolos mentais que constroem os sonhos. A realidade e o sonhar, na verdade, se completam. E a ciência está descobrindo que uma não existe sem a outra. Vire a página para saber o que os sonhos realmente são. Isso se você não estiver sonhando neste momento. " + 
"Você tem 3 vidas paralelas. Uma é esta aqui, de quando você está acordado. Outra é o sono. O sonho é a terceira: duas horas por noite em que o corpo está paralisado, mas algumas áreas do cérebro ficam mais aceleradas do que o normal. Só que de um jeito diferente: de dia, a parte do cérebro que mais trabalha é o gerentão da mente: o córtex pré-frontal, o setor de massa cinzenta logo atrás da sua testa responsável pelo pensamento racional. No sonho é o contrário: essa área apaga e o resto funciona a toda. " +
"Para entender melhor, pense no cérebro como uma escola. De samba. São várias áreas (ou alas, no caso) fazendo tarefas diferentes. Na vida acordada, cada uma faz seu trabalho bonitinho, sob o comando do córtex pré-frontal. Mas à noite é anarquia pura. Livres do controle da gerência, áreas que nunca interagem de dia começam a trocar informações feito loucas. Tipo: passistas da ala das memórias antigas se embrenham na do córtex visual (a parte que processa imagens). Nisso as memórias incitam a produção de um cenário do passado. E você pode sonhar com um lugar bonito para onde foi aos 6 anos de idade. Depois gente de outra ala, a das emoções profundas, aparece por lá. Aí o amor da sua vida pipoca naquela paisagem. E a festa na sua cabeça vai entrando pela noite. Cada vez mais doida." +
"Chega uma hora que ninguém é de ninguém. Tudo fica misturado. Aí você pode sonhar que seu escritório fica num barco, e que esse barco navega numa avenida. Quer sair voando? Beleza. Nem o pensamento racional nem a gravidade estão lá para impedir. A memória de curto prazo, que depende diretamente do córtex pré-frontal, está desligada também. Então os rostos mudam o tempo todo, você não consegue ler direito... Até por isso seu avatar do sonho é sempre disléxico. " +
"Parece só uma farra mental. Mas não: os sonhos têm um propósito. E justamente o mais inesperado: eles tecem a realidade. " +
"Como? Para começar, eles resolvem seus problemas. Foi o que concluiu um dos neurocientistas mais respeitados do mundo, Robert Stickgold, de Harvard. A base para isso foi uma experiência simples, feita neste ano. A equipe de Stickgold colocou 100 voluntários para andar num labirinto virtual, um daqueles 3D, de jogos tipo Counter Strike. O grupo foi posto para treinar as manhas do labirinto, aprender a navegar nele, por algum tempo. Depois deram um intervalo de 5 horas e chamaram o pessoal de volta para uma prova: ver quem conseguia achar a saída do labirinto mais rápido. Mas tinha um detalhe: os pesquisadores colocaram metade dos voluntários para tirar um cochilo de duas horas. O resto ficou acordado. Na volta, o time dos dormidos se deu ligeiramente melhor que o dos despertos - demoravam alguns segundos a menos para encontrar a saída." +
"Até aí, nada de mais. Mas veio uma surpresa. Entre os que foram dormir, alguns sonharam com o jogo. Esses tinham virado Ayrtons Sennas do labirinto: melhoraram seu tempo 10 vezes mais que os outros. Os cientistas ficaram eufóricos. Mais ainda depois de ler os relatos dos sonhadores. 'O jogo me fez sonhar com uma caverna que visitei - e no sonho ela era tipo... tipo um labirinto', disse um. 'Só ouvi a musiquinha do jogo no sonho', falou outro. Mas como isso pôde melhorar o desempenho deles? " +
"Para Stickgold, essas imagens mentais eram apenas uma sombra do que o cérebro dos voluntários fazia de verdade. E o que ele fazia era processar o labirinto no meio da balbúrdia dos sonhos. No caso do rapaz que sonhou com a caverna, por exemplo, estava claro que o jogo se fundia às memórias antigas dele. Era como se a experiência nova, a de aprender a se virar no labirinto, estivesse entrando no meio da escola de samba desgovernada. " +
"Stickgold imagina que, quando o cérebro digere alguma experiência dessa forma, ele faz algo especial: extrai o que há de mais importante nessa experiência. Aí ela fica mais compreensível. E você aprende algo novo sem se dar conta. " +
"A conclusão é ambiciosa. Para o neurocientista, isso acontece com tudo o que o cérebro capta. Nada deixa de passar pela festa dos sonhos. É nela que peças do presente se encaixam com as do passado, formando a imagem mental que temos do mundo. Nessa imagem está tudo o que você sabe, do significado da palavra 'martelo' até seus amores e traumas. " +
"Não há uma prova definitiva de que é assim mesmo que tudo funciona. Mas as experiências de laboratório indicam que sim. E as da vida real também. É comum, por exemplo, acordar com uma ideia nova. Prontinha. Já aconteceu com você? Com Paul McCartney aconteceu. Numa manhã de 1965, ele acordou com uma música na cabeça, foi para o piano e tirou a melodia. Ficou estarrecido. 'Não acreditava que ela pudesse ser minha', disse. Era, sim. E acabou gravada com o nome de Yesterday. Coincidência uma obra onírica ter virado o maior sucesso comercial da maior banda da história? Talvez não. Satisfaction, a mais célebre dos Stones, também apareceu num sonho - de Keith Richards. " +
"Mas ninguém teve sonhos tão célebres quanto outro sujeito: Freud, que escreveu sobre o assunto usando em grande parte os próprios sonhos como base. Apesar dos avanços da neurociência, suas ideias sobre o mundo onírico continuam respeitadas. Faz sentido? Sim. E não. " +
"A teoria de Freud: os sonhos são a manifestação de desejos reprimidos. Ponto. Vários sonhos, de fato, parecem ser isso mesmo. Se você está com sede, provavelmente vai sonhar que está bebendo água. " +
"Mas o problema nela é óbvio. A maior parte dos sonhos não tem nada a ver com desejo. Uns são tão banais que não podem entrar nessa classificação. Outros são pesadelos. Alguém deseja morrer afogado por uma daquelas ondas gigantes de sonho? Ele sabia que não. Mas batia o pé: os desejos estariam quase sempre disfarçados. Sigmund explica: 'Um dia falei para uma paciente, a mais inteligente das minhas sonhadoras, que os sonhos são a realização de desejos. No dia seguinte ela me contou ter sonhado que estava indo viajar com a madrasta', escreveu em seu A Interpretação dos Sonhos, de 1899. 'Mas eu sabia que, antes, ela tinha protestado contra o fato de que teria de passar o verão na mesma vizinhança que a madrasta. De acordo com o sonho, então, eu estava errado. Mas era o desejo dela que eu estivesse errado, e esse desejo o sonho mostrou realizado." + "Acredite. Se quiser. " +
"Por essas boa parte dos pesquisadores de hoje prefere tratar Freud mais como literatura do que como ciência. A gente sonha com água quando está com sede? Usando as analogias deste texto, a explicação seria: o pessoal do sistema límbico foi até a ala do córtex visual e disse que seu corpo estava com sede. O córtex pegou e criou uma imagem que tem a ver com sede. Sem drama. O sonho da paciente inteligente? Bom, às vezes uma viagem de trem com a madrasta é só uma viagem de trem com a madrasta... " +
"Mas alguns cientistas defendem que as pesquisas modernas confirmaram muito do que Freud pensava. Allen Braun, um neurologista célebre, faz uma defesa sólida: 'O fato de as regiões do cérebro responsáveis pela memória emocional e de longo prazo ficarem supercarregadas enquanto as do pensamento racional repousam pode ser visto em termos freudianos como o ‘ego’ saindo do comando e dando liberdade ao inconsciente', diz. Mas ele também acha a teoria de Freud defasada. " +
"A interpretação moderna dos sonhos é mais complexa. Quem estuda a mente hoje olha com atenção para os detalhes do sonho de cada pessoa, sem correr atrás de interpretações genéricas. Usar símbolos universais, do tipo 'sonhar com água significa x ou y', então, nem pensar. Isso seria subestimar o maior talento do cérebro sonhador : a capacidade de criar metáforas surpreendentes. " +
"Ann Faraday, uma psicóloga americana especializada em sonhos, tem um bom exemplo dessa habilidade poética. Ela estava para ser entrevistada no programa de rádio de um certo Long John Nebel. Aí, na noite anterior, sonhou que um sujeito de ceroulas a ameaçava com uma metralhadora. Símbolo fálico, desejo sexual enrustido... Tem tudo aí. Mas não. A interpretação dela foi bem mais direta. Long John é 'ceroula' em inglês, e o apresentador era conhecido por ser particularmente ferino. O sujeito de roupas íntimas, então, era uma metáfora que o cérebro dela arranjou para o nome do sujeito; e a metralhadora, uma para o medo que ela sentia de ser agredida na entrevista. Só isso. " +
"E tudo isso. 'Podemos aprender sobre as emoções que nos guiam na vida real se prestarmos atenção nos sonhos', diz o psiquiatra J. Allan Hobson, de Harvard. O exercício aí é tentar decifrar as metáforas dos sonhos, encontrar quais elementos da sua vida estão por trás delas - uma tarefa profunda e pessoal em que nenhum dos dicionários de sonhos já feitos desde a invenção da escrita vai poder ajudar. " + 
"E nem sempre será fácil. A psicóloga americana Rosalind Cartwright, por exemplo, concluiu algo paradoxal com base em anos de estudos: que os rejeitados num relacionamento que mais sonham com o ex são os que se recuperam mais rápido do baque da separação. Isso casa bem com as pesquisas de Stickgold: talvez seja o cérebro maquinando formas de lidar com o rompimento, dando um jeito de aliviar a dor. Mas não dá para ter certeza, só especular. Ainda há certas coisas entre a vida real e os sonhos que estão além da ciência. Para começar, não dá nem para saber se você vai acordar daqui a pouco e descobrir que tudo isso foi um sonho. Mas ok. No fundo, dá na mesma."
);
				} 
			}
			
})
