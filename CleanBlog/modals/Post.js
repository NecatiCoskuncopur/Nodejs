import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

//Create Schema
const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// model
const Post = mongoose.model('Photo', postSchema);

export { Post };
