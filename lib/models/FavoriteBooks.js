const pool = require('../utils/pool');

module.exports = class FavoriteBook {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.yearPublished = row.year_published;
    this.genre = row.genre;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from favorite_books');

    return rows.map((bookRow) => new FavoriteBook(bookRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from favorite_books WHERE id = $1',
      [id]
    );

    return new FavoriteBook(rows[0]);
  }
};
