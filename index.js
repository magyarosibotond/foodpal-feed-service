const express = require('express');
const bodyParser = require('body-parser');

import { feedRouter, postsRouter } from './app/router';
import { HttpError } from './app/error';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', postsRouter);

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  const error = HttpError.serialize(err);
  res.status(error.status).send(error);
});

app.listen(3001, () => {
  console.log('Feed Service running on port ' + 3001);
});
