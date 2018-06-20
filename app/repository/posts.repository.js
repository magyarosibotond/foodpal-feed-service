const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.MONGO_SERVICE_HOST + '/feed');

import Post from '../domain/Post';
import { NotFoundError } from '../error';

class PostsRepository {

  getAll(limit) {
    return new Promise((resolve, reject) => {
      Post.find({}, (err, posts) => {
        if (err) reject(err);
        else resolve(posts);
      });
    });
  }

  getBy(id) {
    return new Promise((resolve, reject) => {
      Post.findOne({ '_id': id}, (err, post) => {
        if (err) reject(err);
        else if (post == null) reject(new NotFoundError('Post with id ' + id));
        else resolve(post);
      });
    });
  }

  deleteBy(id) {
    return new Promise((resolve, reject) => {
      Post.deleteOne({ '_id': id }, function (err) {
        if (err) reject(err);
        else resolve();
      });  
    });
  }
  
  create(postData) {
    return new Promise((resolve, reject) => {
      var post = new Post(postData);
      post.save(err => {
        if (err) reject(err);
        else resolve(post);
      });
    });
  }
}

export const postsRepository = new PostsRepository();
