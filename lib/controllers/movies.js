const { Router } = require('express');
const FavoriteMovie = require('../models/FavoriteMovies');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const movieById = await FavoriteMovie.getById(req.params.id);
    res.json(movieById);
  })
  .get('/', async (req, res) => {
    const movies = await FavoriteMovie.getAll();
    res.json(movies);
  });
