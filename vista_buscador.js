/**
	@file Contiene la vista del CRUD de personajes de la aplicación
	@author Javier Florencio Airado
**/

import {Vista} from './vista.js'

/**
	Vista del CRUD
	Contiene el formulario de la tabla de personajes
**/
export class VistaBuscador extends Vista{
	/**
		Constructor de la clase
	**/
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
	}
	
}