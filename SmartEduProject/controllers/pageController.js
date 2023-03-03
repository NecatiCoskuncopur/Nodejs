import nodemailer from 'nodemailer';

import { Course } from '../models/Course.js';
import { User } from '../models/User.js';

const getIndexPage = async (req, res) => {
  const courses = await Course.find().sort('-createdAt').limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({ role: 'student' });
  const totalTeachers = await User.countDocuments({ role: 'teacher' });

  res.status(200).render('index', {
    page_name: 'index',
    courses,
    totalCourses,
    totalStudents,
    totalTeachers,
  });
};

const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

const getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

const getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

/* const sendEmail = (req, res) => {
  try {
  const outputMessage = `
  <h1>Mail Details</h1>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>

  <h1>Message</h1>
  <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

req.flash('success', 'We recieved your message successfully');
 res.status(200).redirect('/contact')
}catch (err){
  req.flash('error', `Something happened! ${err}`);
  res.status(200).redirect('/contact')
}
};
*/

export {
  getIndexPage,
  getAboutPage,
  getRegisterPage,
  getLoginPage,
  getContactPage,
  // sendEmail,
};
