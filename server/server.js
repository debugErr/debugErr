const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bugRouter = require('./bugRouter');
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));

const db = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : 5432,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
});

app.set('db', db);

app.use('/bugs', bugRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('*', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
