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
        enum: ['Tipo1', 'Tipo2', 'Tipo3'],
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
        type: Boolean,
        default: true
    },
    paradigmaUtilizado: {
        type: String,
        ref: 'Usuario',
        required: true
    }
  
});
module.exports = mongoose.model("practicas", practicasSchema);
