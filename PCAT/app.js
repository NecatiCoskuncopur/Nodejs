import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import fileUpload from 'express-fileupload';
import methodOverride from 'method-override';

import {
  createPhoto,
  deletePhoto,
  getAllPhotos,
  getPhoto,
  updatePhoto,
} from './controllers/photoControllers.js';
import {
  getAboutPage,
  getAddPage,
  getEditPage,
} from './controllers/pageController.js';

mongoose.set('strictQuery', false);
const app = express();

//Connect DB
mongoose.connect(
  `mongodb+srv://necati:varesa1280@cluster0.zatsnks.mongodb.net/pcat-db?retryWrites=true&w=majority`
);

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', getAllPhotos);
app.get('/photos/:id', getPhoto);
app.post('/photos', createPhoto);
app.put('/photos/:id', updatePhoto);
app.delete('/photos/:id', deletePhoto);

app.get('/about', getAboutPage);
app.get('/add', getAddPage);
app.get('/photos/edit/:id', getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
