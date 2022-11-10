/**
*	@author: Javier Florencio Airado <fjflorenc@gmail.com>
**/

import {Modelo} from './modelo.js'
import {VistaNav} from './vista_nav.js'
import {VistaCRUD} from './vista_crud.js'
import {VistaPersonajes} from './vista_personajes.js'
import {VistaBuscador} from './vista_buscador.js'


/**
	Controlador de la aplicación
**/
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
		Inicia la aplicación
		Crea las vistas y el modélo.
	**/
	iniciar(){
		this.modelo = new Modelo()
		//localizamos los elementos
		this.nav = document.getElementsByTagName('nav')[0]
		this.divBuscador = document.getElementById('divBuscador')
		this.divPersonajes = document.getElementById('divPersonajes')
		this.divCrud = document.getElementById('divMiniCRUD')
		
		//Inicializamos las vistas
		this.vistaNav = new VistaNav(this, this.nav)
		this.vistaPersonajes = new VistaPersonajes(this, this.divPersonajes)
		this.vistaAlta = new VistaCRUD(this, this.divCrud)
		this.vistaBuscador = new VistaBuscador(this, this.divBuscador)
	}
	
	pulsarPersonajes(){
		this.vistaBuscador.mostrar(true)
		this.vistaPersonajes.mostrar(true)
		this.vistaAlta.mostrar(false)
	}
	
	pulsarAlta(){
		this.vistaPersonajes.mostrar(false)
		this.vistaAlta.mostrar(true)
		this.vistaBuscador.mostrar(false)
	}
	
	aceptarCrud(nombre, fechaAparicion, tipo, url, descripcion){
		
		this.modelo.insertarPersonaje(nombre, fechaAparicion, tipo, url, descripcion)
	}
	
}

const app = new Controlador()