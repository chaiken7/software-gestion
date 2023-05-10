var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColaboradorSchema = Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    fullnames: {type: String, required: true},
    telefono: {type: String, required: false},
    rol: {type: String, required: true},
    n_doc: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, default:true, required: true},
})

module.exports = mongoose.model('colaborador', ColaboradorSchema);