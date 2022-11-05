/**
	@file Contiene la vista del CRUD de personajes de la aplicación
	@author Javier Florencio Airado
**/



/**
	Vista Inicio de la página
	Contiene una descripción de lo que vamos a hacer
**/
export class VistaInicio{
	/**
		Constructor de la clase
	**/
	constructor(div, controlador){
		this.div = div
		this.controlador = controlador
		
	}
	/**
		Mustra u oculta el div de la vistaInicio.
		@param ver {Boolean} True muestra la vista, False la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
	
}