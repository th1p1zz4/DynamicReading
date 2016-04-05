package br.com.dynamicreading.controllers;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@SessionScoped
@ManagedBean
public class GenericMB {

	
	public GenericMB() {
		
	}
	
	public void doAction(){
		
	}
	
	//Métodos de navegação
	public String goToRsvp (){
		return "views/rsvp.xhtml";
	}

}
