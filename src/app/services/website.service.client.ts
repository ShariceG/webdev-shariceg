import { Injectable } from '@angular/core';
import {Website} from '../Models/website.model.client';

@Injectable()

export class WebsiteService {
  constructor() {}

  websites = [new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')]


  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(website: Website) {
    website._id = Math.random().toString();
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
