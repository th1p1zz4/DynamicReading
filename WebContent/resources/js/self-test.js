var ms;

function init(){
	var date = new Date();
	ms = date.getTime();
	$("#btn-init").addClass("disabled");
}

function finish(){
	var date = new Date();
	var result = ((date.getTime() - ms) / 1000);
	result = (105 / result) * 60;
	result = parseInt(result);
	$("#sfmodal").modal();
	$("#sflabel").text("Você tem a média de " + result + " palavras por minuto (ppm)");
	$("#btn-init").removeClass("disabled");
}