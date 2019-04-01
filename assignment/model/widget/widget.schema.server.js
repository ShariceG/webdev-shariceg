var mongoose = require('mongoose');

var widgetSchema = new mongoose.Schema({
  pageId:{type: mongoose.Schema.ObjectId, ref:"Page"},
  widgetType:{type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT','TEXT']},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: {type:Boolean, default:true},
  formatted: {type:Boolean, default:true},
  position: Number,
  dateCreated: {type:Date, default: Date.now()}
},{collection: 'Widgets'});

module.exports = widgetSchema;
