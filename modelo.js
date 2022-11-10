/**
*	@file Contiene el modelo de al aplicación
*	@author Javier Florencio Airado
*
**/

export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.listaPersonajes = [] //array de los datos que vamos a guardar en el indexDB
		this.callbacks = []
		
		this.crearBBDD()
		
	}
	
	registrar(callback){
	        this.callbacks.push(callback)
	}
	
	avisar(){
	    for(let callback of this.callbacks)
	        callback()
	}
	
	crearBBDD(){
		this.db = null;
		this.openRequest = window.indexedDB.open("BBDDPersonajes", 1);
		
		this.openRequest.onupgradeneeded = (evento) => {
	
			this.db = evento.target.result	//referencia a la bbdd
			
			const objectStore = this.db.createObjectStore('tablaPersonajes', {autoIncrement: true}) //crea la tabla con el identidicador
			
		}
		
		this.openRequest.onsuccess = (evento) => {
			
			this.db = evento.target.result
		}
	}
	
	insertarPersonaje(nombre, fechaAparicion, tipo, url, descripcion){

		const almacen = this.db.transaction('tablaPersonajes', 'readwrite').objectStore('tablaPersonajes')
			
		let personaje = {
			'nombre': nombre,
			'fechaAparicion': fechaAparicion,
			'tipo': tipo,
			'url': url,
			'descripcion': descripcion
		}
		almacen.add(personaje)
		
	}

	descargaPersonajes(){
		//
	}
	
}