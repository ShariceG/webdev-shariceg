var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server')

var pageModel = mongoose.model('Page', pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

function createPage(page){
  return pageModel.create(page);
}

function findAllPagesForWebsite(websiteId){
  return pageModel.find({_website:  websiteId})
}

function findPageById(pageId){
  return pageModel.findById(pageId)
}

function updatePage(pageId, page){
  return pageModel.findByIdAndUpdate(pageId, page, {new: true});
}

function deletePage(pageId){
  return pageModel.findByIdAndRemove(pageId);
}


