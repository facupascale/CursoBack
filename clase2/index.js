// Implementar programa que contenga una clase llamada contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes metodos


// save(Object): Number - recibe un objeto, lo guarda en el archivo, devuelve el id asignado
// getById(Number): Object - recibe un id y devuelve el objeto con ese id, o null si no esta.
// getAll(): Object[] - devuelve un array con los objetos presentes en el archivo
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - elimina todos los objetos presentes en el archivo

const fs = require('fs')

class Persona {
	constructor(nombre, apellido) {
		this.nombre = nombre
		this.apellido = apellido
	}
}

class Contenedor {
	constructor(file = '') {
		this.file = file

		try {
			this.personas = fs.readFileSync(this.file, 'utf-8')
			this.personas = JSON.parse(this.personas)
		} catch (err) {
			this.personas = []
		}
	}

	async save(nombre, apellido) {
		try {
			let newPerson = new Persona(nombre, apellido)
			newPerson.id = this.personas.length + 1
			this.personas.push(newPerson)
			await fs.promises.writeFile(this.file, JSON.stringify(this.personas, null, '\t'))
			console.log(`Agregado con id: ${newPerson.id}`)
		}
		catch (error) {
			console.log(error)
		}
	}

	getById(number) {
		let persona = this.personas
		for (let i = 0; i < persona.length; i++) {
			if(persona[i].id === number){
				return console.log(persona[i])
			}
		}
		return console.log('ID invalido')
	}

	async getAll() {
		return console.log(this.personas, 'Todas las personas')
	}

	async deletedById(number) {
		try {
			this.personas.filter(persona => persona.id != number)
			console.log(this.personas)
			await fs.promises.writeFile(this.file, JSON.stringify(this.personas, null))	
			console.log('Item Borrado')
		} catch (error) {
			return 'El ID no existe o ya fue eliminado'
		} 
	}

	async deleteAll() {
		try {
			this.personas = []
			await fs.promises.writeFile(this.file, JSON.stringify(this.personas, null))	
			console.log('Se eliminaron todos los items')
		} catch (err) {
			console.log(err)
		}
	}

}

let prueba = new Contenedor('./bd.js')

prueba.save('facundo', 'pascale')
//prueba.save('ailen', 'pascale')
//prueba.save('vico', 'pascale')
//prueba.getById(3)
//prueba.getById(5)
//prueba.getById(20)
//prueba.getAll()
prueba.deletedById(1)
//prueba.deleteAll()