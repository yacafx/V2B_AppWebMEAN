var mongoose = require('mongoose');

var TareasSchema = new mongoose.Schema({
	nombre: String,
	prioridad: Number
});

mongoose.model('Tareas', TareasSchema);