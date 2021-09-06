const express = require('express');

const { config } = require('./config');

const app = express();

// body parser
app.use(express.json());

// routes
app.post('/auth/sign-in', async (req, res, next) => {});

app.post('/auth/sign-up', async (req, res, next) => {});

app.get('/movies', async (req, res, next) => {});

app.post('/user-movies', async (req, res, next) => {});

app.delete('/user-movies/:userMovieId', async (req, res, next) => {});

app.listen(config.port, () => {
  console.log(`Listening ${config.apiUrl}`);
});
