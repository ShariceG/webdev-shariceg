var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');

var websiteSchema = new mongoose.Schema({
  _user: {type: mongoose.Schema.ObjectId, ref: "User"},
  name: String,
  description: String,
  dateCreated: {type: Date, default: Date.now()},
  pages: [pageSchema]
}, {collection: "Websites"}
);

module.exports = websiteSchema;
