class Usuario {
	constructor(nombre = '', apellido = '', libros = [], mascotas = []) {
		this.nombre = nombre
		this.apellido = apellido
		this.libros = libros
		this.mascotas = mascotas
	}

	getFullName() {
		return `${this.nombre} ${this.apellido}`
	}
	addMascota(mascota) {
		this.mascotas.push(mascota)
	}

	countMascotas() {
		return this.mascotas.length
	}

	addBook(nombre, autor) {
		this.libros.push({name: nombre, author: autor})
	}

	getBookNames() {
		return this.libros.map(book => book.name)
	}

}

let user = new Usuario('Facundo', 'Pascale')

user.addMascota('perro')
user.addMascota('gato')
user.addBook('Harry', 'filosofal')
user.addBook('Spiderman', 'Yo')

console.log(user.getBookNames())
console.log(user.countMascotas())
console.log(user.getFullName())

console.log(user)

