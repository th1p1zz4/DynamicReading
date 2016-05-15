var ms;

$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );

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
	if(sessionStorage.getItem("type") == "easy"){
		easyModal();
		$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		$("#sfmodaleasy").modal();
	}
	if(sessionStorage.getItem("type") == "medium"){
		mediumModal();
		$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		$("#sfmodalmedium").modal();
	}
	if(sessionStorage.getItem("type") == "hard"){
		hardModal();
		$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		$("#sfmodalhard").modal();
	} else {
		$("#sfmodal").modal();
	}
	$("#sflabel").text("Você tem a média de " + result + " palavras por minuto (ppm)");
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
	if(sessionStorage.getItem("type") != undefined){
		if(sessionStorage.getItem("type") == "easy"){
			easyModal();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		}
		if(sessionStorage.getItem("type") == "medium"){
			mediumModal();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		}
		if(sessionStorage.getItem("type") == "hard"){
			hardModal();
			$( "#inner" ).append( "<p class='sf-center-text'><strong>Filme de Terror.</strong></p><p class='sf-center-text'>Hoje as pessoas são mais vazias, mais fúteis, mais tristes, mais cinzas.</p><p class='sf-center-text'>Esse mundo 'moderno' que tanto almejamos, no fim, não é tão bom quanto parecia. Tudo é banal.</p><p class='sf-center-text'>Nada surpreende por muito tempo. Corre-se muito, e nem se sabe pra quê.</p> <p class='sf-center-text'>As pessoas vivem buscando coisas	novas, para saciar o vácuo imenso que existe nelas.</p> <p class='sf-center-text'>As tragédias não comovem, os relacionamentos viraram status.</p> <p class='sf-center-text'>No fim, o que existe são pessoas se anestesiando com tarjas pretas, drogas, comida, sexo, compras para fugir dessa realidade grotesca.</p><p class='sf-center-text'>Isso me lembra um filme de terror onde os corpos estão ali, mas não existem entranhas.</p>" );
		}
	}
	
})

