package br.com.dynamicreading.controllers;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@SessionScoped
@ManagedBean
public class GenericMB {

	
	public GenericMB() {
		
	}
	
	
	//Métodos de navegação
	public String goToRsvp (){
		return "views/rsvp.xhtml";
	}

}
