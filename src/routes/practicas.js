const express = require("express");
const router = express.Router(); //manejador de rutas de express
const practicasSchema = require("../models/practicas");
const animalSchema = require("../models/practicas");
//Nuevo animal
router.post("/practicas", (req, res) => {
    const practicas = practicasSchema(req.body);
    practicas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar todos los animales
router.get("/practicas", (req, res) => {
    practicasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar un animal por su id
router.get("/practicas/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar el nombre de un animal por su id
router.put("/practicas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    practicasSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id
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
