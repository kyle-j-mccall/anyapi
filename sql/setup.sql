-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS favorite_books;

CREATE TABLE favorite_books (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  author VARCHAR NOT NULL,
  year_published INT NOT NULL,
  genre VARCHAR NOT NULL
);

INSERT INTO favorite_books (title, author, year_published, genre) 
VALUES
('Island', 'Aldous Huxley', 1962, 'Philosophy'),
('The Hobbit', 'J.R.R Tolkein', 1937, 'Fantasy'),
('Be Here Now', 'Ram Dass', 1971, 'Spirituality'),
('Harry Potter', 'J.K Rowling', 1997, 'Fantasy'),
('Dune', 'Frank Herbert', 1965, 'Sci-fi');

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  year_released  INT NOT NULL,
  genre VARCHAR NOT NULL
);

INSERT INTO movies (title, year_released, genre) 
VALUES
('Interstellar', 2014, 'sci-fi'),
('The Black Phone', 2022, 'horror'),
('This Is The End', 2013, 'comedy'),
('Ex Machina', 2014, 'sci-fi')
