const express = require("express");
const router = express.Router(); //manejador de rutas de express
const practicasSchema = require("../models/practicas");
const animalSchema = require("../models/practicas");
const verifyToken = require('../routes/validate_token');

//Nueva practica del buen desarrollo
router.post("/practicas", verifyToken, (req, res) => {
    const practicas = practicasSchema(req.body);
    practicas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar Practica
router.get("/practicas", (req, res) => {
    practicasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar una practica por su nombre 
router.get("/practicas/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar la practica por el nombre
router.put("/practicas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre,cantidad, tipo, descripcion,fechaCreacion,lenguajesDeProgramacion,paradigmaUtilizado } = req.body;
    practicasSchema
        .updateOne({ _id: id }, {
            $set: { nombre, cantidad, tipo, descripcion,fechaCreacion,lenguajesDeProgramacion,paradigmaUtilizado }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar una practica por su id
router.delete("/practicas/:id", (req, res) => {
    const { id } = req.params;
    practicasSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
