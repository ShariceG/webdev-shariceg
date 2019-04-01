var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server')

var widgetModel = mongoose.model('Widget', widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

//TODO: Fix create to use pageId
function createWidget(widget){
  return widgetModel.create(widget);
}

function findAllWidgetsForPage(pageId){
  return widgetModel.find({pageId: pageId})
}

function findWidgetById(widgetId){
  return widgetModel.findById(widgetId)
}

function updateWidget(widgetId, widget){
  return widgetModel.findByIdAndUpdate(widgetId, widget, {new: true});
}

function deleteWidget(widgetId){
  return widgetModel.findByIdAndRemove(widgetId);
}


//TODO: Fix reorder
function reorderWidget(pageId, start, end){}
