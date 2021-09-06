const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require('./config');

const app = express();

// body parser
app.use(express.json());
app.use(cookieParser());

// Basic strategy
require('./utils/auth/strategies/basic');

// routes
app.post('/auth/sign-in', async (request, response, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error.error || !data) {
        return boom.unauthorize();
      }

      request.login(data, { session: false }, error => {
        if (error) {
          return next(error);
        }

        const { token, ...user } = data;

        response.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });
      });

      response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  })(request, response, next);
});

app.post('/auth/sign-up', async (request, response, next) => {
  const { body: user } = request;

  try {
    await axios({
      url: `${config.apiUrl}/auth/sign-up`,
      method: 'POST',
      data: user,
    });

    response.status(201).json({ message: 'user created' });
  } catch (error) {
    next(error);
  }
});

app.get('/movies', async (request, response, next) => {});

app.post('/user-movies', async (request, response, next) => {});

app.delete('/user-movies/:userMovieId', async (request, response, next) => {});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
