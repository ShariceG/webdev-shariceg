import { Injectable } from '@angular/core';
import {Page} from '../Models/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class PageService {
  constructor(private _http: HttpClient) {}

  baseUrl = environment.baseUrl;

  pages: Page[] = [new Page('321', 'Post1', '456', 'Lorem'),
    new Page('432', 'Post2', '456', 'Lorem'),
    new Page('543', 'Post3', '456', 'Lorem')];

  api = {
    'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  // createPage(page: Page) {
  //   page._id = Math.random().toString();
  //   this.pages.push(page);
  // }

  createPage(websiteId: string, body: any) {
    return this._http.post(this.baseUrl + 'api/website/' + websiteId + '/page', body);
  }

  findPagesByWebsiteId(websiteId: String) {
    const url = this.baseUrl + 'api/website/' + websiteId + '/page';
    return this._http.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  // findPagesByWebsiteId(websiteId: string) {
  //   const list = [];
  //   for ( let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x].websiteId === websiteId) {
  //       list.push(this.pages[x]);
  //     }
  //   }
  //   return list;
  // }

  findPageById(pageId: String) {
    const url = this.baseUrl + 'api/page/' + pageId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  // findPageById(pageId: string) {
  //   for ( let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x]._id === pageId) {
  //       return this.pages[x];
  //     }
  //   }
  // }

  updatePage(pageId: String, body: any) {
    const url = this.baseUrl + 'api/page/' + pageId;
    return this._http.put(url, body);
  }

  // updatePage(pageId: string, page: Page) {
  //   const newPage = page;
  //   newPage._id = pageId;
  //   for ( let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x] === page) {
  //       this.pages[x] = newPage;
  //     }
  //   }
  // }

  deletePage(pageId: String) {
    const url = this.baseUrl + 'api/page/' + pageId;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  // deletePage(pageId: string) {
  //   for ( let x = 0; x < this.pages.length; x++) {
  //     if (this.pages[x]._id === pageId) {
  //       this.pages.splice(x, 1);
  //     }
  //   }
  // }

}
