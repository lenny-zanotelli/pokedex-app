const express = require('express');

const mainController = require('./controllers/mainController');
const typesController = require('./controllers/typesController');
const searchController = require('./controllers/searchController');


const router = express.Router();

// Route Accueil

router.get('/', mainController.homePage);
router.get('/detail/:numero', mainController.detailPokemon);

// Route Type
router.get('/types', typesController.typesPage);
router.get('/types/:typeId', typesController.pokemonByType);

// Route barre de recherche
router.get('/search', searchController.searchPage);
router.post('/search/results', searchController.searchResults);


module.exports = router;