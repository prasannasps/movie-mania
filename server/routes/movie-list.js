const express = require('express');
const router = express.Router();

const { fetchAllMovies, searchMovies } = require("../controllers/movie-list");

router.get('/mmania/movies-all', fetchAllMovies);
router.get('/mmania/movies-search', searchMovies);

module.exports = router;
