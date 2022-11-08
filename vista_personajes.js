/**
	@file Contiene vista inicial de la página.
	@author Javier Florencio Airado.
**/

import {Vista} from './vista.js'

/**
	Vista Inicio de la página.
	Contiene listado de los personajes.
**/
export class VistaPersonajes extends Vista{
	/**
		Constructor de la clase
	**/
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
	}
}