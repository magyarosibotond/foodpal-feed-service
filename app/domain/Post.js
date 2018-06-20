import mongoose from 'mongoose';

const { Model, Schema } = mongoose

var schema = Schema({
  title: {
    type: String,
    required: true
  },
  description: String
});

class Post extends Model { }

module.exports = mongoose.model(Post, schema, 'post');
