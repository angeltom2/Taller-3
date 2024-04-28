const mongoose = require("mongoose"); // importando el componente mogoose
const practicasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
  
});
module.exports = mongoose.model("practicas", practicasSchema);
