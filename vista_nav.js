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
		
		console.log(this.divPersonajes)
		
		this.divPersonajes.onclick = this.pulsarPersonajes.bind(this)
		this.divAlta.onclick = this.pulsarAlta.bind(this)
	}
	
	pulsarPersonajes(){
		console.log(this.controlador)
		console.log('hola')
		this.controlador.pulsarPersonajes()
	}
	
	pulsarAlta(){
		//console.log(this.controlador)
		this.controlador.pulsarAlta()
	}
	
}