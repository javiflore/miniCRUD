/**
	@file Contiene la función mostrar, afín a todas las vistas
	@author Javier Florencio Airado
**/


/**
	Implementa una vista.
**/
export class Vista{
	constructor(div){
		this.div = div
	}
	/**
		Mustra u oculta el div de la vista.
		@param ver {Boolean} True muestra la vista, False la oculta.
	**/
	mostrar(ver){
		if (ver){
			this.div.style.display = 'block'
		}
		else{
			this.div.style.display = 'none'
		}
	}

}