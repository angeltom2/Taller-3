const express = require("express");
const router = express.Router(); //manejador de rutas de express
const practicasSchema = require("../models/practicas");
const animalSchema = require("../models/practicas");
const verifyToken = require('../routes/validate_token');

//Nueva practica del buen desarrollo
router.post("/practicas", (req, res) => {
    const practicas = practicasSchema(req.body);
    practicas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar Practica
router.get("/practicas", verifyToken, (req, res) => {
    practicasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar una practica por su nombre 
router.get("/practicas/:nombre", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar la practica por el nombre
router.put("/practicas/:nombre", (req, res) => {
    const { nombre } = req.params;
    const { cantidad, tipo, descripcion,fechaCreacion,lenguajesDeProgramacion,paradigmaUtilizado } = req.body;
    practicasSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar una practica por su nombre
router.delete("/practicas/:nombre", (req, res) => {
    const { nombre } = req.params;
    practicasSchema
        .findByIdAndDelete(nombre)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
