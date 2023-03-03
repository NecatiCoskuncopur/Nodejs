import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

//Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

//Create Schema
const photoSchema = new Schema({
  title: String,
  description: String,
});

// model
// const Photo = mongoose.model('Photo', photoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo Description 2',
// });

//Read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//Update a photo
// const id = '63d8c408640c58d1f44dbad3'; //Photo Id
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 2 Updated',
//     description: 'Photo Description 2 Updated',
//   },
//   { new: true },
//   (err, data) => {
//     console.log(data);
//   }
// );

//Delete a photo
// const id = '63d8c408640c58d1f44dbad3'; //Photo Id
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log(`Photo ${id} removed`);
// });
