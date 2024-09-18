const express = require('express');
const router = express.Router();
const cervejaController = require('../controllers/cervejaController');

// A. Buscar cerveja pelo nome
router.get('/cervejas/nome/:nome', cervejaController.buscarPorNome);

// B. Buscar cervejas pela nacionalidade
router.get('/cervejas/nacionalidade/:nacionalidade', cervejaController.buscarPorNacionalidade);

// C. Ordenar as cervejas pelo maior ABV
router.get('/cervejas/ordenar/abv', cervejaController.ordenarPorABV);

// D. Buscar cervejas pelo tipo
router.get('/cervejas/tipo/:tipo', cervejaController.buscarPorTipo);

// E. Buscar cervejas pelo nome parcial
router.get('/cervejas/nome-parcial/:nome', cervejaController.buscarPorNomeParcial);

module.exports = router;
