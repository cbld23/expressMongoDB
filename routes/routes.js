var express = require('express');
var router = express.Router();
var Personaje = require('../personaje');

router.get('/', async (req, res) => {
  try {
    const personajes = await Personaje.find({});
    res.render('listaCompleta', { personajes });
    console.log(personajes);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Ruta para mostrar los detalles de un personaje específico
router.get('/:id', async (req, res) => {
  try {
    const personaje = await Personaje.findById(req.params.id);
    if (!personaje) {
      return res.status(404).send("Personaje no encontrado");
    }
    res.render('personajes', { personaje });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;