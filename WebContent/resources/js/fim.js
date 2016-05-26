function respostasCertas(qtd) {
	if(qtd == 1){
		$( "#jumbotron" ).append( "<div class='row'>" +
				"<i class='glyphicon glyphicon-sunglasses fim-icon' />" +
				"</div>" +
				"<br>" +
				"<p class='sf-center-text'><strong>Seu resultado</strong></p> "+ 
				"<p>Acertou MAIS com o RSVP!</p>" +
				"<p>Leitura cotidiana ou leitura para estudos, não importa o motivo, utilize o RSVP para acelerar e aumentar a quantidade de textos lidos, pois a compreensão foi maior que na leitura convencional. Tente velocidade mais altas e nunca pare!</p>" 
		 );
	} else if(qtd == 2){
		$( "#jumbotron" ).append( "<div class='row'>" +
				"<i class='glyphicon glyphicon-education fim-icon' />" +
				"</div>" +
				"<br>" +
				"<p class='sf-center-text'><strong>Seu resultado!</strong></p> "+ 
				  "<p>Acertou a mesma quantidade nos dois textos</p>" + 
				  "<p>Utilize o RSVP para ler os seus textos. Você otimizará o seu tempo e obterá efetividade na leitura!</p>" 
		 );
	} else {
		$( "#jumbotron" ).append( "<div class='row'>" +
				"<i class='glyphicon glyphicon-thumbs-down fim-icon' />" +
				"</div>" +
				"<br>" +
				"<p class='sf-center-text'><strong>Seu resultado!</strong></p> "+ 
				  "<p>Acertou menos com o RSVP!</p>" +
				  "<p>Foi falta de concentração? Velocidade muito rápida? Tente com uma velocidade menor, mas não desista. Otimizar sua leitura é fundamental! Não desista.</p>" 
		 );
	}
}

$(document).ready(function()
{
		if(sessionStorage.getItem("respostaTextoUm") < sessionStorage.getItem("respostaTextoDois")){
			respostasCertas(1);
		} else if(sessionStorage.getItem("respostaTextoUm") == sessionStorage.getItem("respostaTextoDois")){
			respostasCertas(2);
		} else {
			respostasCertas(3);
		}
})