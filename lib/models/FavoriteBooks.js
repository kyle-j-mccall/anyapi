const pool = require('../utils/pool');

module.exports = class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.yearPublished = row.year_published;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from favorite_books');

    return rows.map((bookRow) => new Book(bookRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from favorite_books WHERE id = $1',
      [id]
    );

    return new Book(rows[0]);
  }
};
