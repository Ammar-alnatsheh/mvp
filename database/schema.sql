-- ***** PRODUCT OVERVIEW SCHEMA DESIGN ****
-- run this command to drop the database and init a new one
-- psql -f schema.sql

DROP DATABASE IF EXISTS events;

CREATE DATABASE events;

\connect events;

CREATE TABLE events (
	id SERIAL PRIMARY KEY NOT NULL,
	name CHAR(50) NOT NULL,
	title CHAR(50) NOT NULL,
	catagory Int, 
	date DATE NOT NULL DEFAULT CURRENT_DATE,
	time REAL,
	description TEXT
);

-- copy events (id, name, title, catagory, date, time, description) from '/" full path "/"file name".tsv' DELIMITER E'\t';
-- for changing the id seq after seeding select setval('tableName_id_seq',select max(id) from tableName));
