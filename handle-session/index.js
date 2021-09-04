const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat',
  }),
);

app.get('/', (request, response) => {
  request.session.count = request.session.count ? request.session.count + 1 : 1;
  response.status(200).json({
    hello: 'world',
    counter: request.session.count,
  });
});

app.listen(port, () => {
  console.info(`Listening at http://localhost:${port}`);
});
