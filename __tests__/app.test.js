const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { books } = require('../lib/books-data');
const { movies } = require('../lib/movies-data');

describe('books route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    const expected = books.map((book) => {
      return {
        title: book.title,
        author: book.author,
      };
    });

    expect(res.body).toEqual(expected);
  });

  it('/books/:id should return a book detail based on id', async () => {
    const res = await request(app).get('/books/1');
    const expected = {
      id: '1',
      title: 'Island',
      author: 'Aldous Huxley',
      yearPublished: 1962,
      genre: 'Philosophy',
    };
    expect(res.body).toEqual(expected);
  });
  // afterAll(() => {
  //   pool.end();
  // });
});

describe('/movies route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/movies returns a list of movies', async () => {
    const res = await request(app).get('/movies');
    const expected = movies.map((movie) => {
      return { ...movie };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
