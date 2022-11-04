const { Router } = require('express');
const FavoriteMovie = require('../models/FavoriteMovies');

module.exports = Router().get('/', async (req, res) => {
  const movies = await FavoriteMovie.getAll();
  res.json(movies);
});
