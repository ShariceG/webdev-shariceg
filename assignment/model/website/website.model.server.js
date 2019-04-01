var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server')

var websiteModel = mongoose.model('Website', websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(website){
  return websiteModel.create(website)
}

function findAllWebsitesForUser(userId){
  return websiteModel.find({_user: userId})
}

function findWebsiteById(websiteId){
  return websiteModel.findById(websiteId)
}

function updateWebsite(websiteId, website){
  return websiteModel.findByIdAndUpdate(websiteId, website, {new: true})
}

function deleteWebsite(websiteId){
  return websiteModel.findByIdAndRemove(websiteId)
}
