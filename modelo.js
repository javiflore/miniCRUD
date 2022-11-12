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
		
		this.avisar()
		
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
			console.log('crearbbdd')
			this.db = evento.target.result
			this.avisar()
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
		this.avisar()
	}

	getPersonajes(){
		
		const almacen = this.db.transaction('tablaPersonajes', 'readonly').objectStore('tablaPersonajes')
		
		const peticion = almacen.getAll()
		
		peticion.onerror = (event) => {
			console.log('Fallo lectura')
		}
		peticion.onsuccess = (evento) => {
			const data = event.target.result
			
			this.listaPersonajes = data
			
			console.log('Leído', data)
		}
	}
	
}