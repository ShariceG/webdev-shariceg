var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server')

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  facebook: { id: String, token: String },
  email: String,
  websites:[websiteSchema]
}, {collection:'Users'});

module.exports = userSchema;
