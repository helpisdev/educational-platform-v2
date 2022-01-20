const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public', 'html')));
app.use(express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'public', 'javascripts')));
app.use(express.static(path.join(__dirname, 'public', 'stylesheets')));

const errorController = require(path.join(__dirname, 'controllers', 'error'));
// const mongoConnect = require('./util/database').mongoConnect;
const User = require(path.join(__dirname, 'models', 'User'));

const handlebarsRouter = require(path.join(__dirname, 'routes', 'handlebars'));
const indexRouter = require(path.join(__dirname, 'routes', 'index'));
const usersRouter = require(path.join(__dirname, 'routes', 'user'));
const coursesRouter = require(path.join(__dirname, 'routes', 'courses'));
const auebRouter = require(path.join(
  __dirname,
  'routes',
  'elearning-aueb-uris'
));

app.use(auebRouter);
app.use(coursesRouter);
app.use('/hbs', handlebarsRouter);
app.use(indexRouter);
// app.use('/users', usersRouter);

// app.use((req, res, next) => {
//   User.findById('5baa2528563f16379fc8a610')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });
app.use(errorController.get404);

app.listen(3000);
// mongoConnect(() => {
//     app.listen(3000);
// });
