var textArea;
var userText;
var listUserText;
var interval;
var wpm;
var index = 0;
var listBtnClass = ["btn-info", "btn-primary", "btn-success", "btn-warning", "btn-danger"];

function back(){
	if(listUserText != null && listUserText != undefined){
	index = 0;
	$("#rsvpLabel").text(listUserText[index]);
	clearTimer();
	}
}

function play(){
	//Valida se a lista não está vazia
	if(listUserText != null && listUserText != undefined){
		//recebe as palavras por minuto que o usuário selecionou
		var wordPer = getWordsPerMinute() ? getWordsPerMinute() : 250;
		//cálcula o tempo de palavras por minuto e transforma para segundos para passar as palavras por segundo.
		var time = 1000 * (1 / (wordPer / 60));
		//Seta do ínico o índice da lista para pegar a partir da primeira palavras
		index = 0;
		//função que seta as palavras para passar na tela para o usuário
		interval = setInterval(function(){
//			//Se a palavra possui um ponto final, aumenta o delay para ter uma pausa.
//			if(listUserText[index].slice(-1) == "." && listUserText[index].slice(-1) != undefined){
//				time = 6000;
//				//Se a palavra possui uma vírgula, aumenta o delay para ter uma pausa.
//			} else if (listUserText[index].slice(-1) == "," && listUserText[index].slice(-1) != undefined){
//				time = 5000;
//			}
				$("#rsvpLabel").text(listUserText[index]);
				index++;
				if(listUserText.length == index){
					clearTimer();
				}
			
		},time);
	}
	
}

function clearTimer(){
	if(interval != null && interval != undefined){
		clearInterval(interval);
	}
}

function receiveText(){
	listUserText = getUserText().split(" ");
	$("#rsvpLabel").text(listUserText[0]);
}
	
function getUserText(){
	return userText;
}

function setUserText(textArea){
	userText = textArea;
	receiveText();
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
}

function getWordsPerMinute(){
	return wpm;
}

//Quando carregr a tela, irá inserir os tooltips dos botões

window.onload = function(){
	$('#btn1').tooltip({title: "Volta para a primeira palavras", trigger: "hover", placement: "bottom"});
	$('#btn2').tooltip({title: "Inicia a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
	$('#btn3').tooltip({title: "Para a leitura dinâmica", trigger: "hover", placement: "bottom"}); 
	$('#selectedppm').tooltip({title: "Selecione a quantidade de palavras por minuto que deverão passar", trigger: "hover", placement: "bottom"}); 
}

