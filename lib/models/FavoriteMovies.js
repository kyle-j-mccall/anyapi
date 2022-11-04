const pool = require('../utils/pool');

module.exports = class FavoriteMovie {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.yearReleased = row.year_released;
    this.genre = row.genre;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from movies');

    return rows.map((movie) => new FavoriteMovie(movie));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from movies WHERE id = $1', [
      id,
    ]);
    console.log(rows);
    return new FavoriteMovie(rows[0]);
  }
};
