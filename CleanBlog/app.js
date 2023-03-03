import mongoose from 'mongoose';
import express from 'express';
import ejs from 'ejs';
import methodOverride from 'method-override';

import { createPost, deletePost, getAllPosts, getPost, updatePost } from './controllers/postControllers.js';
import { getAboutPage, getAddPage, getEditPage } from './controllers/pageControllers.js';

mongoose.set('strictQuery', false);
const app = express();

//Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', getAllPosts);
app.get('/posts/:id', getPost);
app.post('/posts', createPost);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

app.get('/about', getAboutPage);
app.get('/add', getAddPage);
app.get('/posts/edit/:id', getEditPage);

const port = 7171;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
