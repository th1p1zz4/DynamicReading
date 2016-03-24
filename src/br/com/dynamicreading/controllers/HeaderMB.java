package br.com.dynamicreading.controllers;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@SessionScoped
@ManagedBean
public class HeaderMB {
	
	public HeaderMB(){
		
	}

	public boolean urlView(){
		if(FacesContext.getCurrentInstance().getViewRoot().getViewId().contains("views")){
			return true;
		} else {
			return false;
		}
	}
}
