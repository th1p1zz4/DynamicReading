var textArea;
var userText;
var listUserText;
var interval;
var wpm;
var index = 0;

function back(){
	if(listUserText != null && listUserText != undefined){
	index = 0;
	$("#rsvpLabel").text(listUserText[index]);
	clearTimer();
	}
}

function play(){
	if(listUserText != null && listUserText != undefined){
		var wordPer = getWordsPerMinute() ? getWordsPerMinute() : 250;
		var time = 1000 * (1 / (wordPer / 60));
		index = 0;
		interval = setInterval(function(){
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
	wpm = value;
}

function setOption2(value){
	wpm = value;
}

function setOption3(value){
	wpm = value;
}

function setOption4(value){
	wpm = value;
}

function setOption5(value){
	wpm = value;
}

function getWordsPerMinute(){
	return wpm;
}


