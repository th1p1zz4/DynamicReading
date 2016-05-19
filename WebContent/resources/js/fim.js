function respostasCertas(qtd) {
	if(qtd == 1){
		$( "#jumbotron" ).append( "<p class='sf-center-text'><strong>Seu resultado!</strong></p> "+ 
				  "<p>VOCÊ ACERTOU MENOS NA LEITURA CONVENCIONAL, PODE SER QUE O RSVP O AJUDE, CONTINUE PRATICANDO</p>" 
		 );
	} else if(qtd == 2){
		$( "#jumbotron" ).append( "<p class='sf-center-text'><strong>Seu resultado!</strong></p> "+ 
				  "<p>Acertou a mesma quantidade nos dois textos, então continue com o RSVP para acelerar sua leitura sem prejudicar seu desempenho</p>" 
		 );
	} else {
		$( "#jumbotron" ).append( "<p class='sf-center-text'><strong>Seu resultado!</strong></p> "+ 
				  "<p>Acertou menos com o RSVP. Foi falta de concentração? Velocidade muito rápida? Tente com uma velocidade menor, você pode editar ao chegar no RSVP</p>" 
		 );
	}
}

$(document).ready(function()
{
		if(sessionStorage.getItem("listaRespostaTextoUm") < sessionStorage.getItem("listaRespostaTextoDois")){
			respostasCertas(1);
		} else if(sessionStorage.getItem("listaRespostaTextoUm") == sessionStorage.getItem("listaRespostaTextoDois")){
			respostasCertas(2);
		} else {
			respostasCertas(3);
		}
})