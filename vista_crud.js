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
		
		//Capturamos los elementos de la página
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iFechaAparicion = this.div.getElementsByTagName('input')[1]
		this.sTipo = this.div.getElementsByTagName('select')[0]
		this.iUrl = this.div.getElementsByTagName('input')[2]
		this.tDescripcion = this.div.getElementsByTagName('textarea')[0]
		
		this.btnBorrar = this.div.getElementsByTagName('button')[0]
		this.btnAceptar = this.div.getElementsByTagName('button')[1]
		
		//Asignamos los eventos
		this.btnAceptar.onclick = this.aceptar.bind(this) //xk bind???????
		
		
		
		//this.mostrarCrud()
	}
	/**
		Mustra u oculta el div de la vistaCRUD.
		@param ver {Boolean} True muestra la vista, False la oculta.
	**/
	aceptar(){
		this.controlador.aceptarCrud(this.iNombre.value, this.iFechaAparicion.value, this.sTipo.value, this.iUrl.value, this.tDescripcion.value)
		
	}
	
}