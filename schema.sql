
-- brew services start postgresql
-- psql postgres -U root
-- brew services stop postgresql

-- CREATE DATABASE culturepunk;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR (100),
  date_start BIGINT,
  date_end BIGINT,
);