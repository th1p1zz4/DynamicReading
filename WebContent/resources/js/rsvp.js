var textArea;
var userText;
var listUserText;	

function play(){
	
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