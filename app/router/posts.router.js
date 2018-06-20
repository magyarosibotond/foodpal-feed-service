const express = require('express');
var router = express.Router();

import { postsService } from '../service';
import { isAuthenticated } from '../handler/auth.handler';

router.get('/', isAuthenticated, (req, res, next) => {
  var limit = req.body.limit || 20;
  postsService.getAll(limit)
    .then(posts => res.send(posts))
    .catch(err => next(err));
});

// Get specific post by id
router.get('/:id', isAuthenticated, (req, res, next) => {
  postsService.getBy(req.params.id)
    .then(post => res.send(post))
    .catch(err => next(err));
});

router.post('/', isAuthenticated, (req, res, next) => {
  var post = {
    title: req.body.title,
    description: req.body.description
  }
  postsService.create(post)
    .then(post => res.send(post))
    .catch(err => next(err));
});

router.delete('/:id', isAuthenticated, (req, res, next) => {
  postsService.deleteBy(req.param.id)
    .then(_ => res.send({}))
    .catch(err => next(err));
});

export { router as postsRouter };
