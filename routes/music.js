const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// POST-запрос для поиска музыки
router.post('/search', musicController.searchMusic);

module.exports = router;
