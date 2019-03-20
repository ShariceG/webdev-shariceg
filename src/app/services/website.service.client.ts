import { Injectable } from '@angular/core';
import {Website} from '../Models/website.model.client';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class WebsiteService {
  constructor(private _http: HttpClient) {}

  baseUrl = environment.baseUrl;

  websites = [new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')];


  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  // createWebsite(website: Website) {
  //   website._id = Math.random().toString();
  //   this.websites.push(website);
  // }

  createWebsite(userId: String, body_data: any) {
    const url = this.baseUrl + 'api/user/' + userId + '/website';
    const body = {
      name: body_data.websiteName,
      description: body_data.websiteDescription
    };
    return this._http.post(url, body);
  }

  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + 'api/user/' + userId + '/website';
    return this._http.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  // findWebsitesByUser(userId: string) {
  //   const list = [];
  //   for ( let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x].developerId === userId) {
  //       list.push(this.websites[x]);
  //     }
  //   }
  //   return list;
  // }

  findWebsiteById(websiteId: String) {
    const url = this.baseUrl + 'api/website/' + websiteId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }
  // findWebsiteById(websiteId: string) {
  //   for ( let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x]._id === websiteId) {
  //       return this.websites[x];
  //     }
  //   }
  // }

  updateWebsite(websiteId: string, website_data: any) {
    const url = this.baseUrl + 'api/website/' + websiteId;
    const body = {
      name: website_data.name,
      description: website_data.description
    };
    return this._http.put(url, body);
  }

  // updateWebsite(websiteId: string, website: any) {
  //   const newWebsite = website;
  //   newWebsite._id = websiteId;
  //   for ( let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x] === website) {
  //       this.websites[x] = newWebsite;
  //     }
  //   }
  // }

  deleteWebsite(websiteId: String) {
    const url = this.baseUrl + 'api/website/' + websiteId;
    console.log('url: ' + url);
    return this._http.delete(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }
}
