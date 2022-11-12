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
		this.div = div
		this.controlador = controlador
		
		//hacemos que la vista OBSERVE
		this.modelo = this.controlador.getModelo()
		this.modelo.registrar(this.actualizar.bind(this))
		
	}
	
	actualizar(){
		
		console.log('lista de personajes en la bbdd: ', hola)
		
		let listaPersonajes = ["Adios", "hola"]
		
		for (let i = 0; i < listaPersonajes.length; i++ ){
			let divPersonaje = document.createElement('div')
			this.div.appendChild(divPersonaje)
			divPersonaje.appendChild(document.createTextNode(listaPersonajes[i]))
			divPersonaje.id = i
		}
	}
	
	mostrarPersonajes(){
		console.log('Mostrando Personajes')
		let listaPersonajes = this.controlador.getPersonajes()
		console.log(listaPersonajes)
	}
	
	
	
	
	
	
	
	
	
	
	
	
}