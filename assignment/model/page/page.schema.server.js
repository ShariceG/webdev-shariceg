var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server')

var pageSchema = new mongoose.Schema({
  _website: {type: mongoose.Schema.ObjectId, ref:"Website"},
  name: String,
  title: String,
  description: String,
  dateCreated: {type:Date, default: Date.now()},
  widgets: [widgetSchema]},
  {collection: 'Pages'});

module.exports = pageSchema;
