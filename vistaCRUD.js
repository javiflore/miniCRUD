/**
	@file Contiene la vista del CRUD de personajes de la aplicación
	@author Javier Florencio Airado
**/



/**
	Vista del CRUD
	Contiene el formulario de la tabla de personajes
**/
export class VistaCRUD{
	/**
		Constructor de la clase
	**/
	constructor(div, controlador){
		this.div = div
		
	}
	/**
		Mustra u oculta el div de la vistaCRUD.
		@param ver {Boolean} True muestra la vista, False la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
	
}