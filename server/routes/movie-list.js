const express = require('express');
const router = express.Router();

const { fetchAllMovies } = require("../controllers/movie-list");

router.get('/mmania/movies-all', fetchAllMovies);
module.exports = router;
