DROP DATABASE IF EXISTS bikes_db;
CREATE DATABASE bikes_db;

USE bikes_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(30),
  password CHAR(60),
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  make VARCHAR(30) NOT NULL,
  model VARCHAR(30) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users(id)
);