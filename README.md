# MVP-Ammar-Project

> This Project for Hack Reactor bootcamp
> in this repo my responsibility is to build a Full-Stack component that can read
> from a database.

[the System on AWS](http://ec2-52-53-215-33.us-west-1.compute.amazonaws.com/).

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> The website is about posting events in san francisco city, in term of posting events can be catageroized.
> The website save all events but only display events for the next 5 days, the user can filter these events
> by catagory or a username match.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- React 16.7.0
- React-dome 16.7.0
- Pg 7.8.0
- Body-parser 1.17.2
- Express 4.15.4
- JQuery 3.2.1
- react-portal 4.2.0

for development enviroment 
- @babel/core 7.2.2
- @babel/preset-env 7.2.0
- @babel/preset-react 7.0.0
- babel-core 7.0.0-bridge.0
- babel-jest 23.6.0
- babel-loader 8.0.4
- faker 4.1.0
- regenerator-runtime 0.13.1
- webpack 2.2.1

### Installing Database
[Postgres](https://www.postgresql.org/download/).
```sh
- Modifiy the username and password after installing Postgres in /database/config.js file if needed.
in the database directory run psql -f schema.sql to create the databse.
- Database directory has seedDB file to generate fake data for test if needed, run node seedDB to generate tsv file.
- In schema.sql file there is hints how to seed the database from the tsv file that been generated.

```

### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g webpack
npm run react-dev
npm start
```

