const { Router } = require('express');
const FavoriteBook = require('../models/FavoriteBooks');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const bookById = await FavoriteBook.getById(req.params.id);
    res.json(bookById);
  })
  .get('/', async (req, res) => {
    const books = await FavoriteBook.getAll();
    const filtered = books.map((book) => {
      return {
        title: book.title,
        author: book.author,
      };
    });
    res.json(filtered);
  });
