const mongoose = require("mongoose"); // importando el componente mogoose
const practicasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: 0
    },
    tipo: {
        type: String,
        enum: ['Gestión de Proyectos y Requisitos', 'Desarrollo y Codificación', 'Pruebas y Optimización' , 'Seguridad y Documentación'],
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    lenguajesDeProgramacion: {
        type: String,
        default: true
    },
    paradigmaUtilizado: {
        type: String,
        required: true
    }

  
});
module.exports = mongoose.model("practicas", practicasSchema);
