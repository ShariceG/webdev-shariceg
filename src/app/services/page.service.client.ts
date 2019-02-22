import { Injectable } from '@angular/core';

@Injectable()

export class PageService {
  constructor() {}

  pages = [{'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
    ];

  api = {
    'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(page: any) {
    page._id = Math.random();
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

  updatePage(pageId: string, page: any) {
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
