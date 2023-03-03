import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

//Create Schema
const photoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// model
const Photo = mongoose.model('Photo', photoSchema);

export { Photo };
