require("dotenv").config();

const services = require(`./${process.env.STORAGE}/${process.env.STORAGE}.js`);

module.exports = services;
