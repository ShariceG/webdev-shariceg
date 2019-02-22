import { Injectable } from '@angular/core';

@Injectable()

export class WebsiteService {
  constructor() {}

  websites = [{'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}];

  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(website: any) {
    website._id = Math.random();
    this.websites.push(website);
  }

  findWebsitesByUser(userId: string) {
    const list = [];
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        list.push(this.websites[x]);
      }
    }
    return list;
  }

  findWebsiteById(websiteId: string) {
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId: string, website: any) {
    const newWebsite = website;
    newWebsite._id = websiteId;
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x] === website) {
        this.websites[x] = newWebsite;
      }
    }
  }

  deleteWebsite(websiteId: string) {
    for ( let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
      }
    }
  }
}
