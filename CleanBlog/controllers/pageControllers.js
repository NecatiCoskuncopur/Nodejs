import { Post } from '../modals/Post.js';

const getAboutPage = (req, res) => {
  res.render('about');
};

const getAddPage = (req, res) => {
  res.render('add');
};

const getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};

export { getAboutPage, getAddPage, getEditPage };
