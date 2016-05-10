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

//Quando carregr a tela, irá inserir os tooltips dos botões

window.onload = function(){
//	$('#btn1').tooltip({title: "Volta para a primeira palavra", trigger: "hover", placement: "bottom"});
//	$('#btn2').tooltip({title: "Inicia a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
//	$('#btn3').tooltip({title: "Para a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
	$('#selectedppm').tooltip({title: "Selecione a quantidade de palavras que passarão por minuto", trigger: "hover", placement: "bottom"}); 
}

