/**
*	@author: Javier Florencio Airado <fjflorenc@gmail.com>
**/

export class VistaNav{
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
	constructor(controlador, nav){
		this.controlador = controlador
		this.nav = nav
		this.divPersonajes = this.nav.getElementsByTagName('div')[0]
		this.divAlta = this.nav.getElementsByTagName('div')[1]
		
		this.divPersonajes.onclick = this.pulsarPersonajes.bind(this)
		this.divAlta.onclick = this.pulsarAlta.bind(this)
	}
	
	pulsarPersonajes(){
		this.controlador.pulsarPersonajes()
	}
	
	pulsarAlta(){
		this.controlador.pulsarAlta()
	}
	
}