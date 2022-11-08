/**
	@file Contiene la vista del CRUD de personajes de la aplicación
	@author Javier Florencio Airado
**/

import {Vista} from './vista.js'

/**
	Vista del CRUD
	Contiene el formulario de la tabla de personajes
**/
export class VistaCRUD extends Vista{
	/**
		Constructor de la clase
	**/
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
	}
	/**
		Mustra u oculta el div de la vistaCRUD.
		@param ver {Boolean} True muestra la vista, False la oculta.
	**/
	mostrareadsh(){
		
	}
	
}