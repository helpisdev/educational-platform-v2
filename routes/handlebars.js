const express = require('express');
const router = express.Router();

const path = require('path');
const root = require(path.join('..', __dirname, 'util', 'path'));
const handlebarsController = require(path.join(
  root,
  'controllers',
  'handlebars'
));
const errorController = require(path.join(root, 'controllers', 'error'));

/* GET users listing. */
router.get('/hbs/header', (req, res, next) => {});

router.get('/hbs/search', (req, res, next) => {});

router.get('/hbs/form', (req, res, next) => {});

router.get('/hbs/search-results', (req, res, next) => {});

router.get('/hbs/courses', function (req, res, next) {});

router.get('/hbs/thanks', (req, res, next) => {});

router.get('/hbs/register', (req, res, next) => {});

router.get('/hbs/login', (req, res, next) => {});

router.get('/hbs/profile:id', (req, res, next) => {});

module.exports = router;
