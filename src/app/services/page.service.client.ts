import { Injectable } from '@angular/core';
import {Page} from '../Models/page.model.client';

@Injectable()

export class PageService {
  constructor() {}

  pages: Page[] = [new Page('321', 'Post1', '456', 'Lorem'),
    new Page('432', 'Post2', '456', 'Lorem'),
    new Page('543', 'Post3', '456', 'Lorem')];s

  api = {
    'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(page: Page) {
    page._id = Math.random().toString();
    this.pages.push(page);
  }

  findPagesByWebsiteId(websiteId: string) {
    const list = [];
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        list.push(this.pages[x]);
      }
    }
    return list;
  }

  findPageById(pageId: string) {
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId: string, page: Page) {
    const newPage = page;
    newPage._id = pageId;
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x] === page) {
        this.pages[x] = newPage;
      }
    }
  }

  deletePage(pageId: string) {
    for ( let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }

}
